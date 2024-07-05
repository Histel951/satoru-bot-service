import initClient from "@/utils/initClient";
import { CommandInteraction, Events, IntentsBitField } from "discord.js";
import * as process from "process";

const intents = new IntentsBitField();
intents.add(IntentsBitField.Flags.GuildPresences, IntentsBitField.Flags.GuildMembers)

const bot = initClient(intents);

bot.once(Events.ClientReady, () => {
    void bot.initApplicationCommands();

    console.log('Bot started.')
});

bot.on(Events.InteractionCreate, (interaction) => {
    if (interaction.isCommand()) {
        bot.executeCommand(interaction as CommandInteraction);
    }
});

async function run() {
    if (!process.env.DISCORD_TOKEN) {
        throw Error("Could not find DISCORD_TOKEN in your environment");
    }

    await bot.login(process.env.DISCORD_TOKEN);
}

void run();
