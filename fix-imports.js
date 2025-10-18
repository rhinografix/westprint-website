#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all import version specifiers...\n');

// Patterns to replace
const replacements = [
  { pattern: /@radix-ui\/([\w-]+)@[\d.]+/g, replacement: '@radix-ui/$1' },
  { pattern: /lucide-react@[\d.]+/g, replacement: 'lucide-react' },
  { pattern: /sonner@[\d.]+/g, replacement: 'sonner' },
  { pattern: /next-themes@[\d.]+/g, replacement: 'next-themes' },
  { pattern: /cmdk@[\d.]+/g, replacement: 'cmdk' },
  { pattern: /vaul@[\d.]+/g, replacement: 'vaul' },
  { pattern: /react-hook-form@[\d.]+/g, replacement: 'react-hook-form' },
  { pattern: /react-day-picker@[\d.]+/g, replacement: 'react-day-picker' },
  { pattern: /embla-carousel-react@[\d.]+/g, replacement: 'embla-carousel-react' },
  { pattern: /input-otp@[\d.]+/g, replacement: 'input-otp' },
  { pattern: /recharts@[\d.]+/g, replacement: 'recharts' },
  { pattern: /class-variance-authority@[\d.]+/g, replacement: 'class-variance-authority' },
  { pattern: /react-resizable-panels@[\d.]+/g, replacement: 'react-resizable-panels' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✓ Fixed ${path.basename(filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  let count = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        count += processDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        if (fixFile(filePath)) {
          count++;
        }
      }
    });
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return count;
}

// Process src/components/ui directory
console.log('Fixing UI components...');
const uiDir = path.join(process.cwd(), 'src', 'components', 'ui');

if (!fs.existsSync(uiDir)) {
  console.error(`\n❌ Directory not found: ${uiDir}`);
  console.log('\nMake sure you are running this from the project root directory.');
  process.exit(1);
}

const count = processDirectory(uiDir);

console.log(`\n✅ Fixed ${count} file(s)!\n`);
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Fix all import version specifiers"');
console.log('  git push');
