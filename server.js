// import npm packages
import "dotenv/config.js"
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import methodOverride from 'method-override'
// connect to the database with Mongoose
import './config/database.js'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as teamsRouter } from './routes/teams.js'
import { router as playersRouter } from './routes/players.js'

// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')

// basic middleware
//This logs the request
app.use(logger('dev'))
//This jsonifies the request??
app.use(express.json())
//This puts data from the request onto the body, which is why we need to run it every time
app.use(express.urlencoded({ extended: false }))
//This creates paths for each of the files in public
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// add additional methods through override
app.use(methodOverride('_method'))

// mount imported routes
app.use('/', indexRouter)
app.use('/teams', teamsRouter)
app.use('/players', playersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
