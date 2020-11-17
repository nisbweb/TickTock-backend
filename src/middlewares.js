const db = require("./db")

function notFound(req, res, next) {
  res.status(404)
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`)
  next(error)
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    success: false,
    submission: false,
    error: err.message,
    // eslint-disable-next-line no-undef
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
  })
}

async function auth(req, res, next) {
  if(!req.headers.authorization){
    return res.status(401).json({
      success: false,
      error: "Authorization header missing"
    })
  }
  let auth = req.headers.authorization.split(" ")[1]
  try{
    var userDoc = await db.collection("user").doc(auth)
    var user = await userDoc.get()
  } catch(err) {
    console.error(err)
    return res.status(401).json({
      success: false,
      submission: false,
      error: "User fetch failed"
    })
  }
  if(!user.exists){
    return res.status(401).json({
      success: false,
      error: "Invalid user id"
    })
  } else {
    req.user = userDoc
    req.userData = user
    next()
  }
}

module.exports = {
  notFound,
  errorHandler,
  auth
}
