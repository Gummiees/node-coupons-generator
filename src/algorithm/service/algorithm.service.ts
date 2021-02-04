import commonService from '../../common/services/common.service';
import { Algorithms } from '../model/algorithm.models';

class AlgorithmService {
    private static instance: AlgorithmService;

    static getInstance(): AlgorithmService {
        if (!AlgorithmService.instance) {
            AlgorithmService.instance = new AlgorithmService();
        }
        return AlgorithmService.instance;
    }

    list(): string[] {
        return commonService.toArray(Algorithms);
    };

    getDescription(algorithmName: string): string {
        return `The algorithm '${algorithmName}' could be explained here.`;
    }

    isImplemented(algorithmName: string): boolean {
        return this.list().includes(algorithmName);
    }

    setAlgorithm(algorithmName: string): void {
        commonService.writeConfiguration(algorithmName);
    }

    getAlgorithm(): string {
        return commonService.readConfiguration();
    }
}

export default AlgorithmService.getInstance();