const INITIAL_STATE = []

const listReducer = (state=INITIAL_STATE,action) => {

    const addbasket = (prop) => {
        const exist = state.find((x) => x.id === prop.id)
        console.log('ex',exist);
        if(exist){
            return state.map((x)=>
            x.id === prop.id ? {...exist, qty: exist.qty +1} : x
            )
        }
        else{
            return [...state, {...prop, qty:1}]
        }
      }
    const deleteBasket = (prop) => {
        const exist = state.find((x) => x.id === prop.id)

        console.log('ex',exist);
        if(exist.qty === 1){
            return state.filter((x)=> x.id!==prop.id)
        }
        else{
            return state.map((x)=> x.id ===prop.id ? {...exist, qty:exist.qty - 1}: x)
        }
    }
    

    switch (action.type) {
        case "ADD_LIST":
            return addbasket(action.payload);
            break;
        case "REMOVE_LIST":
            return deleteBasket(action.payload)
        default:
            return state;
            break;
    }
}

export default listReducer;