import { Schema } from "mongoose";
import { ITournament } from "@/interfaces/schemas/tournament";

export default new Schema<ITournament>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    teamCount: { type: Number, required: true },
    prizePull: { type: Number, required: true },
    entryFee: { type: Number, required: true },
    maxRank: { type: Number, default: null },
});
