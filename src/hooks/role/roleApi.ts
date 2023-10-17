import { Role } from "@/utils/types/role"

export const getAllRoles = async (): Promise<Role[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
    const data = await res.json()
    let parsedData: Role[] = []
    if (!data) return parsedData
    data.forEach((row: any) => {
        parsedData.push({
            id: row.ID,
            name: row.Name,
        })
    })
    return parsedData
};