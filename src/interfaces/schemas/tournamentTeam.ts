import { Types } from "mongoose";
import { ITournament } from "@/interfaces/schemas/tournament";
import { ITeam } from "@/interfaces/schemas/team";

export interface ITournamentTeamAttributes {
    tournament: Types.ObjectId | ITournament
    team: Types.ObjectId | ITeam
}

export interface ITournamentTeam extends Document, ITournamentTeamAttributes {}
