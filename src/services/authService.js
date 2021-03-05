export default class AuthService {
    static onAuthStateChanged(callback) {
        AuthService.authStateCallback = callback
        callback(AuthService.user)
    }

    static async LogInWithGoogle() {
        AuthService.user = await new Promise((resolve, reject) => resolve({
            uid: '1234qwer',
            displayName: 'user3000'
        }))
        AuthService.authStateCallback(AuthService.user)
    }

    static async LogOut() {
        AuthService.user = null
        AuthService.authStateCallback(AuthService.user)
    }
}