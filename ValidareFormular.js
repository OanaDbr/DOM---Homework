function preventD(event){
  event.preventDefault();
}



function exercise1(form, event) {
  event.preventDefault();
	var input1 = form.querySelector("[name='input1']");
	var input2 = form.querySelector("[name='input2']");

	if(input1.value === input2.value){
		input1.classList.add("green-background");
		input2.classList.add("green-background");
	} else {
		input1.classList.remove("green-background");
		input2.classList.remove("green-background");
	}
}

function exercise2(form, event) {
  event.preventDefault();
  var input1 = form.querySelector("[name='input3']");
  var input2 = form.querySelector("[name='input4']");

  if(isNaN(input1.value) || isNaN(input2.value)){
    input1.classList.remove("green-background");
    input2.classList.remove("green-background");
  } else if(parseInt(input1.value) > parseInt(input2.value)){
    input1.classList.add("green-background");
    input2.classList.remove("green-background");
  } else if(parseInt(input1.value) < parseInt(input2.value)){
    input1.classList.remove("green-background");
    input2.classList.add("green-background");
  } else {
    input1.classList.add("green-background");
    input2.classList.add("green-background");
  }
}

function exercise3(form, event) {
  event.preventDefault();
  var input1 = form.querySelector("[name='input5']");
  var input2 = form.querySelector("[name='input6']");
  var input3 = form.querySelector("[name='input7']");

 if (isNaN(input1.value) || isNaN(input2.value) || input1.value === "" || input2.value === "") {
          input3.value = "Please insert numbers";
        } else if (parseInt(input1.value) > parseInt(input2.value)) {
          input3.value = input1.value;
        } else if (parseInt(input1.value) < parseInt(input2.value)) {
          input3.value = input2.value;
        } else {
          input3.value = "input 1 = input 2";
        }
      }

function exercise4(form, event) {
  event.preventDefault();
  var input1 = form.querySelector("[name='input8']");
  var input2 = form.querySelector("[name='input9']");
  var input3 = form.querySelector("[name='input10']");

if (isNaN(input1.value) || isNaN(input2.value) || input1.value === "" || input2.value === "") {
          input3.value = "Please insert numbers";
        } else {
          input3.value = input1.value*input2.value; 
        }
}

 function exercise5() {
        var input1 = document.querySelector("[name='input11']").value;
        document.querySelector("#text-length").innerHTML =
          input1.length + " characters";
      }

 function exercise6(event) {
        var input1 = document.querySelector("[name='input12']");
        document.querySelector("#text-length1").innerHTML =
          input1.value.length + " characters";
        input1.onkeypress = function(event) {
          if (input1.value.length >= 10) {
            event.preventDefault();
            document.querySelector("#text-length1").classList.add("red-color");
          } else if (input1.value.length < 10) {
            document
              .querySelector("#text-length1")
              .classList.remove("red-color");
          }
        };
      }

function exercise7() {
        if (
          (event.keyCode < 47 || event.keyCode > 58) &&
          event.keyCode !== 08
        ) {
          event.preventDefault();
        }
      }