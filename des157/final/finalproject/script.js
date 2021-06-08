(function(){

    "use strict";

    const windSound = new Audio('./media/wind.wav');

    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");
    const soundHandler = document.getElementById("soundControl");

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