import { model, models, Schema } from 'mongoose'

const FooterSchema = new Schema({
	address: {type: String},
	workTime: {type: String},
	holiday: {type: String},
	clientNumber: {type: String},
	clientEmail: {type: String},
	partnerNumber: {type: String},
	partnerEmail: {type: String},
})

export const Footer = models?.Footer || model('Footer', FooterSchema)
