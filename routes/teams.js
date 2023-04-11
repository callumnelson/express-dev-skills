import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'

const router = Router()

// GET localhost:3000/users
router.get('/', teamsCtrl.index)

export { router }
