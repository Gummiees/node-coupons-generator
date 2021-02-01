import express from 'express';

class CommonMiddleware {
    private static instance: CommonMiddleware;

    static getInstance() {
        if (!CommonMiddleware.instance) {
            CommonMiddleware.instance = new CommonMiddleware();
        }
        return CommonMiddleware.instance;
    }
    processErrors(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(400).send({error: `There was an error: `});
    }
}

export default CommonMiddleware.getInstance();