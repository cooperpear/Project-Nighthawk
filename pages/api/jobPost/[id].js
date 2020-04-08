import db from "../../../models"
import Auth from '../../../util/auth'

export default async function (req, res) {
    Auth(req, res);

    switch (req.method) {
        case 'PUT':
            const jobsPut = await db.stickerjob.update(
                {
                    width: req.body.width,
                    height: req.body.height,
                    shape: req.body.shape,
                    quantity: req.body.quantity,
                    totalCost: req.body.totalCost,
                },
                {
                    where: {
                        id: req.query.id,
                        userId: req.auth.id
                    }
                }
            );
            res.json(jobsPut);
            break;
            
        case 'DELETE':
            const jobsDelete = await db.stickerjob.destroy({
				where: {
                    id: req.query.id,
					userId: req.auth.id
				}
			});
			res.json(jobsDelete);
            break;
        case 'GET':
        default:
            const jobs = await db.stickerjob.findOne({
				where: {
                    id: req.query.id,
					userId: req.auth.id
				}
			});
			res.json(jobs);
            break;
    }
}