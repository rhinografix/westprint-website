# PowerShell script to fix all import version specifiers

Write-Host "🔧 Fixing all import version specifiers..." -ForegroundColor Cyan
Write-Host ""

# Fix all files in src/components/ui/
Write-Host "Fixing UI components..." -ForegroundColor Yellow

Get-ChildItem -Path "src\components\ui" -Include *.tsx,*.ts -Recurse | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw
    
    # Remove all version specifiers
    $content = $content -replace '@radix-ui/([a-z-]+)@[\d.]+','@radix-ui/$1'
    $content = $content -replace 'lucide-react@[\d.]+','lucide-react'
    $content = $content -replace 'sonner@[\d.]+','sonner'
    $content = $content -replace 'next-themes@[\d.]+','next-themes'
    $content = $content -replace 'cmdk@[\d.]+','cmdk'
    $content = $content -replace 'vaul@[\d.]+','vaul'
    $content = $content -replace 'react-hook-form@[\d.]+','react-hook-form'
    $content = $content -replace 'react-day-picker@[\d.]+','react-day-picker'
    $content = $content -replace 'embla-carousel-react@[\d.]+','embla-carousel-react'
    $content = $content -replace 'input-otp@[\d.]+','input-otp'
    $content = $content -replace 'recharts@[\d.]+','recharts'
    $content = $content -replace 'class-variance-authority@[\d.]+','class-variance-authority'
    $content = $content -replace 'react-resizable-panels@[\d.]+','react-resizable-panels'
    
    $content | Set-Content $file -NoNewline
    Write-Host "  ✓ Fixed $($_.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ All imports fixed!" -ForegroundColor Green
Write-Host ""
Write-Host "Now run:" -ForegroundColor Cyan
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'Fix all import version specifiers'" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
