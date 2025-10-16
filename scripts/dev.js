#!/usr/bin/env node

/**
 * Development helper script
 * Provides quick commands for common development tasks
 */

const { execSync } = require('child_process');
const path = require('path');

const commands = {
  start: 'npm start',
  build: 'npm run build',
  test: 'npm test',
  'test:coverage': 'npm run test:coverage',
  lint: 'npm run lint',
  'lint:fix': 'npm run lint:fix'
};

const command = process.argv[2];

if (!command || !commands[command]) {
  console.log('Available commands:');
  Object.keys(commands).forEach(cmd => {
    console.log(`  ${cmd}: ${commands[cmd]}`);
  });
  process.exit(1);
}

try {
  console.log(`Running: ${commands[command]}`);
  execSync(commands[command], { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
} catch (error) {
  console.error(`Error running command: ${error.message}`);
  process.exit(1);
}
