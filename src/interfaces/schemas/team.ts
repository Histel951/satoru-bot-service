import { Document, Types } from "mongoose";
import { IPlayer } from "@/interfaces/schemas/player";

export interface ITeamAttributes {
    name: string
    image_url: string
    owner: Types.ObjectId | IPlayer
    ratingPoints: number
}

export interface ITeam extends Document, ITeamAttributes {}
