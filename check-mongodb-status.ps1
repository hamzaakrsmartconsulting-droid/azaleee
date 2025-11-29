# Script PowerShell pour vérifier MongoDB
Write-Host "🔍 Vérification de MongoDB" -ForegroundColor Cyan
Write-Host ""

# Vérifier les services MongoDB
$services = Get-Service -Name "*mongo*" -ErrorAction SilentlyContinue

if ($services) {
    Write-Host "✅ Services MongoDB trouvés:" -ForegroundColor Green
    foreach ($service in $services) {
        $status = if ($service.Status -eq "Running") { "✅ Running" } else { "❌ Stopped" }
        Write-Host "   $($service.Name): $status" -ForegroundColor $(if ($service.Status -eq "Running") { "Green" } else { "Red" })
    }
} else {
    Write-Host "❌ Aucun service MongoDB trouvé" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 MongoDB n'est pas installé!" -ForegroundColor Yellow
    Write-Host "   Téléchargez: https://www.mongodb.com/try/download/community" -ForegroundColor Yellow
}

Write-Host ""

# Tester le port
Write-Host "🔍 Test du port 27017..." -ForegroundColor Cyan
$test = Test-NetConnection -ComputerName localhost -Port 27017 -InformationLevel Quiet -WarningAction SilentlyContinue

if ($test) {
    Write-Host "✅ Port 27017 accessible - MongoDB est probablement démarré" -ForegroundColor Green
} else {
    Write-Host "❌ Port 27017 non accessible - MongoDB n'est pas démarré" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Solutions:" -ForegroundColor Yellow
    Write-Host "   1. Installez MongoDB: https://www.mongodb.com/try/download/community" -ForegroundColor Yellow
    Write-Host "   2. OU démarrez le service: net start MongoDB" -ForegroundColor Yellow
}

Write-Host ""


