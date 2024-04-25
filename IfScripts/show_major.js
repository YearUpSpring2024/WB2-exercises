"use strict";

// intialize the student name
let studentName = "Betty";
let studentMajor = "ENG";

let majorName;
let advisorLo;


if (studentMajor === "BIOL") {
    majorName = "Biology";
    advisorLo = "science bldg, Room 310";
} else if (studentMajor === "CSCI") {
    majorName = "Computer science";
    advisorLo = "Sheppard Hall,Room 314";
}
else if (studentMajor === "ENG") {
    majorName = "English";
    advisorLo = "Kerr Hall, Room 201";
}
else if (studentMajor === "HIST") {
    majorName = "History";
    advisorLo = "Kerr Hall, Room 114";
}
else if (studentMajor === "MKT") {
    majorName = "Marketing";
    advisorLo = "Wesley Hall, Room 310";
}
console.log("Student: " + studentName);
console.log("Major: " + studentMajor);
console.log("Advising Location: " + advisorLo);