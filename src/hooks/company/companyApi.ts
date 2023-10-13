import { Company } from "@/utils/types/company";

const parseCompany = (company: any): Company => {
    return {
        id: company.ID.toString(),
        name: company.Name,
        logo: company.Logo,
        industry: company.Industry,
        industryId: company.IndustryId,
    }
}

export const getAllCompanies = async (): Promise<Company[]> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/employers/?all=true', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) throw new Error('Error occurred');

    const json = await response.json()
    const companies = [] as Company[]
    json.map((company: any) => {
        companies.push(parseCompany(company))
    })
    return companies;
}

