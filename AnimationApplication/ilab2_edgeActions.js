/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
(function(symbolName) {









        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
           $("<input type='text' id='numbers'>").appendTo("#Stage_Text");
        sym.stop();

});
//Edge binding end






















        















    











Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 860, function(sym, e) {
// insert code here
});
//Edge binding end
























      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //declare
         //radioacitivity lab states
         var currentState='Ready';
         var tubeHeight=25;
         var sourceLocation='F'; 
         var Capture_counts=-1;
         var Status;
         var ExperimentId='none';
         var SbName='none';
         var UserGroup='none';
         
         /////initialize
         sym.$("Capture_Counts").html("0000");
         var LastStatus="null";
         $("#Stage_radiationmiddle").css("top", (-1*25));
         // stop the timeline at the given position (ms or label)
         sym.play('start');
         
         
         
         
         $.getScript("edge_includes/socket.io/node_modules/socket.io-client/dist/socket.io.js",
         function(response,status) {
         
         //
                  console.log("load successfully, status: "+status);
         
         			var socket = io.connect('http://autum.ceit.uq.edu.au:8888/');
         
         			socket.on('connection',function() { 
           				console.log('Client has connected to the server!'); 
         
         			});
         
         			//////accept test message//////////
         			   socket.on('user message', function(msg) {
         			   //sym.$("Text").html("user message received");
         				sym.$("Text").html(msg.msg);
         				var i=new Number(msg.msg);
         				$("#Stage_radiationmiddle").css("top", (-1*i));
         			});
         
         			//////Accept MQTT message/////////////////////////////////
         
         			//////subscribe intialAnimaiton and synchronize animation with the current lab machine
         			socket.on('initialAnimation',function(msg)
         			{
         
         		     //synchronize the states 
         			  sym.$("Status").html(msg.currentState);
         			  sym.$("TubeHeight").html(msg.tubeHeight);
         			  sym.$("Capture_Counts").html('0000'+msg.Capture_counts);
         
         			  sym.$("ExperimentId").html(msg.ExperimentId);
         			  sym.$("SbName").html(msg.SbName);
         			  sym.$("UserGroup").html(msg.UserGroup);
         
         			  //synchronize the tube height
         			  var i=new Number(msg.tubeHeight);
         			  $("#Stage_radiationmiddle").css("top", (-1*i));
         			});
         
         			////////subscribe set_distance message///////////
         			socket.on('Set_distance', function(msg) 
         			{
                          if(Status=='Return_tube')
                          {
                          sym.stop('start_point_end');
                          }
                          else
                          {
                           sym.stop('source_stay_centre');
                          }
                    
         			  //disp msg
         				console.log("Set_distance message: "+msg.msg);
         
         				var HeightStr=msg.msg;
         
         				//convert to json object
         				var HeightObj = eval('('+HeightStr+')');
         				var Height=new Number(HeightObj.Height);
         
         				console.log("Height: "+Height);
         
                     tubeHeight=Height;
         
                     sym.$("TubeHeight").html(Height.toString());
         
         				$("#Stage_radiationmiddle").css("top", (-1*Height));
         			});
         
             ////////////////subscribe Status message////////////////////////////
         			socket.on('Status', function(msg)
         			{
         			   sym.stop('start_point_end');
         				//disp msg
         				console.log("Status message: "+msg.msg);
         
         				//convert to json object
         				var StatusStr=msg.msg;
         				var StatusObj = eval('('+StatusStr+')');
         				 Status=StatusObj.Status;
         				var Detail=StatusObj.Detail
         
                     //edit status output
                     if((LastStatus=="ExecuteComplete")&&(Status=="Select_source"))
                     {
                       Status="Return_source";
                     }
                     else if((LastStatus=="Return_source")&&(Status=="Select_absorber"))
                     {
                        Status="Return_absorber";
                     }
                     else if((LastStatus=="Return_absorber")&&(Status=="Set_distance"))
                     {
                       Status="Return_tube";
                     }
                    //assign Last status with Status 
                     currentState=Status;
         
                     //generate output string
                     var outputStatus;
                     if(Detail=="")
                     {
                       outputStatus=Status;
                     }
                     else
                     {
                       outputStatus=Status+": "+Detail;
                     }
         
         				console.log("Status: "+outputStatus);
         
         				//disp status
         				sym.$("Status").html(outputStatus);
         
         				if(Status=="Ready")
         				{
         				//flush experiment info
         	             ExperimentId="";
         	             SbName="";
         	             UserGroup="";
         
         				    sym.$("ExperimentId").html(ExperimentId);
         			       sym.$("SbName").html(SbName);
         			       sym.$("UserGroup").html(UserGroup);
         
         				    sym.$("Capture_Counts").html("00000");
         				}
         			 //	&& LastStatus!="Capture_counts"
         				else if(Status=="Capture_counts" )
         				{
         				  // play the timeline from the given position (ms or label)
         				  //radioact
         				  if(tubeHeight<=15)
         				  {
         				    sym.play("15mm");
         				  }
         				   else if(tubeHeight>15 && tubeHeight<=30)
         				  {
         				    sym.play("30mm");
         				  }
         				  else if(tubeHeight>30 && tubeHeight<=45)
         				  {
         				    sym.play("45mm");
         				  }
         				  else if(tubeHeight>45 && tubeHeight<=60)
         				  {
         				    sym.play("60mm");
         				  }
         				  else if(tubeHeight>60 && tubeHeight<=75)
         				  {
         				    sym.play("75mm");
         				  }
         				  else if(tubeHeight>75 && tubeHeight<=95)
         				  {
         				    sym.play("90mm");
         				  }
         
         				}
         				else if(Status=="Select_source")
         				{
         				sym.play('source_select');
         				}
         				else if(Status=="Return_source")
         				{
         				sym.play('source_return');
         				}
         				//assign Last status with Status 
                     LastStatus=Status;
         			});
         
         			/////subscribe capture data message/////////////////
         			socket.on('Capture_counts', function(msg) {
         				//disp msg
         				console.log("Capture_counts message: "+msg.msg);
         
                     // stop the timeline at the given position (ms or label)
                     sym.play("HideRad");
         
         
         				//convert to json object
         				var DataStr=msg.msg;
         				var DataObj = eval('('+DataStr+')');
         				var data=DataObj.data;
         				var distanceIndex=DataObj.distanceIndex;
                     var trialsIndex=DataObj.trialsIndex;
         
         
         				var outputdata=data+" "+distanceIndex+" "+trialsIndex;
         				console.log("capture_count: "+outputdata);
         
         				sym.$("Capture_Counts").html("0000"+data);
         			});
         
         			socket.on('LabExperimentInfo', function(msg) {
         				//disp msg
         				console.log("LabExperimentInfo message: "+msg.msg);
         
         			  //convert to json object
         			  var LabInfoStr=msg.msg;
         			  var LabInfoObj = eval('('+LabInfoStr+')');
         
         			  ExperimentId =LabInfoObj.ExperimentId;
         		     SbName=LabInfoObj.SbName;
         	        UserGroup=LabInfoObj.UserGroup;
         
         			  sym.$("ExperimentId").html(ExperimentId);
         			  sym.$("SbName").html(SbName);
         			  sym.$("UserGroup").html(UserGroup);
         
         			});
         
         
         
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4067, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3606, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61000, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Status}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play('source_select');
         // play the timeline from the given position (ms or label)
         // stop the timeline at the given position (ms or label)
         //sym.stop('source_return');
         
         sym.play('90mm');

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72849, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TubeHeight}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.play('source_return');
         // play the timeline from the given position (ms or label)
         sym.play('15mm');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17022, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play('15mm');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_source_rec_right}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play('15mm');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23306, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play('30mm');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29076, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play('45mm');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34449, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play('60mm');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play('75mm');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46156, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play('90mm');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 124, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slider'
