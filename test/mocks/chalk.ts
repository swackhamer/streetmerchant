/**
 * Mock implementation of chalk for testing
 */

const createColorFn = () => {
  const fn = (text: string) => text;
  fn.bold = createColorFn();
  fn.green = createColorFn();
  fn.red = createColorFn();
  fn.yellow = createColorFn();
  fn.blue = createColorFn();
  fn.magenta = createColorFn();
  fn.cyan = createColorFn();
  fn.white = createColorFn();
  fn.gray = createColorFn();
  fn.grey = createColorFn();
  return fn;
};

const chalk = {
  bold: createColorFn(),
  green: createColorFn(),
  red: createColorFn(),
  yellow: createColorFn(),
  blue: createColorFn(),
  magenta: createColorFn(),
  cyan: createColorFn(),
  white: createColorFn(),
  gray: createColorFn(),
  grey: createColorFn()
};

export default chalk;