import { CommandInteraction, SlashCommandStringOption } from "discord.js";
import { MiddlewareResponseI } from "@/interfaces/commands";

export type CommandOptionSetCallbackT = (option: SlashCommandStringOption) => SlashCommandStringOption;

export type MiddlewareT<MiddlewareDataT extends object = {}> = (Interaction: CommandInteraction) => Promise<MiddlewareResponseI<MiddlewareDataT>>;
