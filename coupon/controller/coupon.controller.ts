import express from 'express';
import debug from 'debug';
import couponsService from '../service/coupon.service';

const log: debug.IDebugger = debug('app:algorithms-controller');

class CouponsController {
    private static instance: CouponsController;

    // this will be a controller singleton (same pattern as before)
    static getInstance(): CouponsController {
        if (!CouponsController.instance) {
            CouponsController.instance = new CouponsController();
        }
        return CouponsController.instance;
    }

    list(req: express.Request, res: express.Response) {
        const coupons = couponsService.list();
        res.status(200).send(coupons);
    }

    getCouponsByAlgorithm(req: express.Request, res: express.Response) {
        const algorithm = couponsService.getCoupons(req.params.algorithmName, req.params.amount);
        res.status(200).send(algorithm);
    }
}

export default CouponsController.getInstance();