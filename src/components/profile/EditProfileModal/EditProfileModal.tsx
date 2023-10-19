'use client'
import React, { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { Modal, Select } from '@mantine/core'
import styles from './EditProfileModal.module.css'
import { User } from '@/utils/types/user'
import useUser from '@/hooks/user/useUser'
import useAuth from '@/hooks/auth/useAuth'

interface Props {
    user: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface FormValues {
    firstName: string | undefined;
    lastName: string | undefined;
    position: string | undefined;
    employer: string | undefined;
    school: string | undefined;
    major: string | undefined;
    phone: string | undefined;
    // highestDegree: string | undefined;
}

const EditProfileModal = ({ user, setCurrentUser }: Props) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [file, setFile] = useState<File | null>(null)
    const [highestDegree, setHighestDegree] = useState<string | null>('')
    const { updateProfile, getProfile } = useUser()
    const { getBearerToken } = useAuth()

    useEffect(() => {
        if (highestDegree) {
            form.setFieldValue('highestDegree', highestDegree)
        }
    }, [highestDegree])

    const form = useForm({
        initialValues: {
            firstName: user?.first_name,
            lastName: user?.last_name,
            school: user?.school,
            major: user?.major,
            employer: user?.employer,
            position: user?.position,
            email: user?.email,
            phone: user?.phone,
            resume: user?.resume,
            // highestDegree: user?.highestDegree
        },
    })

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0])
    }

    const onSubmit = async (values: FormValues) => {
        const token = await getBearerToken()
        if (token && user) {
            await updateProfile(
                token,
                values.firstName || '',
                values.lastName || '',
                values.position || '',
                values.employer || '',
                values.school || '',
                values.major || '',
                values.phone || '',
                file,
                user
            )
            const currentUser = await getProfile(token)
            setCurrentUser(currentUser)
        }
        close()
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title={<div className={styles.title}>Edit Profile</div>} size={700}>
                <form onSubmit={form.onSubmit(onSubmit)}>
                    <div className={styles.liner}>
                        <div className={styles.nameSection}>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    First Name
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='First Name'
                                    defaultValue={user?.first_name}
                                    onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
                                />
                            </div>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    Last Name
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='Last Name'
                                    defaultValue={user?.last_name}
                                    onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.nameSection}>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    School
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='School'
                                    defaultValue={user?.school}
                                    onChange={(event) => form.setFieldValue('school', event.currentTarget.value)}
                                />
                            </div>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    Major
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='Major'
                                    defaultValue={user?.major}
                                    onChange={(event) => form.setFieldValue('major', event.currentTarget.value)}
                                />
                            </div>
                        </div>
                        {/* <div className={styles.nameSection}>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    Highest Degree
                                </div>
                                <Select
                                    classNames={{
                                        wrapper: styles.selectWrapper,
                                        dropdown: styles.dropdown,
                                        section: styles.section,
                                        input: styles.selectInput,
                                        label: styles.label,
                                        options: styles.options,
                                    }}
                                    placeholder='Highest Degree'
                                    data={[
                                        `Associate's`,
                                        `Bachelor's`,
                                        `Master's`,
                                        'MBA',
                                        'JD',
                                        'PharMd',
                                        'PhD',
                                        'MD'
                                    ]}
                                    defaultValue={user?.highestDegree}
                                    value={highestDegree}
                                    onChange={setHighestDegree}
                                />
                            </div>
                        </div> */}
                        <div className={styles.nameSection}>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    Employer
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='Employer'
                                    defaultValue={user?.employer}
                                    onChange={(event) => form.setFieldValue('employer', event.currentTarget.value)}
                                />
                            </div>
                            <div className={styles.input}>
                                <div className={styles.inputText}>
                                    Position
                                </div>
                                <input
                                    className={styles.shortInput}
                                    placeholder='Position'
                                    defaultValue={user?.position}
                                    onChange={(event) => form.setFieldValue('position', event.currentTarget.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Email Address
                            </div>
                            <input
                                className={styles.longInput}
                                placeholder='Email Address'
                                defaultValue={user?.email}
                                disabled
                            />
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Phone
                            </div>
                            <input
                                className={styles.longInput}
                                placeholder='Phone Number'
                                defaultValue={user?.phone}
                                onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                Resume
                            </div>
                            <input
                                className={styles.longInput}
                                type='file'
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className={styles.buttonSection}>
                            <button className={styles.saveButton} type='submit'>
                                Save
                            </button>
                            <button className={styles.closeButton} onClick={close}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>

            <button className={styles.editProfileButton} onClick={open}>Edit Profile</button>
        </>
    )
}

export default EditProfileModal