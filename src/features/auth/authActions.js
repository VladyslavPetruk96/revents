import { SIGN_OUT_USER } from "./authConstants"

export function signInUser(creds) {
    return async function(dispatch) {
        try{

        } catch (error) {
            throw error
        }
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}