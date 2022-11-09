

function setHamCol(color) {
    document.getElementById('hamStripe1').style.backgroundColor = color;
    document.getElementById('hamStripe2').style.backgroundColor = color;
    document.getElementById('hamStripe3').style.backgroundColor = color;
}


function hamClick() {
    console.log('click');
}

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//       alertMessage();
//     });
//   }