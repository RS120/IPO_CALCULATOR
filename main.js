// CS10 Grade Calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let SideA = +document.getElementById("a-in").value;
  let SideB = +document.getElementById("b-in").value;

  //Process
  let total = Math.sqrt(SideA ** 2 + SideB ** 2);

  // Output
  document.getElementById("output").innerHTML = total;
}
