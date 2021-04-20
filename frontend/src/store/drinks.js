const SET_BEER = "drinks/SET_BEER";
const SET_WINE = "drinks/SET_WINE";
const SET_COCKTAIL  = "drinks/SET_COCKTAIL";

const setWines = (wine) => {
    return {
        type: SET_WINE,
        wine
    };
};

const setBeers = (beer) => {
    return {
        type: SET_BEER,
        beer
    };
};

const setCocktails = (cocktail) => {
    return {
        type: SET_COCKTAIL,
        cocktail
    };
};

export const getWines = () => async (dispatch) => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const wines = await response.json();
    if (!wines.errors) {
        dispatch(setWines(wines));
    }
    return wines;
};


export const getBeers = () => async (dispatch) => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const beers = await response.json();
    if (!beers.errors) {
        dispatch(setBeers(beers));
    }
    return beers;
};

export const getCocktails = () => async (dispatch) => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const cocktails = await response.json();
    if (!cocktails.errors) {
        dispatch(setCocktails(cocktails));
    }
    return cocktails;
};

function drinksReducer(state = {beer: [], wine: [], cocktail: []}, 
                      {type, beer, wine, cocktail}) {
    switch (type) {
        case SET_BEER:
            return {...state, beer};
        case SET_WINE:
            return {...state, wine};
        case SET_COCKTAIL:
            return {...state, cocktail};
        default:
            return state;
    }
};

export default drinksReducer;
