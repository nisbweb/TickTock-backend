
var admin = require("firebase-admin")

var serviceAccount = require("../ticktock-9ec1c-firebase-adminsdk-305sc-1b82486d16.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ticktock-9ec1c.firebaseio.com"
})

const db = admin.firestore()

module.exports = db
