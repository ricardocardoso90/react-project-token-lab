import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const listTasks = "Lista de tarefas";

  return (
    <AuthContext.Provider value={{ listTasks }}>
      {children}
    </AuthContext.Provider>
  )
}