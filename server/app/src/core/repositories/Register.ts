import { Registered_times } from "../../data/entity/Registered_times";
import { BaseRepository } from "./Base";
import { IRepositoryParams } from "./interfaces";


export class RegisterRepository extends BaseRepository<Registered_times> {
    constructor() {
        super(Registered_times)
    }

    one(id?, options?: IRepositoryParams) {
        return this.repository.find({ ...options, where: { user_id: id }, relations: ['user'] });
    }
}