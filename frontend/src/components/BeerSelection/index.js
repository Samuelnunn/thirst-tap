import { useDispatch, useSelector } from 'react-redux';

const BeerSelection = (beerNames) => {
    return(
        <select>{beerNames.beerNames.map((x, y) => <option key={y}>{x}</option>)}</select>
    )
};

export default BeerSelection;