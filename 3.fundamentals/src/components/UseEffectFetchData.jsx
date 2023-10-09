import { Fragment } from "react"
import { useEffect, useState } from "react";
import './common.css';
const UseEffectFetchData = () => {
    const url = 'https://api.github.com/users';
    let [userList,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        (async ()=>{
            const response = await fetch(url);
            const userListResponse = await response.json();
            userList = userListResponse.filter((val, index)=> index<5);
            setUsers(userList);

            //La api retorna la informacion muy rapido por ello simulo 3 segundos
            setTimeout(()=>{
                setIsLoading(!isLoading);
            },3000)  

        })()
    },[])

    const isLoadingHtml = ()=> <h3>Is Loading</h3>

    const fecthDataHtml = () => 
        userList.map(({login,avatar_url,id,html_url}) => 
            <div className="profile" key={id}>
                <img src={avatar_url} className="profile__img"></img>
                <div className="profile__data">
                    <div>{login}</div>
                    <div><a href={html_url} target="_blank" rel="noreferrer" >Profile</a></div>
                </div>
            </div>
        )


    return (
        <Fragment>
            <div>Ejemplo 1 Fetching data</div>
            <br></br>
            { (isLoading) ? isLoadingHtml() : fecthDataHtml() }
        </Fragment>
    )
}

export default UseEffectFetchData