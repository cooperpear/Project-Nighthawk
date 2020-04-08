import db from "../../../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {

    switch (req.method) {
        case 'POST':
            const user = await db.user.findOne({
                where: {
                    email: req.body.email,
                }
            });

            const result = await bcrypt.compare(req.body.password, user.password)
            if (result) {
                const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY)
                res.json({
                    id: user.id,
                    email: user.email,
                    token
                })
            } else {
                res.end("login failed")
            }
            break;
            
        default:
            break;
    }

}