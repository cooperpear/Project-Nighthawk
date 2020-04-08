import Auth from '../../../util/auth'

export default async function(req, res) {
    Auth(req, res);
    console.log(req.auth)
    res.json({sucess: true})

}