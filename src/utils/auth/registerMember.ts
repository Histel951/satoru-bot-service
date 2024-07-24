import { BaseInteraction, Snowflake } from "discord.js";
import { RolesEnum } from "@/enums/RolesEnum";
import addRankRole from "@/utils/roles/addRankRole";
import addRoleByName from "@/utils/roles/addRoleByName";
import removeRoleByName from "@/utils/roles/removeRoleByName";

export default async (interaction: BaseInteraction, discordId: Snowflake, rank: number): Promise<void> => {
    const member = await interaction.guild?.members.fetch(discordId);

    if (member) {
        await addRankRole(member, rank);
        await addRoleByName(member, RolesEnum.Verified);
        await removeRoleByName(member, RolesEnum.UnVerified);
    }
}
