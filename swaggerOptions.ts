import path from 'path';

export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Plants API',
            version: '1.0.0',
            description: 'Plans API Information Documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            }
        ],
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')]
};
