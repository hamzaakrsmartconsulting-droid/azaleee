# Install MongoDB using winget (Windows Package Manager)
# Run as Administrator: powershell -ExecutionPolicy Bypass -File install-mongodb-winget.ps1

Write-Host "MongoDB Installation via winget" -ForegroundColor Cyan
Write-Host ""

# Check if winget is available
$wingetInstalled = Get-Command winget -ErrorAction SilentlyContinue

if (-not $wingetInstalled) {
    Write-Host "winget is not available on this system" -ForegroundColor Red
    Write-Host "Please use the manual installation script instead:" -ForegroundColor Yellow
    Write-Host "powershell -ExecutionPolicy Bypass -File install-mongodb-manual.ps1" -ForegroundColor Cyan
    exit
}

Write-Host "Installing MongoDB Community Server via winget..." -ForegroundColor Cyan
Write-Host "This will download and install MongoDB" -ForegroundColor Gray
Write-Host ""

try {
    # Install MongoDB using winget
    winget install MongoDB.Server --silent --accept-package-agreements --accept-source-agreements
    
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
                Start-Service -Name "MongoDB" -ErrorAction SilentlyContinue
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
        Write-Host "Try manual installation:" -ForegroundColor Yellow
        Write-Host "powershell -ExecutionPolicy Bypass -File install-mongodb-manual.ps1" -ForegroundColor Cyan
    }
    
} catch {
    Write-Host "Error installing MongoDB:" -ForegroundColor Red
    Write-Host "$($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Try manual installation:" -ForegroundColor Yellow
    Write-Host "powershell -ExecutionPolicy Bypass -File install-mongodb-manual.ps1" -ForegroundColor Cyan
}

Write-Host ""


