export interface Game {
    id: number,
    group: string,
    home_team_en: string,
    away_team_en: string,
    home_flag: string,
    away_flag: string
}

export interface GameDetail {
    _id: string,
    away_score: number,
    away_scorers: string[],
    away_team_id: number,
    finished: boolean,
    group: string,
    home_score: number,
    home_scorers: string[],
    home_team_id: number,
    id: number,
    local_date: string,
    stadium_id: number,
    type: string,
    home_team_en: string,
    away_team_en: string,
    home_flag: string,
    away_flag: string
}

export interface Bet {
    game_id: string,
    away_score: number,
    home_score: number,
    name: string
}