import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import couponController from './controller/coupon.controller';
import algorithmMiddleware from '../algorithm/middleware/algorithm.middleware';
import couponMiddleware from './middleware/coupon.middleware';

export class CouponsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'coupon');
    }

    configureRoutes() {
        this.app.route(`/${this.getControllerName()}`)
        .get(couponController.list);

        
        this.app.route(`/${this.getControllerName()}/:algorithmName/:amount`)
            .all(algorithmMiddleware.checkAlgorithmName)
            .all(couponMiddleware.checkAmount)
            .get(couponController.getCouponsByAlgorithm);

        return this.app;
    }
}