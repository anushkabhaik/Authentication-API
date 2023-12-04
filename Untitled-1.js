const url = "https://apis.ccbp.in/jokes/random";
const forResponse = async()=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

forResponse()