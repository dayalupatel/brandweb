// JAVASCRIPT FOR BRANDS WEBSITE


        //1//
        window.addEventListener("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })

        //2//
        function toggle() {
            var header = document.querySelector("header");
            header.classList.toggle("active");
        }
        //3//
        // Get the modal
        var modal = document.getElementById('id01');

       // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
             if (event.target == modal) {
            modal.style.display = "none";
            }
          }
