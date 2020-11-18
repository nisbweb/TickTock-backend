
var admin = require("firebase-admin")

var serviceAccount = require("../ticktock-9ec1c-firebase-adminsdk-305sc-1b82486d16.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dream-code-e5b06.firebaseio.com"
})

const db = admin.firestore()

module.exports = db
