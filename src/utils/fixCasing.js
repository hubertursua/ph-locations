// eslint-disable-next-line import/no-extraneous-dependencies
import { capitalCase } from 'change-case';

export default (str) => capitalCase(str, {
  splitRegexp: [/([a-z0-9ñ])([A-ZÑ])/g, /([A-ZÑ])([A-ZÑ][a-zñ])/g],
  stripRegexp: /[^A-Z0-9Ñ]+/gi,
});
