const BeerSelectionDropdown = (beerNames) => {
    return(
        <select>{beerNames.beerNames.map((x, y) => <option key={y}>{x}</option>)}</select>
    )
};

export default BeerSelectionDropdown;