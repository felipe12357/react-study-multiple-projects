import { userValidation } from "../../utils/UserValidation"
import { redirect } from "react-router-dom";
import { fetchDataAxios} from "../../utils/axiosApi";
import { matchDto } from "../../dtos/match.dto";

const ForecastLoader= async ():Promise<matchDto[] | Response>=>{

    if(!userValidation())
        return redirect("/");

    const response:matchDto[] =await fetchDataAxios('matchesInfo');
    return response;
}

export default ForecastLoader;