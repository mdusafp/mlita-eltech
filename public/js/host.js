var host = "http://192.168.0.1:3000";
var assocify = function(s, k = 4){
	let n = s.toString(2)
	zeros = ""
	for (i = 0; i < k; i++)
		zeros += "0"
	return zeros.substr(n.length) + n
}

var selfdualAnswer = {
	firstClass: "levayaVershina",
	secondClass: "pravayaVershina",
	0: function(clss) {
		$(this.firstClass).css("color", "black")
		this.firstClass = clss;
		$(clss).css("color", "red")
	},
	1: function(clss) {
		$(this.secondClass).css("color", "black")
		this.secondClass = clss;
		$(clss).css("color", "red")
	},
},
click = -1;