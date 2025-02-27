document.addEventListener("DOMContentLoaded", () => {
    const students = {
        Alex: [],
        Sam: [],
        Jo: []
    };

    const studentSelect = document.getElementById("student");
    const courseInput = document.getElementById("course");
    const gradeInput = document.getElementById("grade");
    const addGradeButton = document.getElementById("addGradeButton");
    const studentOverview = document.getElementById("studentOverview");

    function updateOverview() {
        studentOverview.innerHTML = "";
        for (const [student, grades] of Object.entries(students)) {
            if (grades.length === 0) continue;
            
            const studentDiv = document.createElement("div");
            studentDiv.innerHTML = `<h3>${student}</h3>`;
            
            let total = 0, highest = -Infinity, lowest = Infinity;
            const list = document.createElement("ul");
            
            for (const { course, grade } of grades) {
                total += grade;
                if (grade > highest) highest = grade;
                if (grade < lowest) lowest = grade;
                list.innerHTML += `<li>${course}: ${grade}/20</li>`;
            }
            
            const average = (total / grades.length).toFixed(2);
            studentDiv.innerHTML += `<p>Gemiddelde score: ${average}</p>`;
            studentDiv.innerHTML += `<p>Hoogste score: ${highest}</p>`;
            studentDiv.innerHTML += `<p>Laagste score: ${lowest}</p>`;
            studentDiv.appendChild(list);
            studentOverview.appendChild(studentDiv);
        }
    }

    addGradeButton.addEventListener("click", () => {
        const student = studentSelect.value;
        const course = courseInput.value.trim();
        const grade = parseFloat(gradeInput.value);

        if (course === "" || isNaN(grade) || grade < 0 || grade > 20) {
            alert("Voer een geldige vaknaam en score in (0-20).");
            return;
        }
        
        students[student].push({ course, grade });
        courseInput.value = "";
        gradeInput.value = "";
        updateOverview();
    });
});
