#!/bin/bash

echo "🔧 Fixing all import version specifiers..."
echo ""

# Fix all files in src/components/ui/
echo "Fixing UI components..."
find src/components/ui -name "*.tsx" -o -name "*.ts" | while read file; do
  if [ -f "$file" ]; then
    sed -i.bak -E '
      s/@radix-ui\/([a-z-]+)@[0-9.]+/@radix-ui\/\1/g
      s/lucide-react@[0-9.]+/lucide-react/g
      s/sonner@[0-9.]+/sonner/g
      s/next-themes@[0-9.]+/next-themes/g
      s/cmdk@[0-9.]+/cmdk/g
      s/vaul@[0-9.]+/vaul/g
      s/react-hook-form@[0-9.]+/react-hook-form/g
      s/react-day-picker@[0-9.]+/react-day-picker/g
      s/embla-carousel-react@[0-9.]+/embla-carousel-react/g
      s/input-otp@[0-9.]+/input-otp/g
      s/recharts@[0-9.]+/recharts/g
      s/class-variance-authority@[0-9.]+/class-variance-authority/g
      s/react-resizable-panels@[0-9.]+/react-resizable-panels/g
    ' "$file"
    rm -f "${file}.bak"
    echo "  ✓ Fixed $(basename $file)"
  fi
done

echo ""
echo "✅ All imports fixed!"
echo ""
echo "Now run:"
echo "  git add ."
echo "  git commit -m 'Fix all import version specifiers'"
echo "  git push"
