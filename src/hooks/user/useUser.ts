import { User } from "@/utils/types/user"
import { getUserProfile, updateUserProfile } from "./userApi"

const useUser = () => {
    const getProfile = async (token: string): Promise<User | null> => {
        const user = await getUserProfile(token)
        if (user) {
            return user
        }
        return null
    }

    const updateProfile = async (token: string, first_name: string, last_name: string, position: string, employer: string, school: string, major: string, phone: string, resume: File | null, currentUser: User): Promise<null> => {
        if (first_name === currentUser.first_name && last_name === currentUser.last_name && position === currentUser.position && employer === currentUser.employer && school === currentUser.school && major === currentUser.major && phone === currentUser.phone && !resume) {
            console.log(first_name)
            return null
        }
        await updateUserProfile(token, first_name, last_name, position, employer, school, major, phone, resume)
        return null
    }

    return {
        getProfile,
        updateProfile
    }
}

export default useUser