// const state ={
//     name:'gustavo',
//     logged:true
// }

import { TypeFlags } from "typescript";


 export const authReducer=(state={},action)=>{
switch (action.type) {
    case TypeFlags.login:
    return{
        ...action.payload,
        logged:true
    }
    case TypeFlags.login:
    return{
        logged:false
    }

    default:
        return state
}


}