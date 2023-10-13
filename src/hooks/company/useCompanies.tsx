import { useState, useEffect } from "react"
import { Company } from "@/utils/types/company"
import { getAllCompanies } from "./companyApi"

const useCompanies = () => {

    const [companies, setCompanies] = useState<Company[]>([])

    useEffect(() => {
        getAllCompanies()
            .then((companies) => {
                setCompanies(companies)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // const getCompanies = async (): Promise<Company[]> => {
    //     return await getAllCompanies()
    // }

    return {
        allCompanies: companies,
        // getCompanies
    }
}
export default useCompanies
