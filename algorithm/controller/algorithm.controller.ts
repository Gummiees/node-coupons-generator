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

    getAlgorithmDescription(req: express.Request, res: express.Response) {
        const algorithm = algorithmService.getDescription(req.params.algorithmName);
        res.status(200).send(algorithm);
    }

    setAlgorithm(req: express.Request, res: express.Response) {
        try {
        algorithmService.setAlgorithm(req.params.algorithmName);
        res.status(200).send();
        } catch (e) {
            res.status(405).send("Unexpected error while writing the configuration file.");
        }
    }

    getAlgorithm(req: express.Request, res: express.Response) {
        const algorithm: string = algorithmService.getAlgorithm();
        res.status(200).send(algorithm);
    }
}

export default AlgorithmController.getInstance();