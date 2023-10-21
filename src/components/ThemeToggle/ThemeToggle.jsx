
// import { useAuth } from "./AuthContext";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ThemeToggle = () => {
    // const { isDarkMode, toggleTheme } = useAuth();
    const {isDarkMode, toggleTheme} = useContext(AuthContext);

    const toggleAppTheme = () => {
        const appContainer = document.getElementById("root"); // Replace with the actual ID of your app's root container
        if (appContainer) {
          appContainer.classList.toggle("dark-mode", isDarkMode);
        }
        toggleTheme();
      };
    
      return (
        <button onClick={toggleAppTheme}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      );
    };
    
    export default ThemeToggle;
    
    
    
    
    