#!/usr/bin/env node

// Simple build script to generate static HTML
import { readFileSync, writeFileSync } from 'fs';
import { generateHTML, generateJS } from './src/main.js';

function extractStylesFromHTML(htmlFilePath) {
    const htmlContent = readFileSync(htmlFilePath, 'utf8');
    const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
    return styleMatch ? styleMatch[1] : '';
}

function generateFullHTML() {
    const styles = extractStylesFromHTML('./index.html');
    const bodyContent = generateHTML();
    const jsContent = generateJS();
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sachin Ghait - Senior Software Engineer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        ${styles}
    </style>
</head>
<body>
    ${bodyContent}

    <script>
        ${jsContent}
    </script>
</body>
</html>`;
}

// Build the site
try {
    console.log('🚀 Building portfolio website...');
    
    const html = generateFullHTML();
    writeFileSync('./index.html', html);
    
    console.log('✅ Build complete! Updated index.html');
    console.log('📁 Project structure:');
    console.log('   src/data/portfolio.js     - All portfolio data');
    console.log('   src/templates/sections.js - Template functions');
    console.log('   src/main.js              - Main app logic');
    console.log('   build.js                 - Build script');
    console.log('   index.html               - Generated output');
    
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}