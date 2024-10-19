const teachersData = [
    {
      name: "Dr. Anjali Verma",
      slots: [
        { time: "9:00 AM - 10:00 AM", isBooked: false },
        { time: "10:00 AM - 11:00 AM", isBooked: true }, // Already booked
        { time: "11:00 AM - 12:00 PM", isBooked: false }
      ]
    },
    {
      name: "Dr. Rajesh Sharma",
      slots: [
        { time: "1:00 PM - 2:00 PM", isBooked: false },
        { time: "2:00 PM - 3:00 PM", isBooked: false },
        { time: "3:00 PM - 4:00 PM", isBooked: true } // Already booked
      ]
    }
  ];
  
  // Elements
  const bookSlotBtn = document.getElementById("book-slot-btn");
  const bookingForm = document.getElementById("booking-form");
  const teacherSelect = document.getElementById("teacher-select");
  const timeSlotSelect = document.getElementById("time-slot-select");
  const saveSlotBtn = document.getElementById("save-slot-btn");
  const bookingMessage = document.getElementById("booking-message");
  
  // Display the booking form when "Book Slot" button is clicked
  
  bookSlotBtn.addEventListener("click", function() {
  
    // Show the booking form
      bookingForm.classList.remove("hidden");
      
      // Populate teacher options
          populateTeacherOptions();
      });
  
      // Populate teacher dropdown
      function populateTeacherOptions() {
      teacherSelect.innerHTML = ""; // Clear previous options
  
      teachersData.forEach((teacher, index) => {
          const option = document.createElement("option");
          option.value = index; // Save the index of the teacher
          option.textContent = teacher.name;
          teacherSelect.appendChild(option);
      });
  
      // Automatically populate time slots for the first teacher
      populateTimeSlotOptions(0);
  }
  
  // Populate time slot dropdown based on selected teacher
  function populateTimeSlotOptions(teacherIndex) {
    const selectedTeacher = teachersData[teacherIndex];
    timeSlotSelect.innerHTML = ""; // Clear previous options
  
    selectedTeacher.slots.forEach((slot, index) => {
      if (!slot.isBooked) {
        const option = document.createElement("option");
        option.value = index; // Save the index of the slot
        option.textContent = slot.time;
        timeSlotSelect.appendChild(option);
      }
    });
  }
  
  // Change time slots when a new teacher is selected
  teacherSelect.addEventListener("change", function() {
    const selectedTeacherIndex = this.value;
    populateTimeSlotOptions(selectedTeacherIndex);
  });
  
  // Save the selected slot when "Save Slot" button is clicked
  saveSlotBtn.addEventListener("click", function() {
    const selectedTeacherIndex = teacherSelect.value;
    const selectedSlotIndex = timeSlotSelect.value;
  
    if (selectedSlotIndex !== null && selectedSlotIndex !== undefined) {
      // Mark the selected slot as booked
      teachersData[selectedTeacherIndex].slots[selectedSlotIndex].isBooked = true;
  
      // Show booking confirmation
      bookingMessage.textContent = `You have successfully booked ${teachersData[selectedTeacherIndex].slots[selectedSlotIndex].time} with ${teachersData[selectedTeacherIndex].name}.`;
  
      // Hide the form again
      bookingForm.classList.add("hidden");
  
      // Clear selections
      teacherSelect.value = "";
      timeSlotSelect.innerHTML = "";
    }
  });

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Show the popup when "Save Slot" button is clicked
saveSlotBtn.addEventListener("click", function() {
  popup.classList.remove("hidden");
});

// Close the popup when "X" button is clicked
closeBtn.addEventListener("click", function() {
  popup.classList.add("hidden");
});

// Optionally close the popup when clicking outside of it
window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.classList.add("hidden");
  }
});