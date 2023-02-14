

// ------------------------------------
// option Number 2
// ------------------------------------

function makeRed(){
    document.body.style.backgroundColor = "red";
}
// ------------------------------------
// option Number 3
// ------------------------------------

const makeBlueButton = document.getElementById('make-Blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor ="blue"
}

// ------------------------------------
// option Number 3 anather
// ------------------------------------
const mackyellowButton =document.getElementById('make-yellow');
    mackyellowButton.onclick = function mackyellow(){
        document.body.style.backgroundColor ='yellow'
    }


// ------------------------------------
// option Number 4
// ------------------------------------


const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink);
function makepink(){
 document.body.style.backgroundColor = 'pink'
}


//--------------------------
// option Number 4 anather 
//----------

  const makeGreenButton = document.getElementById('make-green');
  makeGreenButton.addEventListener ('click', function makeGreen(){
      document.body.style.backgroundColor = 'green';
  })
//-------------------
//   finel optionn  document
//------------

document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})