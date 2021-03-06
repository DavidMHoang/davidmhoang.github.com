(function(){

    "use strict";

    const book1 = document.getElementById("book1");
    const book2 = document.getElementById("book2");
    const book3 = document.getElementById("book3");
    const book4 = document.getElementById("book4");
    const book5 = document.getElementById("book5");
    const book6 = document.getElementById("book6");
    const book7 = document.getElementById("book7");
    const book8 = document.getElementById("book8");

    book3.addEventListener('click', function() {
        const modal = document.getElementById("book3Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }

        function zeroPad(num, places) {
            var zero = places - num.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + num;
        }
        
        document.addEventListener('mousemove', reportPos);
        const theImg = document.getElementById("sunset");
        let prevLoc = 0;

        function reportPos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 1400;
        const xPos = event.clientX;
        const changePhoto = zeroPad(Math.floor(xPos / percent2px)+1, 5);
        zeroPad(changePhoto, 5);
        if (changePhoto !== prevLoc) {
                theImg.src = `minecraft/scene${changePhoto}.jpg`;
                prevLoc = changePhoto;
                console.log(prevLoc);
            }
        }

    });

    for (let i=1; i<9; i++) {
        document.getElementById(`book${i}`).addEventListener('click', function() {
            var modal = document.getElementById(`book${i}Modal`);
            
            modal.style.display = "block";
            window.onclick = function(event) {
                if(event.target==modal) {
                    modal.style.display = "none";
                }
            }
        })
    }

})();