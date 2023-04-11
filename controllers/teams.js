import { teams } from '../data/team-data.js'

function index(req, res) {
  res.render('teams/index', {
    teams : teams,
    title : 'NBA Teams'
  })
}

export { 
  index, 
}