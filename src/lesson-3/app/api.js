const base = 'https://api.backendless.com';
const key = '520C1D14-9413-E1AA-FF78-6A4DB0E26E00/9C9A66AC-959A-D6F4-FFAB-BD991AA34A00';
const root = 'data';

const uri = `${base}/${key}/${root}`;

export const api = {
    news: {
        fetch: async () => {
            return await fetch(`${uri}/news`);
        }
    }
};