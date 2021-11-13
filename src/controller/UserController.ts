import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UserController {

    async save(user:User) {
        const userSaved = await getManager().save(user);
        return userSaved;
    }

    async getAll() {
        const users = await getManager().find(User);
        return users;
    }

    async getById(id: number) {
        const user = await getManager().findOne(User, id);
        return user;
    }

    async getLaunchByUser(id: number) {
        const user = await getManager().findOne(User, id, {
            relations: ['launch']
        });
        return user.launch;
    }
}