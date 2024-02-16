import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { PORT, API_KEY } from './const/config';

import { logHandler } from './middlewares/logHandler';
import { SearchPlantsController } from './controllers/searchPlantsController';
import { errorHandler } from './middlewares/errorHandler';

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
app.use(errorHandler);

app.get('/api/species', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchAllSpecies(req, res, next);
});

// Get request to /api/plants -> searchPlantsController.searchAllPlants
app.get('/api/plants', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchAllPlants(req, res, next);
});

// Get request to /api/plants/:plant -> searchPlantsController.searchPlants
app.get('/api/plants/:plant', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchPlants(req, res, next);
});

// Get request to /api/plants/scientist/:plant -> searchPlantsController.searchPlantsScience
app.get('/api/plants/scientist/:plant', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchPlantsScience(req, res, next);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});