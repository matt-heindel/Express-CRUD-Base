const fs = require("fs/promises");
const path = require("path");

// auto increment id
const getNextId = async () => {
  const idFilePath = path.join(__dirname, "../data-files/nextId.json");
  const nextId = Number(await fs.readFile(idFilePath));
  // update file counter
  await fs.writeFile(idFilePath, JSON.stringify(nextId + 1));
  return nextId;
};

module.exports = async (newFileData) => {
  const id = await getNextId();
  // save id as property of new file
  newFileData.id = id;

  // store as left-padded id
  const filePath = path.join(
    __dirname,
    `../data-files/${String(id).padStart(2, 0)}.json`
  );
  await fs.writeFile(filePath, JSON.stringify(newFileData));

  return newFileData;
};
