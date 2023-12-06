import { model, models, Schema } from 'mongoose'

const ProjectsSchema = new Schema({
	designTitleOne: { type: String },
	designTitleTwo: { type: String },
	designTitleThree: { type: String },
	designTitleFour: { type: String },
	designTitleFive: { type: String },
	aTitleOne: { type: String },
	aTitleTwo: { type: String },
	aTitleThree: { type: String },
	designLinkOne: { type: String },
	designLinkTwo: { type: String },
	designLinkThree: { type: String },
	designLinkFour: { type: String },
	designLinkFive: { type: String },
	aLinkOne: { type: String },
	aLinkTwo: { type: String },
	aLinkThree: { type: String },
	
})

export const Projects = models?.Projects || model('Projects', ProjectsSchema)
