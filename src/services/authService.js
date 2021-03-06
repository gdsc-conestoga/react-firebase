import firebase from 'firebase'

export default class AuthService {
    static onAuthStateChanged(callback) {
        // AuthService.authStateCallback = callback
        // callback(AuthService.user)
        firebase.auth().onAuthStateChanged(callback)
    }

    static async LogInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithRedirect(provider)

        // AuthService.user = await new Promise((resolve, reject) => resolve({
        //     uid: '1234qwer',
        //     displayName: 'user3000'
        // }))
        // AuthService.authStateCallback(AuthService.user)
    }

    static async LogOut() {
        await firebase.auth().signOut()
        // AuthService.user = null
        // AuthService.authStateCallback(AuthService.user)
    }
}