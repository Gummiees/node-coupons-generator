import { CRUD } from '../../common/crud.interface';
import commonService from '../../common/services/common.service';
import { Algorithms } from '../model/algorithm.models';

class AlgorithmService implements CRUD {
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

    getById(algorithmName: string): string {
        return `The algorithm '${algorithmName}' could be explained here.`;
    }

    isImplemented(algorithmName: string): boolean {
        return this.list().includes(algorithmName);
    }
}

export default AlgorithmService.getInstance();