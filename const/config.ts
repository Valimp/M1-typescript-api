import 'dotenv/config';

export const PORT : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const API_KEY : string = process.env.API_KEY ? process.env.API_KEY : '';
export const URL : string = process.env.URL ? process.env.URL : 'http://localhost';