import db from "../../../models"
import jwt from "jsonwebtoken"

export default function(req, res) {

    const token = req.headers.authorization.split(' ')[1]
    let stickerjob = null;

    jwt.verify(token, process.env.SECRET_KEY, async(err, userData) => {
        if (err) {
            res.send("error");
        }
        if (userData) {
            stickerjob = await db.stickerjob.findAll({
                where: {
                    userId: userData.id
                }
            });
            res.json(stickerjob);
        } else {res.send("STRING")}
    })

}