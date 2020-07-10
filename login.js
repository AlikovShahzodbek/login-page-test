function login(){	
	let persons = [
	{name: "Albatross", password: '2117', age: 26},
	{name: "wr_promotion", password: '03142805', age: 15},
	{name: "Ozod", password: '0211', age: 23},
	{name: "Shohjahon", passsword: '0101', age: 17}
	]
	if (document.getElementById("name").value == persons[0].name && document.getElementById("pass").value == persons[0].password ){
		if (persons[0].age <= 10) {
			document.write("Salom bolakay");
		}
		if (persons[0].age <= 20 && persons[0].age > 10){
			document.write("Salom")
		}
		if(persons[0].age <= 40 && persons[0].age > 20){
			document.write("Assalomu alaykum")
		}
		if(persons[0].age > 40){
			document.write ("Assalomu alaykum doda")
		}
	}
	if (document.getElementById("name").value == persons[1].name && document.getElementById("pass").value == persons[1].password ){
		if (persons[1].age <= 10 && persons[1].age > 0) {
			document.write("Salom bolakay");
		}
		if (persons[1].age <= 20 && persons[1].age > 10){
			document.write("Salom")
		}
		if(persons[1].age <= 40 && persons[1].age > 20){
			document.write("Assalomu alaykum")
		}
		if(persons[1].age > 40){
			document.write ("Assalomu alaykum doda")
		}
		
	}
	if (document.getElementById("name").value == persons[2].name && document.getElementById("pass").value == persons[2].password ){
		if (persons[2].age <= 10 && persons[2].age > 0) {
			document.write("Salom bolakay");
		}
		if (persons[2].age <= 20 && persons[2].age > 10){
			document.write("Salom")
		}
		if(persons[2].age <= 40 && persons[2].age > 20){
			document.write("Assalomu alaykum")
		}
		if(persons[2].age > 40){
			document.write ("Assalomu alaykum doda")
		}
		
	}
	if (document.getElementById("name").value == persons[3].name && document.getElementById("pass").value == persons[3].password ){
		if (persons[3].age <= 10 && persons[3].age > 0) {
			document.write("Salom bolakay");
		}
		if (persons[3].age <= 20 && persons[3].age > 10){
			document.write("Salom")
		}
		if(persons[3].age <= 40 && persons[3].age > 20){
			document.write("Assalomu alaykum")
		}
		if(persons[3].age > 40){
			document.write ("Assalomu alaykum doda")
		}
		
	}
	if (document.getElementById("name").value !== persons.name && document.getElementById("pass").value !== persons.password ){
		document.write("Login yoki parol xato! Iltimos qaytadan urunib ko'ring")
	}
}
function pass(){
	let password = document.getElementById("pass");
	let show = document.getElementById("hide1");
	let hide = document.getElementById("hide2");
	if(password.type === "password"){
		password.type = "text";
		show.style.display = "block";
		hide.style.display = "none";
	}
	else{
		password.type = "password";
		show.style.display = "none";
		hide.style.display = "block";
	}
}