import { teams } from '../data/teams-data.js'

function index(req, res) {
  res.render('teams/index', {
    teams : teams,
    title : `NBA Teams (${teams.length})`
  })
}

export { 
  index, 
}