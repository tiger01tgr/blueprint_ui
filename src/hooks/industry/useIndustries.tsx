import { useState, useEffect } from "react"
import { Industry } from "@/utils/types/industry"
import { getAllIndustries } from "./industryApi"

const useIndustries = () => {

    const [industries, setIndustries] = useState<Industry[]>([])

    useEffect(() => {
        getAllIndustries()
            .then((industries) => {
                setIndustries(industries)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return {
        allIndustries: industries,
    }
}
export default useIndustries
