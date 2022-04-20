const btn = document.querySelector('.button');
const state1 = document.querySelector('.page1');
const state2 = document.querySelector('.thankyou');
const given_grade_component = document.querySelector('.given-note');

for(let i = 0;i<5;i++) {
    document.querySelectorAll(".rate")[i].addEventListener("click",
    function(){
        document.querySelectorAll(".rate")[i].classList.add("rateSelected");
    });
}
btn.addEventListener('click', checkButton);

function checkButton(event) {
    //event.preventDefault();
    state1.classList.add('disabled');
    state2.classList.add('active');
    var inputs = document.querySelectorAll(".rate");
   console.log(inputs[1].innerHTML);
    let starvalue = '';
    for (i=0; i < inputs.length; i++) {
        if (inputs[i].classList.contains("rateSelected")) {
            starvalue = inputs[i].innerHTML;
        }
    }
    console.log(starvalue);
    given_grade_component.innerHTML = `<p>You selected ${starvalue} out of 5</p>`;
}