$(document).ready(function(){var e=0,i=0,r=0,t="";$("#external_view").click(function(){$(".rib").fadeIn(),$(".facet").fadeIn(),$(".vertex").fadeIn()}),$("#average_view").click(function(){$(".external_facet").fadeOut(),$(".vertex").fadeIn(),$(".average_rib").fadeIn(),$(".average_facet").fadeIn(),$(".external_rib").fadeOut()}),$("#internal_view").click(function(){$(".average_rib").fadeOut(),$(".external_facet").fadeOut(),$(".average_facet").fadeOut(),$(".external_vertex").fadeOut(),$(".external_rib").fadeOut()}),$("#return").click(function(){$(".cube").css({"-webkit-transform":"perspective(900px) rotate3d(1, 1, 0, -15deg)","-moz-transform":"perspective(900px) rotate3d(1, 1, 0, -15deg)","-o-transform":"perspective(900px) rotate3d(1, 1, 0, -15deg)","-ms-transform":"perspective(900px) rotate3d(1, 1, 0, -15deg)",transform:"perspective(900px) rotate3d(1, 1, 0, -15deg)"})}),$(".task_1").click(function(){$(".title").empty().append("Вычисление значений функции"),$(".answer").empty(),canUseVertex=1,canUseRib=0,canUseFacet=0,t="<br>Можно менять значения вершин.<br>",$.getJSON(host+"/task/expressions",function(i,r){console.log(i),e=i.variant;for(var c=0;c<16;++c)$(".vertex_"+(c+1)).empty().append("f("+assocify(c)+") = "+i.truthTable.assoc[assocify(c)]),putVertex(c,".vertex_");$("#condition").empty().append(i.condition+t)}),i=1}),$(".task_2").click(function(){canUseVertex=0,canUseRib=1,canUseFacet=0,t="<br>Можно выбирать рёбра.<br>",$(".title").empty().append("Фиктивные переменные"),$(".answer").empty(),$.getJSON(host+"/task/dummy_variables",function(i,c){console.log(i),e=i.variant;for(var n=0;n<16;++n)$(".vertex_"+(n+1)).empty().append("f("+assocify(n)+") = "+i.truthTable.assoc[assocify(n)]),putVertex(n,".vertex_");$("#condition").empty().append(i.condition+t),r=i.letter}),i=2}),$(".task_3").click(function(){canUseVertex=1,canUseFacet=1,canUseRib=1,t="<br>Можно выбирать как рёбра, так и грани, так и вершины.<br>",$(".title").empty().append("Минимизация ДНФ"),$(".answer").empty(),$.getJSON(host+"/task/dnf",function(i,r){console.log(i),e=i.variant;for(var c=0;c<16;++c)$(".vertex_"+(c+1)).empty().append(convertToSymbols(assocify(c))+" = "+i.truthTable.assoc[assocify(c)]),putVertex(c,".vertex_");$("#condition").empty().append(i.condition+t)})}),$(".task_4").click(function(){$(".title").empty().append("Монотонность. Диаграмма Хассе"),$(".answer").empty(),canUseFacet=0,$.getJSON(host+"/task/monotonic",function(i,c){console.log(i),e=i.variant;for(var n=0;n<16;++n)$(".vertex_"+(n+1)).empty().append("f("+assocify(n)+") = "+i.truthTable.assoc[assocify(n)]),putVertex(n,".vertex_");r=i.letter,"b"==r||"c"==r?(canUseRib=0,canUseVertex=1,t="<br>Можно менять значения вершин.<br>"):(canUseRib=1,canUseVertex=0,t="<br>Можно выбирать рёбра.<br>"),$("#condition").empty().append(i.condition+t)}),i=4}),$(".task_5").click(function(){canUseRib=0,canUseFacet=0,canUseVertex=1,t="<br>Можно менять значения вершин.<br>",$(".title").empty().append("Самодвойственность"),$(".answer").empty(),$.getJSON(host+"/task/selfdual",function(i,c){$("#condition").empty().append(i.text),console.log(i),e=i.variant;for(var n=0;n<16;++n)$(".vertex_"+(n+1)).empty().append("f("+assocify(n)+") = "+i.truthTable.assoc[assocify(n)]),putVertex(n,".vertex_");$("#condition").empty().append(i.condition+t),r=i.letter}),i=5}),$(".task_6").click(function(){canUseRib=0,canUseVertex=1,canUseFacet=0,t="<br>Можно менять значения вершин.<br>",$(".title").empty().append("Многочлен Жегалкина"),$(".answer").empty(),$("#condition").empty().append(t)}),$(".task_7").click(function(){$(".title").empty().append("Классы замкнутости"),$(".answer").empty(),canUseVertex=1,canUseRib=0,canUseFacet=0,t="<br>Можно менять значения вершин.<br>",$.getJSON(host+"/task/expressions",function(i,r){console.log(i),e=i.variant;for(var c=0;c<16;++c)$(".vertex_"+(c+1)).empty().append("f("+assocify(c)+") = "+i.truthTable.assoc[assocify(c)]),putVertex(c,".vertex_");$("#condition").empty().append(i.condition+t)})}),$(".send").click(function(){for(var t={assoc:{}},c=0;c<16;++c){var n=$(".vertex_"+(c+1)).text();t.assoc[assocify(c)]=parseInt(n[n.length-1])}switch(t.variant=e,i){case 1:t.dir="expressions";break;case 2:t.dir="dummy_variables",t.dummy_variables=vertexFromRib.answer,t.letter=r;break;case 3:t.dir="dnf",t.facets=vertexFromFacet.answer,t.ribs=vertexFromRib.answer;break;case 4:t.dir="monotonic",t.ribs=vertexFromRib.answer,t.letter=r;break;case 5:t.dir="selfdual",t.letter=r,t.vertexes=[assocify(parseInt(/vertex_(\d+)/.exec(selfdualAnswer.firstClass)[1])-1),assocify(parseInt(/vertex_(\d+)/.exec(selfdualAnswer.secondClass)[1])-1)];break;case 6:t.dir="jegalkin";break;case 7:t.dir="insularity"}$.ajax({url:host+"/task",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify(t)}).done(function(){console.log("success")}).fail(function(){console.log("error")}).always(function(e){console.log(e),$(".answer").empty().append(e.more)}),console.log(JSON.stringify(t))})}),$(document).ready(function(){var e={0:function(e){$(e).css({"background-color":"blue"})},1:function(e){$(e).css({"background-color":"red"})}},i=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];$(".facet_1").click(function(){1==canUseFacet&&(e[++i[0]%2](".facet_1"),vertexFromFacet[++i[0]%2](".facet_1","0000","0001","0100","0101"))}),$(".facet_2").click(function(){1==canUseFacet&&vertexFromFacet[++i[1]%2](".facet_2","0001","0101","1001","1101")}),$(".facet_3").click(function(){1==canUseFacet&&vertexFromFacet[++i[2]%2](".facet_3","0100","0101","1100","1101")}),$(".facet_4").click(function(){1==canUseFacet&&vertexFromFacet[++i[3]%2](".facet_4","0000","0100","1000","1100")}),$(".facet_5").click(function(){1==canUseFacet&&vertexFromFacet[++i[4]%2](".facet_5","0000","0001","1000","1001")}),$(".facet_6").click(function(){1==canUseFacet&&(e[++i[5]%2](".facet_6"),vertexFromFacet[++i[5]%2](".facet_6","1000","1001","1100","1101"))}),$(".facet_7").click(function(){1==canUseFacet&&(e[++i[6]%2](".facet_7"),vertexFromFacet[++i[6]%2](".facet_7","0010","0011","0110","0111"))}),$(".facet_8").click(function(){1==canUseFacet&&vertexFromFacet[++i[7]%2](".facet_8","0011","0111","1011","1111")}),$(".facet_9").click(function(){1==canUseFacet&&vertexFromFacet[++i[8]%2](".facet_9","0110","0111","1110","1111")}),$(".facet_10").click(function(){1==canUseFacet&&vertexFromFacet[++i[9]%2](".facet_10","0010","0110","1010","1110")}),$(".facet_11").click(function(){1==canUseFacet&&vertexFromFacet[++i[10]%2](".facet_11","0010","0011","1010","1011")}),$(".facet_12").click(function(){1==canUseFacet&&(e[++i[11]%2](".facet_12"),vertexFromFacet[++i[11]%2](".facet_12","1010","1011","1110","1111"))}),$(".facet_13").click(function(){1==canUseFacet&&(e[++i[12]%2](".facet_13"),vertexFromFacet[++i[12]%2](".facet_13","1000","1010","1100","1110"))}),$(".facet_14").click(function(){1==canUseFacet&&(e[++i[13]%2](".facet_14"),vertexFromFacet[++i[13]%2](".facet_14","1001","1011","1101","1111"))}),$(".facet_15").click(function(){1==canUseFacet&&(e[++i[14]%2](".facet_15"),vertexFromFacet[++i[14]%2](".facet_15","1100","1101","1110","1111"))}),$(".facet_16").click(function(){1==canUseFacet&&(e[++i[15]%2](".facet_16"),vertexFromFacet[++i[15]%2](".facet_16","1000","1001","1010","1011"))}),$(".facet_17").click(function(){1==canUseFacet&&vertexFromFacet[++i[16]%2](".facet_17","0000","0010","1000","1010")}),$(".facet_18").click(function(){1==canUseFacet&&vertexFromFacet[++i[17]%2](".facet_18","0001","0011","1001","1011")}),$(".facet_19").click(function(){1==canUseFacet&&vertexFromFacet[++i[18]%2](".facet_19","0101","0111","1101","1111")}),$(".facet_20").click(function(){1==canUseFacet&&vertexFromFacet[++i[19]%2](".facet_20","0100","0110","1100","1110")}),$(".facet_21").click(function(){1==canUseFacet&&(e[++i[20]%2](".facet_21"),vertexFromFacet[++i[20]%2](".facet_21","0001","0011","0101","0111"))}),$(".facet_22").click(function(){1==canUseFacet&&(e[++i[21]%2](".facet_22"),vertexFromFacet[++i[21]%2](".facet_22","0000","0010","0100","0110"))}),$(".facet_23").click(function(){1==canUseFacet&&(e[++i[22]%2](".facet_23"),vertexFromFacet[++i[22]%2](".facet_23","0100","0101","0110","0111"))}),$(".facet_24").click(function(){1==canUseFacet&&(e[++i[23]%2](".facet_24"),vertexFromFacet[++i[23]%2](".facet_24","0000","0001","0010","0011"))})});var host="http://88.201.187.23:3001",canUseRib=0,canUseVertex=0,canUseFacet=0,assocify=function(e,r){void 0===r&&(r=4);var t=e.toString(2);for(zeros="",i=0;i<r;i++)zeros+="0";return zeros.substr(t.length)+t},selfdualAnswer={firstClass:"vertex_1",secondClass:"vertex_2",0:function(e){$(this.firstClass).css("color","black"),this.firstClass=e,$(e).css("color","red")},1:function(e){$(this.secondClass).css("color","black"),this.secondClass=e,$(e).css("color","red")}},click=-1,vertexFromRib={answer:{},0:function(e,i,r){this.answer[e]=i+","+r},1:function(e,i,r){delete this.answer[e]}},vertexFromFacet={answer:{},0:function(e,i,r,t,c){this.answer[e]=i+","+r+","+t+","+c},1:function(e,i,r,t,c){delete this.answer[e]}},putVertex=function(e,i){e>7?e%2?$(i+(e+1)).css({"margin-left":"-5px","margin-right":"5px"}):$(i+(e+1)).css({"margin-left":"-35px","margin-right":"35px"}):$(i+(e+1)).css({"margin-left":"-25px","margin-right":"25px",width:"75px"})},convertIntoZhegalkin=function(e,i,r){$(".vertex").css("width","175px"),e>7?e%2?$(i+(e+1)).css({"margin-left":"0px","margin-right":"0px"}):$(i+(e+1)).css({"margin-left":"-75px","margin-right":"75px"}):$(i+(e+1)).css({"margin-left":"-25px","margin-right":"25px",width:"75px"});for(var t="",e=0,c=0;e<r.length&&c<4;++e)switch(c){case 0:t+=1==r[e]?"t":"(1+t)",++c;break;case 1:t+=1==r[e]?"x":"(1+x)",++c;break;case 2:t+=1==r[e]?"y":"(1+y)",++c;break;case 3:t+=1==r[e]?"z":"(1+z)",++c}return t},convertToSymbols=function(e){for(var i="",r=0,t=0;r<e.length&&t<4;++r)switch(t){case 0:i+=1==e[r]?"T":"!T",++t;break;case 1:i+=1==e[r]?"X":"!X",++t;break;case 2:i+=1==e[r]?"Y":"!Y",++t;break;case 3:i+=1==e[r]?"Z":"!Z",++t}return i},parseIntoDnf=function(e,i,r){var t=[];for(key in e)t.concat(key.split(",").filter(function(e){return convertToSymbols(e)}));for(key in i)t.concat(key.split(",").filter(function(e){return convertToSymbols(e)}));return t.concat(r).join(" || "),t};$(document).ready(function(){var e={0:function(e){$(e).css({"border-top":"20px solid #0fb"})},1:function(e){$(e).css({"border-top":"20px solid orange"})}},i={0:function(e){$(e).css({"border-top":"10px solid #14f"})},1:function(e){$(e).css({"border-top":"10px solid purple"})}},r={0:function(e){$(e).css({"border-top":"20px solid #0bf"})},1:function(e){$(e).css({"border-top":"20px solid orange"})}},t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],c=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];$(".rib_1").click(function(){1==canUseRib&&(e[++t[0]%2](".rib_1"),e[t[0]%2](".rib_5"),vertexFromRib[++c[0]%2](".rib_1","0000","0001"))}),$(".rib_5").click(function(){1==canUseRib&&(e[++t[0]%2](".rib_1"),e[t[0]%2](".rib_5"),vertexFromRib[++c[0]%2](".rib_1","0000","0001"))}),$(".rib_2").click(function(){1==canUseRib&&(e[++t[1]%2](".rib_2"),e[t[1]%2](".rib_14"),vertexFromRib[++c[1]%2](".rib_2","0000","0100"))}),$(".rib_14").click(function(){1==canUseRib&&(e[++t[1]%2](".rib_2"),e[t[1]%2](".rib_14"),vertexFromRib[++c[1]%2](".rib_2","0000","0100"))}),$(".rib_4").click(function(){1==canUseRib&&(e[++t[2]%2](".rib_4"),e[t[2]%2](".rib_11"),vertexFromRib[++c[2]%2](".rib_4","0001","0101"))}),$(".rib_11").click(function(){1==canUseRib&&(e[++t[2]%2](".rib_4"),e[t[2]%2](".rib_11"),vertexFromRib[++c[2]%2](".rib_4","0001","0101"))}),$(".rib_16").click(function(){1==canUseRib&&(e[++t[3]%2](".rib_16"),e[t[3]%2](".rib_23"),vertexFromRib[++c[3]%2](".rib_16","0100","0110"))}),$(".rib_23").click(function(){1==canUseRib&&(e[++t[3]%2](".rib_16"),e[t[3]%2](".rib_23"),vertexFromRib[++c[3]%2](".rib_16","0100","0110"))}),$(".rib_10").click(function(){1==canUseRib&&(e[++t[4]%2](".rib_10"),e[t[4]%2](".rib_22"),vertexFromRib[++c[4]%2](".rib_10","0101","0111"))}),$(".rib_22").click(function(){1==canUseRib&&(e[++t[4]%2](".rib_10"),e[t[4]%2](".rib_22"),vertexFromRib[++c[4]%2](".rib_10","0101","0111"))}),$(".rib_3").click(function(){1==canUseRib&&(e[++t[5]%2](".rib_3"),e[t[5]%2](".rib_21"),vertexFromRib[++c[5]%2](".rib_3","0100","0101"))}),$(".rib_21").click(function(){1==canUseRib&&(e[++t[5]%2](".rib_3"),e[t[5]%2](".rib_21"),vertexFromRib[++c[5]%2](".rib_3","0100","0101"))}),$(".rib_20").click(function(){1==canUseRib&&(e[++t[6]%2](".rib_20"),e[t[6]%2](".rib_24"),vertexFromRib[++c[6]%2](".rib_20","0110","0111"))}),$(".rib_24").click(function(){1==canUseRib&&(e[++t[6]%2](".rib_20"),e[t[6]%2](".rib_24"),vertexFromRib[++c[6]%2](".rib_20","0110","0111"))}),$(".rib_6").click(function(){1==canUseRib&&(e[++t[7]%2](".rib_6"),e[t[7]%2](".rib_17"),vertexFromRib[++c[7]%2](".rib_6","0010","0011"))}),$(".rib_17").click(function(){1==canUseRib&&(e[++t[7]%2](".rib_6"),e[t[7]%2](".rib_17"),vertexFromRib[++c[7]%2](".rib_6","0010","0011"))}),$(".rib_8").click(function(){1==canUseRib&&(e[++t[8]%2](".rib_8"),e[t[8]%2](".rib_9"),vertexFromRib[++c[8]%2](".rib_8","0001","0011"))}),$(".rib_9").click(function(){1==canUseRib&&(e[++t[8]%2](".rib_8"),e[t[8]%2](".rib_9"),vertexFromRib[++c[8]%2](".rib_8","0001","0011"))}),$(".rib_12").click(function(){1==canUseRib&&(e[++t[9]%2](".rib_12"),e[t[9]%2](".rib_19"),vertexFromRib[++c[9]%2](".rib_12","0011","0111"))}),$(".rib_19").click(function(){1==canUseRib&&(e[++t[9]%2](".rib_12"),e[t[9]%2](".rib_19"),vertexFromRib[++c[9]%2](".rib_12","0011","0111"))}),$(".rib_7").click(function(){1==canUseRib&&(e[++t[10]%2](".rib_7"),e[t[10]%2](".rib_13"),vertexFromRib[++c[10]%2](".rib_7","0000","0010"))}),$(".rib_13").click(function(){1==canUseRib&&(e[++t[10]%2](".rib_7"),e[t[10]%2](".rib_13"),vertexFromRib[++c[10]%2](".rib_7","0000","0010"))}),$(".rib_15").click(function(){1==canUseRib&&(e[++t[11]%2](".rib_15"),e[t[11]%2](".rib_18"),vertexFromRib[++c[11]%2](".rib_15","0010","0110"))}),$(".rib_18").click(function(){1==canUseRib&&(e[++t[11]%2](".rib_15"),e[t[11]%2](".rib_18"),vertexFromRib[++c[11]%2](".rib_15","0010","0110"))}),$(".rib_25").click(function(){1==canUseRib&&(i[++t[12]%2](".rib_25"),i[t[12]%2](".rib_45"),vertexFromRib[++c[12]%2](".rib_25","1000","1001"))}),$(".rib_45").click(function(){1==canUseRib&&(i[++t[12]%2](".rib_25"),i[t[12]%2](".rib_45"),vertexFromRib[++c[12]%2](".rib_25","1000","1001"))}),$(".rib_28").click(function(){1==canUseRib&&(i[++t[13]%2](".rib_28"),i[t[13]%2](".rib_35"),vertexFromRib[++c[13]%2](".rib_28","1001","1101"))}),$(".rib_35").click(function(){1==canUseRib&&(i[++t[13]%2](".rib_28"),i[t[13]%2](".rib_35"),vertexFromRib[++c[13]%2](".rib_28","1001","1101"))}),$(".rib_33").click(function(){1==canUseRib&&(i[++t[14]%2](".rib_33"),i[t[14]%2](".rib_47"),vertexFromRib[++c[14]%2](".rib_33","1001","1011"))}),$(".rib_47").click(function(){1==canUseRib&&(i[++t[14]%2](".rib_33"),i[t[14]%2](".rib_47"),vertexFromRib[++c[14]%2](".rib_33","1001","1011"))}),$(".rib_27").click(function(){1==canUseRib&&(i[++t[15]%2](".rib_27"),i[t[15]%2](".rib_29"),vertexFromRib[++c[15]%2](".rib_27","1100","1101"))}),$(".rib_29").click(function(){1==canUseRib&&(i[++t[15]%2](".rib_27"),i[t[15]%2](".rib_29"),vertexFromRib[++c[15]%2](".rib_27","1100","1101"))}),$(".rib_32").click(function(){1==canUseRib&&(i[++t[16]%2](".rib_32"),i[t[16]%2](".rib_34"),vertexFromRib[++c[16]%2](".rib_32","1101","1111"))}),$(".rib_34").click(function(){1==canUseRib&&(i[++t[16]%2](".rib_32"),i[t[16]%2](".rib_34"),vertexFromRib[++c[16]%2](".rib_32","1101","1111"))}),$(".rib_31").click(function(){1==canUseRib&&(i[++t[17]%2](".rib_31"),i[t[17]%2](".rib_40"),vertexFromRib[++c[17]%2](".rib_31","1100","1110"))}),$(".rib_40").click(function(){1==canUseRib&&(i[++t[17]%2](".rib_31"),i[t[17]%2](".rib_40"),vertexFromRib[++c[17]%2](".rib_31","1100","1110"))}),$(".rib_26").click(function(){1==canUseRib&&(i[++t[18]%2](".rib_26"),i[t[18]%2](".rib_38"),vertexFromRib[++c[18]%2](".rib_26","1000","1100"))}),$(".rib_38").click(function(){1==canUseRib&&(i[++t[18]%2](".rib_26"),i[t[18]%2](".rib_38"),vertexFromRib[++c[18]%2](".rib_26","1000","1100"))}),$(".rib_37").click(function(){1==canUseRib&&(i[++t[19]%2](".rib_37"),i[t[19]%2](".rib_48"),vertexFromRib[++c[19]%2](".rib_37","1000","1010"))}),$(".rib_48").click(function(){1==canUseRib&&(i[++t[19]%2](".rib_37"),i[t[19]%2](".rib_48"),vertexFromRib[++c[19]%2](".rib_37","1000","1010"))}),$(".rib_30").click(function(){1==canUseRib&&(i[++t[20]%2](".rib_30"),i[t[20]%2](".rib_41"),vertexFromRib[++c[20]%2](".rib_30","1110","1111"))}),$(".rib_41").click(function(){1==canUseRib&&(i[++t[20]%2](".rib_30"),i[t[20]%2](".rib_41"),vertexFromRib[++c[20]%2](".rib_30","1110","1111"))}),$(".rib_39").click(function(){1==canUseRib&&(i[++t[21]%2](".rib_39"),i[t[21]%2](".rib_43"),vertexFromRib[++c[21]%2](".rib_39","1010","1110"))}),$(".rib_43").click(function(){1==canUseRib&&(i[++t[21]%2](".rib_39"),i[t[21]%2](".rib_43"),vertexFromRib[++c[21]%2](".rib_39","1010","1110"))}),$(".rib_36").click(function(){1==canUseRib&&(i[++t[22]%2](".rib_36"),i[t[22]%2](".rib_42"),vertexFromRib[++c[22]%2](".rib_36","1011","1111"))}),$(".rib_42").click(function(){1==canUseRib&&(i[++t[22]%2](".rib_36"),i[t[22]%2](".rib_42"),vertexFromRib[++c[22]%2](".rib_36","1011","1111"))}),$(".rib_44").click(function(){1==canUseRib&&(i[++t[23]%2](".rib_44"),i[t[23]%2](".rib_46"),vertexFromRib[++c[23]%2](".rib_44","1010","1011"))}),$(".rib_46").click(function(){1==canUseRib&&(i[++t[23]%2](".rib_44"),i[t[23]%2](".rib_46"),vertexFromRib[++c[23]%2](".rib_44","1010","1011"))}),$(".av_rib1").click(function(){1==canUseRib&&(r[++t[24]%2](".av_rib1"),r[t[24]%2](".av_rib2"),vertexFromRib[++c[24]%2](".av_rib1","0010","1010"))}),$(".av_rib2").click(function(){1==canUseRib&&(r[++t[24]%2](".av_rib1"),r[t[24]%2](".av_rib2"),vertexFromRib[++c[24]%2](".av_rib1","0010","1010"))}),$(".av_rib3").click(function(){1==canUseRib&&(r[++t[25]%2](".av_rib3"),r[t[25]%2](".av_rib4"),vertexFromRib[++c[25]%2](".av_rib3","0001","1001"))}),$(".av_rib4").click(function(){1==canUseRib&&(r[++t[25]%2](".av_rib3"),r[t[25]%2](".av_rib4"),vertexFromRib[++c[25]%2](".av_rib3","0001","1001"))}),$(".av_rib5").click(function(){1==canUseRib&&(r[++t[26]%2](".av_rib5"),r[t[26]%2](".av_rib6"),vertexFromRib[++c[26]%2](".av_rib5","0011","1011"))}),$(".av_rib6").click(function(){1==canUseRib&&(r[++t[26]%2](".av_rib5"),r[t[26]%2](".av_rib6"),vertexFromRib[++c[26]%2](".av_rib5","0011","1011"))}),$(".av_rib7").click(function(){1==canUseRib&&(r[++t[27]%2](".av_rib7"),r[t[27]%2](".av_rib8"),vertexFromRib[++c[27]%2](".av_rib7","0000","1000"))}),$(".av_rib8").click(function(){1==canUseRib&&(r[++t[27]%2](".av_rib7"),r[t[27]%2](".av_rib8"),vertexFromRib[++c[27]%2](".av_rib7","0000","1000"))}),$(".av_rib9").click(function(){1==canUseRib&&(r[++t[28]%2](".av_rib9"),r[t[28]%2](".av_rib10"),vertexFromRib[++c[28]%2](".av_rib9","0101","1101"))}),$(".av_rib10").click(function(){1==canUseRib&&(r[++t[28]%2](".av_rib9"),r[t[28]%2](".av_rib10"),vertexFromRib[++c[28]%2](".av_rib9","0101","1101"))}),$(".av_rib11").click(function(){1==canUseRib&&(r[++t[29]%2](".av_rib11"),r[t[29]%2](".av_rib12"),vertexFromRib[++c[29]%2](".av_rib11","0100","1100"))}),$(".av_rib12").click(function(){1==canUseRib&&(r[++t[29]%2](".av_rib11"),r[t[29]%2](".av_rib12"),vertexFromRib[++c[29]%2](".av_rib11","0100","1100"))}),$(".av_rib13").click(function(){1==canUseRib&&(r[++t[30]%2](".av_rib13"),r[t[30]%2](".av_rib14"),vertexFromRib[++c[30]%2](".av_rib13","0110","1110"))}),$(".av_rib14").click(function(){1==canUseRib&&(r[++t[30]%2](".av_rib13"),r[t[30]%2](".av_rib14"),vertexFromRib[++c[30]%2](".av_rib13","0110","1110"))}),$(".av_rib15").click(function(){1==canUseRib&&(r[++t[31]%2](".av_rib15"),r[t[31]%2](".av_rib16"),vertexFromRib[++c[31]%2](".av_rib15","0110","1110"))}),$(".av_rib16").click(function(){1==canUseRib&&(r[++t[31]%2](".av_rib15"),r[t[31]%2](".av_rib16"),vertexFromRib[++c[31]%2](".av_rib15","0111","1111"))})}),$(document).ready(function(){var e=document.getElementById("xRange"),i=document.getElementById("yRange"),r=document.getElementById("zRange"),t=document.getElementById("hyphyp"),c="perspective(900px)",n=0,a=0,o=0;$("#coordX").empty().append(n),$("#coordY").empty().append(a),$("#coordZ").empty().append(o),e.addEventListener("input",function(){n=e.value,a=i.value,o=r.value,t.style.transform=c+" rotateX("+n+"deg) rotateY("+a+"deg) rotateZ("+o+"deg)",$("#coordX").empty().append(n)},!1),i.addEventListener("input",function(){n=e.value,a=i.value,o=r.value,t.style.transform=c+" rotateX("+n+"deg) rotateY("+a+"deg) rotateZ("+o+"deg)",$("#coordY").empty().append(a)},!1),r.addEventListener("input",function(){n=e.value,a=i.value,o=r.value,t.style.transform=c+" rotateX("+n+"deg) rotateY("+a+"deg) rotateZ("+o+"deg)",$("#coordZ").empty().append(o)},!1)}),$(document).ready(function(){var e={0:function(e,i){$(e).empty(),$(e).append(i+"0")},1:function(e,i){$(e).empty(),$(e).append(i+"1")}},i=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];$(".vertex_1").click(function(){1==canUseVertex&&($(".vertex_1").append(function(){e[++i[0]%2](".vertex_1","f("+assocify(0)+") = ")}),selfdualAnswer[++click%2](".vertex_1"),putVertex(1,".vertex_"))}),$(".vertex_2").click(function(){1==canUseVertex&&($(".vertex_2").append(function(){e[++i[1]%2](".vertex_2","f("+assocify(1)+") = ")}),selfdualAnswer[++click%2](".vertex_2"),putVertex(2,".vertex_"))}),$(".vertex_3").click(function(){1==canUseVertex&&($(".vertex_3").append(function(){e[++i[2]%2](".vertex_3","f("+assocify(2)+") = ")}),selfdualAnswer[++click%2](".vertex_3"),putVertex(3,".vertex_"))}),$(".vertex_4").click(function(){1==canUseVertex&&($(".vertex_4").append(function(){e[++i[3]%2](".vertex_4","f("+assocify(3)+") = ")}),selfdualAnswer[++click%2](".vertex_4"),putVertex(4,".vertex_"))}),$(".vertex_5").click(function(){1==canUseVertex&&($(".vertex_5").append(function(){e[++i[4]%2](".vertex_5","f("+assocify(4)+") = ")}),selfdualAnswer[++click%2](".vertex_5"),putVertex(5,".vertex_"))}),$(".vertex_6").click(function(){1==canUseVertex&&($(".vertex_6").append(function(){e[++i[5]%2](".vertex_6","f("+assocify(5)+") = ")}),selfdualAnswer[++click%2](".vertex_6"),putVertex(6,".vertex_"))}),$(".vertex_7").click(function(){1==canUseVertex&&($(".vertex_7").append(function(){e[++i[6]%2](".vertex_7","f("+assocify(6)+") = ")}),selfdualAnswer[++click%2](".vertex_7"),putVertex(7,".vertex_"))}),$(".vertex_8").click(function(){1==canUseVertex&&($(".vertex_8").append(function(){e[++i[7]%2](".vertex_8","f("+assocify(7)+") = ")}),selfdualAnswer[++click%2](".vertex_8"),putVertex(8,".vertex_"))}),$(".vertex_9").click(function(){1==canUseVertex&&($(".vertex_9").append(function(){e[++i[8]%2](".vertex_9","f("+assocify(8)+") = ")}),selfdualAnswer[++click%2](".vertex_9"),putVertex(9,".vertex_"))}),$(".vertex_10").click(function(){1==canUseVertex&&($(".vertex_10").append(function(){e[++i[9]%2](".vertex_10","f("+assocify(9)+") = ")}),selfdualAnswer[++click%2](".vertex_10"),putVertex(10,".vertex_"))}),$(".vertex_11").click(function(){1==canUseVertex&&($(".vertex_11").append(function(){e[++i[10]%2](".vertex_11","f("+assocify(10)+") = ")}),selfdualAnswer[++click%2](".vertex_11"),putVertex(11,".vertex_"))}),$(".vertex_12").click(function(){1==canUseVertex&&($(".vertex_12").append(function(){e[++i[11]%2](".vertex_12","f("+assocify(11)+") = ")}),selfdualAnswer[++click%2](".vertex_12"),putVertex(12,".vertex_"))}),$(".vertex_13").click(function(){1==canUseVertex&&($(".vertex_13").append(function(){e[++i[12]%2](".vertex_13","f("+assocify(12)+") = ")}),selfdualAnswer[++click%2](".vertex_13"),putVertex(13,".vertex_"))}),$(".vertex_14").click(function(){1==canUseVertex&&($(".vertex_14").append(function(){e[++i[13]%2](".vertex_14","f("+assocify(13)+") = ")}),selfdualAnswer[++click%2](".vertex_14"),putVertex(14,".vertex_"))}),$(".vertex_15").click(function(){1==canUseVertex&&($(".vertex_15").append(function(){e[++i[14]%2](".vertex_15","f("+assocify(14)+") = ")}),selfdualAnswer[++click%2](".vertex_15"),putVertex(15,".vertex_"))}),$(".vertex_16").click(function(){1==canUseVertex&&($(".vertex_16").append(function(){e[++i[15]%2](".vertex_16","f("+assocify(15)+") = ")}),selfdualAnswer[++click%2](".vertex_16"),putVertex(16,".vertex_"))})});