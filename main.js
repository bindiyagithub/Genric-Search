let myArray = [];
let ediColor = -1;

async function getValue() {
    let url = await fetch("https://jsonplaceholder.typicode.com/posts");
    let y = await url.json();
 
    await new Promise((suceess, reject) => 
    {
        if (url.status == 200) 
        {
            suceess(display(y))
        }
        else {
            reject(document.getElementById("tblbody").innerHTML = 
            `<img src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png" alt=""/>`);

        }
    })

}
getValue();

display = (data) => {
    myArray = data;
    kys = Object.keys(data[0]);
    for (const key of Object.keys(data[0])) {
        document.getElementById("tblhead").innerHTML += `<th>${key}</th>`;
    }
    document.getElementById("tblbody").innerHTML += data.map((value) => {
        let text = "";
        for (const key in value) {
            text += `<td>${value[key]}</td>`;

        }
        return `<tr id="${value.id}">${text}</tr>`;
    }).join("");
}

searchData = () => {
    let txt = document.getElementById("txt").value;


    let filterData = myArray.filter((element) => {

        let newData = Object.values(element).join(" ");

        return newData.indexOf(txt) >= 0;
    })
    
    console.log(filterData);

    let tr = document.getElementsByTagName("tr");

    for (const i of tr) {
        document.getElementById(`${i.id}`).style.background = "#fff";
    }

    for (const i of tr) 
    {
        
        for (const j of filterData) {
            if (i.id == j.id) {
                document.getElementById(`${i.id}`).style.background = 
                "yellow";
            }
            
        }
    }

}