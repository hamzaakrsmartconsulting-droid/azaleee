# Script PowerShell pour vérifier et guider l'installation MongoDB

Write-Host "🔍 Vérification de MongoDB" -ForegroundColor Cyan
Write-Host ""

# Vérifier les services
$services = Get-Service -Name "*mongo*" -ErrorAction SilentlyContinue

if ($services) {
    Write-Host "✅ MongoDB est installé!" -ForegroundColor Green
    foreach ($service in $services) {
        $status = if ($service.Status -eq "Running") { "✅ Running" } else { "❌ Stopped" }
        Write-Host "   Service: $($service.Name) - $status" -ForegroundColor $(if ($service.Status -eq "Running") { "Green" } else { "Red" })
        
        if ($service.Status -eq "Stopped") {
            Write-Host ""
            Write-Host "💡 Pour démarrer MongoDB:" -ForegroundColor Yellow
            Write-Host "   net start MongoDB" -ForegroundColor White
        }
    }
} else {
    Write-Host "❌ MongoDB n'est PAS installé!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Pour installer MongoDB:" -ForegroundColor Yellow
    Write-Host "   1. Allez sur: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host "   2. Téléchargez MongoDB Community Server (Windows MSI)" -ForegroundColor White
    Write-Host "   3. Exécutez le fichier .msi" -ForegroundColor White
    Write-Host "   4. IMPORTANT: Cochez 'Install MongoDB as a Service'" -ForegroundColor White
    Write-Host "   5. Installez et attendez la fin" -ForegroundColor White
    Write-Host ""
    Write-Host "🔗 Lien direct: https://www.mongodb.com/try/download/community" -ForegroundColor Cyan
}

Write-Host ""

# Tester le port
Write-Host "🔍 Test du port 27017..." -ForegroundColor Cyan
$test = Test-NetConnection -ComputerName localhost -Port 27017 -InformationLevel Quiet -WarningAction SilentlyContinue

if ($test) {
    Write-Host "✅ Port 27017 accessible - MongoDB fonctionne!" -ForegroundColor Green
} else {
    Write-Host "❌ Port 27017 non accessible" -ForegroundColor Red
    if (-not $services) {
        Write-Host "   → MongoDB n'est pas installé" -ForegroundColor Yellow
    } else {
        Write-Host "   → MongoDB est installé mais pas démarré" -ForegroundColor Yellow
        Write-Host "   → Démarrez le service: net start MongoDB" -ForegroundColor Yellow
    }
}

Write-Host ""


