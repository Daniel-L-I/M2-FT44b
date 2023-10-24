const divs = document.querySelectorAll(".divNumbers");

console.log(divs);

divs.forEach((ele) => {
  ele.addEventListener("click", function () {
    let amarillo = "rgb(233, 255, 112)";
    let gris = "rgb(240, 234, 210)";
    if (ele.style.backgroundColor === amarillo)
      ele.style.backgroundColor = gris;
    else {
      ele.style.backgroundColor = amarillo;
    }
  });
});