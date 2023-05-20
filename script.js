let users =[
    {
        Id: "1.",
        name: "John",
        profession: " Developer",
        Age: "18"
    },
    {
        Id: "2.",
        name: "Jack",
        profession: " Developer",
        Age: "20"
    },
    {
        Id: "3.",
        name: "Karen",
        profession: " Admin",
        Age: "19"
    },
]


let usersContainer= document.getElementById("insert");

function userData() {
    for(let i=0;i<users.length;i++){
    let userElement = document.createElement("div");
    userElement.className="insertName";
    userElement.innerText = users[i].Id +   " Name:   "+users[i].name + " Profession:   "+users[i].profession + " Age:   " +users[i].Age;
    usersContainer.append(userElement);[           ]
    }
}
userData();

let index = 4;
function addElementInDatabase(){
    let values = document.getElementsByTagName("input");
    let object = {
        id: "",
        name:"",
        profaession:"",
        age:""
    }
    object.id = index++;
    object.name = values[0].value;
    object.profession = values[1].value;
    object.age = values[2].value;
    users.push(object);

    let elements = document.createElement("div");
    elements.className ="insertName";
    elements.innerText = index + " Name: "+object.name + " Profession: "+object.profession + " Age: " +object.age;
    usersContainer.append(elements);

    console.log(users);

    
    
}
