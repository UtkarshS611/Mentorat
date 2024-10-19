// Example JSON Data for 5 professors
const professorsData = {
    "professors": [
      {
        "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg",
        "name": "Dr. Birmohan Singh",
        "qualifications": [
          "Ph.D.",
          "M.E."
        ]
      },
      {
        "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg",
        "name": "Dr. Damanpreet Singh",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg",
        "name": "Dr. Major Singh Goraya",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg",
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
      "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg",
      "name": "Dr. Gurjinder Kaur",
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
      "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg",
      "name": "Dr. Amar Nath",
      "qualifications": [
        "B.Tech",
        "M.Tech",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg",
      "name": "Dr. Jagdeep Singh",
      "qualifications": [
        "B.Tech",
        "M.Tech",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
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