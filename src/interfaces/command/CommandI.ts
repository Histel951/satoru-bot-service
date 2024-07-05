import { CommandInteraction } from "discord.js";

export interface CommandI {
    name: string
    description: string
    execute: (interaction: CommandInteraction) => void
}
