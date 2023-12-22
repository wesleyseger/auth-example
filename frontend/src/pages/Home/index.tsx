import styles from './styles.module.scss';

import { useAuth } from '../../hooks/useAuth';

export const Home = () => {

    const { logout, user } = useAuth();

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h3>This is the protected Home Page.</h3>

                <div>
                    <span>
                        <label>Nome:</label>
                        <p>{user.name}</p>
                    </span>

                    <span>
                        <label>Usuário:</label>
                        <p>{user.username}</p>
                    </span>

                    <span>
                        <label>Permissão:</label>
                        <p>{user.role}</p>
                    </span>

                </div>

                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}