import { teams } from '../data/teams-data.js'

function index(req, res) {
  res.render('teams/index', {
    teams : teams,
    title : `NBA Teams (${teams.length})`
  })
}

function oneTeam(req, res) {
  let teamId = +req.params.teamId
  const team = teams.filter(team => team.teamId === teamId)[0]

  res.render('teams/oneTeam', {
    team : team,
    title : team.teamName
  })
}

export { 
  index, 
  oneTeam
}