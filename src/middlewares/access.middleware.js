const { getUserFromToken } = require("../utils/SecretToken");

async function  isUser (req, res, next) {
    const user = await getUserFromToken(req.params.token);
    return (user && user.role === "user") 
}


async function isAdmin (req, res, next) {
    const user = await getUserFromToken(req.params.token);
    return (user && user.role === "admin") 
}

async function isRoot(req, res, next) {
    const user = await getUserFromToken(req.params.token);
    return (user && user.role === "root") 
}

module.exports = {isUser, isAdmin, isRoot}