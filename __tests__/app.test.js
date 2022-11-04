const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { dwarves } = require('../lib/dwarves-data');
const { elves } = require('../lib/elves-data');

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
  // afterAll(() => {
  //   pool.end();
  // });
});

describe('elves routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/elves should return a list of elves', async () => {
    const res = await request(app).get('/elves');
    const expected = elves.map((elf) => {
      return { id: elf.id, name: elf.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/elves/:id should return a elves details', async () => {
    const res = await request(app).get('/elves/1');
    const legolas = {
      id: '1',
      name: 'Legolas Greenleaf',
      purpose: 'Prince of the Woodland Realm',
      source: 'Middle Earth',
      url: 'https://lotr.fandom.com/wiki/Legolas',
    };
    expect(res.body).toEqual(legolas);
  });

  afterAll(() => {
    pool.end();
  });
});
