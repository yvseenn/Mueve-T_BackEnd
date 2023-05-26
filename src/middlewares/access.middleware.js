const { getUserFromToken } = require("../utils/SecretToken");

async function isUser(req, res, next) {
  const user = await getUserFromToken(req.query.token);
  if (user && user.role === "user") {
    next();
  } else {
    return res.status(403).json({msg: 'acceso denegado'});
  }
}

async function isAdmin(req, res, next) {
  const user = await getUserFromToken(req.query.token);
  console.log(user);
  if (user && user.role === "admin") {
    next();
  } else {
    return res.status(403).json({msg: 'acceso denegado'});
  }
}

async function isRoot(req, res, next) {
  const user = await getUserFromToken(req.query.token);
  if (user && user.role === "root") {
    next();
  } else {
    return res.status(403).json({msg: 'acceso denegado'});
  }
}

module.exports = { isUser, isAdmin, isRoot };
