import { BitFieldResolvable, Client, CommandInteraction, GatewayIntentsString, REST } from "discord.js";
import { ClientI } from "@/interfaces/ClientI";
import { CommandI } from "@/interfaces/command/CommandI";
import * as process from "process";

export default (intents: BitFieldResolvable<GatewayIntentsString, number>): ClientI => {
    const client: ClientI = new Client({ intents }) as ClientI;

    client.applicationCommands = new Map<string, CommandI>();

    client.executeCommand = (interaction: CommandInteraction) => {
        if (!interaction.commandName) {
            return;
        }

        const command = client.applicationCommands.get(interaction.commandName);

        if (command) {
            command.execute(interaction);
        }
    }

    client.initApplicationCommands = async () => {
        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

        const body = [];
        client.applicationCommands.forEach((command) => {
            body.push({
                name: command.name,
                description: command.description,
            });
        });

        await rest.put(`/applications/${process.env.DISCORD_TOKEN!}/commands`, { body })
    }

    return client;
}
