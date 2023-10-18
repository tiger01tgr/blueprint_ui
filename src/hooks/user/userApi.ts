import { User } from "@/utils/types/user"

export const getUserProfile = async (token: string): Promise<User | null> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/me/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    if (!response.ok) throw new Error('Error occurred')
    const json = await response.json()
    if (json) {
        return json
    }
    return null
}
