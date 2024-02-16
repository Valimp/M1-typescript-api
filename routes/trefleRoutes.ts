import express, { Request, Response, NextFunction } from 'express';
import { SearchPlantsController } from '../controllers/searchPlantsController';
import { API_KEY } from '../const/config';
const router = express.Router();

const searchPlantsController = new SearchPlantsController(API_KEY);

router.get('/api/species', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchAllSpecies(req, res, next);
});

// Get request to /api/plants -> searchPlantsController.searchAllPlants
router.get('/api/plants', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchAllPlants(req, res, next);
});

// Get request to /api/plants/:plant -> searchPlantsController.searchPlants
router.get('/api/plants/:plant', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchPlants(req, res, next);
});

// Get request to /api/plants/scientist/:plant -> searchPlantsController.searchPlantsScience
router.get('/api/plants/scientist/:plant', (req: Request, res: Response, next: NextFunction) => {
    searchPlantsController.searchPlantsScience(req, res, next);
});

module.exports = router;