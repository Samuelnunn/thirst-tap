import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import BeerSelection from '../BeerSelection';




const Selection = () => {
    const beers = useSelector(state => state.drinks.beer);
    
    const beerNames = beers.map(eachBeerName => eachBeerName.name);

    return beerNames.length ? 
        <div>
            <h1> Drinks </h1>
            {/* this is a prop based option to keep our components smaller */}
            <BeerSelection beerNames={beerNames}></BeerSelection>
            {/* this is a simple map straight into the component */}
            <select>{beerNames.map((x, y) => <option key={y}>{x}</option>)}</select>
        </div>
        :
        <h1> No beers found </h1>
        
    
};

export default Selection;