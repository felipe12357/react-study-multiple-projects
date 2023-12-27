import React from 'react'
import {SEARCH_TYPE_ENUM,UseFetchDrinksReactQueryCustomHook} from '../../hoooks/UseHandlerAPIHook';
import LoadingModal from '../../utils/LoadingModal';
import CocktailList from './CocktailList';
import SearchCocktailForm from './SearchCocktailForm';
import {useLoaderData,useNavigation } from 'react-router-dom';


export const landing_loader = async({request}) =>{
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  return searchTerm;
}

const Landing = () => {

  const searchTerm = useLoaderData();
  const {isLoading,drinks} = UseFetchDrinksReactQueryCustomHook('cocktail',searchTerm,SEARCH_TYPE_ENUM.NAME);

  return (
    <> 
      {(isLoading) && <LoadingModal />}
      <SearchCocktailForm searchTerm={searchTerm}></SearchCocktailForm>
      { (!isLoading) && (!drinks) ? 'Not drinks found' : <CocktailList drinks={drinks}></CocktailList> }
    </>
  )
}

export default Landing;