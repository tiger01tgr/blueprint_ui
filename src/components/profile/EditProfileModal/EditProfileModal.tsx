'use client'
import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import styles from './EditProfileModal.module.css'

interface Props {
    user: User | null;
}

const EditProfileModal = ({ user }: Props) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [file, setFile] = useState<any>()

    const handleSubmit = (event: any) => {
        console.log(file)
        const formData = new FormData()
		formData.append('File', file)
        console.log(formData)
        close()
    }

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0])
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title={<div className={styles.title}>Edit Profile</div>} size={700}>
                <div className={styles.liner}>
                    <div className={styles.nameSection}>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                First Name
                            </div>
                            <input className={styles.shortInput} placeholder='First Name' defaultValue={user?.firstName}/>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Last Name
                            </div>
                            <input className={styles.shortInput} placeholder='Last Name' defaultValue={user?.lastName}/>
                        </div>
                    </div>
                    <div className={styles.nameSection}>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                School
                            </div>
                            <input className={styles.shortInput} placeholder='School' defaultValue={user?.school}/>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Major
                            </div>
                            <input className={styles.shortInput} placeholder='Major' defaultValue={user?.major}/>
                        </div>
                    </div>
                    <div className={styles.nameSection}>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Employer
                            </div>
                            <input className={styles.shortInput} placeholder='Employer' defaultValue={user?.company}/>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Position
                            </div>
                            <input className={styles.shortInput} placeholder='Position' defaultValue={user?.position}/>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputText}>
                            Email Address
                        </div>
                        <input className={styles.longInput} placeholder='Email Address' defaultValue={user?.email} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputText}>
                            Phone
                        </div>
                        <input className={styles.longInput} placeholder='Phone Number' defaultValue={user?.phone} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputText}>
                            Resume
                        </div>
                        <input className={styles.longInput} type='file' onChange={handleFileChange}/>
                    </div>
                    <button className={styles.saveButton} onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </Modal>

            <button className={styles.editProfileButton} onClick={open}>Edit Profile</button>
        </>
    )
}

export default EditProfileModal