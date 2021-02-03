import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import couponController from './controller/coupon.controller';
import algorithmMiddleware from '../algorithm/middleware/algorithm.middleware';
import couponMiddleware from './middleware/coupon.middleware';
import algorithmController from '../algorithm/controller/algorithm.controller';

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
            .get(algorithmController.setAlgorithm)
            .get(couponController.getCouponsByAlgorithm);
        
        this.app.route(`/${this.getControllerName()}/:amount`)
            .all(couponMiddleware.checkAmount)
            .all(algorithmMiddleware.checkAlgorithm)
            .get(couponController.getCoupons);

        return this.app;
    }
}