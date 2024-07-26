import "/node_modules/flag-icons/css/flag-icons.min.css";
import {countriesMinName} from '../../modules/countriesMinName';
import { matchDto } from "../../dtos/match.dto";
import './match.scss';
export const MatchComponent=(matchInfo:matchDto)=>{

    const flag1 = countriesMinName.find((country)=>country.country===matchInfo.team1)?.min.toLowerCase();
    const flag2 = countriesMinName.find((country)=>country.country===matchInfo.team2)?.min.toLowerCase();

    return (
        <div className="match-container">
            <span className={ `fi fi-${flag1} flags tooltip`} title={matchInfo.team1}></span>
                <input type="text" name={`fecha${matchInfo.id}-${matchInfo.team1}`}></input>
            <span>Vs</span> 
            <span className={ `fi fi-${flag2} flags tooltip`} title={matchInfo.team2}></span>
                <input type="text" name={`fecha${matchInfo.id}-${matchInfo.team2}`}></input>
            <span>{matchInfo.date}</span>
        </div>
    );
}