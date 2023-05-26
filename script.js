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
    saveData()
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
    else if(e.target.tagName==="SPAN2")
    {
        console.log(e.target.parentElement.innerText)
        let taskString=e.target.parentElement.innerText;
        let newString="";
        for(let i=0; i<taskString.length-3; i++)
        {
            newString+=taskString[i];
        }
        inputBox.value=newString;
        e.target.parentElement.remove();
        saveData()
    }

},false)

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData()
{
    listContainer.innerHTML=localStorage.getItem("data")
}

showData()