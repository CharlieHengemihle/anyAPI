const { Router } = require('express');
const dwarfage = require('../models/dwarfage');

module.exports = Router().get('/', async (req, res) => {
  const dwarves = await dwarfage.getAll();
  const dwarfStack = await dwarves.map(({ id, name }) => ({ id, name }));
  res.json(dwarfStack);
});
