formcarry({  
            // replace this "you-form-id-in-formcarry" with your form id that you can get it from the dashboard.
            form: "ZXWGVVejZx",
            // id or class name of the form element, only form element allowed
            // works with css selectors
            // # <= for id
            // . <= for class
            element: "#formulario-registro",
            extraData: {
                // add whatever you want
                screenSize: window.screen.width + " " + window.screen.height,
                language: window.navigator.language,
            },
            // Success callback, you can show alert messages
            // or redirect the user in this function
            onSuccess: function (response) {
                
                const form = document.querySelector('#formulario-registro');
                form.addEventListener("submit", function() {
                    form.reset();
                    window.location.href = "https://educad-gq.com";
                });
                console.log(`Mensaje despues del onSuccess ${response} ${response.status}`, response, response.status)
            },
            // Error callback, a good place to show errors 🗿
            onError: function (error) {

            }
        });  
