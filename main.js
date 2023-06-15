const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      myName = document.getElementById("name"),
      focus = document.getElementById("focus"),
      focusQues = document.getElementById("focusQues");

      const showAmPm = true;
      // Show Time Function 
      function showTime () {
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

            // create AM PM 
            const amPm = hour >= 12 ? 'PM' : 'AM';

            // 12 hours convert 

            hour = hour % 12 || 12 ;

            // show time output 

            time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : ''}`;

            setTimeout(showTime, 1000);
      }

// add zero to the time function 

     function addZero (n){
        return (parseInt(n,10) < 10 ? '0' : '' ) + n ;
      }



      // Background and greetings change 

      function setBackgroundGreet (){
            let today = new Date(),
                hour = today.getHours();
                // Good morning 
                if (hour < 12 ){
                    document.body.style.background = "url('../img/morning.jpg')";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.color = "#000";
                    greeting.textContent = " hi ! Good morning ";

                }
                // Good Afternoon
                else if (hour < 18 ){
                    document.body.style.background = "url('../img/afternoon.jpg')";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.color = "#000";
                    greeting.textContent = " hi ! Good Afternoon ";
                    time.style.color = "#ffff";
                    greeting.style.color = "#ffff";
                    myName.style.color = "#ffff";
                    focusQues.style.color = "#ffff";
                    focus.style.color = "#ffff";

                }
                // Good Evening
                else {
                    document.body.style.background = "url('../img/evening.jpg')";
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.color = "#000";
                    greeting.textContent = " hi ! Good Evening ";
                    time.style.color = "#ffff";
                    greeting.style.color = "#ffff";
                    myName.style.color = "#ffff";
                    focusQues.style.color = "#ffff";
                    focus.style.color = "#ffff";

                }
      }

// Get name function

      function getName() {
                if(localStorage.getItem('myName')== null){
                    myName.textContent = '[Enter your Name]'
                } else {
                    myName.textContent = localStorage.getItem('myName');
                }
      }


// Set Name 
      function setName (e) {
            if(e.type === 'keypress'){
                if(e.which == 13 || e.keycode == 13){
                    localStorage.setItem('myName', e.target.innerText);
                    myName.blur();
                }
            } else {
                localStorage.setItem('myName', e.target.innerText);
            }
      }



// Get focus 
function getFocus(){
    if(localStorage.getItem('focus') == null){
        focus.textContent = '[Enter Your Focus]'
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus 
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

// add event listiner 

// myName event listner
myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);

/// focus event listener 
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
      


// Function calls
      // Time Show function
      showTime();
      // Get Name Function
      getName();
      // Get Focus Function
      getFocus();
      // Background and greeting changing function
      setBackgroundGreet();
