import decode_token from '../utils/index'

const storeReducer = (state,action)=>{
    const {type,payload} = action

    if(type === 'Logged_in_successfully'){
        state.token = payload.token
        state.userInfo = decode_token(payload.token)
    }
    return state
}

export default storeReducer