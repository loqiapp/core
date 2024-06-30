import Wazo from "@wazo/sdk"

// Fonction pour se connecter
async function authenticate() {
    try {
        const username = "hi@loqi.app"
        const password = "3c6uXryFu87&ZZDvxe4c"
        const response = await Wazo.Auth.logIn(username, password)

        const token = response.token
        console.log("Authentification réussie, token:", token)

        // Vous pouvez maintenant utiliser le token pour faire des requêtes authentifiées
    } catch (error) {
        console.error("Erreur d'authentification:", error)
    }
}

// Appeler la fonction d'authentification
authenticate()
