import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { MinimalPlantsData } from '../interfaces/MinimalPlantsData';
import { ScientistPlantsData } from '../interfaces/ScientistPlantsData';

export class SearchPlantsController {

    private API_KEY : string;

    constructor(apiKey : string) {
        this.API_KEY = apiKey
    }

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
            console.log(err);
        }
    };

    // Get request to /api/plants -> searchPlantsController.searchAllPlants
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
            console.log(err);
        }
    }

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
            console.log(err);
        } 
    }  

    // Get request to /api/plants/:plant -> searchPlantsController.searchPlants
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
            console.log(err);
        } 
    }     
}