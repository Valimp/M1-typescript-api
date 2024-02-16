import express, { Request, Response } from 'express';
import 'dotenv/config';
import { PORT } from './const/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    try {
        res.send('Hello World');
    } catch (err) {
        res.send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});