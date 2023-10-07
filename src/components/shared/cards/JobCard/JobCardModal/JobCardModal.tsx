'use client'

import classes from './JobCardModal.module.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const JobCardModal = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className={classes.liner}>
            <Modal
                opened={opened}
                onClose={close}
                classNames={{
                    header: classes.header,
                }}
            >
                <div className={classes.modalLiner}>
                    <div className={classes.modalTitle}>
                        Description
                    </div>
                    <div className={classes.modalDescription}>
                        {props.description}
                    </div>
                </div>
            </Modal>

            <Button
                onClick={open}
                classNames={{
                    root: classes.buttonRoot,
                }}
            >
                Details
            </Button>
        </div>
    )
}

export default JobCardModal