import express from 'express';
import commonService from '../../common/services/common.service';
   
class CouponMiddleware {
    private static instance: CouponMiddleware;

    static getInstance() {
        if (!CouponMiddleware.instance) {
            CouponMiddleware.instance = new CouponMiddleware();
        }
        return CouponMiddleware.instance;
    } 

    checkAmount(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!commonService.hasValue(req.params.amount)) {
            res.status(400).send({error: `You need to specify an amount.`});
            return;
        } 
        if (isNaN(+req.params.amount)) {
            res.status(400).send({error: `The amount has to be a number.`});
            return;
        }
        next();
    }
}
   
export default CouponMiddleware.getInstance();