const functions = require("firebase-functions");

exports.onMessageCreate = functions.firestore.document('messages/{messageId}').onCreate((snap, context) => {
    return snap.ref.update({
        timestamp: new Date().getTime()
    })
})