
import fs from 'fs';
class CommonService {
    private static instance: CommonService;
    private static file: string = `${__dirname}/../../assets/configuration.json`;

    static getInstance(): CommonService {
        if (!CommonService.instance) {
            CommonService.instance = new CommonService();
        }
        return CommonService.instance;
    }

    toArray(enumVar: any): string[] {
        return Object.keys(enumVar).map(key => enumVar[key]).filter(val => typeof val !== 'number').map(val => this.standarizeName(val));
    }

    standarizeName(name: string): string {
        if (!this.hasValue(name)) {
            throw `You didn't specify a value for the function 'standarizeName'.`;
        }
        return name.replace(" ", "").toLowerCase();
    }

    hasValue(text: string): boolean {
        return text !== null && text !== undefined;
    }

    writeConfiguration(text: string): void {
        fs.writeFileSync(CommonService.file, text);
    }

    readConfiguration(): string {
        return fs.readFileSync(CommonService.file,'utf8');
    }
}

export default CommonService.getInstance();