 

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x=100;
var y=160;	

function mimic(freqSelect,timerSelect,prescalerSelect,intruptSelect,ONdlySelect,OffDlySelect){
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;	
	var width = $(window).width();
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
var x=100;
var y=160;	
var frequencyVal=parseInt(freqSelect);
var timerVal=parseInt(timerSelect);
var prescalerCorr=parseInt(prescalerSelect);
var intruptCorr=parseInt(intruptSelect);					
var ON_dlyVal=parseInt(ONdlySelect);
var OFF_dlyVal=parseInt(OffDlySelect);

//console.log(" mimic :frequencyVal = "+frequencyVal);
//console.log(" mimic :timerVal = "+timerVal);
//console.log(" mimic :ON_dlyVal = "+ON_dlyVal);
//console.log(" mimic :OFF_dlyVal = "+OFF_dlyVal);
//console.log(" mimic :intruptCorr = "+intruptCorr);
//console.log(" mimic :prescalerCorr = "+prescalerCorr);
var graphtimerVal=timerVal-1;
var interval_plot1=(ON_dlyVal+OFF_dlyVal)/1000; 
var offTime1=ON_dlyVal/1000;
var onTime1=OFF_dlyVal/1000;
var onTime11=onTime1+offTime1;
//console.log("onTime1 - "+onTime1+", off - "+offTime1);

var checkStatus=paper.image("images/checkBtn1.png",x-90,y-150,200, 50);
var resetimg=paper.image("images/resetconnectioPreview.png",x+240,y-150,180, 50);
var runimg=paper.image("images/runPreview.png",x+120,y-150,100, 50);
var microcontroller=paper.image("images/chipImg.png",x-40,y+40,400, 300).rotate(1);

var Ledcircle=paper.circle(x+228, y-21, 35);
var pinVal=1;
var inputpinName=0;

var diodSelection=1;
//Math.floor(Math.random() * 2);
console.log("diodSelection = "+diodSelection);
//Math.floor(Math.random() * 2);
//console.log("diodSelection = "+diodSelection);
var diode;
var anode;
var cathode;
if (diodSelection==0){
	diode=paper.image("images/diodeSymbolMirrorImg_preview.png",x+150,y-95,150, 110);
	anode=paper.circle(x+283, y-19, 5).attr({'fill':'#2626eb'});
	cathode=paper.circle(x+168, y-19, 5).attr({'fill':'#2626eb'});
}else{	
	diode=paper.image("images/diodeSymbol2.png",x+150,y-95,150, 110);
	anode=paper.circle(x+168, y-19, 5).attr({'fill':'#2626eb'});
	cathode=paper.circle(x+283, y-19, 5).attr({'fill':'#2626eb'});
}



var r=paper.image("images/resistorSymbol.png",x+350,y-45,120, 55); 
var connection_RtoG=paper.path("M"+(x+436)+" "+(y-17.5)+"l 40 0 l 0 52   ").attr({'stroke-width':2});
var ground= paper.image("images/ground.png",x+450,y+30,50, 21);

var Rcircle=paper.circle(x+363, y-17.5, 5).attr({'fill':'#2626eb'});
//var Ledcircle2=paper.circle(x+228, y-21, 35);

var terminalRB0=paper.circle(x+28, y+198, 5).attr({'fill':'#2626eb'});
//var terminalRC2=paper.circle(x+190, y+61, 5).attr({'fill':'#FF0000'});

var vssCircle=paper.circle(x+258, y+158, 5).attr({'fill':'#FF0000'});
//var ground_circle=paper.circle(x+325,y+263,5).attr({'fill':' #FF0000'});
var vddCircle=paper.circle(x+28, y+184, 5).attr({'fill':'#FF0000'});
var vdd= paper.image("images/VDD5V.png",x-76,y+115,55, 51);
var vddConnection=paper.path("M"+(x+24)+" "+(y+184)+"l -81 0 l 0 -22   ").attr({'stroke-width':3});

var ground= paper.image("images/ground.png",x+300,y+266,50, 21);
var groundConnection=paper.path("M"+(x+262)+" "+(y+158)+"l 64 0 l 0 112   ").attr({'stroke-width':3});

resetimg.click(function(){
//	$("#canvas-div").html('');
	$("#plot").html("");	
	paper.clear();
	mimic(freqSelect,timerSelect,prescalerSelect,intruptSelect,ONdlySelect,OffDlySelect);	
	reset();
	$("#plot").prop("hidden",true);
})


var crossCheckConnect=false;
var cathodFlag=0;
cathode.click(function(){
	cathodFlag=1;
	console.log("cathodFlag"+cathodFlag);
	var cathode_connection_arr=[];	
	if(verifyRcircleConnect==true){
		toastr.success("Already Connected.");
	}else{
		if (diodSelection==0){
		if(RcircleFlag==1){	
			crossCheckConnect=true;	
			cathode_connection_arr[0]=paper.path("M "+(x+360)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			cathode_connection_arr[0].animate({path :"M"+(x+360)+" "+(y-18.5)+"l -30 -1   "},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+330)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+330)+" "+(y-18.5)+" l 0 -50 "},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+331)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+331)+" "+(y-68.5)+"l -164 0"},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-68.5)+"l 0 46"},1000, function(){
				
			});
			});
			});	
			});	
		}
	}else{
		if(RcircleFlag==1){	
			crossCheckConnect=true;		
			cathode_connection_arr[0]=paper.path("M "+(x+360)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			cathode_connection_arr[0].animate({path :"M"+(x+360)+" "+(y-18.5)+"l -73 -1 "},1000, function(){
			
			
			});	
		}
	}
	}
})

