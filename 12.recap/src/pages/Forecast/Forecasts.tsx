import { useLoaderData } from "react-router-dom";
import { matchDto } from "../../DTOs/match.dto";
import {MatchComponent} from '../../components/match/match';
const Forecasts = () => {

    const matchesInfo = useLoaderData() as matchDto[];

    return (
        matchesInfo.map((match: matchDto,index) => {
              return  <MatchComponent {...match} key={index}></MatchComponent>
        })
    )
}
export default Forecasts;

