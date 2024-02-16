import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { PORT, API_KEY } from './const/config';

import { logHandler } from './middlewares/logHandler';
import { SearchPlantsController } from './controllers/searchPlantsController';

const app = express();
const searchPlantsController = new SearchPlantsController(API_KEY);

// Get request to / -> Hello World
app.get('/', (req: Request, res: Response) => {
    try {
        res.send('Hello World');
    } catch (err) {
        res.send(err);
    }
});

app.use(logHandler);

// Get request to /api/plants/:plant -> searchPlantsController.searchPlants
app.get('/api/plants/:plant', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchPlants(req, res, next);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});