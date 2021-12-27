

const fun=()=>{
    const temprs=document.getElementById("tempr").value;
    const tempselect=document.querySelector("#temp_enter");
let select=temp_enter.options[tempselect.selectedIndex].value;
     console.log(select)

let result;
if(select==="celc"){
result = celctofeh(temprs);
const submits = document.querySelector("#result").innerHTML=`${result} fahrenheit`

}else{
    result = fehtocelc(temprs);
const submits = document.querySelector("#result").innerHTML=`=${result} celcius`
}
}
celctofeh=(cel)=>{
     let total=cel*5/9+32
     return total;
     
}

fehtocelc=(cel)=>{
    let total=(cel-32)*9/5
    return total;
    
}



