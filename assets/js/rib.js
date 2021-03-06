$(document).ready(function(){
	var clickOnExternalRib = {
		0: function(clss) {
			$(clss).css({'border-top': '20px solid #0fb'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '20px solid orange'})
		}
	},
	clickOnInternalRib = {
		0: function(clss) {
			$(clss).css({'border-top': '10px solid #14f'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '10px solid purple'})
		}
	},
	clickOnAverageRib = {
		0: function(clss) {
			$(clss).css({'border-top': '20px solid #0bf'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '20px solid orange'})
		}
	},  
	b = [
	-1,-1,-1,-1, // 4
	-1,-1,-1,-1, // 8
	-1,-1,-1,-1, // 12
	-1,-1,-1,-1, // 16
	-1,-1,-1,-1, // 20
	-1,-1,-1,-1, // 24
	-1,-1,-1,-1, // 28
	-1,-1,-1,-1 // 32
	],
	c = [
	-1,-1,-1,-1, // 4
	-1,-1,-1,-1, // 8
	-1,-1,-1,-1, // 12
	-1,-1,-1,-1, // 16
	-1,-1,-1,-1, // 20
	-1,-1,-1,-1, // 24
	-1,-1,-1,-1, // 28
	-1,-1,-1,-1 // 32
	];

	$(".rib_1").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[0] % 2](".rib_1");
			clickOnExternalRib[b[0] % 2](".rib_5");
			vertexFromRib[++c[0] % 2](".rib_1", "0000", "0001");
		}
	});

	$(".rib_5").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[0] % 2](".rib_1");
			clickOnExternalRib[b[0] % 2](".rib_5");
			vertexFromRib[++c[0] % 2](".rib_1", "0000", "0001");
		}
	}); // 1

	$(".rib_2").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[1] % 2](".rib_2");
			clickOnExternalRib[b[1] % 2](".rib_14");
			vertexFromRib[++c[1] % 2](".rib_2", "0000", "0100");
		}
	});

	$(".rib_14").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[1] % 2](".rib_2");
			clickOnExternalRib[b[1] % 2](".rib_14");
			vertexFromRib[++c[1] % 2](".rib_2", "0000", "0100");
		}
	}); // 2

	$(".rib_4").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[2] % 2](".rib_4");
			clickOnExternalRib[b[2] % 2](".rib_11");
			vertexFromRib[++c[2] % 2](".rib_4", "0001", "0101");
		}
	}); 

	$(".rib_11").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[2] % 2](".rib_4");
			clickOnExternalRib[b[2] % 2](".rib_11");
			vertexFromRib[++c[2] % 2](".rib_4", "0001", "0101");
		}
	}); // 3

	$(".rib_16").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[3] % 2](".rib_16");
			clickOnExternalRib[b[3] % 2](".rib_23");
			vertexFromRib[++c[3] % 2](".rib_16", "0100", "0110");
		}
	});

	$(".rib_23").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[3] % 2](".rib_16");
			clickOnExternalRib[b[3] % 2](".rib_23");
			vertexFromRib[++c[3] % 2](".rib_16", "0100", "0110");
		}
	}); // 4

	$(".rib_10").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[4] % 2](".rib_10");
			clickOnExternalRib[b[4] % 2](".rib_22");
			vertexFromRib[++c[4] % 2](".rib_10", "0101", "0111");
		}
	});  

	$(".rib_22").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[4] % 2](".rib_10");
			clickOnExternalRib[b[4] % 2](".rib_22");
			vertexFromRib[++c[4] % 2](".rib_10", "0101", "0111");
		}
	}); // 5

	$(".rib_3").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[5] % 2](".rib_3");
			clickOnExternalRib[b[5] % 2](".rib_21");
			vertexFromRib[++c[5] % 2](".rib_3", "0100", "0101");
		}
	});

	$(".rib_21").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[5] % 2](".rib_3");
			clickOnExternalRib[b[5] % 2](".rib_21");
			vertexFromRib[++c[5] % 2](".rib_3", "0100", "0101");
		}
	}); // 6

	$(".rib_20").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[6] % 2](".rib_20");
			clickOnExternalRib[b[6] % 2](".rib_24");
			vertexFromRib[++c[6] % 2](".rib_20", "0110", "0111");
		}
	});

	$(".rib_24").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[6] % 2](".rib_20");
			clickOnExternalRib[b[6] % 2](".rib_24");
			vertexFromRib[++c[6] % 2](".rib_20", "0110", "0111");
		}
	}); // 7

	$(".rib_6").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[7] % 2](".rib_6");
			clickOnExternalRib[b[7] % 2](".rib_17");
			vertexFromRib[++c[7] % 2](".rib_6", "0010", "0011");
		}
	});

	$(".rib_17").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[7] % 2](".rib_6");
			clickOnExternalRib[b[7] % 2](".rib_17");
			vertexFromRib[++c[7] % 2](".rib_6", "0010", "0011");
		}
	}); // 8

	$(".rib_8").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[8] % 2](".rib_8");
			clickOnExternalRib[b[8] % 2](".rib_9");
			vertexFromRib[++c[8] % 2](".rib_8", "0001", "0011");
		}
	});

	$(".rib_9").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[8] % 2](".rib_8");
			clickOnExternalRib[b[8] % 2](".rib_9");
			vertexFromRib[++c[8] % 2](".rib_8", "0001", "0011");
		}
 	}); // 9
	
	$(".rib_12").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[9] % 2](".rib_12");
			clickOnExternalRib[b[9] % 2](".rib_19");
			vertexFromRib[++c[9] % 2](".rib_12", "0011", "0111");
		}
	});

	$(".rib_19").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[9] % 2](".rib_12");
			clickOnExternalRib[b[9] % 2](".rib_19");
			vertexFromRib[++c[9] % 2](".rib_12", "0011", "0111");
		}
	}); // 10

	$(".rib_7").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[10] % 2](".rib_7");
			clickOnExternalRib[b[10] % 2](".rib_13");
			vertexFromRib[++c[10] % 2](".rib_7", "0000", "0010");
		}
	});

	$(".rib_13").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[10] % 2](".rib_7");
			clickOnExternalRib[b[10] % 2](".rib_13");
			vertexFromRib[++c[10] % 2](".rib_7", "0000", "0010");
		}
	}); // 11

	$(".rib_15").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[11] % 2](".rib_15");
			clickOnExternalRib[b[11] % 2](".rib_18");
			vertexFromRib[++c[11] % 2](".rib_15", "0010", "0110");
		}
	});

	$(".rib_18").click(function(){
		if (canUseRib == 1) {
			clickOnExternalRib[++b[11] % 2](".rib_15");
			clickOnExternalRib[b[11] % 2](".rib_18");
			vertexFromRib[++c[11] % 2](".rib_15", "0010", "0110");
		}
	}); // 12

	$(".rib_25").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[12] % 2](".rib_25");
			clickOnInternalRib[b[12] % 2](".rib_45");
			vertexFromRib[++c[12] % 2](".rib_25", "1000", "1001");
		}
	}); 

	$(".rib_45").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[12] % 2](".rib_25");
			clickOnInternalRib[b[12] % 2](".rib_45");
			vertexFromRib[++c[12] % 2](".rib_25", "1000", "1001");
		}
	}); // 13


	$(".rib_28").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[13] % 2](".rib_28");
			clickOnInternalRib[b[13] % 2](".rib_35");
			vertexFromRib[++c[13] % 2](".rib_28", "1001", "1101");
		}
	}); 

	$(".rib_35").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[13] % 2](".rib_28");
			clickOnInternalRib[b[13] % 2](".rib_35");
			vertexFromRib[++c[13] % 2](".rib_28", "1001", "1101");
		}
	}); // 14

	$(".rib_33").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[14] % 2](".rib_33");
			clickOnInternalRib[b[14] % 2](".rib_47");
			vertexFromRib[++c[14] % 2](".rib_33", "1001", "1011");
		}
	});

	$(".rib_47").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[14] % 2](".rib_33");
			clickOnInternalRib[b[14] % 2](".rib_47");
			vertexFromRib[++c[14] % 2](".rib_33", "1001", "1011");
		}
	}); // 15

	$(".rib_27").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[15] % 2](".rib_27");
			clickOnInternalRib[b[15] % 2](".rib_29");
			vertexFromRib[++c[15] % 2](".rib_27", "1100", "1101");
		}
	});

	$(".rib_29").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[15] % 2](".rib_27");
			clickOnInternalRib[b[15] % 2](".rib_29");
			vertexFromRib[++c[15] % 2](".rib_27", "1100", "1101");
		}
	}); // 16

	$(".rib_32").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[16] % 2](".rib_32");
			clickOnInternalRib[b[16] % 2](".rib_34");
			vertexFromRib[++c[16] % 2](".rib_32", "1101", "1111");
		}
	});

	$(".rib_34").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[16] % 2](".rib_32");
			clickOnInternalRib[b[16] % 2](".rib_34");
			vertexFromRib[++c[16] % 2](".rib_32", "1101", "1111");
		}
	}); // 17

	$(".rib_31").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[17] % 2](".rib_31");
			clickOnInternalRib[b[17] % 2](".rib_40");
			vertexFromRib[++c[17] % 2](".rib_31", "1100", "1110");
		}
	});

	$(".rib_40").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[17] % 2](".rib_31");
			clickOnInternalRib[b[17] % 2](".rib_40");
			vertexFromRib[++c[17] % 2](".rib_31", "1100", "1110");
		}
	}); // 18

	$(".rib_26").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[18] % 2](".rib_26");
			clickOnInternalRib[b[18] % 2](".rib_38");
			vertexFromRib[++c[18] % 2](".rib_26", "1000", "1100");
		}
	});

	$(".rib_38").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[18] % 2](".rib_26");
			clickOnInternalRib[b[18] % 2](".rib_38");
			vertexFromRib[++c[18] % 2](".rib_26", "1000", "1100");
		}
	}); // 19

	$(".rib_37").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[19] % 2](".rib_37");
			clickOnInternalRib[b[19] % 2](".rib_48");
			vertexFromRib[++c[19] % 2](".rib_37", "1000", "1010");
		}
	});

	$(".rib_48").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[19] % 2](".rib_37");
			clickOnInternalRib[b[19] % 2](".rib_48");
			vertexFromRib[++c[19] % 2](".rib_37", "1000", "1010");
		}
	}); // 20

	$(".rib_30").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[20] % 2](".rib_30");
			clickOnInternalRib[b[20] % 2](".rib_41");
			vertexFromRib[++c[20] % 2](".rib_30", "1110", "1111");
		}
	});

	$(".rib_41").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[20] % 2](".rib_30");
			clickOnInternalRib[b[20] % 2](".rib_41");
			vertexFromRib[++c[20] % 2](".rib_30", "1110", "1111");
		}
	}); // 21

	$(".rib_39").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[21] % 2](".rib_39");
			clickOnInternalRib[b[21] % 2](".rib_43");
			vertexFromRib[++c[21] % 2](".rib_39", "1010", "1110");
		}
	});

	$(".rib_43").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[21] % 2](".rib_39");
			clickOnInternalRib[b[21] % 2](".rib_43");
			vertexFromRib[++c[21] % 2](".rib_39", "1010", "1110");
		}
	}); // 22

	$(".rib_36").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[22] % 2](".rib_36");
			clickOnInternalRib[b[22] % 2](".rib_42");
			vertexFromRib[++c[22] % 2](".rib_36", "1011", "1111");
		}
	});

	$(".rib_42").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[22] % 2](".rib_36");
			clickOnInternalRib[b[22] % 2](".rib_42");
			vertexFromRib[++c[22] % 2](".rib_36", "1011", "1111");
		}
	}); // 23

	$(".rib_44").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[23] % 2](".rib_44");
			clickOnInternalRib[b[23] % 2](".rib_46");
			vertexFromRib[++c[23] % 2](".rib_44", "1010", "1011");
		}
	});

	$(".rib_46").click(function(){
		if (canUseRib == 1) {
			clickOnInternalRib[++b[23] % 2](".rib_44");
			clickOnInternalRib[b[23] % 2](".rib_46");
			vertexFromRib[++c[23] % 2](".rib_44", "1010", "1011");
		}
	}); // 24


	$(".av_rib1").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[24] % 2](".av_rib1");
			clickOnAverageRib[b[24] % 2](".av_rib2");
			vertexFromRib[++c[24] % 2](".av_rib1", "0010", "1010");
		}
	});

	$(".av_rib2").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[24] % 2](".av_rib1");
			clickOnAverageRib[b[24] % 2](".av_rib2");
			vertexFromRib[++c[24] % 2](".av_rib1", "0010", "1010");
		}
	}); // 25

	$(".av_rib3").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[25] % 2](".av_rib3");
			clickOnAverageRib[b[25] % 2](".av_rib4");
			vertexFromRib[++c[25] % 2](".av_rib3", "0001", "1001");
		}
	});

	$(".av_rib4").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[25] % 2](".av_rib3");
			clickOnAverageRib[b[25] % 2](".av_rib4");
			vertexFromRib[++c[25] % 2](".av_rib3", "0001", "1001");
		}
	}); // 26

	$(".av_rib5").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[26] % 2](".av_rib5");
			clickOnAverageRib[b[26] % 2](".av_rib6");
			vertexFromRib[++c[26] % 2](".av_rib5", "0011", "1011");
		}
	});

	$(".av_rib6").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[26] % 2](".av_rib5");
			clickOnAverageRib[b[26] % 2](".av_rib6");
			vertexFromRib[++c[26] % 2](".av_rib5", "0011", "1011");
		}
	});  // 27

	$(".av_rib7").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[27] % 2](".av_rib7");
			clickOnAverageRib[b[27] % 2](".av_rib8");
			vertexFromRib[++c[27] % 2](".av_rib7", "0000", "1000");
		}
	});

	$(".av_rib8").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[27] % 2](".av_rib7");
			clickOnAverageRib[b[27] % 2](".av_rib8");
			vertexFromRib[++c[27] % 2](".av_rib7", "0000", "1000");
		}
	}); // 28

	$(".av_rib9").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[28] % 2](".av_rib9");
			clickOnAverageRib[b[28] % 2](".av_rib10");
			vertexFromRib[++c[28] % 2](".av_rib9", "0101", "1101");
		}
	});

	$(".av_rib10").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[28] % 2](".av_rib9");
			clickOnAverageRib[b[28] % 2](".av_rib10");
			vertexFromRib[++c[28] % 2](".av_rib9", "0101", "1101");
		}
	}); // 25

	$(".av_rib11").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[29] % 2](".av_rib11");
			clickOnAverageRib[b[29] % 2](".av_rib12");
			vertexFromRib[++c[29] % 2](".av_rib11", "0100", "1100");
		}
	});

	$(".av_rib12").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[29] % 2](".av_rib11");
			clickOnAverageRib[b[29] % 2](".av_rib12");
			vertexFromRib[++c[29] % 2](".av_rib11", "0100", "1100");
		}
	}); // 26

	$(".av_rib13").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[30] % 2](".av_rib13");
			clickOnAverageRib[b[30] % 2](".av_rib14");
			vertexFromRib[++c[30] % 2](".av_rib13", "0110", "1110");
		}
	});

	$(".av_rib14").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[30] % 2](".av_rib13");
			clickOnAverageRib[b[30] % 2](".av_rib14");
			vertexFromRib[++c[30] % 2](".av_rib13", "0110", "1110");
		}
	});  // 27

	$(".av_rib15").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[31] % 2](".av_rib15");
			clickOnAverageRib[b[31] % 2](".av_rib16");
			vertexFromRib[++c[31] % 2](".av_rib15", "0110", "1110");
		}
	});

	$(".av_rib16").click(function(){
		if (canUseRib == 1) {
			clickOnAverageRib[++b[31] % 2](".av_rib15");
			clickOnAverageRib[b[31] % 2](".av_rib16");
			vertexFromRib[++c[31] % 2](".av_rib15", "0111", "1111");
		}
	}); // 28
});

