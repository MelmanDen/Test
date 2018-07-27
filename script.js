function FirstApp(name, age) {
	alert("Привет, меня зовут " + name +" и это моя первая программа!");

	function ShowSkills() {
		let skills = ["html","css","js"];
		for (let i = 0; i < skills.length; i++){
			document.write("Я немного знаю " +skills[i]+"</br>")
		}
		
		}
		ShowSkills();
		function checkAge() {
			if (age> 18) {
				alert("Вы можете просмотреть страницу");
			} else {
				alert("Слишком мал");
			}
		}
		checkAge();

		function calcPow(num) {
			num=num*num;
			console.log(num);
		}
calcPow(4);

	}

 FirstApp("Danil", 19);








