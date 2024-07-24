import { Schema, Types } from "mongoose";
import { ITournamentTeam } from "@/interfaces/schemas/tournamentTeam";

export default new Schema<ITournamentTeam>({
    tournament: {
        type: Types.ObjectId,
        ref: 'Tournament',
    },
    team: {
        type: Types.ObjectId,
        ref: 'Team',
    },
});
