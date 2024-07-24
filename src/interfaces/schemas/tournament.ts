export interface ITournamentAttributes {
    name: string
    description: string
    imageUrl: string
    teamCount: number
    prizePull: number
    entryFee: number
    maxRank: number
}

export interface ITournament extends Document, ITournamentAttributes {}
