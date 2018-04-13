function () {

    window.addEventListener('load', function () {

        let form = document.querySelector('form')

        form.addEventListener('submit', function (event) {

            event.preventDefault(); 

            let allfields = document.querySelectorAll('input')
            let allwarnings = document.querySelectorAll('small.warning')
                  
            for(let i = 0; i < allfields.length; i++ ) {

                if (allfields[i].type != "checkbox") {

                    (allfields[i].value == "") ? allwarnings[i].style.display = "block" : allwarnings[i].style.display = "none"; 
                }
            }
        })
    })

()}


