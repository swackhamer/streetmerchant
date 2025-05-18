import {banner} from '../../src/banner';

// Skip testing the actual chalk color rendering, which is causing issues
jest.mock('chalk', () => {
  return {
    hex: jest.fn().mockReturnValue({
      bold: jest.fn(text => text),
    }),
  };
});

describe('Banner', () => {
  describe('banner content', () => {
    test('asciiVersion should include ASCII art and version', () => {
      expect(banner.asciiVersion).toContain('██████');
      expect(banner.asciiVersion).toContain(process.env.npm_package_version || '');
    });

    test('stringVersion should include Unicode text and version', () => {
      expect(banner.stringVersion).toContain('ＳＴＲＥＥＴＭＥＲＣＨＡＮＴ');
      expect(banner.stringVersion).toContain(process.env.npm_package_version || '');
    });
  });
});
