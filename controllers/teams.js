import { teams } from '../data/teams-data.js'
import { players } from '../data/players-data.js'

import { Team } from '../models/team.js'
import { Player } from '../models/player.js'

function index(req, res) {
  res.render('teams/index', {
    teams : teams,
    title : `NBA Teams (${teams.length})`
  })
}

function oneTeam(req, res) {
  let teamId = +req.params.teamId
  let team = teams.filter(team => team.teamId === teamId)[0]
  let teamPlayers = players.filter(player => player.teamId === teamId)

  res.render('teams/oneTeam', {
    team : team,
    title : team.teamName,
    players : teamPlayers,
  })
}

export { 
  index, 
  oneTeam
}