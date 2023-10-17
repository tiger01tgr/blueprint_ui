import { useState, useEffect } from "react"
import { Role } from "@/utils/types/role"
import { getAllRoles } from "./roleApi"

const useRoles = () => {

    const [roles, setRoles] = useState<Role[]>([])

    useEffect(() => {
        getAllRoles()
            .then((roles) => {
                setRoles(roles)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return {
        allRoles: roles,
    }
}

export default useRoles