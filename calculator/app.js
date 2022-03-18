const res = document.querySelector(".calculator__display");
const output = document.querySelector(".output");
const keys = document.querySelectorAll("button");



// add event to buttons 
keys.forEach(k =>{
	k.addEventListener("click", calculate);
})


// define the function calculate()

function calculate(){
	let btnText = this.innerText;
	
	
	if (btnText =="AC"){
		res.innerText="0";
		// animations 
		return;

	}
	if(btnText=="DEL"){
		 output.textContent=output.textContent.substr(0,output.textContent.length-1);
		 return;

	}
	if(btnText==="="){
		res.innerText = eval(output.textContent);
		// animations 

	}
	else{
        output.textContent +=btnText;
	}
}
