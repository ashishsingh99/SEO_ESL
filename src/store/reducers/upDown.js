const reducerFn = (state = 0, action) => {
    if (action.type === "INCREMENT") {
        return state + action.payload
    }
    else if (action.type === "DECREMENT") {
        return state - action.payload
    }
    else {
        return state;
    }
};
export default reducerFn;


export const reducerFntwo = (state = 'en', action) => {
    if (action.type === "ENGLISH") {
        return state = 'en'
    }
    else if (action.type === "ARABIC") {
        return state = 'ar'
    }
    else {
        return state;
    }
};

export const reducerFnthree = (state = false, action) => {
    const isloginee = localStorage.getItem('loginOut')
    if (action.type === "USER") {
        return state = isloginee;
    }
    else {
        return state = isloginee;
    }
};

export const reducerFnFour = (state = true, action) => {
    if (action.type === "LOADING") {
        return state = true ;
    }
    else if (action.type === 'NOTLOADING') {
        return state = false ;
    }
    else {
        return state;
    }
};

export const reducerFnFive = (state = 0, action) => {
    if (action.type === 'PRDATA') {
        return state = action.payload
    }
    else {
        return state;
    }
}

export const reducerFnSix = (state = 0, action) => {
    if (action.type === 'ALLPRDATA') {
        return state = action.payload
    }

    else {
        return state;
    }
}


export const reducerFnSeven = (state = 0, action) => {
    if (action.type === 'ORGANIC') {
        return state = action.payload
    }

    else {
        return state;
    }
}

export const reducerFnEight = (state = 0, action) => {
    if (action.type === 'GETCOUNTRY') {
        return state = action.payload
    }

    else {
        return state;
    }
}
