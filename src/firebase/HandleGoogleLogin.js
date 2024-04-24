import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from '../screens/UserContext';
import firebase from "./config"; 

function HandleGoogleLogin() {
    
    const { loginUser } = useUser();
    const navigate = useNavigate();

    function handleGoogleLogin() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("Token",token)

                const  user = {
                    email: result.user.email,
                    profileimage: result.user.photoURL,
                    name: result.user.displayName
                }
                
                loginUser(user);
                
                navigate('/dashboard', {
                    state: {
                        user
                    }
                });
            }).catch((error) => {
                console.log("ERROR", error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return handleGoogleLogin;
}

export default HandleGoogleLogin;
