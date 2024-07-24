import mongoose from "mongoose";
import { ITeam } from "@/interfaces/schemas/team";
import { IPlayer } from "@/interfaces/schemas/player";

export interface ITeamInviteAttributes {
    team_id: mongoose.Types.ObjectId | ITeam
    role: 1 | 2 | 3 | 4 | 5
    player_id: mongoose.Types.ObjectId | IPlayer
}
export interface ITeamInvite extends Document, ITeamInviteAttributes {}
