import { CommandInteraction, InteractionReplyOptions } from "discord.js";
import { MiddlewareResponseI } from "@/interfaces/commands";

export default class MiddlewareResponse implements MiddlewareResponseI {

    public readonly success: boolean;

    public readonly interaction: CommandInteraction;

    public readonly options: InteractionReplyOptions;

    public readonly data: {};

    constructor(success, interaction, options, data = {}) {
        this.success = success;
        this.interaction = interaction;
        this.options = options;
        this.data = data;
    }
}
