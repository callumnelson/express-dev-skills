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

export { 
  index, 
}