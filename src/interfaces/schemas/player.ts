import { Document, Types } from "mongoose";
import { ITeam } from "@/interfaces/schemas/team";

export interface IPlayerAttributes {
    discordId: string
    team: Types.ObjectId | ITeam | null
    steamAccountId: string
    name: string
    lastMatchDate: number | null
    rank: number | null
    leaderboardRank: number | null
    position: number | null
}

export interface IPlayer extends Document, IPlayerAttributes {}
