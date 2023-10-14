import { Loader } from "@mantine/core"
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.liner} >
            <Loader color='darkBlue' size='xl' classNames={{
                root: styles.loaderRoot,
            }} />
        </div>
    )
}

export default Loading