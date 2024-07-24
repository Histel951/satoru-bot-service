import mongoose from "mongoose";
import TeamSchema from "./schemas/TeamSchema";
import PlayerSchema from "./schemas/PlayerSchema";
import TournamentSchema from "./schemas/TournamentSchema";
import TeamInviteSchema from "./schemas/TeamInviteSchema";
import TournamentTeamsSchema from "./schemas/TournamentTeamSchema";

export const Team = mongoose.connection.model('Team', TeamSchema);
export const Player = mongoose.connection.model('Player', PlayerSchema);
export const TeamInvite = mongoose.connection.model('TeamInvite', TeamInviteSchema);
export const Tournament = mongoose.connection.model('Tournament', TournamentSchema);
export const TournamentTeams = mongoose.connection.model('TournamentTeams', TournamentTeamsSchema);
