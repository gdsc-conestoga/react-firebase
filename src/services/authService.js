import firebase from 'firebase'

export default class AuthService {
    static onAuthStateChanged(callback) {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            callback(user)
        })
    }

    static async LogInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);

        // AuthService.user = await new Promise((resolve, reject) => resolve({
        //     uid: '1234qwer',
        //     displayName: 'user3000'
        // }))
        // AuthService.authStateCallback(AuthService.user)
    }

    static async LogOut() {
        await firebase.auth().signOut();
        // AuthService.user = null
        // AuthService.authStateCallback(AuthService.user)
    }
}