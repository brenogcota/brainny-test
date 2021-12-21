import { like } from "../../utils";

export class BaseService {

    protected readonly Repository;

    constructor(Repository) {
        this.Repository = Repository;
    }

    async all(options?) {
        const repository = new this.Repository();
        return repository.all({ ...options, where: like(options.where || {}) });
    }

    async one(id?, options?) {
        const repository = new this.Repository();
        return repository.one(id, options);
    }

    async save(body) {
        const repository = new this.Repository();
        return repository.save(body);
    }

    async update(id, body) {
        const repository = new this.Repository();
        return repository.update(id, body);
    }

    async remove(id) {
        const repository = new this.Repository();
        return repository.removeById(id);
    }

    async getColumns(tableName) {
        const repository = new this.Repository();
        const columns = repository.getColumns(tableName);
    
        return columns;
    }

}