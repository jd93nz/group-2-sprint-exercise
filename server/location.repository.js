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
};
