import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktailsByIngredients } from '../../store/drinks';
import CocktailSelectionDropdown from './CocktailSelectionDropdown';
import CocktailsByIngredientSearch from './CocktailsByIngredientSearch';

const CocktailSelection = () => {
    const dispatch = useDispatch();
    const cocktails = useSelector(state => state.drinks.cocktails);
    const cocktailsByIngredients = useSelector(state => state.drinks.cocktailsByIngredients);
    // const cocktailNamesIngredientSearch = cocktailsByIngredients.map(eachCocktailName=> eachCocktailName);


    const cocktailNames = cocktails.map(eachCocktailName=> eachCocktailName.strDrink);

    const [ingredientSearch, setIngredientSearch] = useState('');
    // const [cocktailsFromSearch, setCocktailsFromSearch] = useState([]);
    
    const updateIngredientSearch = (e) => {
        setIngredientSearch(e.target.value);
    };

    const onSearch = async (e) => {
        e.preventDefault();
        dispatch(getCocktailsByIngredients(ingredientSearch));
        // dispatch(getFollowsForUser());
        // setCocktailsFromSearch()
    };
    
    
    return cocktailNames.length ? 
        <div>
            <h1> Cocktails </h1>
            {/* this is a prop based option to keep our components smaller */}
            <CocktailSelectionDropdown cocktailNames={cocktailNames}></CocktailSelectionDropdown>
            {/* this is a simple map straight into the component */}
            <select>{cocktailNames.map((x, y) => <option key={y}>{x}</option>)}</select>
            {/* <Search style={{ textAlign: 'center', color: 'rgb(142, 142, 142)', fontSize: '18px' }} /> */}
           {/* onSubmit={onSearch} */}
            <form onSubmit={onSearch} >
                <div>
                  <input onChange={updateIngredientSearch} type='search' placeholder='Search by ingredient'></input>
                </div>
            </form>
            <CocktailsByIngredientSearch cocktailsByIngredients={cocktailsByIngredients}/>
        </div>
        :
        <h1> No cocktails found </h1>
};

export default CocktailSelection;