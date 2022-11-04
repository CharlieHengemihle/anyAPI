const { Router } = require('express');
const Elf = require('../models/elfage');

module.exports = Router()
  .get('/', async (req, res) => {
    const elves = await Elf.getAll();
    const elfStack = await elves.map(({ id, name }) => ({ id, name }));
    res.json(elfStack);
  })
  .get('/:id', async (req, res) => {
    const elf = await Elf.getById(req.params.id);
    res.json(elf);
  });
