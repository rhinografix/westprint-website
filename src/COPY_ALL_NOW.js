// This script copies ALL UI files from /components/ui to /src/components/ui
// Run this with: node COPY_ALL_NOW.js

const fs = require('fs');
const path = require('path');

const filesToCopy = [
  'alert-dialog.tsx',
  'alert.tsx',
  'aspect-ratio.tsx',
  'avatar.tsx',
  'badge.tsx',
  'breadcrumb.tsx',
  'button.tsx',
  'calendar.tsx',
  'card.tsx',
  'carousel.tsx',
  'chart.tsx',
  'checkbox.tsx',
  'collapsible.tsx',
  'command.tsx',
  'context-menu.tsx',
  'dialog.tsx',
  'drawer.tsx',
  'dropdown-menu.tsx',
  'form.tsx',
  'hover-card.tsx',
  'input-otp.tsx',
  'input.tsx',
  'label.tsx',
  'menubar.tsx',
  'navigation-menu.tsx',
  'pagination.tsx',
  'popover.tsx',
  'progress.tsx',
  'radio-group.tsx',
  'resizable.tsx',
  'scroll-area.tsx',
  'select.tsx',
  'separator.tsx',
  'sheet.tsx',
  'sidebar.tsx',
  'skeleton.tsx',
  'slider.tsx',
  'switch.tsx',
  'table.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'toggle-group.tsx',
  'toggle.tsx',
  'tooltip.tsx',
  'use-mobile.ts',
];

// Also update existing files
const filesToUpdate = [
  'accordion.tsx',
  'sonner.tsx',
  'utils.ts'
];

const allFiles = [...filesToCopy, ...filesToUpdate];

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
  { pattern: /date-fns@[\d.]+/g, replacement: 'date-fns' },
];

console.log('🚀 Copying all UI components...\n');

let count = 0;
allFiles.forEach(file => {
  try {
    let content = fs.readFileSync(`components/ui/${file}`, 'utf8');
    
    // Fix all imports
    replacements.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });
    
    fs.writeFileSync(`src/components/ui/${file}`, content, 'utf8');
    console.log(`  ✓ ${file}`);
    count++;
  } catch (error) {
    console.error(`  ✗ ${file}: ${error.message}`);
  }
});

console.log(`\n✅ Successfully copied ${count} files!`);
console.log('\nNext: git add . && git commit -m "Add UI components" && git push');
