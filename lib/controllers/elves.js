const { Router } = require('express');
const Elf = require('../models/dwarfage copy');

module.exports = Router().get('/', async (req, res) => {
  const elves = await Elf.getAll();
  const elfStack = await elves.map(({ id, name }) => ({ id, name }));
  res.json(elfStack);
});
