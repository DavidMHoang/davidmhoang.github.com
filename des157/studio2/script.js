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

    
    book1.addEventListener('click', function() {
        const modal = document.getElementById("book1Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book2.addEventListener('click', function() {
        const modal = document.getElementById("book2Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book3.addEventListener('click', function() {
        const modal = document.getElementById("book3Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book4.addEventListener('click', function() {
        const modal = document.getElementById("book4Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book5.addEventListener('click', function() {
        const modal = document.getElementById("book5Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book6.addEventListener('click', function() {
        const modal = document.getElementById("book6Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book7.addEventListener('click', function() {
        const modal = document.getElementById("book7Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });
    book8.addEventListener('click', function() {
        const modal = document.getElementById("book8Modal");
        
        modal.style.display = "block";
        window.onclick = function(event) {
            if(event.target==modal) {
                modal.style.display = "none";
            }
        }
    });

})();