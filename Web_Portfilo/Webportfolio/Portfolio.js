let myLeads =[]
const inputEl = document.getElementById('email-el','name-el','subject-el')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
