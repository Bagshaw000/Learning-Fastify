import Fastify, {FastifyInstance} from 'fastify'
import { secondRouter, fisrtRouter } from './src/routes/testRoutes';

const createServer = (): FastifyInstance => {
    const app = Fastify();

    //This register your routes 
    app.register(fisrtRouter);
    app.register(secondRouter);
    
    return app;
}

export default createServer;