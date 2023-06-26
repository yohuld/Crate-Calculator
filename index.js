function inputForm(){
	var ele = document.getElementsByName("rarity");
	for (i = 0; i < ele.length; i++){
		if (ele[i].checked)
			return ele[i].value;
	}
}

function atLeastOne(){
	const attempts = parseInt(document.getElementById("crates").value);
	const chance = inputForm();
	const calc = (1 - chance / 100) ** attempts;
	let word, res = 100 * (1 - calc);
	if (res > 99.99 && chance < 100){res -= 0.01;}
	if (res > 7.99 && res < 8.99){word = "an";}
		else if (res > 10.99 && res < 12){word = "an";}
		else if (res > 79.99 && res < 90){word = "an";}
		else {word = "a";}
	document.getElementById("output").innerHTML=`There is ${word} ${res.toFixed(2)}% chance that at least one crate contains the selected rarity`;
}