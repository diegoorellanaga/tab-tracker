/* global module */
module.exports = (app) => {
	app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} your request has been heard`
    })
})
}

