/**
 * Simplified tests for series file-related functionality
 */
import path from 'path';
import fs from 'fs';
import {Link, Series, Brand} from '../../src/store/model/store';
import {getAllSeriesNames} from '../../src/store/model/series-modules/file-loader';

// Mock the file system and path modules
jest.mock('fs');
jest.mock('path');
jest.mock('../../src/logger');

describe('Series File Functionality', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock path.join to return predictable paths
    (path.join as jest.Mock).mockImplementation((...paths) => {
      return paths.join('/');
    });
  });

  describe('getAllSeriesNames', () => {
    it('should return an array of series names from the directory', () => {
      // Arrange
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readdirSync as jest.Mock).mockReturnValue(['3080', '3070', '3090']);
      (fs.statSync as jest.Mock).mockImplementation(path => ({
        isDirectory: () => true,
      }));

      // Act
      const seriesNames = getAllSeriesNames();

      // Assert
      expect(seriesNames).toEqual(['3080', '3070', '3090']);
      expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array when series directory does not exist', () => {
      // Arrange
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      // Act
      const seriesNames = getAllSeriesNames();

      // Assert
      expect(seriesNames).toEqual([]);
      expect(fs.readdirSync).not.toHaveBeenCalled();
    });

    it('should filter out non-directory entries', () => {
      // Arrange
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readdirSync as jest.Mock).mockReturnValue(['3080', 'README.md', '3070']);
      (fs.statSync as jest.Mock).mockImplementation(path => ({
        isDirectory: () => !path.includes('README'),
      }));

      // Act
      const seriesNames = getAllSeriesNames();

      // Assert
      expect(seriesNames).toEqual(['3080', '3070']);
    });
  });
});
