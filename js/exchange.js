//exchange calculator
(function(){
    let pricePounds;
    let exchangeRate;
    let priceEuros;

    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');

    convertForm.addEventListener('submit', (ev) => {
        ev.preventDefault(); //prevent the page to reload/refresh
        console.dir(ev.target);
        console.info(document.getElementById('pounds').value);

        priceEuros = 0;
        exchangeRate = 0.87;
        //only takes in a float and use it - ex. 56 pounds is fine
        pricePounds = parseFloat(document.getElementById('pounds').value); 

        //conversion to be displayed into the console
        priceEuros = pricePounds*exchangeRate;
        console.info(priceEuros)

        //if the user input is not a number
        if(isNaN(pricePounds)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        }
        else{
            //if input is 0
            if(pricePounds === 0){
                msg.style.display = "block";
                msg.innerHTML = "You must enter more than zero."
                msg.setAttribute('class', 'error');
            }else{
                priceEuros = pricePounds * exchangeRate;
                msg.style.display = "block";
                priceEuros = priceEuros.toFixed(2);
                msg.innerHTML = "You will get &euro;"+priceEuros;
                msg.removeAttribute('class');

                // the 'focus' event triggered when the input field receives focus or is clicked when tried to enter a new one 
                document.getElementById('pounds').addEventListener('focus', () =>{
                    this.value = ""; //this.value refers to the value in the input field
                    msg.innerHTML = ""; //removes the msg
                    msg.removeAttribute('class'); 
                });
            }
            
        }
        
    })
})();
 