import styles from './styles.module.scss';

export const Public = () => (
    <div className={styles.wrapper}>
        <h3>This is the public route for authenticated and non-authenticated users.</h3>
    </div>
)