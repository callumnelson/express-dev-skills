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
// More complex version with nested .then
// function show(req, res) {

//   Team.findById(req.params.teamId)
//   .then(team => {
//     Player.find({ teamId : team.teamId})
//     .then(players => {
//       console.log(players)
//       res.render('teams/show', {
//         team : team,
//         players : players,
//       })
//     })
//     .catch(error => {
//       console.log(error)
//       res.redirect('/teams')
//     })
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/teams')
//   })
// }

const show = async (req,res) => {
  try{
    const team = await Team.findById(req.params.teamId)
    const players = await Player.find({ teamId: team.teamId })
    res.render('teams/show', { team, players })
  } catch(err) {
    console.log(err)
    res.redirect('/teams')
  }
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

const deleteTeam = async (req, res) => {
  try {
    const deleted = await Team.findByIdAndDelete(req.params.teamId)
    console.log("You deleted", deleted)
  } catch(err) {
    console.log(err)
  } finally {
    res.redirect('/teams')
  }
}

export { 
  index, 
  show,
  newTeam as new,
  create,
  deleteTeam as delete
}