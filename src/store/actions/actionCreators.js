
export const incNumber = (amount) => {
  return {
      type: "INCREMENT",
      payload: amount
  }
}

export const decNumber = (amount) => {
  return {
      type: "DECREMENT",
      payload: amount
  }

}



export const engLanguage = (choose) => {
  return {
      type: "ENGLISH",
      payload: choose
  }
}

export const arLanguage = (choose) => {
  return {
      type: "ARABIC",
      payload: choose
  }
}



export const loginUser = (loginOut) => {
  return {
      type: "USER",
      payload: loginOut
  }
}

export const isLoading = (loading) => {
  return {
      type: "LOADING",
      payload: loading
  }
}

export const isNotLoading = (loading) => {
  return {
      type: "NOTLOADING",
      payload: loading
  }
}

export const addProjectData = (prdata) =>{
  return{
    type:'PRDATA',
    payload:prdata
  }
}

export const AllProjectData = (allprdata) =>{
  return{
    type:'ALLPRDATA',
    payload:allprdata
  }
}

export const AllOrganicData = (organic) =>{
  return{
    type:'ORGANIC',
    payload:organic
  }
}
export const GetCountry = (getcountry) =>{
  return{
    type:'GETCOUNTRY',
    payload:getcountry
  }
}