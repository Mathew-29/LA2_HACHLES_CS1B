// CS1B_MHachiles_C1-A1.js

// Storing Student Information
const student1 = {
    firstName: "Mathew",
    middleName: "Hafalla",
    lastName: "Hachiles",
    birthdate: "May 29, 2006",
    birthplace: "Tagudin Hospital, Philippines 2600",
    address: "Barangay Lubong, Sta. Lucia, Ilocos Sur, Philippines 2712",
    course: "Bachelor of Science in Computer Science",
    year: "1st Year",
    dreamJob: "Software Engineer"
};

const student2 = {
    firstName: "Vhardey John",
    middleName: "Fayusal",
    lastName: "Macabenta",
    birthdate: "September 16, 2006",
    birthplace: "Zambales, Philippines 1200",
    address: "Barangay Ayudante, Candon City, Ilocos Sur, Philippines 1210",
    course: "Bachelor of Science in Information Technology",
    year: "1st Year",
    dreamJob: "Businessman"
};

const student3 = {
    firstName: "Lee Alfie",
    middleName: "Ablan",
    lastName: "Sagara",
    birthdate: "February 15, 2006",
    birthplace: "Sta. Cruz, Ilocos Sur, Philippines 1100",
    address: "Barangay Las-Ud, Sta. Cruz, Ilocos Sur, Philippines 1210",
    course: "Bachelor of Science in Information Systems",
    year: "1st Year",
    dreamJob: "Cybersecurity Analyst"
};

function printStudentInfo(student) {
    let fullName = `${student.firstName.toUpperCase()} ${student.middleName.toUpperCase()} ${student.lastName.toUpperCase()}`;
    let sentence = `[${fullName}] was born [${student.birthdate}] at [${student.birthplace}], and currently living at [${student.address}]. [${student.firstName.toLowerCase()}${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()}] is taking up [${student.course.toLowerCase()}] ${student.year.toLowerCase()} and dreams to be [${student.dreamJob}] after graduation.`;
    return sentence;
}

console.log(printStudentInfo(student1));
console.log(printStudentInfo(student2));
console.log(printStudentInfo(student3));
