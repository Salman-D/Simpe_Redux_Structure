import {connect} from "react-redux";
import set_data from './Store/Action'
import "./App.css"
import Child from "./Child";

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <Child/>
       <h1>this data is reducer</h1>
      {props.name}<br/>
      {props.age} <br/>
       <button onClick={()=>props.set_data()}>Age ++</button>
       
    </div>
  );
}

const mapStateToProps = (state)=>({ // use for get state data ye get krta hai function
  // ye state reducer ky folder  ki index se arahi hai state
  name :state.name,
  age :state.age,
  // center :state.center,
})

const mapDispatchToProps=(dispatch)=>({  //function get 

  set_data :()=> dispatch(set_data())

})
// export default connect(mapStateToProps,mapDispatchToProps)(App);

// const mapDispatchToProps = (dispatch)=>({ // Hamare Functions to get kare gah or wo function yaha porah ajaee gah 
//   set_data :()=>dispatch(set_data())
// })
export default connect(mapStateToProps,mapDispatchToProps) (App);
