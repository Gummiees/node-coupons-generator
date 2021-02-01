import express from 'express';
import debug from 'debug';
import algorithmService from '../service/algorithm.service';

const log: debug.IDebugger = debug('app:algorithms-controller');

class AlgorithmController {
    private static instance: AlgorithmController;

    // this will be a controller singleton (same pattern as before)
    static getInstance(): AlgorithmController {
        if (!AlgorithmController.instance) {
            AlgorithmController.instance = new AlgorithmController();
        }
        return AlgorithmController.instance;
    }

    list(req: express.Request, res: express.Response) {
        const algorithms = algorithmService.list();
        res.status(200).send(algorithms);
    }

    getAlgorithmById(req: express.Request, res: express.Response) {
        const algorithm = algorithmService.getById(req.params.algorithmName);
        res.status(200).send(algorithm);
    }
}

export default AlgorithmController.getInstance();