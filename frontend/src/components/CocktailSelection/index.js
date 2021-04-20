import { useSelector } from 'react-redux';
import CocktailSelectionDropdown from './CocktailSelectionDropdown';


const CocktailSelection = () => {
    const cocktails = useSelector(state => state.drinks.cocktail);
    const whatAmI = useSelector(state => state);
    console.log(whatAmI)
    
    const cocktailNames = cocktails.map(eachCocktailName=> eachCocktailName.name);

    return cocktailNames.length ? 
        <div>
            <h1> Cocktails </h1>
            {/* this is a prop based option to keep our components smaller */}
            <CocktailSelectionDropdown cocktailNames={cocktailNames}></CocktailSelectionDropdown>
            {/* this is a simple map straight into the component */}
            <select>{cocktailNames.map((x, y) => <option key={y}>{x}</option>)}</select>
        </div>
        :
        <h1> No cocktails found </h1>
};

export default CocktailSelection;