import { useSelector } from 'react-redux';
import WineSelectionDropdown from './WineSelectionDropdown';


const WineSelection = () => {
    const wines = useSelector(state => state.drinks.wine);
    const whatAmI = useSelector(state => state);
    console.log(whatAmI)
    
    const wineNames = wines.map(eachWineName => eachWineName.name);

    return wineNames.length ? 
        <div>
            <h1> Wines </h1>
            {/* this is a prop based option to keep our components smaller */}
            <WineSelectionDropdown wineNames={wineNames}></WineSelectionDropdown>
            {/* this is a simple map straight into the component */}
            <select>{wineNames.map((x, y) => <option key={y}>{x}</option>)}</select>
        </div>
        :
        <h1> No beers found </h1>
};

export default WineSelection;