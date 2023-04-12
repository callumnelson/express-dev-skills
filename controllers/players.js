// import { players } from '../data/players-data.js'

import { Player } from "../models/player.js"

function index(req, res) {
  res.render('players/index', {
    players : players,
    title : `NBA Players (${players.length})`
  })
}

export { 
  index, 
}