const pool = require('../utils/pool');

module.exports = class Dwarf {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.purpose = row.purpose;
    this.source = row.source;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from dwarves');
    return rows.map((dwarfRow) => new Dwarf(dwarfRow));
  }
};
