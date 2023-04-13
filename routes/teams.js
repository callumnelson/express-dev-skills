import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'

const router = Router()

// GET localhost:3000/teams
router.get('/', teamsCtrl.index)

router.get('/new', teamsCtrl.new)

router.get('/:teamId', teamsCtrl.show)

router.post('/', teamsCtrl.create)

export { router }
