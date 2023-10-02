import styles from './SignInWithButton.module.css'

export const SignInWithButton = ({ props }: any) => {
    return (
        <button
            className={styles.button}
            onClick={props.signIn}
        >
            <props.icon size={30} className={styles.icon}/>
        </button>
    )
}