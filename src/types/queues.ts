import { DotaId } from "@/types/dota";
import { Snowflake } from "discord.js";

export type RegisterMemberQueueT = {
    discordId: string,
    rank: number
};

export type RegisterMemberQueueMessageT = {
    discordId: Snowflake,
    dotaId: DotaId,
}
