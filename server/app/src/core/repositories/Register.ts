import { Registered_times } from "../../data/entity/Registered_times";
import { BaseRepository } from "./Base";


export class RegisterRepository extends BaseRepository<Registered_times> {
    constructor() {
        super(Registered_times)
    }
}