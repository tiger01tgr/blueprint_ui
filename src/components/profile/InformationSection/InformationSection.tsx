'use client'
import styles from './InformationSection.module.css'
import { CiMail } from 'react-icons/ci'
import { AiOutlineFilePdf, AiOutlinePhone } from 'react-icons/ai'
import Link from 'next/link'
import EditProfileModal from '../EditProfileModal/EditProfileModal'
import useAuth from '@/hooks/auth/useAuth'
import { User } from '@/utils/types/user'
import Loading from '@/components/loading/Loading'

interface Props {
    user: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const InformationSection = ({ user, setCurrentUser }: Props) => {
    const { Logout } = useAuth()

    if (!user) {
        return (
            <div className={styles.liner}>
                <Loading />
            </div>
        )
    }

    const handleLogout = () => {
        Logout()
        window.location.href = '/'
    }


    return (
        <div className={styles.liner}>
            <div className={styles.basicInfo}>
                <div className={styles.avatar}>
                    {user.first_name[0]}{user.last_name[0]}
                </div>
                <div className={styles.text}>
                    <div className={styles.name}>
                        {user.first_name} {user.last_name}
                    </div>
                    <div className={styles.title}>
                        {user.position ?
                            <div className={styles.title}>
                                {user.position}
                            </div>
                            :
                            <div className={styles.title}>
                                {!user.employer && user.school ?
                                    <div className={styles.title}>
                                        {user.school}
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        }
                    </div>
                    <div className={styles.title}>
                        {user.employer ?
                            <div className={styles.title}>
                                {user.employer}
                            </div>
                            :
                            <div className={styles.title}>
                                {!user.position && user.major ?
                                    <div className={styles.title}>
                                        {user.major}
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.contactInformation} >
                <div className={styles.sectionTitle}>
                    Contact
                </div>
                <div className={styles.contactMethod}>
                    <CiMail size={22} />
                    <div className={styles.title}>
                        {user.email}
                    </div>
                </div>
                <div className={styles.contactMethod}>
                    <AiOutlinePhone size={22} />
                    <div className={styles.title}>
                        {user.phone ? <div className={styles.title}>{user.phone}</div> : <div className={styles.title}>None</div>}
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.resumeSection} >
                <div className={styles.sectionTitle}>
                    Resume
                </div>
                <div className={styles.resumeRow}>
                    <AiOutlineFilePdf size={22} />
                    {
                        user.resume ?
                            <Link href={user.resume} target="_blank">
                                <div className={styles.link}>
                                    View uploaded resume
                                </div>
                            </Link>
                        :
                        <div className={styles.title}>
                            No resume on file
                        </div>
                    }
                </div>
            </div>
            <div className={styles.buttonSection}>
                <EditProfileModal user={user} setCurrentUser={setCurrentUser} />
                <button className={styles.button} onClick={handleLogout}>
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default InformationSection