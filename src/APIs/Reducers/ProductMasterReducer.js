import React from 'react'

function ProductMasterReducer(state,action) {
    switch(action.type){
        case 'change':{
            return {
            ...state,
            [action.payload.name]: action.payload.value,
            };
        }
        case 'details': {
            // alert( "23"+action.data)
            return action.data
          }

}
}
export default ProductMasterReducer;