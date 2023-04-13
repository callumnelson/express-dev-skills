import { teams } from '../data/teams-data.js'
import { players } from '../data/players-data.js'

import { Team } from '../models/team.js'
import { Player } from '../models/player.js'

function index(req, res) {
  Team.find({})
  .then(teams => {
    res.render('teams/index', {
      teams : teams,
      title : `NBA Teams (${teams.length})`
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Team.findById(req.params.teamId)
  .then(team => {
    res.render('teams/show', {
      team : team,
      players : [],
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/teams')
  })
}

function newTeam(req, res) {
  res.render('teams/new')
}

function create(req, res) {
  console.log("New team:", req.body)
  Team.create(req.body)
  .then(team => {
    console.log(team)
    res.redirect('/teams')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/teams')
  })
}

export { 
  index, 
  show,
  newTeam as new,
  create
}