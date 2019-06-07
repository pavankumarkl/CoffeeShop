
    export const addToCart=(response)=>{
        console.log("In coffee action",response)
        return{
          type:"ADD_TO_CART",
          payload:response
        }
      }
