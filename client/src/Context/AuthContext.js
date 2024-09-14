import { createContext, useEffect, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login = (user, token) => {
        setUser(user);
        localStorage.setItem("token", token);

    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch("http://localhost:3000/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.user) {
                        setUser(data.user);
                    } else {
                        localStorage.removeItem("token");
                    }
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}