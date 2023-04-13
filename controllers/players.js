import { players } from '../data/players-data.js'

import { Player } from "../models/player.js"

function index(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/index', {
      players : players,
      title : `NBA Players (${players.length})`
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newPlayer(req, res) {
  res.render('players/new')
}

function create(req, res) {
  console.log("New player:", req.body)
  Player.create(req.body)
  .then(player => {
    console.log(player)
    res.redirect('/players')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/players')
  })
}

function show(req, res) {
  console.log(req.params)
  Player.findById(req.params.playerId)
  .then(player => {
    console.log(player)
    res.render('players/show', {
      player : player
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/players')
  })
}

const deletePlayer = async (req, res) => {
  try {
    const deleted = await Player.findByIdAndDelete(req.params.playerId)
    console.log("You deleted", deleted)
  } catch(err) {
    console.log(err)
  } finally {
    res.redirect('/players')
  }
}

export { 
  index, 
  newPlayer as new,
  create,
  show,
  deletePlayer as delete
}