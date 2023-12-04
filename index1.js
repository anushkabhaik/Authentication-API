const url = "https://apis.ccbp.in/jokes/random";
const getresponse = fetch(url);

getresponse.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

function getsynch(){
    
}