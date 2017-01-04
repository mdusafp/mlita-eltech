// var host = "http://192.168.0.1:3000";
var host = "http://83.217.26.85:3000";
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
	}
},
click = -1;

var dummy_variables = {	
	answer: {},
	0: function(clss, v1, v2) {
		this.answer[clss] = v1 + "," + v2;
	},
	1: function(clss, v1, v2) {
		delete this.answer[clss];
	}
}

var putVertex = function(i, clss) {
	if (i > 7) {
		if (!(i % 2)) {
			$(clss + (i + 1)).css({
				'margin-left': '-35px',
				'margin-right': '35px'
			})
		} else {
			$(clss + (i + 1)).css({
				'margin-left': '-5px',
				'margin-right': '5px'
			})
		}
	} else {
		$(clss + (i + 1)).css({
			'margin-left': '-25px',
			'margin-right': '25px',
			'width': '75px'
		})
	}
};