import {createStore} from 'redux';
var initialState = {
    status :false,
    sort :{
        by :'name',
        value :1
    }
}
var myReducer =(state = initialState, action) =>{
    if(action.type === 'TOOGLE_STATUS'){
        state.status = !state.status;
        return  state;
    }
    return  state;
    
}
const store = createStore(myReducer);

//thuc hien cong viec change status

console.log("default:",store.getState());
var action = {
    type :'TOOGLE_STATUS'
};
store.dispatch(action);

console.log("toogle status:",store.getState());
