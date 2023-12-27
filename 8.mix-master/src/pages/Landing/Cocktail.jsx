import React from 'react';
import  { UseFetchDrinksReactQueryCustomHook,SEARCH_TYPE_ENUM } from '../../hoooks/UseHandlerAPIHook';
import LoadingModal from '../../utils/LoadingModal';
import { useParams,useLoaderData, Link } from 'react-router-dom';


//otra forma de obtener los parametros de la ruta //IMPORTATNE ESTA FUNCION SE DEBE ESPECIFICAR EN LA RUTA
export const cocktail_loader = async({params})=>{
  return params;
}

const Cocktail = () => {

    //Y ACA SE INVOCA (UTILIZANDO EL SEGUNDO METODO DE TRABAJAR CON LOS PARAMETROS useLoaderData)
  // const data = useLoaderData();
  //console.log(data);

  const {id:cocktailID}=useParams();
  const {drinks,isLoading,isError} = UseFetchDrinksReactQueryCustomHook('cocktail',cocktailID,SEARCH_TYPE_ENUM.ID);

  let drink;
  if(drinks?.length===1)
    drink=drinks[0];

  return (
    <>
      {(isLoading) && <LoadingModal />}
      { (!isLoading && drinks?.length===1) &&
          <div className='main-cocktail'>
            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
            <div className='cocktail--info'>
                <h2>{drink.strDrink}</h2>
                <div><h4>Category: </h4> {drink.strCategory} - {drink.strAlcoholic}</div>
                <div><h4>Ingredients:</h4> <ul>{
                Object.keys(drink).map(key =>{
                  if(key.includes('Ingredient') && drink[key] ) {
                    const measure_number = key.charAt(key.length - 1);
                   return <li key={key}>{drink[key]} {drink[`strMeasure${measure_number}`]}</li>
                  }
                })}</ul></div>
                <div><h4>Instructions:</h4>
                  <p>{drink.strInstructions}</p>
                  <p>{drink.strInstructionsES}</p>
                </div>
                <Link to='/'><button className='btn button--primary'>Back</button></Link>
            </div>
          </div>
      }
      
    </>
  )
}

export default Cocktail