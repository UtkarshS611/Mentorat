// Example JSON Data for 5 professors
const professorsData = {
    "professors": [
      {
        "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        "name": "Dr. Birmohan Singh",
        "qualifications": [
          "Ph.D.",
          "M.E."
        ]
      },
      {
        "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        "name": "Dr. Damanpreet Singh",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        "name": "Dr. Major Singh Goraya",
        "qualifications": [
          "Ph.D.",
          "M.Tech",
          "B.Tech"
        ]
      },
      {
        "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
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
      "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
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
      "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      "name": "abcd",
      "qualifications": [
        "B.E.",
        "M.S.",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      "name": "abcd",
      "qualifications": [
        "B.E.",
        "M.S.",
        "Ph.D."
      ]
    },
    {
      "imgSRC": "https://images.unsplash.com/photo-1728763424935-8d2901c74515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      "name": "abcd",
      "qualifications": [
        "B.E.",
        "M.S.",
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
        <button>Book slots</button>
        <button>Contact</button>
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
  