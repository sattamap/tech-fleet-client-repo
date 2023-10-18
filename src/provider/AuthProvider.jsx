import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
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
      
    
        // Fetch JSON data directly in the useEffect
        // You can use fetch or any other method to fetch your data
        // fetch("/eventServices.json") // Replace with the actual path
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setJsonData(data);
        //     console.log(data);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching JSON data:", error);
        //   });

          return () => {
            unSubscribe();
          };
      }, []);

  



    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
   
    
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
