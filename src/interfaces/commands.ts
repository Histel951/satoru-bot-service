import { CommandInteraction, InteractionReplyOptions } from "discord.js";
import { CommandOptionSetCallbackT, MiddlewareT } from "@/types/commands";

export interface MiddlewareResponseI<DataT extends object = {}> {
    success: boolean
    interaction: CommandInteraction
    options: InteractionReplyOptions
    data: DataT
}

export interface CommandI<MiddlewareDataT extends object = {}> {
    name: string
    description: string
    execute?: (interaction: CommandInteraction, middlewareData: MiddlewareDataT) => void
    middleware?: MiddlewareT<MiddlewareDataT> | MiddlewareT<MiddlewareDataT>[]
    getName: () => string
    getDescription: () => string
    getOptions?: () => CommandOptionSetCallbackT[]
}