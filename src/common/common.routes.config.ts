import express from 'express';
export abstract class CommonRoutesConfig {
    protected app: express.Application;
    private controllerName: string;

    constructor(app: express.Application, controllerName: string) {
        this.app = app;
        this.controllerName = controllerName;
        this.configureRoutes();
    }
    getControllerName() {
        return this.controllerName;
    }

    abstract configureRoutes(): express.Application;
}