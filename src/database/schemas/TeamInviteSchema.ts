import { Schema, Types } from "mongoose";
import { ITeamInvite } from "@/interfaces/schemas/teamInvite";

export default new Schema<ITeamInvite>({
    team_id: {
        type: Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    role: { type: Number, required: true },
    player_id: {
        type: Types.ObjectId,
        ref: 'Player',
        required: true,
    }
});
