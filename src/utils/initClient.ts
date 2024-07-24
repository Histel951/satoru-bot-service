import { BitFieldResolvable, Client, CommandInteraction, GatewayIntentsString, REST, Routes } from "discord.js";
import { ClientI } from "@/interfaces/client";
import { CommandI } from "@/interfaces/commands";
import * as process from "process";
import RegisterCommand from "@/utils/commands/auth/RegisterCommand";
import { MiddlewareT } from "@/types/commands";

export default (intents: BitFieldResolvable<GatewayIntentsString, number>): ClientI => {
    const client: ClientI = new Client({ intents }) as ClientI;

    client.applicationCommands = new Map<string, CommandI>();

    client.executeCommand = async (interaction: CommandInteraction) => {
        if (!interaction.commandName) {
            return;
        }

        const command = client.applicationCommands.get(interaction.commandName);

        if (!command?.execute) {
            return;
        }

        let middlewareData = {};

        const handleMiddleware = async (middleware: MiddlewareT) => {
            const middlewareResponse = await middleware(interaction);
            if (!middlewareResponse.success) {
                await interaction.reply(middlewareResponse.options);
                return false;
            }
            middlewareData = {
                ...middlewareData,
                ...middlewareResponse.data,
            };
            return true;
        };

        if (typeof command.middleware === 'function') {
            const isSuccess = await handleMiddleware(command.middleware);

            if (!isSuccess) {
                return;
            }
        }

        if (Array.isArray(command.middleware)) {
            const middlewareResults = await Promise.all(command.middleware.map(handleMiddleware));

            if (middlewareResults.includes(false)) {
                return;
            }
        }

        await command.execute(interaction, middlewareData);
    };

    const commands = [
        new RegisterCommand('register', 'Зарегистрироваться на сервере как игрок')
    ];

    commands.forEach(command => {
        client.applicationCommands.set(command.getName(), command);
    });

    client.initApplicationCommands = async () => {
        const rest = new REST({ version: '10' }).setToken(process.env['DISCORD_TOKEN']!);

        const body = [];
        client.applicationCommands.forEach(command => {
            body.push({
                name: command.name,
                description: command.description,
            });
        });

        await rest.put(`/applications/${process.env['DISCORD_TOKEN']!}/commands`, { body })
    }

    return client;
}
