export const fiatLoader = async()=>{
    const response = await fetch ("http://localhost:3001/income");
        return response.json()
}

export const cryptoLoader = async()=>{
    const response = await fetch ("http://localhost:3001/crypto");
    return response.json()
}

export const totalLoader = async()=>{
    const response = await fetch ("http://localhost:3001/total");
    return response.json()
}

//expenses loader
export const fiatExpensesLoader = async()=>{
    const response = await fetch ("http://localhost:3001/fiatexpenses");
        return response.json()
}

export const cryptoExpensesLoader = async()=>{
    const response = await fetch ("http://localhost:3001/cryptoexpenses");
    return response.json()
}

export const totalExpensesLoader = async()=>{
    const response = await fetch ("http://localhost:3001/totalexpenses");
    return response.json()
}

//investment loader
export const fiatInvestmentsLoader = async()=>{
    const response = await fetch ("http://localhost:3001/fiatInvestments");
        return response.json()
}

export const cryptoInvestmentsLoader = async()=>{
    const response = await fetch ("http://localhost:3001/cryptoInvestments");
    return response.json()
}

export const totalInvestmentsLoader = async()=>{
    const response = await fetch ("http://localhost:3001/totalInvestments");
    return response.json()
}