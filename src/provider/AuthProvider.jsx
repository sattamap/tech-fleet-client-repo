import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    
    
    const createUser = (name, email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Add the user's first name and last name to their profile
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: `${name}`,
              photoURL: photoURL || "" ,
            });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            throw error; // Propagate the error to the caller
          });
      };

      
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user in auth state", currentUser);
            setUser(currentUser);
            setLoading(false);
          });

          fetch("https://tech-fleet-server-4kaem7qlc-sattam-chakmas-projects.vercel.app/products")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      
          return () => {
            unSubscribe();
          };
      }, []);

  



    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading,
        setLoading,
        products,
        carts,
   
    
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
