import path from 'path';

export default function resolveLibJSON(libName, fileName) {
  return path.resolve(__dirname, `./json/${libName}/${fileName}.json`);
}
