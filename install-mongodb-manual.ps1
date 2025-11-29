# Manual MongoDB Installation Helper
# Downloads MongoDB installer and provides installation command

Write-Host "MongoDB Manual Installation Helper" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Download MongoDB" -ForegroundColor Yellow
Write-Host "Opening MongoDB download page..." -ForegroundColor Gray
Start-Process "https://www.mongodb.com/try/download/community"

Write-Host ""
Write-Host "Please:" -ForegroundColor Cyan
Write-Host "1. Select: Windows, MSI" -ForegroundColor White
Write-Host "2. Click Download" -ForegroundColor White
Write-Host "3. Save the file (remember the location)" -ForegroundColor White
Write-Host ""

$downloadPath = Read-Host "Enter the full path to the downloaded .msi file (or press Enter to skip)"

if ($downloadPath -and (Test-Path $downloadPath)) {
    Write-Host ""
    Write-Host "Step 2: Installing MongoDB..." -ForegroundColor Yellow
    Write-Host "Installing from: $downloadPath" -ForegroundColor Gray
    Write-Host ""
    
    # Install with service
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
    
    try {
        $process = Start-Process -FilePath "msiexec.exe" -ArgumentList $installArgs -Wait -PassThru -NoNewWindow
        
        if ($process.ExitCode -eq 0) {
            Write-Host "Installation completed!" -ForegroundColor Green
            Write-Host ""
            
            Start-Sleep -Seconds 10
            
            $service = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
            if ($service) {
                if ($service.Status -ne "Running") {
                    Start-Service -Name "MongoDB"
                    Start-Sleep -Seconds 3
                }
                Write-Host "MongoDB service is running!" -ForegroundColor Green
            }
            
            Write-Host ""
            Write-Host "MongoDB installed successfully!" -ForegroundColor Green
            Write-Host ""
            Write-Host "Next steps:" -ForegroundColor Cyan
            Write-Host "1. Test with Compass: mongodb://localhost:27017" -ForegroundColor White
            Write-Host "2. Create database 'azalee_db'" -ForegroundColor White
            Write-Host "3. Create collection 'users'" -ForegroundColor White
            Write-Host "4. Insert admin user (see admin-user-json.txt)" -ForegroundColor White
            
        } else {
            Write-Host "Installation failed (Exit Code: $($process.ExitCode))" -ForegroundColor Red
            Write-Host "Try running the installer manually and check 'Install MongoDB as a Service'" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host ""
    Write-Host "Installation command (run as Administrator after downloading):" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "msiexec.exe /i `"PATH_TO_DOWNLOADED_FILE.msi`" /quiet ADDLOCAL=all SERVICE_NAME=`"MongoDB`" SERVICE_USER=`"NT AUTHORITY\NetworkService`"" -ForegroundColor White
    Write-Host ""
    Write-Host "Replace PATH_TO_DOWNLOADED_FILE.msi with your actual file path" -ForegroundColor Gray
}

Write-Host ""


