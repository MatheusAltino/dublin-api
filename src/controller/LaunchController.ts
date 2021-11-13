import { getManager } from "typeorm";
import { Launch } from "../entity/Launch";

export class LaunchController {

    async save(launch: Launch) {
        const launchSaved = await getManager().save(launch);
        return launchSaved;
    }
}