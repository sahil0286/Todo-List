const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask()
{
    if(inputBox.value==="")
    {
        alert("Please Write Something");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let editIcon = document.createElement("span2");
        editIcon.innerHTML = "&#8942;";
        li.appendChild(editIcon);
    }
    inputBox.value="";
}

