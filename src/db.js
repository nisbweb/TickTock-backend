
var admin = require("firebase-admin")

var serviceAccount = require("../dream-code-e5b06-firebase-adminsdk-da5cd-d91a2e715a.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dream-code-e5b06.firebaseio.com"
})

const db = admin.firestore()

module.exports = db
