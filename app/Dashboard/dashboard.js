const MentorBTN = document.querySelector('#Mentor')
const bookBTN = document.querySelector('#BOOK')
const contactBTN = document.querySelector('#Contact')

const faculty = document.querySelector('.faculty')
const Slot = document.querySelector('.Slots')
const contact = document.querySelector('.contact_mentor')

MentorBTN.addEventListener('click', function(){
    faculty.classList.remove('hidden')
    Slot.classList.add('hidden')
    contact.classList.add('hidden')
})
bookBTN.addEventListener('click', function(){
    faculty.classList.add('hidden')
    contact.classList.add('hidden')
    Slot.classList.remove('hidden')
})
contactBTN.addEventListener('click', function(){
    Slot.classList.add('hidden')
    faculty.classList.add('hidden')
    contact.classList.remove('hidden')
})