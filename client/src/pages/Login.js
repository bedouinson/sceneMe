import {useContext, useState} from 'react';
import {AuthContext} from '../Context/AuthContext';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleLogin = async () => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
        const data = await response.json();
        if (response.ok) {
            login(data.user, data.token);

        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );

};