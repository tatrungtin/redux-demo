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
    if(action.type === 'SORT'){
        var {by, value } = action.sort;
        var {status} = state;
        return {
            status :status,
            sort :{
                by :by,
                value :value
            }
        };
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

//sort by name
var sortAction  = {
    type :'SORT',
    sort : {
        by :'name',
        value :-1
    }
}
store.dispatch(sortAction);
console.log("SORT:",store.getState());
