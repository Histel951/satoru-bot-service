import AbstractCommand from "@/utils/commands/AbstractCommand";
import { CommandInteraction } from "discord.js";
import { Player } from "@/database/models";
import rcpRequest from "@/utils/rabbit-mq/rcpRequest";
import registerMember from "@/utils/auth/registerMember";
import { RegisterMemberQueueMessageT, RegisterMemberQueueT } from "@/types/queues";
import MiddlewareResponse from "@/utils/commands/MiddlewareResponse";

export default class RegisterCommand extends AbstractCommand<{ dotaId: number|string }> {

    async execute(interaction: CommandInteraction, { dotaId }) {
        try {
            const response = await rcpRequest<RegisterMemberQueueT, RegisterMemberQueueMessageT>('registerMember', {
                discordId: interaction.user.id,
                dotaId,
            });

            await registerMember(interaction, interaction.user.id, response.rank);
        } catch (error) {
            console.error("An error occurred:", error);

            return await interaction.reply({ content: "An error occurred while processing your request.", ephemeral: true });
        }

        return interaction.reply({
            ephemeral: true,
            content: 'Вы успешно зарегистрировались!'
        });
    }

    async middleware(interaction: CommandInteraction): Promise<MiddlewareResponse> {
        const player = await Player.findOne({
            discordId: interaction.user.id
        }).exec();

        if (player) {
            return new MiddlewareResponse(false, interaction, {
                content: `Вы уже зарегистрированы как: ${player.name}`,
                ephemeral: true,
            });
        }

        const options = interaction.options;
        const dotaId = options.get('dota-id')?.value;

        if (!dotaId) {
            return new MiddlewareResponse(false, interaction, {
                content: `Неверное значение id.`,
                ephemeral: true,
            });
        }

        return new MiddlewareResponse(true, interaction, {}, { dotaId });
    }
}
