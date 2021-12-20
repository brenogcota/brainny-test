import { Users } from "../../data/entity/Users";
import { BaseRepository } from "./Base";

export class UserRepository extends BaseRepository<Users> {

    constructor (){
        super(Users);
    }

    async findByEmail(email) {
        const user = await this.repository.findOne({ where: { email }});

        return user;
    }

    async findBy(field, value) {
        const user = await this.repository.findOne({ where: { [field]: value }});

        return user;
    }

}