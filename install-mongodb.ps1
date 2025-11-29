# MongoDB Installation Script for Windows
# Run as Administrator: powershell -ExecutionPolicy Bypass -File install-mongodb.ps1

Write-Host "MongoDB Installation Script" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is already installed
$existingService = Get-Service -Name "*mongo*" -ErrorAction SilentlyContinue
if ($existingService) {
    Write-Host "WARNING: MongoDB seems already installed!" -ForegroundColor Yellow
    Write-Host "Service found: $($existingService.Name)" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (Y/N)"
    if ($continue -ne "Y" -and $continue -ne "y") {
        Write-Host "Installation cancelled" -ForegroundColor Red
        exit
    }
}

# MongoDB download URL (Windows x64)
# Using direct download link
$mongodbUrl = "https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-latest.msi"
$downloadPath = "$env:TEMP\mongodb-installer.msi"

Write-Host "Downloading MongoDB..." -ForegroundColor Cyan
Write-Host "URL: $mongodbUrl" -ForegroundColor Gray
Write-Host "Destination: $downloadPath" -ForegroundColor Gray
Write-Host ""

try {
    # Download MongoDB
    $ProgressPreference = 'SilentlyContinue'
    Invoke-WebRequest -Uri $mongodbUrl -OutFile $downloadPath -UseBasicParsing
    
    if (Test-Path $downloadPath) {
        $fileSize = (Get-Item $downloadPath).Length / 1MB
        Write-Host "Download successful! ($([math]::Round($fileSize, 2)) MB)" -ForegroundColor Green
        Write-Host ""
        
        Write-Host "Installing MongoDB..." -ForegroundColor Cyan
        Write-Host "This may take 2-5 minutes..." -ForegroundColor Yellow
        Write-Host ""
        
        # Install MongoDB silently with required options
        $installArgs = @(
            "/i",
            "`"$downloadPath`"",
            "/quiet",
            "/norestart",
            "ADDLOCAL=all",
            "INSTALLLOCATION=`"C:\Program Files\MongoDB\Server\`"",
            "SERVICE_NAME=`"MongoDB`"",
            "SERVICE_USER=`"NT AUTHORITY\NetworkService`"",
            "INSTALLMONGODBCOMPASS=`"0`""
        )
        
        $process = Start-Process -FilePath "msiexec.exe" -ArgumentList $installArgs -Wait -PassThru -NoNewWindow
        
        if ($process.ExitCode -eq 0) {
            Write-Host "Installation completed!" -ForegroundColor Green
            Write-Host ""
            
            # Wait for service to be created
            Write-Host "Waiting for service to start..." -ForegroundColor Cyan
            Start-Sleep -Seconds 10
            
            # Check service
            $service = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
            if ($service) {
                if ($service.Status -eq "Running") {
                    Write-Host "MongoDB service is running!" -ForegroundColor Green
                } else {
                    Write-Host "MongoDB service created but not started" -ForegroundColor Yellow
                    Write-Host "Starting service..." -ForegroundColor Cyan
                    Start-Service -Name "MongoDB"
                    Start-Sleep -Seconds 5
                    if ((Get-Service -Name "MongoDB").Status -eq "Running") {
                        Write-Host "MongoDB service started!" -ForegroundColor Green
                    }
                }
            } else {
                Write-Host "MongoDB service not found (may take a few seconds)" -ForegroundColor Yellow
            }
            
            Write-Host ""
            Write-Host "Cleaning up installer file..." -ForegroundColor Cyan
            Remove-Item $downloadPath -Force -ErrorAction SilentlyContinue
            
            Write-Host ""
            Write-Host "MongoDB installed successfully!" -ForegroundColor Green
            Write-Host ""
            Write-Host "Next steps:" -ForegroundColor Cyan
            Write-Host "1. Test with Compass: mongodb://localhost:27017" -ForegroundColor White
            Write-Host "2. Create database 'azalee_db'" -ForegroundColor White
            Write-Host "3. Create collection 'users'" -ForegroundColor White
            Write-Host "4. Insert admin user (see admin-user-json.txt)" -ForegroundColor White
            
        } else {
            Write-Host "Installation error (Exit Code: $($process.ExitCode))" -ForegroundColor Red
            Write-Host "Try manual installation from:" -ForegroundColor Yellow
            Write-Host "https://www.mongodb.com/try/download/community" -ForegroundColor Cyan
        }
    } else {
        Write-Host "Downloaded file does not exist!" -ForegroundColor Red
    }
    
} catch {
    Write-Host "Error during download/installation:" -ForegroundColor Red
    Write-Host "$($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternative solution:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host "2. Download MSI file manually" -ForegroundColor White
    Write-Host "3. Run it and check 'Install MongoDB as a Service'" -ForegroundColor White
}

Write-Host ""
