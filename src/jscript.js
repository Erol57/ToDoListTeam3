function setHamCol(hamburgerID, color) {
    document.getElementById(hamburgerID+'.1').style.backgroundColor = color;
    document.getElementById(hamburgerID+'.2').style.backgroundColor = color;
    document.getElementById(hamburgerID+'.3').style.backgroundColor = color;
    console.log(hamburgerID);
    console.log(document.getElementById(hamburgerID).childElementCount); 
}

function setPlusCol (color) {
    document.getElementById('vertical').style.backgroundColor = color;
    document.getElementById('horizontal').style.backgroundColor = color;
}

function hamClick() {
    console.log('click');
}
    const burgers = document.querySelectorAll(".hamburgerMenu");
    
    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("mouseover", function() {
            setHamCol(this.id, 'red');
        });
    }

    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("mouseout", function() {
            setHamCol(this.id, 'blue');
        });
    }
    
    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("click", function() {
            hamClick();
            console.log(this);
        });
    }