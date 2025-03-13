const studentList = document.querySelector(".studentList");
const studentsDetails = JSON.parse(localStorage.getItem("users"));


function showData(){
    const studentsDetails = JSON.parse(localStorage.getItem("users"));
    studentList.innerHTML = " "
    studentsDetails.forEach((student)=>{
        const studentDiv = document.createElement("div");
        studentDiv.className = "studentDiv";
        studentDiv.innerHTML = 
        `<div>
            Student Name - ${student.name},&nbsp;&nbsp; &nbsp; &nbsp;
            course - ${student.course},&nbsp;&nbsp; &nbsp; &nbsp;
            Unit - ${student.unit},&nbsp;&nbsp; &nbsp; &nbsp;
            Batch - ${student.batch}.
        </div>
        <button onclick = "removeStudent()" class="btn">Remove</button>
        `
        // const button = document.createElement("button");
        // button.className = "btn";
        
        studentList.appendChild(studentDiv)
    })
}

// let batch1 = 0;
// let batch2 = 0;
// let batch3 = 0;
//     studentsDetails.forEach(student =>{
//         if(student.batch ===1){
//             batch1++
//         }else if(student.batch ===2){
//             batch2++
//         }else{
//             batch3++
//         }
//     })
    // console.log(batch1);
    // console.log(batch2);
    // console.log(batch3);

function batchCount(){
    let batch1 = document.querySelector(".count1");
    let batch2 = document.querySelector(".count2");
    let batch3 = document.querySelector(".count3");

    batch1.innerHTML = 0;
    batch2.innerHTML = 0;
    batch3.innerHTML = 0;
    // console.log(batchInt1)

    studentsDetails.forEach(student => {
        let batchInt1 = parseInt(batch1.innerHTML);
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

}

// function removeStudent(){
//     const studentsDetails2 = localStorage.getItem("users");
//     // console.log(studentsDetails2)
//     // studentsDetails2.slice(1 , 3)
//     // console.log(studentsDetails2)

//     const studentDiv = document.querySelector(".studentDiv");
//     console.log(studentDiv)

//     // studentDiv.addEventListener("click" , function(e){
//     //     if(e.target.className === "btn"){
//     //         console.log("studentdelete")
//     //     }
//     // })
// }


function removeStudent(index) {
    // Remove the student from the array
    studentsDetails.splice(index, 1);
    
    // Update local storage
    localStorage.setItem("users", JSON.stringify(studentsDetails));
    
    // Re-render the student list and batch counts
    showData();
    batchCount();
}

batchCount()
showData()

// function removeStudent(){
//     const button = document.querySelectorAll(".btn");
//     const studentsDetails2 = JSON.parse(localStorage.getItem("users"));
//     const studentDiv = document.querySelector(".studentDiv");
//     studentDiv.addEventListener("click" , function(e){
//         if(e.target.className === "btn"){
//             console.log("studentdelete")
          
//             e.target.parentElement.remove()
                
    
            
//         }
//     })
// }

const backButton = document.querySelector(".btn2");
backButton.addEventListener("click",()=>{
    window.location.href = "../index.html"
})