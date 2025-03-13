const studentsDetail = document.getElementById("form-area");
// console.log(studentsDetails)

    studentsDetail.addEventListener("submit",(e)=>{
    const users =  JSON.parse(localStorage.getItem("users")) || []

        e.preventDefault();
        const inputValue1 = document.getElementById("input1").value;
        const inputValue2 = document.getElementById("input2").value;
        const inputValue3 = document.getElementById("input3").value;
        const inputValue4 = document.getElementById("input4").value;
        // const inputValue5 = document.getElementById("input5").files[0];
        
        if (!inputValue1 || !inputValue2 || !inputValue3 || !inputValue4) {
            alert("Please fill in all fields.");
             // Exit the function if any field is empty
        }else if(inputValue4 >3){
            alert("only three batch there please enter your correct batch (1-3)")
            
        }else if(inputValue4 <= 0){
            alert("only three batch there please enter your correct batch (1-3)")
            
        }
        else{
            const studentData = {
                name:inputValue1,
                course:inputValue2,
                unit:inputValue3,
                batch:parseInt(inputValue4)
                // val5:inputValue5
            };
            // console.log(studentData);
    
            users.push(studentData)
    
    
            localStorage.setItem("users",JSON.stringify(users));
            // const item = localStorage.getItem(studentData.val3);
            
        
            // studentsDetails = " ";
            // alert("you'r good to go");
            window.location.href = "./dashboard/dash.html";
        }



    });

    const studentsDetails = JSON.parse(localStorage.getItem("users"));
    // console.log(studentsDetail)



    let batch1 = document.querySelector(".count1");
    let batch2 = document.querySelector(".count2");
    let batch3 = document.querySelector(".count3");

    studentsDetails.forEach(student => {
    // const studentsDetails = JSON.parse(localStorage.getItem("users"));

        let batchInt1 = parseInt(batch1.innerHTML);
        // console.log(batchInt1)
        // console.log(batchInt1);
        if(student.batch === 1){
            batchInt1 += 1;
            batch1.innerHTML = batchInt1;
        }else if(student.batch === 2){
            let batchInt2 = parseInt(batch2.innerHTML);
            batchInt2 += 1;
            batch2.innerHTML = batchInt2;
        }else{
            let batchInt3 = parseInt(batch3.innerHTML);
            batchInt3 += 1;
            batch3.innerHTML = batchInt3;
        }
    });

const btn2 = document.querySelector("button");
btn2.addEventListener("click",()=>{
    window.location.href = "../dashboard/dash.html"
})
    
        