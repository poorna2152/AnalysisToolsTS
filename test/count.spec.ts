import { expect } from 'chai';
import { describe, test } from 'mocha';
import path from 'path';

import { Counter, countToken } from '../src/count';
import { parseFile } from '../src/parser';

import { TEST_DATA } from './constants';

describe('countToken', () => {
  describe('token', () => {
    describe('python', () => {
      const testDir = path.join(TEST_DATA, 'python');
      const cases: [string, string, number][] = [
        ['loops.py', 'while', 2],
        ['loops.py', 'for', 3],
        ['class.py', 'class', 1],
        ['class.py', 'def', 4],
      ];
      cases.forEach(([file, token, expected]) => {
        test(`counting token '${token}'`, () => {
          expect(
            countToken(
              parseFile('python', path.join(testDir, file)),
              Counter.token,
              token,
            ),
          ).to.equal(expected);
        });
      });
    });
  });
});
