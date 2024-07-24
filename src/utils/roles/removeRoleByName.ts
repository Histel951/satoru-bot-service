import { GuildMember } from "discord.js";
import findRoleByName from "./findRoleByName";
import deleteRole from "./remove";

export default async (member: GuildMember, name: string) => {
    const role = findRoleByName(name, member.guild.roles);

    if (role) {
        await deleteRole(member, role)
    }
}
