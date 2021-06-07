(function(){

    "use strict";

    const windSound = new Audio('./media/wind.wav');

    alert("Hello \n Please test the scrolling to see if it will follow \n Please test tapping on an icon \n Please test the sound if it is working")
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");

    item3.addEventListener('click', function() {
        const modal = document.getElementById("item3Modal");
        
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
        document.getElementById(`item${i}`).addEventListener('click', function() {
            var modal = document.getElementById(`item${i}Modal`);
            
            modal.style.display = "block";
            window.onclick = function(event) {
                if(event.target==modal) {
                    modal.style.display = "none";
                }
            }
        })
    }

})();