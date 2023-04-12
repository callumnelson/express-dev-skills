import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamId: Number,
    abbreviation: String,
    teamName: String,
    simpleName: String,
    location: String
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team
}