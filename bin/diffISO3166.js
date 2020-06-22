/* eslint-disable no-console */
import diff from '../src/diff';

console.log('Running diff for ISO3166...');

diff('iso3166')
  .then(() => {
    console.log('Everything is updated!');
  })
  .catch((err) => {
    console.error(err.message);

    if (err.errors && err.errors.length > 0) {
      err.errors.forEach((subErr) => {
        console.error(`  - ${subErr.message}`);
      });
    }
  });
