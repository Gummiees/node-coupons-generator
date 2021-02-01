import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import algorithmController from './controller/algorithm.controller';
import algorithmMiddleware from './middleware/algorithm.middleware';

export class AlgorithmRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'algorithm');
    }

    configureRoutes() {
        this.app.route(`/${this.getControllerName()}`)
        .get(algorithmController.list);

        
        this.app.route(`/${this.getControllerName()}/:algorithmName`)
            .all(algorithmMiddleware.checkAlgorithmName)
            .get(algorithmController.getAlgorithmById);

        return this.app;
    }
}