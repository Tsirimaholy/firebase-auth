import {secret} from "../secret"

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} = secret;

export const config = {
    firebaseConfig: {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId
    }
}