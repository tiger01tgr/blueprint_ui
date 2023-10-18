import { User } from "@/utils/types/user"
import { getUserProfile } from "./userApi"

const useUser = () => {
    const getProfile = async (token: string): Promise<User | null> => {
        const user = await getUserProfile(token)
        if (user) {
            return user
        }
        return null
    }

    return {
        getProfile,
    }
}

export default useUser