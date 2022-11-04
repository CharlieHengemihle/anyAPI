const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { dwarves } = require('../lib/dwarves-data');

describe('dwarves routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/dwarves should return a list of dwarves', async () => {
    const res = await request(app).get('/dwarves');
    const expected = dwarves.map((dwarf) => {
      return { id: dwarf.id, name: dwarf.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/dwarves/:id should return a dwarves details', async () => {
    const res = await request(app).get('/dwarves/1');
    const gimli = {
      id: '1',
      name: 'Gimli',
      purpose: 'Lord of the Glittering Caves',
      source: 'Middle Earth',
      url: 'https://hero.fandom.com/wiki/Gimli',
    };
    expect(res.body).toEqual(gimli);
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
