const db = require("./db");

module.exports = {
  getLocations: async () => {
    try {
      const { rows } = await db.query(`SELECT * FROM location`);
      return rows;
    } catch (error) {
      throw Error(error);
    }
  },

  getALocation: async (location) => {
    try {
      const { rows } = await db.query(`SELECT * FROM location WHERE title=$1`, [
        location,
      ]);
      return rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
