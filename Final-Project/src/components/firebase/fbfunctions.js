import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./fb";

export  const isUserConnected = (setUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
}
export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
export const logout = ()=> {
    return (
        signOut(auth),
        alert("Sesión Cerrada")
    )

}