export const ADD_CITY_SUCCESS ="ADD_CITY_SUCCESS"

export const ADD_CITY_FAILURE ="ADD_CITY_FAILURE"

export const DELETE_CITY ="DELETE_CITY"


export const add_city_success =(payload)=>{

    return {
        type:ADD_CITY_SUCCESS,
        payload
    }
}

export const add_city_failure =()=>{

    return {
        type:ADD_CITY_FAILURE
    }
}

export const delete_city =()=>{

    return {
        type:DELETE_CITY
    }
}