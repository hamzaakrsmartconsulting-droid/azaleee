# Script pour démarrer MongoDB
Write-Host "🔍 Vérification du service MongoDB..." -ForegroundColor Cyan
Write-Host ""

# Chercher le service MongoDB
$services = Get-Service | Where-Object { $_.Name -like "*MongoDB*" }

if ($services) {
    Write-Host "✅ Service(s) MongoDB trouvé(s):" -ForegroundColor Green
    foreach ($service in $services) {
        Write-Host "   - $($service.Name): $($service.Status)" -ForegroundColor White
        
        if ($service.Status -eq 'Running') {
            Write-Host "   ✅ Déjà en cours d'exécution!" -ForegroundColor Green
        } else {
            Write-Host "   ⚠️  Service arrêté, tentative de démarrage..." -ForegroundColor Yellow
            
            try {
                # Vérifier les privilèges administrateur
                $isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
                
                if ($isAdmin) {
                    Start-Service -Name $service.Name
                    Write-Host "   ✅ Service démarré avec succès!" -ForegroundColor Green
                } else {
                    Write-Host "   ❌ Privilèges administrateur requis" -ForegroundColor Red
                    Write-Host "   💡 Exécutez ce script en tant qu'administrateur" -ForegroundColor Yellow
                    Write-Host "   OU exécutez: net start $($service.Name)" -ForegroundColor Yellow
                }
            } catch {
                Write-Host "   ❌ Erreur: $($_.Exception.Message)" -ForegroundColor Red
                Write-Host "   💡 Essayez: net start $($service.Name)" -ForegroundColor Yellow
            }
        }
    }
} else {
    Write-Host "❌ Service MongoDB non trouvé" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 MongoDB n'est probablement pas installé." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📥 Pour installer MongoDB:" -ForegroundColor Cyan
    Write-Host "   1. Téléchargez: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host "   2. Installez avec l'option 'Install MongoDB as a Service'" -ForegroundColor White
    Write-Host "   3. Redémarrez ce script" -ForegroundColor White
    Write-Host ""
    Write-Host "🔍 Vérification alternative (processus MongoDB)..." -ForegroundColor Cyan
    $process = Get-Process -Name "mongod" -ErrorAction SilentlyContinue
    if ($process) {
        Write-Host "   ✅ Processus mongod trouvé (PID: $($process.Id))" -ForegroundColor Green
        Write-Host "   MongoDB pourrait être en cours d'exécution mais pas comme service" -ForegroundColor Yellow
    } else {
        Write-Host "   ❌ Processus mongod non trouvé" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🧪 Test de connexion..." -ForegroundColor Cyan
try {
    $connection = Test-NetConnection -ComputerName localhost -Port 27017 -WarningAction SilentlyContinue
    if ($connection.TcpTestSucceeded) {
        Write-Host "   ✅ Port 27017 est accessible!" -ForegroundColor Green
        Write-Host "   MongoDB devrait être en cours d'exécution" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Port 27017 n'est pas accessible" -ForegroundColor Red
        Write-Host "   MongoDB n'est pas en cours d'exécution" -ForegroundColor Red
    }
} catch {
    Write-Host "   ⚠️  Impossible de tester le port" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "   1. Si MongoDB est démarré, testez: npm run dev" -ForegroundColor White
Write-Host "   2. Si MongoDB n'est pas installé, installez-le d'abord" -ForegroundColor White
Write-Host "   3. Si le service ne démarre pas, exécutez en Admin: net start MongoDB" -ForegroundColor White

