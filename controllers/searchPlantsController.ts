import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { MinimalPlantsData } from '../interfaces/MinimalPlantsData';
import { ScientistPlantsData } from '../interfaces/ScientistPlantsData';
import { ApiError } from '../errors/ApiError';


/**
 * @swagger
 * tags:
 *  name: Plants
 *  description: The plants managing API
 */

/**
 * @swagger
 * tags:
 *  name: Species
 *  description: The species managing API
 */


export class SearchPlantsController {

    private API_KEY : string;

    constructor(apiKey : string) {
        this.API_KEY = apiKey
    }

    /**
     * @swagger
     * /api/species:
     *  get:
     *     summary: Get all species
     *     description: Get all species from the trefle.io API
     *     tags: [Species]   
     *     responses:
     *      200:
     *       description: The list of all species
     *      400: 
     *       description: Bad request
     * 
     */

    public async searchAllSpecies(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(`https://trefle.io/api/v1/species?token=${this.API_KEY}`);
            const minimalPlantsData: MinimalPlantsData[] = response.data.data.map((plant: any) => {
                return {
                    id: plant.id,
                    common_name: plant.common_name,
                    image_url: plant.image_url,
                    rank: plant.rank
                }
            }
            );
            res.send(minimalPlantsData);
        } catch (err) {
            next(new ApiError("Erreur de l'api trefle.io"));
        }
    };

    
    /**
     * @swagger
     * /api/plants:
     *  get:
     *     summary: Get all plants
     *     description: Get all plants from the trefle.io API
     *     tags: [Plants]   
     *     responses:
     *      200:
     *       description: The list of all plants
     *      400: 
     *       description: Bad request
     * 
     */

    public async searchAllPlants(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(`https://trefle.io/api/v1/plants?token=${this.API_KEY}`);
            const minimalPlantsData: MinimalPlantsData[] = response.data.data.map((plant: any) => {
                return {
                    id: plant.id,
                    common_name: plant.common_name,
                    image_url: plant.image_url,
                    rank: plant.rank
                }
            }
            );
            res.send(minimalPlantsData);
        } catch (err) {
            next(new ApiError("Erreur de l'api trefle.io"));
        }
    }

    /**
     * @swagger
     * /api/plants/scientist/{plant}:
     *  get:
     *     summary: Gets scientist data for a named plant
     *     description: Get all species from the trefle.io API - You can test with the value [bean, coconut, carrot]
     *     tags: [Plants]   
     *     parameters:
     *      - in: path
     *        name: plant
     *        required: true
     *        description: The plant to search by name, return science data
     *        schema: 
     *         type: string
     *     responses:
     *      200:
     *       description: The list of all species
     *      404:
     *       description: Not found
     *      400: 
     *       description: Bad request
     * 
     */

    public async searchPlantsScience(req: Request, res: Response, next: NextFunction): Promise<void> {

        const plant: string = req.params.plant;
        console.log(plant);
        

        try {
            const response: AxiosResponse = await axios.get(`https://trefle.io/api/v1/plants/search?token=${this.API_KEY}&q=${plant}`);
            
            const minimalPlantsData: ScientistPlantsData[] = response.data.data.map((plant: any) => {
                return {
                    id: plant.id,
                    common_name: plant.common_name,
                    scientific_name: plant.scientific_name,
                    genus: plant.genus,
                    genus_id: plant.genus_id,
                    image_url: plant.image_url,
                    rank: plant.rank,
                    year: plant.year
                }
            }
            );
            res.send(minimalPlantsData);
        } catch (err) {
            next(new ApiError("Erreur de l'api trefle.io"));
        } 
    }  

    
    /**
     * @swagger
     * /api/plants/{plant}:
     *  get:
     *     summary: Get minimal data for a named plant
     *     description: Get all species from the trefle.io API
     *     tags: [Plants]   
     *     parameters:
     *      - in: path
     *        name: plant
     *        required: true
     *        description: The plant to search by name, return science data
     *        schema: 
     *         type: string
     *     responses:
     *      200:
     *       description: The list of all species
     *      404:
     *       description: Not found
     *      400: 
     *       description: Bad request
     * 
     */


    public async searchPlants(req: Request, res: Response, next: NextFunction): Promise<void> {

        const plant: string = req.params.plant;
        console.log(plant);
        

        try {
            const response: AxiosResponse = await axios.get(`https://trefle.io/api/v1/plants/search?token=${this.API_KEY}&q=${plant}`);
            
            const minimalPlantsData: MinimalPlantsData[] = response.data.data.map((plant: any) => {
                return {
                    id: plant.id,
                    common_name: plant.common_name,
                    image_url: plant.image_url,
                    rank: plant.rank
                }
            }
            );
            res.send(minimalPlantsData);
        } catch (err) {
            next(new ApiError("Erreur de l'api trefle.io"));
        } 
    }     
}