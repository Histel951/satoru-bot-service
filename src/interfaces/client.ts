import { Client, CommandInteraction } from "discord.js";
import { CommandI } from "@/interfaces/commands";

export interface ClientI extends Client {
    applicationCommands: Map<string, CommandI>

    initApplicationCommands: () => void

    executeCommand: (interaction: CommandInteraction) => void
    executeInteraction: (message: string) => void
}
