
import getData from "./getData.js"



// async function logData (){
//     
//     console.log(await getData(1));
// }
// logData();

const logData = async ()=>{
    
    const result = await getData(1);
    console.log(result);
}
logData();