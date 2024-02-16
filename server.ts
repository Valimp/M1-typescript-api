// Description: Main file for the server. It contains the routes and the middlewares.

// Importing express, swagger-jsdoc, dotenv, and the config file.
import express, { NextFunction, Request, Response } from 'express';
import swaggerJSDOC from 'swagger-jsdoc';
import 'dotenv/config';
import { PORT, URL } from './const/config';

// Importing the middlewares and the routes.
import { logHandler } from './middlewares/logHandler';
import { errorHandler } from './middlewares/errorHandler';
import { swaggerOptions } from './swaggerOptions';
import swaggerUi from 'swagger-ui-express';
const plantRoutes = require('./routes/trefleRoutes');

// Creating the app and the swagger specs.
const app = express();
const specs = swaggerJSDOC(swaggerOptions);

// Get request to / -> Hello World
app.get('/', (req: Request, res: Response) => {
    try {
        res.send('Hello World');
    } catch (err) {
        res.send(err);
    }
});

// Middlewares
app.use(express.json());
app.use(logHandler);
app.use(errorHandler);

// Routes
app.use(plantRoutes);

// Generate the swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Launch the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://${URL}:${PORT}/api-docs`);
});