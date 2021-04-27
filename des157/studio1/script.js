(function(){
    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const animal = document.querySelector('#animal').value;
    const famousPerson = document.querySelector('#famous').value;
    const product = document.querySelector('#prod').value;
    const company = document.querySelector('#comp').value;

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

    console.log(firstName);

        var formData = document.querySelectorAll("input[type=text]");
        for (var eachField of formData) {
            eachField.value = "";
        }
        
        var myText;

        if(firstName && lastName && animal && famousPerson && product && company) {
            myText = `CONGRATULATIONS to ${firstName} ${lastName} with a(n) ${animal} for collaborating with starting a new Company called ${company} with ${famousPerson} selling ${product}`
        } else {
            myText = "Please give me words so I can make your Mad Lib!";
        }

        madlib.innerHTML = myText;
    })
})