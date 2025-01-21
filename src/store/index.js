import {createStore} from 'redux';


//reducer function

const counterReducer = (state = {counter : 0},action) =>{
    if(action.type === "increment")
    {
        return {
            counter : state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1
        }
    }

    //neither of the above condition is followed then we will just return the state
    return state;

}


//when we create the store we pass the reducer function
const store = createStore(counterReducer);

export default store;


//subscription function