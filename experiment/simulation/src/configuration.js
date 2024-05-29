
//function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
//     $("#canvas-div1").html('');
      $("#centerText1").html('DIAGRAM');
      $("#centerText2").html('CONFIGURATION');
// 			var htm = '<center><img src="images/chipImg.png" class="img-fluid" style="width: 80%;" ></center>'
//	    $("#canvas-div1").html(htm);
	
 
var selection ='<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-10  textConfigNote">'
    + '<strong class=""><center><b>Output Pin to Generate Square Wave : RB0 Pin </b> </center></strong>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	
	+'<div class="row selectConf">'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<label class="labelstyle">Select Operating  Frequency :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control " id="fqVal"  style="height:auto;" >'
	+ '<option value="0">--- Select Clock Frequency ---</option>'
	+ '<option value="8">8 MHz</option>'
	+ '<option value="20">20 MHz</option>'
	+ '<option value="48">48 MHz</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf">'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<label class="labelstyle">Select Timer :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control " id="timerVal"  style="height:auto;" >'
	+ '<option value="0">--- Select Clock Frequency ---</option>'
	+ '<option value="1">Timer0</option>'
	+ '<option value="2" disabled>Timer1</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<label class="labelstyle"><center>Select Prescaler : </center></label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control " id="prescalerVal"  style="height:auto;" >'
	+ '<option value="0">--- Select Prescale value ---</option>'
	+ '<option value="256">1:256 </option>'
	+ '<option value="128">1:128</option>'
	+ '<option value="64">1:64</option>'
	+ '<option value="32">1:32</option>'
	+ '<option value="16">1:16</option>'
	+ '<option value="8">1:8</option>'
	+ '<option value="4">1:4</option>'
	+ '<option value="2">1:2</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<label class="labelstyle"><center>Select Enable Interrupt : </center></label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control " id="intruptVal"  style="height:auto;" >'
	+ '<option value="0">--- Select Enable Intrupt ---</option>'
	+ '<option value="1">YES</option>'
	+ '<option value="2" disabled>NO</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="ptimerRow" >'
	+ '<label class="labelstyle">Enter ON Delay (in mS) : </label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+'<input type="number"  id="onDly" placeholder="Enter ON Delay" style= "10px;width:100%;"  class=" form-control" >'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="ptimerRow" >'
	+ '<label class="labelstyle">Enter OFF Delay (in mS) : </label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+'<input type="number"  id="offDly" placeholder="Enter OFF Delay" style= "margin-Bottom:10px;width:100%;"  class=" form-control " >'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	
	
	
	+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled><b>EXECUTE</b></button>'
	+ '</div>'
//	+ '<div class="col-sm-2" id="buttonDiv">'
//  +' <button type="button" class="btn btn-info btnStyle button button3" id="refresh" data-toggle="modal"><b>REFRESH</b></button>'
//	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button button2" id="downloadCode" data-toggle="modal" disabled><i class="fa fa-download"></i> <b>DOWNLOAD</b></button>'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'
	
	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
	
	$("#main-div-conf").html(selection);




var freqSelect;
var timerSelect;
var prescalerSelect;
var intruptSelect;
var ONdlySelect;
var OffDlySelect;


var id=0;
var frequencyValue;
var timerValue;
var prescalerValue;
var intruptValue;
var enteredONdly=0;
var enteredOffDly=0;

   
	$("#fqVal").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		frequencyValue = $("#fqVal").val();
		if(frequencyValue<=0){
			alert("Select Frequency.");
		}else{	
			frequencyValue = $("#fqVal").val();	  
		  $("#timerVal").prop("disabled",false);			  
// 		  $("#fqVal").prop("disabled",true);
 		  
		}
		
		
	});
	
	$("#timerVal").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		timerValue = $("#timerVal").val();
		console.log("timerVal="+timerValue);
		if(timerValue<=0){
			alert("Select Timer.");
		}else{
			timerValue = $("#timerVal").val();		  
		  $("#prescalerVal").prop("disabled",false);			  
// 		  $("#timerVal").prop("disabled",true);
 		  
		}		
	});
	

	$("#prescalerVal").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		prescalerValue=$("#prescalerVal").val();
		if(prescalerValue==""){
			alert("Select Prescaler Value.");
		}else{
			prescalerValue=$("#prescalerVal").val();
			$("#intruptVal").prop("disabled",false);		  			  
// 		  	$("#prescalerVal").prop("disabled",true);
 		  	

		}	
	});
	
	$("#intruptVal").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		intruptValue=$("#intruptVal").val();
		if(intruptValue==""){
			alert("Select Intrupt Value");
		}else{
			intruptValue=$("#intruptVal").val();
			$("#onDly").prop("disabled",false);		  			  
// 		  	$("#intruptVal").prop("disabled",true);
 		  	

		}	
	});


	$("#onDly").change(function(){		
			$("body").css("padding","0px 0px 0px 0px");	
			enteredONdly = parseInt($("#onDly").val());
			if(enteredONdly==""){
	//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value.</b>");	
				alert("Enter Numeric Value for ON Delay.");
			}else{	
				enteredONdly = parseInt($("#onDly").val());
				if(enteredONdly>=1 && enteredONdly<=1000){					  
 		  		$("#offDly").prop("disabled",false);		  			  
// 		  		$("#onDly").prop("disabled",true);
			}else{
				alert("Enter the value of duty cycle in the range of 1 to 1000");			
			}						
				
			}
	});


	$("#offDly").change(function(){		
			$("body").css("padding","0px 0px 0px 0px");	
			enteredOffDly = parseInt($("#offDly").val());
			if(enteredOffDly==""){
				alert("Enter Numeric Value for OFF Delay.");
			}else{
				enteredOffDly = parseInt($("#offDly").val());	
				if(enteredONdly==enteredOffDly){		
					  $("#generateCode").prop("disabled",false);
					  
				}else{
					alert("Enter Same Value as ON Delay.because here ON Delay and OFF Delay are same.");
				}
			  
			}
	});


