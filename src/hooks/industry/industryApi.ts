import { Industry } from "@/utils/types/industry"

export const getAllIndustries = async (): Promise<Industry[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/industries`)
    const data = await res.json()
    let parsedData: Industry[] = []
    if (data === undefined || data.length === 0) return parsedData
    data.forEach((row: any) => {
        parsedData.push({
            id: row.ID,
            name: row.Name,
        })
    })
    return parsedData
}