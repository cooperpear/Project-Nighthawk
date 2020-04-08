import db from "../../../models"
import Auth from '../../../util/auth'  

export default async function (req, res) {
	// Only people who are authenticated can use this route
	Auth(req, res);

	switch (req.method) {
		case 'POST':
			const stickerjob = await db.stickerjob.create({
				width: req.body.width,
				height: req.body.height,
				shape: req.body.shape,
				quantity: req.body.quantity,
				totalCost: req.body.totalCost,
				userId: req.auth.id
			});
			console.log("STICKERJOB", stickerjob)
			res.json(stickerjob);
			break;
		case 'GET':
		default:
			const jobs = await db.stickerjob.findAll({
				where: {
					userId: req.auth.id
				}
			});
			res.json(jobs);
			break;
	}
}