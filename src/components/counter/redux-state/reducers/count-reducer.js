const initialState = {
    count: 1234
}

//function that calculate the next state by using the prev state as depend on action
const reducer = (prevState = initialState, action) => {
    console.log("Called from down", action)
    switch (action.type){
        case "CLEAR":
            return{
                count: 0
            }
        case "UP":
            return{
                count: prevState.count + 1
            }
        case "DOWN":
            return{
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

export default reducer
