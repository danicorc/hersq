import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const response = {
      status: 200,
      desc: 'Exitoso'
    };
    return {response};
  }
}
