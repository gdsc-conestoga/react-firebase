const functions = require("firebase-functions");

exports.onMessageAdded = functions.firestore.document('messages/{messageId}').onCreate((snap, context) => {
    snap.ref.update({
        timestamp: new Date().getTime()
    })
})