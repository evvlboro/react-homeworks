// Helpers
import { generateTypes } from '../../tools';

// Instruments
export const MODULE_NAME = 'forecast';
export const FORECAST_URL = `https://lab.lectrum.io/rtx/api/${MODULE_NAME}`;

// CRUD
export const FETCH_MANY = generateTypes(MODULE_NAME, 'FETCH_MANY');
