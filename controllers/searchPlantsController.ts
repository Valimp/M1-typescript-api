import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { MinimalPlantsData } from '../interfaces/MinimalPlantsData';

export class SearchPlantsController {

    private API_KEY : string;

    constructor(apiKey : string) {
        this.API_KEY = apiKey
    }

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