var codeWindow =  '<div class="row  selectConf" id="codeview" hidden >'
			    + '<div class="col-sm-12" >'
			    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
			    + '</div>'
			    + '</div>'
			    
			    + '<div class="row  selectConf" id="errorview"  hidden >'
			    + '<div class="col-sm-12" >'
			    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
			    + '</div>'
			    + '</div>'
			
			
				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
			
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ ' </div>'

	var flag = false;


$("#generateCode").click(function () {
frequencyValue=$("#fqVal").val();
			timerValue=$("#timerVal").val();
			prescalerValue=$("#prescalerVal").val();
			intruptValue=$("#intruptVal").val();
			enteredONdly=parseInt($("#onDly").val());
			enteredOffDly=parseInt($("#offDly").val());
console.log("frequencyValue="+frequencyValue);
console.log("timerValue="+timerValue);
console.log("prescalerValue="+prescalerValue);
console.log("intruptValue="+intruptValue);
console.log("enteredONdly="+enteredONdly);
console.log("enteredOffDly="+enteredOffDly);

	if(frequencyValue==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Operating  Frequency</b>");

	}else if(timerValue==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Timer</b>");

	}else if(prescalerValue==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Prescaler</b>");

	}else if(intruptValue==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Enable Intrupt </b>");
	}else if(enteredONdly==""){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Enter ON Delay</b>");
	}else if(enteredOffDly==""){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Enter OFF Delay</b>");
	}else{
			var Pwer6Val = Math.pow(10,6);
			var Pwerminus6Val = Math.pow(10,-6);
			console.log("Pwer6Val = "+Pwer6Val);
			
			var FtVal=frequencyValue*Pwer6Val;
			var clkTmrfq_Val=Math.round(FtVal/4);
			var clkTmrfq_Corr=clkTmrfq_Val*Pwerminus6Val;
			console.log("FtVal="+FtVal+" , clkTmrfq_Val="+clkTmrfq_Val+" , clkTmrfq_Corr="+clkTmrfq_Corr);
			
			var TfVal=1/clkTmrfq_Corr;
			console.log("TfVal= "+TfVal);
			var Teq=TfVal*prescalerValue;
			console.log("Teq= "+Teq);
			var TeqCorr=Teq.toFixed(4);
			console.log("TeqCorr= "+TeqCorr);
			
			
			var n=parseInt((enteredONdly*1000)/TeqCorr);
			console.log("n= "+n);
			if(n>65536 || n<1){
				$("#modelMsg").html("<b class='boldTextRed'>Current Configuration is not matching for the given delay , try to change prescaler value.  </b>");
				//		alert("Current Configuration is not matching for the given delay , try to change prescaler value. ")
				console.log("if condition............");
			}else{
				$("#compileCode").prop("disabled",false);
				$("#executeCode").prop("disabled",false);
				$("#downloadCode").prop("disabled",false);
				var prescale=prescalerValue;
				console.log("prescale= "+prescale);
				var prescalerHexVal=prescale.toString(16);
				console.log("prescalerHexVal =====>"+prescale.toString(16));
				
				var nCorr=65536-n;
			console.log("65536-n = "+nCorr);
			num  = nCorr;
			var hexString = num.toString(16);
			console.log(hexString = num.toString(16));
			
			var first2Letters=hexString.slice(0,2);
			var first2LtrsCorr=first2Letters.toUpperCase();
				console.log("first Two letter H="+first2Letters+" => "+first2LtrsCorr);
			
			var last2Letters=hexString.slice(2,4);
			var last2LtrsCorr=last2Letters.toUpperCase();
			console.log("Last Two letter L="+last2Letters+" => "+last2LtrsCorr);
			
			$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
				flag=true;	
				
				$("#codeview").prop("hidden",false);
				var currentdate = new Date(); 
			    var datetime = "Date: " + currentdate.getDate() + "/"
			                + (currentdate.getMonth()+1)  + "/" 
			                + currentdate.getFullYear() + " Time "  
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes() + ":" 
			                + currentdate.getSeconds();
				var a ='<p>'+datetime+'</p><br><br>'	
					    +'<p class="codeheaderfile">#include&#60;pic18fregs.h&#62; <br>#include&#60;delay.h&#62; </p>'
						+'<p>#pragma config FOSC = HS //Oscillator Selection </p>'
						+'<p>#pragma config WDT = OFF //Disable Watchdog timer </p>'
						+'<p>#pragma config LVP = OFF //Disable Low Voltage Programming</p>'
						+'<p>#pragma config PBADEN = OFF //Disable PORTB Analog inputs</p>'
						+'<p>// Timer ISR Definition </p>'
						+'<p>#pragma interrupt timer_isr </p>'
						+'<p>void timer_isr(void) </p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp;<span class="greenCode">TMR0H = 0X'+first2LtrsCorr+'; </span> &nbsp;&nbsp;//Reload the timer values after overflow </p>'
						+'<p>&nbsp;&nbsp;<span class="greenCode">TMR0L = 0X'+last2LtrsCorr+'; </span></p>'
						+'<p>&nbsp;&nbsp; PORTBbits.RB0 = ~PORTBbits.RB0; &nbsp;&nbsp;//Toggle the RB0 </p>'
						+'<p>&nbsp;&nbsp; INTCONbits.TMR0IF = 0; &nbsp;&nbsp;//Reset the timer overflow interrupt flag </p>'
						+'<p>}</p>'
						+'<p>//Interrupt Vector for Timer0 Interrupt </p>'
						+'<p>#pragma code _HIGH_INTERRUPT_VECTOR = 0x0008 </p>'
						+'<p>void high_ISR (void)</p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp; _asm </p>'
						+'<p>&nbsp;&nbsp; goto timer_isr &nbsp;&nbsp;//Call Timer ISR Routine </p>'
						+'<p>&nbsp;&nbsp; _endasm </p>'
						+'<p>}</p>'
						+'<p>#pragma code </p>'
						+'<p></p>'
						+'<p>// Start of main Program </p>'
						+'<p>void main()</p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp; ADCON1 = 0x0F; &nbsp;&nbsp;//Configuring the PORTB pins as digital I/O </p>'
						+'<p>&nbsp;&nbsp; TRISBbits.TRISB0 = 0; &nbsp;&nbsp;//Configuring the RB0 as output</p>'
						+'<p>&nbsp;&nbsp; PORTBbits.RB0 = 0; &nbsp;&nbsp;//Setting the initial value </p>'
						+'<p>&nbsp;&nbsp; T0CON = 0x07; &nbsp;&nbsp;//Set the timer to '+prescalerValue+'-bit,Fosc/4,1:'+prescalerValue+' prescaler</p>'
						+'<p>&nbsp;&nbsp; <span class="greenCode">TMR0H = 0X'+first2LtrsCorr+'; </span>&nbsp;&nbsp;//load timer value to generate delay 50ms</p>'
						+'<p>&nbsp;&nbsp;<span class="greenCode">TMR0L = 0X'+last2LtrsCorr+'; </span></p>'
						+'<p>&nbsp;&nbsp; INTCONbits.TMR0IF = 0; &nbsp;&nbsp;// Clear Timer0 overflow flag </p>'
						+'<p>&nbsp;&nbsp; INTCONbits.TMR0IE = 1; &nbsp;&nbsp;// TMR0 interrupt enabled</p>'
						+'<p>&nbsp;&nbsp; T0CONbits.TMR0ON = 1; &nbsp;&nbsp;// Start timer0</p>'
						+'<p>&nbsp;&nbsp; INTCONbits.GIE = 1; &nbsp;&nbsp;// Global interrupt enabled </p>'
						+'<p>&nbsp;&nbsp; while(1); &nbsp;&nbsp;//Program execution stays here until the</p>'
						+'<p>&nbsp;&nbsp; &nbsp;&nbsp;//timer overflow interrupt is generated </p>'
						+'<p>} </p>'
						+'<p></p>'
						+'<p></p>'
			
			$("#demo").html(a);
			
			$("#errorview").prop("hidden",false);
			var b = '<b class="blink_text">_</b><br><br><br>'
			$("#errordemo").html(b);
			$("#fqVal").prop("disabled",true);
		 	$("#timerVal").prop("disabled",true);
		 	$("#prescalerVal").prop("disabled",true);
		 	$("#intruptVal").prop("disabled",true);
		 	$("#onDly").prop("disabled",true);
		 	$("#offDly").prop("disabled",true);
			console.log("Else condition............");	
			
			}
	
}
	
	


});

var compileflag=false;
$("#compileCode").click(function(){
	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<b>Program Compiled Successfully.</b><br><br><br>'
		$("#errordemo").html(b1);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			freqSelect=$("#fqVal").val();
			timerSelect=$("#timerVal").val();
			prescalerSelect=$("#prescalerVal").val();
			intruptSelect=$("#intruptVal").val();
			ONdlySelect=parseInt($("#onDly").val());
			OffDlySelect=parseInt($("#offDly").val());
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
			$("#plot").prop("hidden",false);
			mimic(freqSelect,timerSelect,prescalerSelect,intruptSelect,ONdlySelect,OffDlySelect);
    
	}else{
		mimic(freqSelect,timerSelect,prescalerSelect,intruptSelect,ONdlySelect,OffDlySelect);
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		alert("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});



//}
