import bcrypt from 'bcrypt'
import db from "../../../models"

export default async function (req, res) {

    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await db.user.create({
        company: req.body.company,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        password: hash,

    });
    console.log("this is error number message", user.errno)

    if (user.errno === 1062) {
        user = {
            errno: 1062,
            errormessage: "Email already exists"
        }
    }
    res.end(JSON.stringify(user));
}