import {combineReducers} from 'redux';

const count=(state=0,action)=>{
    console.log(state,action);
    switch(action.type){
        case 'Add':
            return state+1;
        default :
            return state;
    }
}

//count-Reducer   count 是state中的属性

const reducer = combineReducers({
    count
})

export default reducer;