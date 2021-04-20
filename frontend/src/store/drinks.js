const SET_BEER = "drinks/SET_BEER";
const SET_WINE = "drinks/SET_WINE";

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

function drinksReducer(state = {beer: [], wine: []}, {type, beer, wine}) {
    switch (type) {
        case SET_BEER:
            return {...state, beer};
        case SET_WINE:
            return {...state, wine};
        default:
            return state;
    }
};

export default drinksReducer;