(function(symbolName) {
































        






})("slider");
   //Edge symbol end:'slider'

//=========================================================

//Edge symbol: 'slider'
(function(symbolName) {
































        






})("slider");
   //Edge symbol end:'slider'

//=========================================================

//Edge symbol: 'dropmenu'
(function(symbolName) {


})("dropmenu");
   //Edge symbol end:'dropmenu'

//=========================================================

//Edge symbol: 'material'
(function(symbolName) {


})("material");
   //Edge symbol end:'material'

//=========================================================

//Edge symbol: 'dropmenu2'
(function(symbolName) {
Symbol.bindElementAction(compId, symbolName, "${_dogfood}", "click", function(sym, e) {
// insert code for mouse clicks here
sym.play("dogfood");
});
//Edge binding end










Symbol.bindElementAction(compId, symbolName, "${_lead}", "click", function(sym, e) {
// insert code for mouse clicks here
sym.play("lead");
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_paper}", "click", function(sym, e) {
// insert code for mouse clicks here
sym.play("paper");
});
//Edge binding end


})("dropmenu2");
   //Edge symbol end:'dropmenu2'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName) {


})("menu");
   //Edge symbol end:'menu'

//=========================================================

//Edge symbol: 'radiationnumber'
(function(symbolName) {


})("radiationnumber");
   //Edge symbol end:'radiationnumber'

//=========================================================

//Edge symbol: 'paper'
(function(symbolName) {


})("paper");
   //Edge symbol end:'paper'

//=========================================================

//Edge symbol: 'lead'
(function(symbolName) {


})("lead");
   //Edge symbol end:'lead'

//=========================================================

//Edge symbol: 'dogfood'
(function(symbolName) {


})("dogfood");
   //Edge symbol end:'dogfood'

//=========================================================

//Edge symbol: 'papers'
(function(symbolName) {

})("papers");
   //Edge symbol end:'papers'

   //=========================================================
   
   //Edge symbol: 'rad_part'
   (function(symbolName) {   
   
   })("rad_part");
   //Edge symbol end:'rad_part'

   //=========================================================
   
   //Edge symbol: 'electron'
   (function(symbolName) {   
   
   })("electron");
   //Edge symbol end:'electron'

   //=========================================================
   
   //Edge symbol: 'source_rec'
   (function(symbolName) {   
   
   })("source_rec");
   //Edge symbol end:'source_rec'

})(jQuery, AdobeEdge, "EDGE-7401593");