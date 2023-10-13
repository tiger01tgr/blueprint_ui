export const createUserAccount = async (email: string, firstName: string, lastName: string, middleName: string, token: string) => {
    const query = `/?firstname=${firstName}&middlename=${middleName}&lastname=${lastName}&email=${email}&typeOfUser=user`;

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users'+query, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    if (!response.ok) return new Error('Error occurred');
    return null;
};

export const getMe = async (token: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    if (!response.ok) return new Error('Error occurred');
    return await response.json()
};