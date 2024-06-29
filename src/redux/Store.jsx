import { createStore } from "redux";

const reducer = (state=0,action)=>{
 switch(action.type){
    case "increasement":
        return state+1;
    case 'decreasement':
        //console.log("hello sa")
        if(state>0){
            return state-1;
        }
        case 'Tamount':
            return state*2;
        
    default:
        return state; 
 }
}
export const store = createStore(reducer)