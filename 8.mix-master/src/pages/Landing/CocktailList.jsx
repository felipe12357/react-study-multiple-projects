import CocktailCard from './CocktailCard';
import './landing.css';

const CocktailList = ({drinks}) => {

  return (
    <div className='cocktail-list'>{
        drinks?.map(drink =>{
          const fixedDrink = {
            id:drink.idDrink,
            name:drink.strDrink,
            image:drink.strDrinkThumb,
            info:drink.strAlcoholic,
            category:drink.strCategory
          };

          return <CocktailCard key={drink.idDrink} {...fixedDrink}></CocktailCard>
        })
      } 
    </div>
  )
}

export default CocktailList