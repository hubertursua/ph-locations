import fs from 'fs';

export default async function writeJsonFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      { encoding: 'utf-8' },
      (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      },
    );
  });
}
