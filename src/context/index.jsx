import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  function isLoadedRoutes() {
    setIsLoaded(!isLoaded);
  };

  return (
    <AuthContext.Provider value={{ isLoaded, setIsLoaded, isLoadedRoutes }}>
      {children}
    </AuthContext.Provider>
  )
}