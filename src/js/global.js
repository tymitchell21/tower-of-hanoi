// Tyler and Missi completed this project
let rods = document.querySelectorAll(".rod");
let clicked = false;
let rod1;
let rod2;

// runs when rod is clicked
function clickedRod (e) {
    // checks to see if previous rod was clicked
    if (clicked) {
        // if previous rod was clicked
            // assigns current clicked rod to rod2
        rod2 = e.currentTarget
        // gets rid of border for rod1
        rod1.lastElementChild.style.border = "none"
        // calls moveRing function
        moveRing()
        // toggles clicked value from true/false
        clicked = !clicked
    // if there isn't a previous clicked rod
    } else if (e.currentTarget.lastElementChild) {
        // assigns current rod to rod1
        rod1 = e.currentTarget
        // gives clicked rod's last child a border
        rod1.lastElementChild.style.border = "2px solid black"
        // toggles clicked value from true/false
        clicked = !clicked
    }
}
// moves ring from first clicked to second
function moveRing () {
    // if second rod has rings on it
    if (rod2.childElementCount > 0){
        // confirms that last child of rod 2's width is larger than last child of rod1
        if (parseInt(rod1.lastElementChild.innerHTML) < parseInt(rod2.lastElementChild.innerHTML)) {
            // moves last child of rod1 to rod2
            rod2.appendChild(rod1.lastElementChild)
        }
    // if second rod doesn't contain any rings
    }else {
        // moves last child of rod1 to rod2
        rod2.appendChild(rod1.lastElementChild)
    }
    // runs checkWin function
    checkWin ()
}

// checks to see if the user has won, and displays "You Won!", if so
function checkWin() {
    // makes sure rod 1 and 2 do not have any children
    if (rods[0].childElementCount === 0 && rods[1].childElementCount === 0) {
        display('You Won!', 'h1', 'win','')
        display('Try Again', 'button', 'win', 'reset')
        document.querySelector('#reset').addEventListener('click', reset)
    }
}

// resets page
function reset() {
    window.location.reload();
}

// function used to add element to existing html element
function display (value, element, id, elementId) {
    // creates p element and adds x to it 
    var newElement = document.createElement(element);
    newElement.id = elementId
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById(id);
    destination.appendChild(newElement);
}

// adds click event lister to each rod
for (let i = 0; i<rods.length; i++) {
    rods[i].addEventListener('click', clickedRod)
}