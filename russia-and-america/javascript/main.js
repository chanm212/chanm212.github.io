var one = document.getElementById("myRangeOne");

// Update the current slider value (each time you drag the slider handle)
one.oninput = function() {
  var onevalue = one.value;
  console.log(onevalue);
}
document.cookie = "value=onevalue"

var two = document.getElementById("myRangeTwo");

// Update the current slider value (each time you drag the slider handle)
two.oninput = function() {
  var twovalue = two.value;
  console.log(twovalue);
}

var three = document.getElementById("myRangeThree");

// Update the current slider value (each time you drag the slider handle)
three.oninput = function() {
  var threevalue = three.value;
  console.log(threevalue);
}
