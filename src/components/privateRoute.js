import React from 'react'
import { connect } from 'react-redux'
import {Route,Navigate} from 'react-router-dom'
import { isEmpty,isLoaded } from 'react-redux-firebase'

function privateRoute({auth,children}) {
  return (
    isLoaded(auth ) && !isEmpty(auth)?children:
        <Navigate to='/'/>
      )
}

const mapStateToProps = (state)=>{
    return {
        auth :state.firebase.auth
    }
}

export default connect(mapStateToProps)(privateRoute)