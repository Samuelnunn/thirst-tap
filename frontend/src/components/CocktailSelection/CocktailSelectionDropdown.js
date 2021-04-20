const CocktailSelectionDropdown = (cocktailNames) => {
    return(
        <select>{cocktailNames.cocktailNames.map((x, y) => <option key={y}>{x}</option>)}</select>
    )
};

export default CocktailSelectionDropdown;