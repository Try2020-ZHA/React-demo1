// import {createReducer} from '@reduxjs/toolkit';

// const initState={
//   sum:0
// }

// export default createReducer(initState,{
//   [ADD_NUMBER]:((state,action)=>({sum:state.sum+ action.payload.number}))
// })

export default (state = {sum:0}, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        return {
          sum: state.sum + action.number
        }
      case 'SUB_NUMBER':
        return {
          sum: state.sum - action.number
        }
      default:
        return state
    }
  }