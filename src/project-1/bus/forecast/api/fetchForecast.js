// Constants
import { FORECAST_URL } from '../config';

export const fetchForecast = async () => {
    const response = await fetch(FORECAST_URL, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    if (response.status !== 200) {
        throw new Error('Forecast fetch failed');
    }

    return result.data;
};
