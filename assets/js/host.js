// var host = "http://192.168.0.1:3000";
var host = "http://88.201.187.23:3001";
// var host = "http://83.217.26.85:3000/";
// var host = "http://localhost:3000"

var canUseRib = 0;
var canUseVertex = 0;
var canUseFacet = 0;

var assocify = function(s, k){
	if (k === undefined) k = 4;
	var n = s.toString(2)
	zeros = ""
	for (i = 0; i < k; i++)
		zeros += "0"
	return zeros.substr(n.length) + n
}

var selfdualAnswer = {
	firstClass: "vertex_1",
	secondClass: "vertex_2",
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

var vertexFromRib = {	
	answer: {},
	0: function(clss, v1, v2) {
		this.answer[clss] = v1 + "," + v2;
	},
	1: function(clss, v1, v2) {
		delete this.answer[clss];
	}
};

var vertexFromFacet = {
	answer: {},
	0: function(clss, v1, v2, v3, v4) {
		this.answer[clss] = v1 + "," + v2 + "," + v3 + "," + v4;
	},
	1: function(clss, v1, v2, v3, v4) {
		delete this.answer[clss];
	}
};

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

var convertIntoZhegalkin = function(i, clss, vertex) {
	$(".vertex").css('width', '175px')
	if (i > 7) {
		if (!(i % 2)) {
			$(clss + (i + 1)).css({
				'margin-left': '-75px',
				'margin-right': '75px'
			})
		} else {
			$(clss + (i + 1)).css({
				'margin-left': '0px',
				'margin-right': '0px'
			})
		}
	} else {
		$(clss + (i + 1)).css({
			'margin-left': '-25px',
			'margin-right': '25px',
			'width': '75px'
		})
	}

	var string = "";
	for (var i = 0, count = 0; i < vertex.length && count < 4; ++i) {
		switch(count) {
			case 0: {
				string += vertex[i] == 1 ? "t" : "(1+t)";
				++count;
				break;
			}
			case 1: {
				string += vertex[i] == 1? "x" : "(1+x)";
				++count;
				break;
			}
			case 2: {
				string += vertex[i] == 1? "y" : "(1+y)";
				++count;
				break;
			}
			case 3: {
				string += vertex[i] == 1? "z" : "(1+z)";
				++count;
				break;
			}
		}
	}	
	return string;
}

var convertToSymbols = function(vertex) {
	var string = "";
	for (var i = 0, count = 0; i < vertex.length && count < 4; ++i) {
		switch(count) {
			case 0: {
				string += vertex[i] == 1 ? "T" : "!T";
				++count;
				break;
			}
			case 1: {
				string += vertex[i] == 1? "X" : "!X";
				++count;
				break;
			}
			case 2: {
				string += vertex[i] == 1? "Y" : "!Y";
				++count;
				break;
			}
			case 3: {
				string += vertex[i] == 1? "Z" : "!Z";
				++count;
				break;
			}
		}
	}	
	return string;
}

var parseIntoDnf = function(fromRibs, fromFacet, fromVertex) {
	var dnf = [];
	for (key in fromRibs) {
		dnf.concat(key.split(",").filter(function(vertex){
			return convertToSymbols(vertex);
		}));
	}

	for (key in fromFacet) {
		dnf.concat(key.split(",").filter(function(vertex){
			return convertToSymbols(vertex);
		}));	
	}
	dnf.concat(fromVertex).join(" || ");
	return dnf;
}