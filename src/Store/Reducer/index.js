//First starting
//Initial_store yaha state banee jarahi hai 

const Initial_State ={
    name :"Salman",
    age : 100,
    data:12,
    center : "SMIT"
}

//  or yaha par  hum isko is file se bhar bhaj rahy hai 

 export default ( state = Initial_State,action )=>{
     console.log(action)
     switch(action.type){
         case "set data":
             return({
                 ...state,
                 age: state.age+10
             })
     }
     return state;
 }