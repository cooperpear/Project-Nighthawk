const express = require("express")
const stickerrouter = express.Router()
const Job = require("../models/Stickerjob")
console.log("stickerjob.js loaded")

stickerrouter.post("/jobsubmit", (req, res) => {
    console.log("Route-post", req.body)
    console.log("Routes",req.body.data)

    Job.create(req.body)
        .then(result => {
            res.json(result)
        })
});
module.exports = stickerrouter;