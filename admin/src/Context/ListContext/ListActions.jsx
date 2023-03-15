export const GetlistsStart= () =>({
    type:"Lists_Start",
})
export const GetlistsSuccess= (lists) =>({
    type:"Lists_Success",
    payload:lists,
})
export const GetlistsFailure= () =>({
    type:"Lists_Failure",
})
export const deletelistStart= () =>({
    type:"Delete_List_Start",
})
export const deletelistSuccess= (id) =>({
    type:"Delete_List_Success",
    payload:id,
})
export const deletelistFailure= () =>({
    type:"Delete_List_Failure",
})
export const CreatelistStart= () =>({
    type:"Create_List_Start",
})
export const CreatelistSuccess= (list) =>({
    type:"Create_List_Success",
    payload:list,
})
export const CreatelistFailure= () =>({
    type:"Create_List_Failure",
})