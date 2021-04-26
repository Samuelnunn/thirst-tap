import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CocktailsByIngredientSearch = (cocktailsByIngredients) => {
    
    const cocktails = useSelector(state => state.drinks.cocktailsByIngredients);

    if (cocktails == 'None Found') {
        return (
            <div>
                <h1>No cocktails found</h1> 
            </div>
        )
    } else {
    return cocktails.length ? 
        cocktails.map((eachCocktail) => {
            return (
                <div>
                    <h2>{eachCocktail.strDrink}</h2>
                    <img src={eachCocktail.strDrinkThumb}/>
                </div>
            )
        })
        :
        null 
    };
};

export default CocktailsByIngredientSearch;