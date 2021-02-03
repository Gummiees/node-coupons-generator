import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import algorithmController from './controller/algorithm.controller';
import algorithmMiddleware from './middleware/algorithm.middleware';

export class AlgorithmRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'algorithm');
    }

    configureRoutes() {
        this.app.route(`/${this.getControllerName()}/list`)
        .get(algorithmController.list);
        
        this.app.route(`/${this.getControllerName()}/getDefinition/:algorithmName`)
            .all(algorithmMiddleware.checkAlgorithmName)
            .get(algorithmController.getAlgorithmDescription);
        
            this.app.route(`/${this.getControllerName()}/setAlgorithm/:algorithmName`)
                .all(algorithmMiddleware.checkAlgorithmName)
                .get(algorithmController.setAlgorithm);
        
                this.app.route(`/${this.getControllerName()}/getAlgorithm`)
                .all(algorithmMiddleware.checkAlgorithm)
                .get(algorithmController.getAlgorithm);

        return this.app;
    }
}