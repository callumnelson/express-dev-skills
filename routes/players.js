import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'

const router = Router()

// GET localhost:3000/players
router.get('/', playersCtrl.index)

router.get('/new', playersCtrl.new)

router.post('/', playersCtrl.create)

export { router }
