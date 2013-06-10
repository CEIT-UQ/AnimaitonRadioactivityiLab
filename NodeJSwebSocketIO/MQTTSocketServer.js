var http    = require('http'),
    io      = require('socket.io'),
    fs      = require('fs'),
    util    = require('util'),
    sys     = require("sys"),
    spawn   = require('child_process').spawn,


//NodeJSSockio


 http = http.createServer(handler);
 http.listen(8888);
 //webscoket
 io = io.listen(http);
/*__dirname+'/test.html'*/
 function handler(req, res) {
	 console.log('url11: '+req.url);
	 console.log('--dirname: '+__dirname+' !!!');
    fs.readFile(__dirname+'/RadioactivityAnimation/ilab2.html',
    function(err, data){
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
        req.setEncoding(encoding="utf8");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}
 
//////radioacitivity lab states
var currentState='Ready';
var tubeHeight=25;
var sourceLocation='F'; 
var Capture_counts=-1;
var test=0;

var ExperimentId='none';
var SbName='none';
var UserGroup='none';

//'connection 
   io.sockets.on('connection',function(socket){ 
   //////////////////send 'hello world' once connection
    socket.emit('greeting', { msg : ' hello world',
	                          data : 'No of message: '+test,
							  tubeHeight :  tubeHeight    ,
							  Capture_counts : Capture_counts,
							  ExperimentId : ExperimentId,
							  SbName : SbName  ,
							  UserGroup : UserGroup
							  });
	
	
	    socket.emit('initialAnimation', { currentState: currentState,
	                                      tubeHeight :  tubeHeight    ,
										  sourceLocation: sourceLocation,
										  test : test,
										  Capture_counts : Capture_counts,
							              ExperimentId : ExperimentId,
							              SbName : SbName  ,
							              UserGroup : UserGroup
										 });
			  
							  
	////////subscribe chatting msg for test
      socket.on('msg',function(data){
		  test++;
        console.log('Get a msg from client ...'+data.msg);
        socket.broadcast.emit('user message',data);
      });
	  
	  
	  ////test MQTT subscribe code goes here////////////////
	  mosq = spawn('mosquitto_sub',['-h','autum.ceit.uq.edu.au','-t','test']);
      mosq.stdout.on('data', function (data) {            
        console.log('get data from mosquitto:'+data.toString());
	    var value=data.toString();
	    socket.emit('user message',{msg:value});
      });

	
	////////////mqtt message subscribe from here//////////////////////////////////
	/*subscribe set_distance */
	    mosq = spawn('mosquitto_sub',['-h','autum.ceit.uq.edu.au','-t','ilab/radiation-1/Radioactivity/Simulation/Animation/Set_distance']); 
        mosq.stdout.on('data', function (data) {            
        console.log('get data from mosquitto:'+'topic: Set_distance\nData:'+ data);
		
	    var value=data.toString();
	    socket.emit('Set_distance',{ msg : value});
		
		//set tubeHeight
		var HeightStr=data.toString();
		//convert to json object
		var HeightObj = eval('('+HeightStr+')');		
		tubeHeight=HeightObj.Height;
     });
	 
	 /*subscribe the Status*/
	 	mosq = spawn('mosquitto_sub',['-h','autum.ceit.uq.edu.au','-t','ilab/radiation-1/Radioactivity/Simulation/Animation/Status']); 
        mosq.stdout.on('data', function (data) {            
        console.log('get data from mosquitto:' +'topic: Status\nData:'+ data);
	    var value=data.toString();
	    socket.emit('Status',{ msg : value});
		
		//convert to json object
		var StatusStr=value;
		var StatusObj = eval('('+StatusStr+')');
		var Status=StatusObj.Status;
		var Detail=StatusObj.Detail;
		if(Status=="Ready")
		{		  
		     tubeHeight=25; 
             Capture_counts=0;
			 ExperimentId='';
			 SbName='';
			 UserGroup=''; 
		}
		currentState=Status;
     });
	 
	 	 
	 /*subscribe the Capture_counts*/
	 	mosq = spawn('mosquitto_sub',['-h','autum.ceit.uq.edu.au','-t','ilab/radiation-1/Radioactivity/Simulation/Animation/Capture_counts']); 
        mosq.stdout.on('data', function (data) {            
        console.log('get data from mosquitto:' +'topic: Capture_counts\nData:'+ data);
	    var value=data.toString();
	    socket.emit('Capture_counts',{ msg : value});
		
		//convert to json object
		var DataStr=value;
		var DataObj = eval('('+DataStr+')');
		var data=DataObj.data;
		Capture_counts=data;
     });
	 
	 	 /*subscribe the Capture_counts*/
	 	mosq = spawn('mosquitto_sub',['-h','autum.ceit.uq.edu.au','-t','ilab/radiation-1/Radioactivity/Simulation/Animation/LabExperimentInfo']); 
        mosq.stdout.on('data', function (data) {            
        console.log('get data from mosquitto:' +'topic: LabExperimentInfo\nData:'+ data);
	    var value=data.toString();
	    socket.emit('LabExperimentInfo',{ msg : value});
		
		//convert to json object
		var LabInfoStr=value;
		var LabInfoObj = eval('('+LabInfoStr+')');
		//update labexperimentInfo
		ExperimentId =LabInfoObj.ExperimentId;
		SbName=LabInfoObj.SbName;
	    UserGroup=LabInfoObj.UserGroup;

     });
});
     
