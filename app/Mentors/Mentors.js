// Example JSON Data for 5 professors
const professorsData = {
    "professors": [
      {
        "imgSRC": "public/images/1.jpg",
        "name": "Dr. Birmohan Singh",
        "qualifications": [
          "Ph.D.",
          "M.E."
        ]
      },
      {
        "imgSRC": "public/images/2.jpg",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "public/images/3.jpg",
        "name": "Dr. Major Singh Goraya",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "public/images/4.jpg",
        "name": "Dr. Manoj Sachan",
        "qualifications": [
          "B.Tech",
          "M.E",
          "Ph.D."
        ]
      }
    ]
};
const associateProfessorsData = {
  "professors": [
    {
      "imgSRC": "public/images/5.jpg",
      "qualifications": [
        "B.E.",
        "M.S.",
        "Ph.D."
      ]
    }
  ]
};
const assistantProfessorsData = {
  "professors": [
    {
      "imgSRC": "public/images/6.jpg",
      "qualifications": [
        "B.Tech",
        "M.Tech",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "public/images/7.jpg",
      "name": "Dr. Jagdeep Singh",
      "qualifications": [
        "B.Tech",
        "M.Tech",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "public/images/8.jpg",
      "name": "Dr. Manminder Singh",
      "qualifications": [
        "B.Tech",
        "M.Tech",
        "Ph.D."
      ]
    }
  ]
};

  // Function to display professor data
  function displayProfessorData() {
    const professorContainer = document.getElementById('professor-container');
  
    // Use map to create HTML for each professor
    professorsData.professors.map(prof => {
      // Create a new div for each professor
      const professorDiv = document.createElement('div');
      professorDiv.classList.add('profile')
  
      // Add HTML content to the div for each professor
      professorDiv.innerHTML = `
        <img src=${prof.imgSRC} alt="">
        <strong>Name:</strong> ${prof.name} <br>
        <strong>Qualifications:</strong> ${prof.qualifications.join(', ')}
        <div class="btn">
        <button id="BOOK">Book slots</button>
        <button id="Contact">Contact</button>
        </div>
      `;
  
      professorContainer.appendChild(professorDiv);
    });
  }
  function displayAssociateProfessorData() {
    const professorContainer = document.getElementById('associate-professor-container');
  
    // Use map to create HTML for each professor
    associateProfessorsData.professors.map(prof => {
      // Create a new div for each professor
      const professorDiv = document.createElement('div');
      professorDiv.classList.add('profile')
  
      // Add HTML content to the div for each professor
      professorDiv.innerHTML = `
        <img src=${prof.imgSRC} alt="">
        <strong>Name:</strong> ${prof.name} <br>
        <strong>Qualifications:</strong> ${prof.qualifications.join(', ')}
        <div class="btn">
        <button>Book slots</button>
        <button>Contact</button>
        </div>
      `;
  
      professorContainer.appendChild(professorDiv);
    });
  }
  function displayAssistantProfessorData() {
    const professorContainer = document.getElementById('assistant-professor-container');
  
    // Use map to create HTML for each professor
    assistantProfessorsData.professors.map(prof => {
      // Create a new div for each professor
      const professorDiv = document.createElement('div');
      professorDiv.classList.add('profile')
  
      // Add HTML content to the div for each professor
      professorDiv.innerHTML = `
        <img src=${prof.imgSRC} alt="">
        <strong>Name:</strong> ${prof.name} <br>
        <strong>Qualifications:</strong> ${prof.qualifications.join(', ')}
        <div class="btn">
        <button>Book slots</button>
        <button>Contact</button>
        </div>
      `;
  
      professorContainer.appendChild(professorDiv);
    });
  }

  function menuToggle() {
    var mobile_nav = document.querySelector('.sidebar_Pages_mob');
    mobile_nav.classList.toggle('menu_animation');
}
  
  // Call the function to display data
  displayProfessorData();
  displayAssociateProfessorData();
  displayAssistantProfessorData();