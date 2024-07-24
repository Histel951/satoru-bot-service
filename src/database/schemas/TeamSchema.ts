import { Schema, Types } from "mongoose";
import { ITeam } from "@/interfaces/schemas/team";

export default new Schema<ITeam>({
    name: String,
    image_url: { type: String, default: null },
    owner: { type: Types.ObjectId, ref: 'Player' },
    ratingPoints: { type: Number, default: 0},
});