var verifyRcircleConnect=false;
var RcircleFlag=0;
Rcircle.click(function(){
	RcircleFlag=1;
//	console.log("RcircleFlag"+RcircleFlag);
	var cathode_connection_arr=[];	
	if( crossCheckConnect==true){
		toastr.success("Already Connected.");
	}else{
	if (diodSelection==0){
		if(cathodFlag==1){	
			verifyRcircleConnect=true;
			cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-23.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-23.5)+"l 0 -46"},1000, function(){
					
			cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-68.5)+"l 164 0"},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+331)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
			cathode_connection_arr[0].animate({path :"M"+(x+331)+" "+(y-68.5)+" l 0 50 "},1000, function(){
				
			cathode_connection_arr[0]=paper.path("M "+(x+330)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			cathode_connection_arr[0].animate({path :"M"+(x+330)+" "+(y-18.5)+"l 30 1   "},1000, function(){
				
			});
			});
			});	
			});	
		}
	}else{
		if(cathodFlag==1){
			verifyRcircleConnect=true;
			cathode_connection_arr[0]=paper.path("M "+(x+287)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			cathode_connection_arr[0].animate({path :"M"+(x+287)+" "+(y-18.5)+"l 73 1 "},1000, function(){
					
			});
			}
		}
	}

})

var verifyRC2Connection=false;
var c2Flag=0;
terminalRB0.click(function(){
	c2Flag=1;
	inputCheckFlag3=1;
	var StoT_connection_arr2=[];
	if(verifyAconnect==true){
		toastr.success("Already Connected.");
	}else{
	if(anodeflg==1){ 
		verifyRC2Connection=true;
				StoT_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -160 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+5)+" "+(y-19)+"l 0 218"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+5)+" "+(y+198)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+5)+" "+(y+198)+"l 19 0"},500, function(){				
						
					inputpinName=1;
				});	
				});	
				});
		}
	}
});

var verifyAconnect=false;
var anodeflg=0;
anode.click(function(){

	anodeflg=1;
	anodeClick=true;
	var anode_connection_arr=[];
if(verifyRC2Connection	==true){
		toastr.success("Already Connected.");
}else{
	if(c2Flag==1){
		verifyAconnect=true;	
			anode_connection_arr[0]=paper.path("M "+(x+24)+" "+(y+198)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			anode_connection_arr[0].animate({path :"M"+(x+24)+" "+(y+198)+"l -20 0"},500, function(){
				
			anode_connection_arr[0]=paper.path("M "+(x+5)+" "+(y+198)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			anode_connection_arr[0].animate({path :"M"+(x+5)+" "+(y+198)+"l 0 -218"},500, function(){
				
			anode_connection_arr[0]=paper.path("M "+(x+5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
			anode_connection_arr[0].animate({path :"M"+(x+5)+" "+(y-19)+"l 158 0"},500, function(){					
				
					inputpinName=1;
				});	
				});	
				});
	}else{
//		alert("click on red circle of RC2 pin.")
	}
}	
})

var statusFlag=false;
var statusFlagValue=0;
var checkStatusClickVal=0;
checkStatus.click(function(){
	checkStatusClickVal=1;
		if(runingFlagValue==1){
				toastr.warning("Connection status has already been checked.");
			}else{
//				console.log("anodeflg"+anodeflg+", pinval="+pinVal+ ",inputpinName :" + inputpinName+", RcircleFlag="+RcircleFlag+", cathodFlag="+cathodFlag);
				if(anodeflg==1 && pinVal==inputpinName && RcircleFlag==1 && cathodFlag==1){
					statusFlag=true;
					statusFlagValue=1;
					
			//		$("#plot").html("");
			//		$("#plot").prop("hidden",false);
			//		start();
					toastr.success("Connection Established Successfully. Now Click on Run Button.");
					
				}else if(RcircleFlag==0 && cathodFlag==0){
					toastr.warning("Establish Cathode Connection first.")
				}else if(anodeflg!=1 && pinVal!=inputpinName){
					toastr.warning("Connect the pin.")
				}else{
					toastr.error("Wrong Connection. Please Try Again.");
			  }
		}
	
	
});

var runingFlagValue=0;
runimg.click(function(){
//	if(checkStatusclick==1){
		if(statusFlagValue==1){
				statusFlagValue=0;
		    	if(statusFlag==true){		
					runingFlagValue=1;
					statusFlag=false;
			//		setInterval(toggleVisibility, timeVal*2);
			//		$("#plot").html("");
					$("#plot").prop("hidden",false);
					start(graphtimerVal,interval_plot1,onTime1,offTime1,);
			//		start();
				
				}else{
					toastr.warning("Please check the connection status.");
		    	}
		}else if(checkStatusClickVal!=1){
			toastr.warning("Please check the connection status.");	//You have already run the circuit.
		}else{
			toastr.warning("You have already clicked the Run button.");	//You have already run the circuit.
		}
//	}else{
//		alert("Please check the connection status first.");
//	}

});


}
