
function letteronly(input){
	var regex = /[^a-z ]/gi;
	input.value = input.value.replace(regex,"");
	document.getElementById("alpmessage").innerHTML="Only Alphabets are allowed";
		return false;
	}
function numberonly(input){
	var regex = /[^0-9+]/gi;
	input.value = input.value.replace(regex,"");
	document.getElementById("nummessage").innerHTML="Only Numbers are allowed";
		return false;
	}
function validation(){
	var e = document.myForm.email.value;
	var r = document.myForm.rollno.value;
	if(e.indexOf("@")<=0){
		document.getElementById("Message").innerHTML="Invalid @ Position";
		return false;
	}
	if((e.charAt(e.length-4) != ".") && (e.charAt(e.length-3)!=".")){
		document.getElementById("Message").innerHTML="Invalid . Position at 4";
		return false;
	}
	if((r.charAt(r.length-5) !="-") && (r.charAt(r.length-7) !="-") && (r.charAt(r.length-9) !="-")){
		document.getElementById("Warning").innerHTML="Invalid Position of '-'";
		return false;
	}
	
}
