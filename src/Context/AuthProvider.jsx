
import { useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googlesignin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("state captured", currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email }

                axios.post("https://job-portal-server-kappa-tan.vercel.app/jwt", user, { withCredentials: true })
                    .then(res => console.log("login", res.data))
                setLoading(false)
            }


            else {
                axios.post("https://job-portal-server-kappa-tan.vercel.app/logout", {}, { withCredentials: true })
                    .then(res => console.log("logout", res.data))
                setLoading(false)
            }

        })
        return () => unsubscribe()
    }, [])

    const authinfo = { googlesignin, createUser, loginUser, loading, user, logout }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;