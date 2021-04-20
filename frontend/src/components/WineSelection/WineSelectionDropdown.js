const WineSelectionDropdown = (wineNames) => {
    return(
        <select>{wineNames.wineNames.map((x, y) => <option key={y}>{x}</option>)}</select>
    )
};

export default WineSelectionDropdown;