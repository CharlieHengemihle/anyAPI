const { Router } = require('express');
const Dwarf = require('../models/dwarfage');

module.exports = Router()
  .get('/', async (req, res) => {
    const dwarves = await Dwarf.getAll();
    const dwarfStack = await dwarves.map(({ id, name }) => ({ id, name }));
    res.json(dwarfStack);
  })
  .get('/:id', async (req, res) => {
    const dwarf = await Dwarf.getById(req.params.id);
    res.json(dwarf);
  });
