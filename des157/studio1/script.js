(function(){
    var myForm = document.querySelector('#myForm');
    var madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var adj = document.querySelector('#adj').value;
        var verb = document.querySelector('#verb').value;

        var formData = document.querySelectorAll("input[type=text]");
        for (var eachField of formData) {
            eachField.value = "";
        }

        var myText;

        if(noun1 && noun2 && adj && verb) {
            myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, ${verb}`;
        } else {
            myText = "Please give me words so I can make your Mad Lib!";
        }

        madlib.innerHTML = myText;
    })
})