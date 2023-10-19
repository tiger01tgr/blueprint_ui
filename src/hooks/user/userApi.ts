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

export const updateUserProfile = async (token: string, first_name: string, last_name: string, position: string, employer: string, school: string, major: string, phone: string, resume: File | null): Promise<null> => {
    let url = process.env.NEXT_PUBLIC_API_URL + '/users/me/profile?'

    // build url
    const fields = ['firstname', 'lastname', 'position', 'employer', 'school', 'major', 'phone']
    const values = [first_name, last_name, position, employer, school, major, phone]

    for (let i = 0; i < fields.length; i++) {
        if (values[i] && values[i].length > 0) {
            url += `${fields[i]}=${values[i]}`
            if (i !== fields.length - 1) {
                url += '&'
            }
        }
    }
    if (resume) {
        url += `isResumeUpdate=true`
    } else {
        url += `isResumeUpdate=false`
    }

    const formData = new FormData()
    if (resume) {
        formData.append('resume', resume)
    }
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: formData
    })
    if (!response.ok) throw new Error('Error occurred')
    return null
}

