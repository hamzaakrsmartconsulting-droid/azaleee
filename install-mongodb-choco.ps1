# Install MongoDB using Chocolatey package manager
# Run as Administrator: powershell -ExecutionPolicy Bypass -File install-mongodb-choco.ps1

Write-Host "MongoDB Installation via Chocolatey" -ForegroundColor Cyan
Write-Host ""

# Check if Chocolatey is installed
$chocoInstalled = Get-Command choco -ErrorAction SilentlyContinue

if (-not $chocoInstalled) {
    Write-Host "Chocolatey is not installed. Installing Chocolatey first..." -ForegroundColor Yellow
    Write-Host ""
    
    try {
        Set-ExecutionPolicy Bypass -Scope Process -Force
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
        iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        
        if (Get-Command choco -ErrorAction SilentlyContinue) {
            Write-Host "Chocolatey installed successfully!" -ForegroundColor Green
        } else {
            Write-Host "Chocolatey installation failed. Please install manually:" -ForegroundColor Red
            Write-Host "https://chocolatey.org/install" -ForegroundColor Cyan
            exit
        }
    } catch {
        Write-Host "Error installing Chocolatey:" -ForegroundColor Red
        Write-Host "$($_.Exception.Message)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Please install Chocolatey manually from:" -ForegroundColor Cyan
        Write-Host "https://chocolatey.org/install" -ForegroundColor White
        exit
    }
}

Write-Host "Installing MongoDB via Chocolatey..." -ForegroundColor Cyan
Write-Host "This will download and install MongoDB Community Server" -ForegroundColor Gray
Write-Host ""

try {
    # Install MongoDB using Chocolatey
    choco install mongodb -y --params '/InstallService:true'
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "MongoDB installed successfully!" -ForegroundColor Green
        
        # Wait a bit for service to start
        Start-Sleep -Seconds 5
        
        # Check service
        $service = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
        if ($service) {
            if ($service.Status -eq "Running") {
                Write-Host "MongoDB service is running!" -ForegroundColor Green
            } else {
                Write-Host "Starting MongoDB service..." -ForegroundColor Cyan
                Start-Service -Name "MongoDB"
                Start-Sleep -Seconds 3
                if ((Get-Service -Name "MongoDB").Status -eq "Running") {
                    Write-Host "MongoDB service started!" -ForegroundColor Green
                }
            }
        }
        
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Cyan
        Write-Host "1. Test with Compass: mongodb://localhost:27017" -ForegroundColor White
        Write-Host "2. Create database 'azalee_db'" -ForegroundColor White
        Write-Host "3. Create collection 'users'" -ForegroundColor White
        Write-Host "4. Insert admin user (see admin-user-json.txt)" -ForegroundColor White
        
    } else {
        Write-Host "MongoDB installation failed" -ForegroundColor Red
        Write-Host "Try manual installation from:" -ForegroundColor Yellow
        Write-Host "https://www.mongodb.com/try/download/community" -ForegroundColor Cyan
    }
    
} catch {
    Write-Host "Error installing MongoDB:" -ForegroundColor Red
    Write-Host "$($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host ""


