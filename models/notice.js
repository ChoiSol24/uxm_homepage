const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		writer: String,
		views: { type: Number, default: 0 },
		date: { type: Date, default: Date.now() },
		numId: { type: Number },
		attachment: { type: mongoose.Schema.Types.ObjectId, ref: 'file' }, // 1
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: 'notice' }
);

module.exports = mongoose.model('notice', noticeSchema);
