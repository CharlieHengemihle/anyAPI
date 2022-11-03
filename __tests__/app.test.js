const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

const { dwarves } = require('../lib/dwarves-data');

describe('dwarves routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});

// describe('backend-express-template routes', () => {
// beforeEach(() => {
//   return setup(pool);
// });
//   it('example test - delete me!', () => {
//     expect(1).toEqual(1);
//   });
//   afterAll(() => {
//     pool.end();
//   });
// });
