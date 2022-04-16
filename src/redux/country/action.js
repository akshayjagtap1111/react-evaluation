
export const ADD_COUNTRY_SUCCESS= "ADD_COUNTRY_SUCCESS";

export const ADD_COUNTRY_FAILURE = "ADD_COUNTRY_FAILURE";


export const add_country_success =(payload)=>{

    return {
        type:ADD_COUNTRY_SUCCESS,
        payload
    }
}


export const add_country_failure =()=>{

    return {
        type:ADD_COUNTRY_FAILURE,
    }
}
