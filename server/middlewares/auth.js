module.exports.isUserAuthenticated = (req, res, next) => {
    if(req.user){
        next()
    } else {
        res.status(401).send('gotta log in first, hoss. You probably just want in my sweet sweet database..')
    }
}