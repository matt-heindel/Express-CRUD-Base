const fs = require("fs/promises");
const path = require("path");

module.exports = async (id) => {
  const filePath = path.join(__dirname, `../data-files/${id}.json`);
  return await fs.readFile(filePath);
};
