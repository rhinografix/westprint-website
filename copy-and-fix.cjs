#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Copying and fixing all UI components...\n');

// Source and destination directories
const sourceDir = path.join(process.cwd(), 'components', 'ui');
const destDir = path.join(process.cwd(), 'src', 'components', 'ui');

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

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Source directory not found: ${sourceDir}`);
  console.log('\nMake sure you are running this from the project root directory.');
  process.exit(1);
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`✓ Created directory: ${destDir}\n`);
}

// Copy and fix files
let count = 0;
const files = fs.readdirSync(sourceDir);

console.log('Copying and fixing files...\n');

files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  
  // Only process files, not directories
  if (fs.statSync(sourcePath).isFile()) {
    try {
      // Read source file
      let content = fs.readFileSync(sourcePath, 'utf8');
      
      // Apply all replacements
      replacements.forEach(({ pattern, replacement }) => {
        content = content.replace(pattern, replacement);
      });
      
      // Write to destination
      fs.writeFileSync(destPath, content, 'utf8');
      console.log(`  ✓ ${file}`);
      count++;
    } catch (error) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }
});

console.log(`\n✅ Successfully copied and fixed ${count} files!\n`);
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Add all UI components with fixed imports"');
console.log('  git push');
console.log('\nYour Netlify build will succeed! 🎉');
