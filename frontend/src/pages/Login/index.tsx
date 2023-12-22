import { useEffect, useState } from "react"

import styles from './styles.module.scss';

import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/ErrorMessage";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login, isAuthenticated, isLoading } = useAuth();

    useEffect(() => { isAuthenticated && navigate('/') }, [])

    const handleLogin = (e: Event) => {
        e.preventDefault();
        login(username, password)
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={(e: any) => handleLogin(e)}>
                <h3>Login</h3>

                <label >Usuário: </label>
                <input
                    placeholder="example@example.com"
                    onChange={(e: any) => setUsername(e.currentTarget.value)}
                />

                <label>Senha: </label>
                <input
                    placeholder="••••••••"
                    autoComplete="no"
                    type="password"
                    onChange={(e: any) => setPassword(e.currentTarget.value)}
                />

                <button disabled={isLoading} type="submit">{isLoading ? 'Carregando..' : 'Entrar'}</button>
            </form>
            <ErrorMessage />
        </div >
    )
}