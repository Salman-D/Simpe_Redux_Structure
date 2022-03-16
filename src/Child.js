import React from 'react'
import {connect} from 'react-redux'
function Child(props) {
    console.log("child props",props)
  return (
    <>
        <div>
            <h1>
                hello i am child 

            </h1>
        </div>
    </>
  )
}

const mapStateToProps = (state)=>({
    data : state.data
})
export default connect(mapStateToProps) (Child)