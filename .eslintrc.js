/**
 * ESLint configuration for streetmerchant
 * Optimized with Google TypeScript Style (GTS)
 */

module.exports = {
  root: true,
  
  // Extends the Google TypeScript Style configuration
  extends: './node_modules/gts/.eslintrc.json',
  
  // Override ignorePatterns from GTS
  ignorePatterns: [
    'build/',
    'node_modules/',
    'coverage/',
    'src/types/**/*.d.ts'
  ],
  
  // Custom rules
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn', // Only warn for now to ease migration
    '@typescript-eslint/explicit-function-return-type': 'off', // GTS doesn't require explicit return types
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }],
    
    // General code quality rules
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }], // Allow structured logging
    'eqeqeq': ['error', 'always', { null: 'ignore' }], // Always use === except for null checks
    'no-return-await': 'error', // Redundant return await is unnecessary
    'no-var': 'error', // Prefer let/const over var
    'prefer-const': 'error', // Use const where variables aren't reassigned
    
    // Prettier configuration
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
      singleQuote: true,
      tabWidth: 2,
      printWidth: 100
    }]
  },
  
  // Rule overrides for specific file patterns
  overrides: [
    // Test files can have different rules
    {
      files: ['**/*.test.ts', 'test/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'off' // Console is okay in tests
      }
    },
    // Scripts and utility files
    {
      files: ['scripts/**/*.ts', 'src/utils/**/*.ts'],
      rules: {
        'no-console': 'off' // Console logging is expected in scripts
      }
    }
  ]
};