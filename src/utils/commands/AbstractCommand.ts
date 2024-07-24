import { CommandI } from "@/interfaces/commands";

export default abstract class AbstractCommand<MiddlewareData extends object = {}> implements CommandI<MiddlewareData> {

    private readonly name: string;

    private readonly description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }
}