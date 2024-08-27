import { toast } from "react-toastify"
import { ErrorList } from "./formsValidations"

export function formatCurrency(amount:number){
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(amount)
}

export const displayErrors = (error:ErrorList)=>{
    error.issues.forEach(issue =>{
        toast.error(issue.message)
    })
}