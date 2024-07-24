import initClient from "@/utils/initClient";
import { CommandInteraction, Events, IntentsBitField } from "discord.js";
import * as process from "process";
import connectToDatabase from "@/database/connect";

const intents = new IntentsBitField();

const { Flags } = IntentsBitField;

intents.add(
    Flags.Guilds,
    Flags.GuildPresences,
    Flags.GuildMembers,
    Flags.GuildModeration,
    Flags.GuildEmojisAndStickers,
    Flags.GuildInvites,
    Flags.GuildMessages,
    Flags.GuildMessageReactions,
    Flags.GuildMessageTyping,
    Flags.DirectMessages,
    Flags.DirectMessageReactions,
    Flags.DirectMessageTyping,
);

const bot = initClient(intents);

bot.once(Events.ClientReady, async () => {
    void await connectToDatabase();
    void bot.initApplicationCommands();

    console.log('Bot started.')
});

bot.on(Events.InteractionCreate, (interaction) => {
    if (interaction.isCommand()) {
        void bot.executeCommand(interaction as CommandInteraction);
    }
});

const run = async () => {
    if (!process.env.DISCORD_TOKEN) {
        throw Error("Could not find DISCORD_TOKEN in your environment");
    }

    await bot.login(process.env.DISCORD_TOKEN);
}

void run();
