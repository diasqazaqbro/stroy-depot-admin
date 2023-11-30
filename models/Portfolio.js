import { model, models, Schema } from 'mongoose'

const PortfolioSchema = new Schema({
    title: { type: String },
    supTitle: { type: String },
	desc: { type: String },
},{
  timestamps: true,})

export const Portfolio = models?.Portfolio || model('Portfolio', PortfolioSchema)
