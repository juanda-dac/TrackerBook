export function userNoExists(req, res, next) {
    if(req.session.userId) return res.redirect("/");
    return next();
}

export function userExists(req, res, next) {
    if(req.session.userId) return next();
    return res.redirect("/")
}