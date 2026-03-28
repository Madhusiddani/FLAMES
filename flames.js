const btn = document.querySelector("#Checkbtn");
btn.addEventListener("click",()=>{
    let name1 = document.querySelector("#name1").value.toLowerCase().trim();
    let name2 = document.querySelector("#name2").value.toLowerCase().trim();

    if(name1==="" || name2 === ""){
        alert("Please enter names");
        return;
    }

    name1 = name1.replace(/\s/g, "");
    name2 = name2.replace(/\s/g, "");

    let arr1=name1.split("");
    let arr2=name2.split("");

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                arr1[i]="";
                arr2[j]="";
                break;
            }
        }
    }
    let count = arr1.join("").length + arr2.join("").length;
    let flames = ["F", "L", "A", "M", "E", "S"];
    let index=0;

    while(flames.length>1){
        index =(index+count -1) % flames.length;
        flames.splice(index,1);
    }
    const resultMap = {
        F: "Friends 🤝",
        L: "Love ❤️",
        A: "Affection 😊",
        M: "Marriage 💍",
        E: "Enemy 😡",
        S: "Siblings 👨‍👩‍👧"
    };
    let result = resultMap[flames[0]];

    document.querySelector("#result").innerText = result;
})