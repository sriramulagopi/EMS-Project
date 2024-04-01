let Employee1 = {
    Name:"Asif",
    Role:"Designer",
    Salary:"24LPA",
    PhoneNo:8121719080,
    Email:"asif1234@gmail.com",
    Company:"Google",
}
let count = 0;
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const div2 = document.querySelector(".div2");
const btn1 = document.querySelector(".div1>button");
function addEmployee(employee){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText=++count;
    tr.appendChild(td);
    for (let i in employee){
        let td = document.createElement("td");
        td.innerText=employee[i];
        tr.appendChild(td);
    }
    let td1 = document.createElement("td");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.innerText="Delete";
    button2.innerText="Edit";
    td1.append(button1,button2)
    tr.appendChild(td1)
    button1.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.remove();
    })
    button2.addEventListener("click",edit) 
    tbody.appendChild(tr);
}
addEmployee(Employee1);
btn1.addEventListener("click",()=>{
    formFunction(1);
    Added();
})

function formFunction(a,b){
    if(a===1){
        form.addEventListener("submit",addingEmployee);
    }
    else{
        form.addEventListener("submit",editEmployee);
    }
    function editEmployee(e){
        e.preventDefault();
        b[1].innerText=e.target.name.value,
        b[2].innerText=e.target.role.value,
        b[3].innerText=e.target.salary.value,
        b[4].innerText=e.target.phoneno.value,
        b[5].innerText=e.target.email.value,
        b[6].innerText=e.target.companyname.value,
        Added();
        form.removeEventListener("submit",editEmployee);
        form.reset();
    }
}
function Added(){
    let display = getComputedStyle(div2).display;
    if(display==="flex"){
        div2.style.display="none";
    }
    else{
        div2.style.display="flex";
    }
}
function edit(e){
    form.removeEventListener("submit",addingEmployee);
    Added();
    let children = e.target.parentNode.parentNode.children;
    formFunction(2,children);
    for (let i=1;i<children.length-1;i++){
        form.children[i].value=children[i].innerText;
    }
}
function addingEmployee(e){
    e.preventDefault();
    let employee = {
        Name:e.target.name.value,
        Role:e.target.role.value,
        Salary:e.target.salary.value,
        PhoneNo:e.target.phoneno.value,
        Email:e.target.email.value,
        Company:e.target.companyname.value
    }
    addEmployee(employee);
    Added();
    form.reset();
}



// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let employee = {
//         Name:e.target.name.value,
//         Role:e.target.role.value,
//         Salary:e.target.salary.value,
//         PhoneNo:e.target.phoneno.value,
//         Email:e.target.email.value,
//         Company:e.target.companyname.value
//     }
//     addEmployee(employee);
//     Added();
//     form.reset();
// })