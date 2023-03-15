export const loginStart= () =>({
    type:"Login_Start",
})
export const loginSuccess= (user) =>({
    type:"Login_Success",
    payload:user,
})
export const loginFailure= () =>({
    type:"Login_Failure",
})
export const logout= () =>({
    type:"Logout",
})
