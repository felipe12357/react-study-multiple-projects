
import { useEffect } from "react";
import UseCustomHookFetchData from "./UseCustomHookFetchData";
import { Fragment } from "react";
import PropTypes from 'prop-types';
import './common.css';
const CustomHookFetchData = () => {
    const url = 'https://api.github.com/users';
    const {getData,dataList,isLoading,isError} =UseCustomHookFetchData(url,1);

    useEffect(()=>{
        getData();
    },[])
   
  return (
        <Fragment>
            <div>CustomHookFetchData</div>
            { isLoading ? 'Loading content': 
                isError ? 'There was an error' :
                <DisplayUser user={dataList[0]}></DisplayUser>
            }
        </Fragment>
    )
}

const DisplayUser = ({user})=>{
    const nullObject = {avatar_url:null,login:null,html_url:null}
    const {avatar_url,login,html_url} = (user) ? user : nullObject;

    return (
        <section className="profile">
            <img className="profile__img" src={avatar_url}></img>
            <div className="profile__data">
                <div>{login}</div>
                <div><a href={html_url} target="_blank" rel="noreferrer" >Profile</a></div>
            </div>
        </section>
    )
}

const userPrototype = {
    avatar_url:PropTypes.string,
    login:PropTypes.string,
    html_url:PropTypes.string
}

DisplayUser.propTypes  = {
    user:PropTypes.shape(userPrototype),
}

export default CustomHookFetchData