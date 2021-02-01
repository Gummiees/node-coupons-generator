import express from 'express';
import commonService from '../../common/services/common.service';
import algorithmService from '../service/algorithm.service';

class AlgorithmMiddleware {
    private static instance: AlgorithmMiddleware;

    static getInstance() {
        if (!AlgorithmMiddleware.instance) {
            AlgorithmMiddleware.instance = new AlgorithmMiddleware();
        }
        return AlgorithmMiddleware.instance;
    }

    checkAlgorithmName(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!commonService.hasValue(req.params.algorithmName)) {
            res.status(400).send({error: `You need to specify the algorithm.`});
            return;
        }
    
        req.params.algorithmName = commonService.standarizeName(req.params.algorithmName);
        if (req.params.algorithmName.length === 0) {
            res.status(400).send({error: `You need to specify the algorithm.`});
            return;
        }

        if (!algorithmService.isImplemented(req.params.algorithmName)) {
            res.status(400).send({error: `The algorithm '${req.params.algorithmName}' is not correct.`});
            return;
        }
        next();
    }
}

export default AlgorithmMiddleware.getInstance();