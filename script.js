// Student data array
const students = [
    { id: 1, name: "Daniel Gidey", gender: "Male", role: "Web Developer", pic: "studentsImage/img (2).jpg" },
    { id: 2, name: "Hluf Gebremeskel", gender: "Male", role: "Web Developer", pic: "studentsImage/img (1).jpg" },
    { id: 3, name: "Mesele Shushay", gender: "Male", role: "Web Developer", pic: "studentsImage/img (3).jpg" },
    { id: 4, name: "Hlna Gebrehiwot", gender: "Female", role: "Event Orginizer", pic: "studentsImage/img (4).jpg" },
    { id: 5, name: "Mercury Desta", gender: "Male", role: "Representative", pic: "studentsImage/img (5).jpg" },
    { id: 6, name: "Betty Gebremeskel", gender: "Female", role: "Student", pic: "studentsImage/img (6).jpg" },
    { id: 7, name: "Rahel Sahle", gender: "Female", role: "Student", pic: "studentsImage/img (7).jpg" },
    { id: 8, name: "Eden Kidane", gender: "Female", role: "Student", pic: "studentsImage/img (8).jpg" },
    { id: 9, name: "Filimon Gebrelibanos", gender: "Male", role: "Java Developer", pic: "studentsImage/img (9).jpg" },
    { id: 10, name: "Hermela Teklay", gender: "Female", role: "Student", pic: "studentsImage/img (10).jpg" },
    { id: 11, name: "Kibrom Abebe", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 12, name: "Lidya Berhanu", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 13, name: "Asmelash Hadush", gender: "Male", role: "Java developer", pic: "studentsImage/img.jpg" },
    { id: 14, name: "Brhina Wubet", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 15, name: "Meron Embaye", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 16, name: "Filimon Gebretsadik", gender: "Male", role: "Professor", pic: "studentsImage/img.jpg" },
    { id: 17, name: "Angesom Zeru", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 18, name: "Hayelom Takelle", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 19, name: "Soliana Menkir", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 20, name: "Bethelihem Habte", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 21, name: "Alem Desta", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 22, name: "Gebrey Asfaw", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 23, name: "Gedion Aschalew", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 24, name: "Mebrahtom Gebrehiwot", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 25, name: "Gebremeskel Abrha", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 26, name: "Tekle Beyene", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 27, name: "Hilawi Girmachew", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 28, name: "Mikiale Getachew", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 29, name: "Ahsan Mohammed", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 30, name: "Solomon Shmelsh", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 31, name: "Liya Assefa", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 32, name: "Meron Abraha", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 33, name: "Merhawit Teum", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 34, name: "Hadush Tkua", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 35, name: "Nahom Solomon", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 36, name: "Natnael Araya", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 37, name: "Filimon Alem", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 38, name: "Henok Mekonnen", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 39, name: "Betelhem Mekonnen", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 40, name: "Kahsay Asfaw", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 41, name: "Mulu Abadi", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 42, name: "Leeq Gebreegziabhare", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 43, name: "Samuel Tekeste", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 44, name: "Goitom Yohala", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
   /* { id: 45, name: "Sara Mohammed", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 46, name: "Yohannes Tadesse", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 47, name: "Fatima Ahmed", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 48, name: "Tolasa Gemechu", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 49, name: "Bethlehem Haile", gender: "Female", role: "Student", pic: "studentsImage/img.jpg" },
    { id: 50, name: "Dawit Kebede", gender: "Male", role: "Student", pic: "studentsImage/img.jpg" } */
];

// Function to generate table rows
function generateTableRows() {
    const tbody = document.querySelector('.student-table tbody');
    tbody.innerHTML = ''; // Clear existing content

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.role}</td>
            <td><img src="${student.pic}" alt="${student.name}" class="student-pic"></td>
        `;
        tbody.appendChild(row);
    });
}

// Function to search students
function searchStudents(query) {
    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.gender.toLowerCase().includes(query.toLowerCase()) ||
        student.role.toLowerCase().includes(query.toLowerCase())
    );
    
    const tbody = document.querySelector('.student-table tbody');
    tbody.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.role}</td>
            <td><img src="${student.pic}" alt="${student.name}" class="student-pic"></td>
        `;
        tbody.appendChild(row);
    });
}

// Function to sort students
function sortStudents(column) {
    const sortedStudents = [...students].sort((a, b) => {
        if (column === 'id') {
            return a.id - b.id;
        }
        return a[column].localeCompare(b[column]);
    });
    
    const tbody = document.querySelector('.student-table tbody');
    tbody.innerHTML = '';

    sortedStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.role}</td>
            <td><img src="${student.pic}" alt="${student.name}" class="student-pic"></td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize table when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateTableRows();
});

// Scroll Animation Handler
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.info-section, .project-item, .event-item, .stat-item, .achievement-list li, .vision-list li, .info-card');
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-hidden');
        observer.observe(element);
    });
}); 
