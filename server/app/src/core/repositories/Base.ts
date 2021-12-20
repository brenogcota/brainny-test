import { getRepository, Repository } from "typeorm";
import { IRepositoryParams } from "./interfaces";


export class BaseRepository<T> extends Repository<T> {

    protected readonly repository;
    
    constructor(Entity){
        super()
        this.repository = getRepository(Entity);
    }

    all(options?: IRepositoryParams) {
        return this.repository.find(options);
    }

    one(id?, options?: IRepositoryParams) {
        return this.repository.findOne(id, options);
    }

    save(body) {
        return this.repository.save(body);
    }

    async update(id, body) {
        const data = await this.repository.findOne({
            where: { id }
        });
          
        return this.repository.save({
            ...data,
            ...body
        });
    }

    async removeById(id) {
        let toRemove = await this.repository.findOne(id);
        this.repository.remove(toRemove);
    }

    async getColumns(tableName) {
        let query = await this.repository.query(`SELECT DISTINCT column_name, table_name, column_default
                                                FROM INFORMATION_SCHEMA.COLUMNS
                                                WHERE table_schema = 'public' AND is_nullable = 'NO' AND table_name = '${tableName}'`);

        query = query.filter(query => query.column_default == null);
        if(query.length < 1) throw `table "${tableName}" does not exist in database`; 
        return query;
    }

}