const courses = [];
const students = [];

// Cursus toevoegen
document.getElementById("addCourse").addEventListener("click", () => {
    const title = document.getElementById("courseTitle").value;
    const description = document.getElementById("courseDesc").value;
    if (title && description) {
        courses.push({ title, description, modules: [] });
        updateCourseList();
        updateCoursePicker();
    }
});

function updateCourseList() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = courses.map(c => `<p>${c.title}: ${c.description}</p>`).join("");
}

function updateCoursePicker() {
    const coursePicker = document.getElementById("coursePicker");
    coursePicker.innerHTML = courses.map(c => `<option value="${c.title}">${c.title}</option>`).join("");
}

// Studenten inschrijven
document.getElementById("enrollStudent").addEventListener("click", () => {
    const name = document.getElementById("studentName").value;
    const course = document.getElementById("coursePicker").value;
    if (name && course) {
        let student = students.find(s => s.name === name);
        if (!student) {
            student = { name, enrolledCourses: [], grades: {} };
            students.push(student);
        }
        student.enrolledCourses.push(course);
        updateStudentList();
        updateStudentPicker();
    }
});

function updateStudentList() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = students.map(s => `<p>${s.name}: ${s.enrolledCourses.join(", ")}</p>`).join("");
}

function updateStudentPicker() {
    const studentPicker = document.getElementById("studentPicker");
    studentPicker.innerHTML = students.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
    document.getElementById("reportStudent").innerHTML = studentPicker.innerHTML;
}

// Scores toekennen
document.getElementById("addGrade").addEventListener("click", () => {
    const studentName = document.getElementById("studentPicker").value;
    const grade = parseFloat(document.getElementById("moduleGrade").value);
    if (studentName && !isNaN(grade)) {
        let student = students.find(s => s.name === studentName);
        if (student) {
            student.grades[studentName] = grade;
        }
    }
});

// Rapport genereren
document.getElementById("generateReport").addEventListener("click", () => {
    const studentName = document.getElementById("reportStudent").value;
    let student = students.find(s => s.name === studentName);
    if (student) {
        document.getElementById("reportOutput").innerHTML = `<p>${student.name}: ${JSON.stringify(student.grades)}</p>`;
    }
});
