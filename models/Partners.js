import { model, models, Schema } from 'mongoose'

const PartnersSchema = new Schema({
    accent: { type: String },
    title: { type: String },
    desc: { type: String },
    
})

export const Partners = models?.Partners || model('Partners', PartnersSchema)
