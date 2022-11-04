const pool = require('../utils/pool');

module.exports = class Elf {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.purpose = row.purpose;
    this.source = row.source;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from elves');
    return rows.map((elfRow) => new Elf(elfRow));
  }
};
