# ESLint Configuration for Streetmerchant

This document explains the ESLint configuration used in this project and how to maintain code quality standards.

## Overview

The project uses [Google TypeScript Style (GTS)](https://github.com/google/gts) as its foundation for code style and linting, with additional custom rules to enforce best practices specific to this project.

## Key Features

1. **Code Style and Formatting**
   - Uses Google TypeScript Style guidelines
   - Prettier integration for consistent formatting
   - Single quotes, 2-space indentation, 100 character line limit

2. **Error Prevention**
   - Type checking via TypeScript
   - Strict equality checks with `eqeqeq` rule
   - Promise handling with proper awaits and returns

3. **Maintainability**
   - No explicit `any` types (except in tests)
   - Consistent import ordering and grouping
   - Preference for named exports over default exports

4. **Best Practices**
   - Limited console logging (favors structured logging)
   - Proper variable declarations with `const` and `let`
   - Security best practices for file system operations

## Available NPM Scripts

- `npm run lint`: Check all source files for linting issues
- `npm run lint:fix`: Automatically fix linting issues where possible
- `npm run lint:changed`: Only lint files changed since last commit
- `npm run lint:report`: Generate an HTML report of linting issues
- `npm run lint:ci`: Stricter linting for CI environments (fails on warnings)

## Key Rule Explanations

| Rule | Severity | Explanation |
|------|----------|-------------|
| `@typescript-eslint/no-explicit-any` | warn | Discourages using the `any` type which defeats TypeScript's type checking. Set to warn for easier migration. |
| `no-console` | warn | Discourages direct console usage in favor of structured logging. Allows `console.info/warn/error`. |
| `eqeqeq` | error | Requires strict equality checks (`===`) to prevent type coercion bugs. |
| `no-var` | error | Enforces modern JavaScript with `let` and `const` over `var`. |
| `import/order` | error | Ensures imports are grouped and alphabetized for easier reading and merging. |
| `prettier/prettier` | error | Enforces consistent code formatting via Prettier. |

## Special File Handling

The configuration includes overrides for specific file types:

- **Test Files**: Allow `any` types and console usage
- **Utility Scripts**: Allow console usage

## Adding New Rules

When adding new rules:

1. Consider the impact on existing code
2. Start with `warn` for major changes to allow for gradual migration
3. Document reasoning behind non-obvious rules
4. Test on a sample file before applying to the entire codebase

## Pre-commit Hooks

Consider setting up pre-commit hooks (using husky) to run linting automatically:

```bash
npm install --save-dev husky lint-staged
```

Then add to package.json:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.ts": ["eslint --fix"]
}
```

## Troubleshooting Common Issues

- **Import Order Issues**: Make sure imports are grouped and alphabetized.
- **Prettier Conflicts**: The ESLint config is set to work with Prettier. If you're seeing conflicts, try running `npm run lint:prettier:fix`.
- **Unused Variables**: Use the underscore prefix (e.g., `_unusedVar`) for variables that are intentionally unused.