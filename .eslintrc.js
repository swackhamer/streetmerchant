/**
 * ESLint configuration for streetmerchant
 */

module.exports = {
  root: true,
  
  // Extends the Google TypeScript Style configuration
  extends: [
    './node_modules/gts/.eslintrc.json'
  ],
  
  // Override ignorePatterns from GTS
  ignorePatterns: [
    'build/',
    'node_modules/',
    'coverage/',
    'src/types/**/*.d.ts'
  ],
  
  // Override rules from GTS
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // Prettier configuration
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
      singleQuote: true,
      tabWidth: 2
    }]
  },
  
  // Rule overrides for specific file patterns
  overrides: [
    // Test files can have different rules
    {
      files: ['**/*.test.ts', 'test/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};