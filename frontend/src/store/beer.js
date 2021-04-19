const SET_BEER = "drinks/SET_BEER";

const setBeers = (beer) => {
    return {
        type: SET_BEER,
        beer
    };
};

export const getBeers = () => async (dispatch) => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const beers = await response.json();
    if (!beers.errors) {
        dispatch(setBeers(beers));
    }
    return beers;
};

function beersReducer(state = {beer: []}, {type, beer}) {
    switch (type) {
        case SET_BEER:
            return {...state, beer};
        default:
            return state;
    }
};

export default beersReducer;
