function setHamCol(color) {
    document.getElementById('hamStripe1').style.backgroundColor = color;
    document.getElementById('hamStripe2').style.backgroundColor = color;
    document.getElementById('hamStripe3').style.backgroundColor = color;
}

function setPlusCol (color) {
    document.getElementById('vertical').style.backgroundColor = color;
    document.getElementById('horizontal').style.backgroundColor = color;
}

function hamClick() {
    console.log('click');
}




    const burgers = document.querySelectorAll(".hamburgerMenu");
    
    // for (let i = 0; i < burgers.length; i++) {
    //     burgers[i].addEventListener("mouseover", function() {
    //         setHamCol('red');
    //         console.log(this);
    //     });
    // }

    // for (let i = 0; i < burgers.length; i++) {
    //     burgers[i].addEventListener("mouseout", function() {
    //         setHamCol('blue');
    //     });
    // }
    
    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("click", function() {
            hamClick();
            console.log(this);
        });
    }