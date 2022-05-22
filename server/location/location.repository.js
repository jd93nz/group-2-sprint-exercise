const db = require("../db");

module.exports = {
  getLocations: async () => {
    try {
      const result = await db.query(`SELECT * FROM location `);
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
