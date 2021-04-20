const SET_BEER = "drinks/SET_BEER";
const SET_WINE = "drinks/SET_WINE";
const SET_COCKTAIL  = "drinks/SET_COCKTAIL";

const COCKTAIL_API_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY;

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

const setCocktails = (cocktails) => {
    return {
        type: SET_COCKTAIL,
        cocktails
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
    const req = await fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail", {
        headers: {
            "x-rapidapi-key": COCKTAIL_API_KEY,
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "useQueryString": true
        },
    });

    const cocktails = await req.json();
    console.log(cocktails.drinks)
    if (!cocktails.errors) {
        dispatch(setCocktails(cocktails.drinks));
    }
    return cocktails;
};

function drinksReducer(state = {beer: [], wine: [], cocktails: []}, 
                      {type, beer, wine, cocktails}) {
    switch (type) {
        case SET_BEER:
            return {...state, beer};
        case SET_WINE:
            return {...state, wine};
        case SET_COCKTAIL:
            return {...state, cocktails};
        default:
            return state;
    }
};

export default drinksReducer;
