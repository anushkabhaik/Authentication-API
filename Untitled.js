let ParentContainerE1 = document.getElementById("ParentContainer");

const options = {
    method: "GET"
};
const getResponse = async()=>{
    const response = await fetch("https://gorest.co.in/public-api/users", options);
    console.log(response)
    const data = await response.json();
    const updatedData = data.data;
    console.log(updatedData)
    const emailDetails = updatedData.map(each=>{
        let headingE1 = document.createElement("h1");
        headingE1.textContent = `${each.name}`;
        ParentContainerE1.appendChild(headingE1);
    })
    return emailDetails;
}
getResponse();