import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import BeerSelectionDropdown from '../BeerSelection';




const BeerSelection = () => {
    const beers = useSelector(state => state.drinks.beer);
    const whatAmI = useSelector(state => state);
    console.log(whatAmI)
    
    const beerNames = beers.map(eachBeerName => eachBeerName.name);

    return beerNames.length ? 
        <div>
            <h1> Beers </h1>
            {/* this is a prop based option to keep our components smaller */}
            <BeerSelectionDropdown beerNames={beerNames}></BeerSelectionDropdown>
            {/* this is a simple map straight into the component */}
            <select>{beerNames.map((x, y) => <option key={y}>{x}</option>)}</select>
        </div>
        :
        <h1> No beers found </h1>
        
    
};

export default BeerSelection;