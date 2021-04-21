import { useSelector } from 'react-redux';

const CocktailsByIngredientSearch = (cocktailsByIngredients) => {
    const cocktails = useSelector(state => state.drinks.cocktailsByIngredients);

    // const variableNeededToMap = cocktailsByIngredients.cocktailsByIngredients

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

export default CocktailsByIngredientSearch;