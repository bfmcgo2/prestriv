var names = ["george washington",
 "john adams",
 "thomas jefferson",
 "james madison",
 "james monroe",
 "john quincy adams",
 "andrew jackson",
 "martin van buren",
 "william henry harrison",
 "john tyler",
 "james polk",
 "zachary taylor",
 "millard fillmore",
 "franklin pierce",
 "james buchanan",
 "abraham lincoln",
 "andrew johnson",
 "ulysses s grant",
 "rutherford b hayes",
 "james garfield",
 "chester a arthur",
 "grover cleveland",
 "benjamin harrison",
 "grover cleveland",
 "william mckinley",
 "theodore roosevelt",
 "william howard taft",
 "woodrow wilson",
 "warren g harding",
 "calvin coolidge",
 "herbert hoover",
 "franklin d roosevelt",
 "harry truman",
 "dwight d eisenhower",
 "john f kennedy",
 "lyndon b johnson",
 "richard nixon",
 "gerald ford",
 "jimmy carter",
 "ronald reagan",
 "george bush",
 "bill clinton",
 "george w bush",
 "barack obama"
 ];

	// var inputValue= input.value;
console.log()

var triv = angular.module("app",[]);
triv.controller("NameCtrl",[function(){
	angular.element(document).ready(function(){
		console.log(names.slice(1,(names.length)-1));
		$("input").keyup(function(){
			textInput = $("input").val().toLowerCase()
			console.log(textInput);

			if (textInput == names[0]) {
				// correct answer
				$("input").val("");
				$(".answer-box").append("<h1>"+toTitleCase(textInput)+"</h1>")
				names.shift();

			} else if (textInput == names.slice(1,(names.length)-1)) {
				console.log("gtfo");

			} else {

			}

			//for (var i = 0; i < names.length; i++) {
			//	var allOtherNames = names.slice(1,(names[i].length)-1);
			//	if(textInput == names[0]){
			//		console.log(names.indexOf(names[i]));
			//		nameIndex = names.indexOf(names[i]);
			//		function correctAnswer(){
			//			var correctInput = textInput.replace(/\w\S*/g,function(firstLetter){
			//        		return   firstLetter.charAt(0).toUpperCase()+firstLetter.substr(1).toLowerCase();
	        //        	});
			//			$(".answer-box").append("<h1>"+correctInput+"</h1>");
			//			textInput =false;
			//			names.splice(nameIndex,1);
			//			$("input").val("");
			//		}
			//		correctAnswer();
			//	}else if(textInput== allOtherNames[i]){
			//		alert("End Quiz");
			//		return false;
			//	}
			//};
		});
	});
	
}]);





function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

	




