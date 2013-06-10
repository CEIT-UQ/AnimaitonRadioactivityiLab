/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Monaco']='';
   fonts['Arial']='@font-face { font-family: Digiface-wide; src: url(\'DIGIFAW.TTF\'); } ';
   fonts['Georgia']='<link rel=\"stylesheet\" href=\"edge_includes/digiface.css\" type=\"text/css\" title=\"\" charset=\"utf-8\" />';
   fonts['digiface, arial']='<link rel=\"stylesheet\" href=\"edge_includes/digiface.css\" type=\"text/css\" title=\"\" charset=\"utf-8\" />';
   fonts['digiface, verdana']='<link rel=\"stylesheet\" href=\"edge_includes/digiface.css\" type=\"text/css\" title=\"\" charset=\"utf-8\" />';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'radiationback',
            type:'image',
            rect:['34','-3','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiationback2.svg"],
            transform:[]
         },
         {
            id:'source_none',
            type:'ellipse',
            rect:['312px','326px','22px','11px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(207,121,207,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Label_SourceNone',
            type:'ellipse',
            rect:['32px','207px','17px','11px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(207,121,207,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'source_Strontim90',
            type:'ellipse',
            rect:['312px','326px','22px','11px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(207,121,207,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Label_SourceStrontim90',
            type:'ellipse',
            rect:['32px','193px','17px','11px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(102,109,215,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'source_rec_purple',
            type:'rect',
            rect:['345','344','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'source_rec_blue',
            type:'rect',
            rect:['345','344','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'source_rec_right',
            type:'rect',
            rect:['-79px','327px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.5']]
         },
         {
            id:'source_rec_left',
            type:'rect',
            rect:['53px','334px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'geigercounter',
            type:'image',
            rect:['293','-157','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"geigercounter.svg"],
            transform:[[],[],[],['0.4','0.4']]
         },
         {
            id:'rad_parIn6',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parIn5',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parIn4',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parIn3',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parIn2',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parIn1',
            type:'rect',
            rect:['340px','332px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube6',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube5',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube4',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube3',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube2',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'rad_parTube1',
            type:'rect',
            rect:['669px','227px','0','0','auto','auto'],
            transform:[[],[],[],['1.699','1.7']]
         },
         {
            id:'radiationmiddle',
            type:'image',
            rect:['-148','-224','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiationmiddle2.svg"],
            transform:[]
         },
         {
            id:'radiationnumber',
            type:'rect',
            rect:['416','359','0','0','auto','auto']
         },
         {
            id:'radiationfront',
            type:'image',
            rect:['34','-3','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"radiationfront.svg"],
            transform:[]
         },
         {
            id:'rad_parOut1',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut2',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut3',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut4',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut5',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut6',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut7',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'rad_parOut8',
            type:'rect',
            rect:['528','304','0','0','auto','auto'],
            transform:[[],[],[],['1.7','1.7']]
         },
         {
            id:'Capture_Counts',
            type:'text',
            rect:['569','448','143','34','auto','auto'],
            font:['digiface, verdana',24,"rgba(215,1,1,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'electron1',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron2',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron3',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron4',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron5',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron6',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron7',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron8',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'electron9',
            type:'rect',
            rect:['653','148','0','0','auto','auto']
         },
         {
            id:'papers',
            type:'rect',
            rect:['48px','237px','0','0','auto','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['29px','27px','224px','52px','auto','auto'],
            fill:["rgba(192,192,192,0.18)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["inset",3,3,7,2,"rgba(0,0,0,0.65)"]
         },
         {
            id:'TextStatus',
            type:'text',
            rect:['29px','6px','87px','17px','auto','auto'],
            text:"Status:",
            align:"left",
            font:['digiface, verdana',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Status',
            type:'text',
            rect:['41px','27px','199px','52px','auto','auto'],
            font:['digiface, verdana',18,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextTubeHeight',
            type:'text',
            rect:['36px','92px','87px','25px','auto','auto'],
            text:"Tube Height:",
            align:"left",
            font:['digiface, verdana',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'RectangleTubeHeight',
            type:'rect',
            rect:['135px','87px','28px','23px','auto','auto'],
            fill:["rgba(209,209,209,0.56)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["inset",3,3,5,1,"rgba(0,0,0,0.65)"]
         },
         {
            id:'TubeHeight',
            type:'text',
            rect:['143px','92px','22px','18px','auto','auto'],
            text:"11",
            align:"left",
            font:['digiface, verdana',13,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Textmm',
            type:'text',
            rect:['168px','92px','23px','18px','auto','auto'],
            text:"mm",
            align:"left",
            font:['digiface, verdana',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'TextServiceBroker',
            type:'text',
            rect:['33px','125px','128px','17px','auto','auto'],
            text:"ServiceBroker",
            align:"left",
            font:['Arial Black, Gadget, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'TextUserGroup',
            type:'text',
            rect:['32px','142px','76px','14px','auto','auto'],
            text:"Usergroup<br>",
            align:"left",
            font:['Arial Black, Gadget, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'TextExperimentId',
            type:'text',
            rect:['32px','159px','99px','17px','auto','auto'],
            text:"ExperimentId",
            align:"left",
            font:['Arial Black, Gadget, sans-serif',11,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Rectangle7',
            type:'rect',
            rect:['131px','120px','122px','57px','auto','auto'],
            clip:['rect(0px 123px 57px 0px)'],
            fill:["rgba(206,206,206,0.06)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'ExperimentId',
            type:'text',
            rect:['132px','159px','76px','17px','auto','auto'],
            text:"id",
            align:"left",
            font:['digiface, arial',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'UserGroup',
            type:'text',
            rect:['131px','143px','122px','11px','auto','auto'],
            text:"ug",
            align:"left",
            font:['digiface, arial',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SbName',
            type:'text',
            rect:['131px','125px','122px','17px','auto','auto'],
            clip:['rect(0px 122pxpx 17pxpx 0px)'],
            text:"sb",
            align:"left",
            font:['digiface, arial',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text_Strontim',
            type:'text',
            rect:['56px','191px','76px','11px','auto','auto'],
            text:"    -Strontim90",
            align:"left",
            font:['Verdana, Geneva, sans-serif',10,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text_None',
            type:'text',
            rect:['56px','206px','76px','11px','auto','auto'],
            text:"    -None",
            align:"left",
            font:['Verdana, Geneva, sans-serif',10,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'rad_parIn5',
            symbolName:'rad_part'
         },
         {
            id:'electron4',
            symbolName:'electron'
         },
         {
            id:'rad_parOut8',
            symbolName:'rad_part'
         },
         {
            id:'rad_parTube2',
            symbolName:'rad_part'
         },
         {
            id:'rad_parOut2',
            symbolName:'rad_part'
         },
         {
            id:'papers',
            symbolName:'papers'
         },
         {
            id:'rad_parTube4',
            symbolName:'rad_part'
         },
         {
            id:'source_rec_blue',
            symbolName:'source_rec'
         },
         {
            id:'electron5',
            symbolName:'electron'
         },
         {
            id:'rad_parOut1',
            symbolName:'rad_part'
         },
         {
            id:'rad_parTube5',
            symbolName:'rad_part'
         },
         {
            id:'electron6',
            symbolName:'electron'
         },
         {
            id:'rad_parOut6',
            symbolName:'rad_part'
         },
         {
            id:'rad_parIn4',
            symbolName:'rad_part'
         },
         {
            id:'rad_parTube6',
            symbolName:'rad_part'
         },
         {
            id:'electron1',
            symbolName:'electron'
         },
         {
            id:'rad_parOut5',
            symbolName:'rad_part'
         },
         {
            id:'radiationnumber',
            symbolName:'radiationnumber'
         },
         {
            id:'electron3',
            symbolName:'electron'
         },
         {
            id:'electron8',
            symbolName:'electron'
         },
         {
            id:'rad_parTube3',
            symbolName:'rad_part'
         },
         {
            id:'rad_parIn2',
            symbolName:'rad_part'
         },
         {
            id:'rad_parOut3',
            symbolName:'rad_part'
         },
         {
            id:'electron2',
            symbolName:'electron'
         },
         {
            id:'rad_parIn1',
            symbolName:'rad_part'
         },
         {
            id:'rad_parIn6',
            symbolName:'rad_part'
         },
         {
            id:'electron7',
            symbolName:'electron'
         },
         {
            id:'rad_parTube1',
            symbolName:'rad_part'
         },
         {
            id:'source_rec_left',
            symbolName:'source_rec'
         },
         {
            id:'source_rec_right',
            symbolName:'source_rec'
         },
         {
            id:'rad_parOut4',
            symbolName:'rad_part'
         },
         {
            id:'source_rec_purple',
            symbolName:'source_rec'
         },
         {
            id:'electron9',
            symbolName:'electron'
         },
         {
            id:'rad_parOut7',
            symbolName:'rad_part'
         },
         {
            id:'rad_parIn3',
            symbolName:'rad_part'
         }
         ]
      },
   states: {
      "Base State": {
         "${_rad_parOut1}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '0'],
            ["style", "left", '343px']
         ],
         "${_electron6}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '651px']
         ],
         "${_rad_parOut8}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '344px']
         ],
         "${_Text_Strontim}": [
            ["style", "top", '191px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '56px'],
            ["style", "font-size", '10px']
         ],
         "${_radiationfront}": [
            ["style", "top", '-4px'],
            ["style", "left", '35px']
         ],
         "${_Capture_Counts}": [
            ["style", "top", '448px'],
            ["style", "font-size", '24px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "color", 'rgba(215,1,1,1.00)'],
            ["style", "height", '34px'],
            ["style", "font-family", 'digiface, verdana'],
            ["style", "left", '569px'],
            ["style", "width", '143px']
         ],
         "${_electron5}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '692px']
         ],
         "${_electron3}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '667px']
         ],
         "${_rad_parOut3}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_RectangleTubeHeight}": [
            ["color", "background-color", 'rgba(209,209,209,0.56)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '135px'],
            ["style", "width", '28px'],
            ["style", "top", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "height", '23px'],
            ["subproperty", "boxShadow.spread", '1px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '5px']
         ],
         "${_Rectangle7}": [
            ["color", "background-color", 'rgba(206,206,206,0.06)'],
            ["transform", "skewY", '0deg'],
            ["style", "top", '120px'],
            ["style", "height", '57px'],
            ["style", "clip", [0,123,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '131px'],
            ["style", "width", '122px']
         ],
         "${_source_none}": [
            ["color", "background-color", 'rgba(207,121,207,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '312px'],
            ["style", "top", '326px']
         ],
         "${_rad_parIn4}": [
            ["style", "top", '324px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '352px']
         ],
         "${_electron7}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '655px']
         ],
         "${_rad_parTube2}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ],
         "${_rad_parIn1}": [
            ["style", "top", '332px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '340px']
         ],
         "${_rad_parTube3}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.6495'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ],
         "${_electron8}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '676px']
         ],
         "${_rad_parOut7}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_SbName}": [
            ["style", "text-align", 'left'],
            ["style", "clip", [0,122,17,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-size", '12px']
         ],
         "${_rad_parOut5}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_TextServiceBroker}": [
            ["style", "top", '125px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '11px'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "left", '33px'],
            ["style", "width", '128px']
         ],
         "${_electron1}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '651px']
         ],
         "${_rad_parIn5}": [
            ["style", "top", '344px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '340px']
         ],
         "${_geigercounter}": [
            ["style", "top", '-157px'],
            ["transform", "scaleY", '0.4'],
            ["style", "left", '292px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_Label_SourceNone}": [
            ["style", "top", '207px'],
            ["style", "left", '32px']
         ],
         "${_TextTubeHeight}": [
            ["style", "width", '99px'],
            ["style", "font-size", '13px']
         ],
         "${_rad_parOut6}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_source_rec_right}": [
            ["style", "top", '327px'],
            ["transform", "skewY", '-21deg'],
            ["transform", "scaleX", '0.50007'],
            ["style", "left", '-79px'],
            ["style", "width", '15px']
         ],
         "${_source_rec_left}": [
            ["style", "top", '327px'],
            ["transform", "skewY", '21deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["style", "left", '233px'],
            ["style", "width", '15px']
         ],
         "${_rad_parIn6}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '349px']
         ],
         "${_Textmm}": [
            ["style", "height", '18px'],
            ["style", "font-size", '12px'],
            ["style", "top", '92px'],
            ["style", "width", '23px']
         ],
         "${_Text_None}": [
            ["style", "top", '206px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '56px'],
            ["style", "font-size", '10px']
         ],
         "${_electron9}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '687px']
         ],
         "${_Status}": [
            ["style", "top", '27px'],
            ["style", "width", '199px'],
            ["style", "height", '52px'],
            ["style", "font-family", 'digiface, verdana'],
            ["style", "left", '41px'],
            ["style", "font-size", '18px']
         ],
         "${_electron2}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '678px']
         ],
         "${_rad_parTube5}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ],
         "${_rad_parIn2}": [
            ["style", "top", '340px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '353px']
         ],
         "${_TextStatus}": [
            ["style", "top", '6px'],
            ["style", "left", '29px'],
            ["style", "height", '17px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(192,192,192,0.18)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '29px'],
            ["style", "width", '224px'],
            ["style", "top", '27px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "height", '52px'],
            ["subproperty", "boxShadow.spread", '2px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '7px']
         ],
         "${_rad_parOut4}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_source_rec_purple}": [
            ["style", "top", '327px'],
            ["transform", "skewY", '21deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["style", "left", '234px'],
            ["style", "width", '15px']
         ],
         "${_TubeHeight}": [
            ["style", "top", '92px'],
            ["style", "height", '18px'],
            ["style", "left", '143px'],
            ["style", "width", '22px']
         ],
         "${_electron4}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '681px']
         ],
         "${_TextExperimentId}": [
            ["style", "top", '159px'],
            ["style", "text-align", 'left'],
            ["style", "width", '99px'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "left", '32px'],
            ["style", "font-size", '11px']
         ],
         "${_rad_parIn3}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '335px']
         ],
         "${_source_rec_blue}": [
            ["style", "top", '327px'],
            ["transform", "skewY", '21deg'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["style", "left", '234px'],
            ["style", "width", '15px']
         ],
         "${_papers}": [
            ["style", "top", '237px'],
            ["style", "opacity", '0'],
            ["style", "left", '48px']
         ],
         "${_radiationback}": [
            ["style", "left", '35px'],
            ["style", "top", '-4px']
         ],
         "${_radiationmiddle}": [
            ["style", "top", '-93px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '35px']
         ],
         "${_rad_parOut2}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '343px']
         ],
         "${_rad_parTube1}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ],
         "${_TextUserGroup}": [
            ["style", "top", '142px'],
            ["style", "text-align", 'left'],
            ["style", "width", '76px'],
            ["style", "height", '14px'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "left", '32px'],
            ["style", "font-size", '11px']
         ],
         "${_source_Strontim90}": [
            ["color", "background-color", 'rgba(102,109,215,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '312px'],
            ["style", "top", '326px']
         ],
         "${_Stage}": [
            ["style", "height", '600px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px']
         ],
         "${_Label_SourceStrontim90}": [
            ["style", "top", '193px'],
            ["style", "left", '32px']
         ],
         "${_rad_parTube6}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ],
         "${_rad_parTube4}": [
            ["style", "top", '229px'],
            ["transform", "scaleY", '1.699'],
            ["transform", "scaleX", '1.699'],
            ["style", "opacity", '1'],
            ["style", "left", '671px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 97750,
         autoPlay: true,
         labels: {
            "start": 0,
            "start_point_end": 124,
            "part_out": 515,
            "part_out_end": 4376,
            "part_in": 5000,
            "part_in_end": 7750,
            "electrion": 8073,
            "electrion_end": 8914,
            "part_tube": 9500,
            "part_tube_end": 11750,
            "15mm": 13002,
            "15mm_end": 17022,
            "30mm": 18000,
            "30mm_end": 23306,
            "45mm": 24000,
            "45mm_end": 29076,
            "60mm": 29615,
            "60mm_end": 34449,
            "75mm": 34928,
            "75mm_end": 40250,
            "90mm": 40775,
            "90mm_end": 46156,
            "source_select": 47000,
            "source_location": 61000,
            "source_stay_centre": 61500,
            "source_return": 62750,
            "source_return_end": 72849,
            "start_point": 79321
         },
         timeline: [
            { id: "eid2116", tween: [ "style", "${_rad_parIn2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid735", tween: [ "style", "${_rad_parIn2}", "opacity", '0', { fromValue: '1'}], position: 6113, duration: 313 },
            { id: "eid762", tween: [ "style", "${_rad_parIn2}", "opacity", '1', { fromValue: '0'}], position: 13002, duration: 138 },
            { id: "eid565", tween: [ "style", "${_rad_parIn2}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid829", tween: [ "style", "${_rad_parIn2}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 82 },
            { id: "eid846", tween: [ "style", "${_rad_parIn2}", "opacity", '0', { fromValue: '1'}], position: 19066, duration: 279 },
            { id: "eid982", tween: [ "style", "${_rad_parIn2}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 126 },
            { id: "eid990", tween: [ "style", "${_rad_parIn2}", "opacity", '0', { fromValue: '1'}], position: 25406, duration: 426 },
            { id: "eid30", tween: [ "style", "${_Capture_Counts}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid1506", tween: [ "style", "${_source_rec_left}", "opacity", '0', { fromValue: '1'}], position: 47000, duration: 81 },
            { id: "eid2239", tween: [ "style", "${_source_rec_left}", "opacity", '1', { fromValue: '0.000000'}], position: 72750, duration: 99 },
            { id: "eid465", tween: [ "transform", "${_rad_parTube3}", "scaleX", '1.6495', { fromValue: '1.6495'}], position: 14349, duration: 0 },
            { id: "eid2074", tween: [ "style", "${_rad_parTube5}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid673", tween: [ "style", "${_rad_parTube5}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid674", tween: [ "style", "${_rad_parTube5}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1916 },
            { id: "eid535", tween: [ "style", "${_rad_parTube5}", "opacity", '0', { fromValue: '1'}], position: 15532, duration: 178 },
            { id: "eid877", tween: [ "style", "${_rad_parTube5}", "opacity", '1', { fromValue: '0'}], position: 19500, duration: 363 },
            { id: "eid892", tween: [ "style", "${_rad_parTube5}", "opacity", '0', { fromValue: '1'}], position: 21049, duration: 919 },
            { id: "eid1012", tween: [ "style", "${_rad_parTube5}", "opacity", '1', { fromValue: '0'}], position: 25750, duration: 344 },
            { id: "eid1020", tween: [ "style", "${_rad_parTube5}", "opacity", '0', { fromValue: '1'}], position: 27365, duration: 867 },
            { id: "eid1488", tween: [ "style", "${_source_rec_blue}", "opacity", '0', { fromValue: '1'}], position: 47000, duration: 81 },
            { id: "eid1490", tween: [ "style", "${_source_rec_blue}", "opacity", '1', { fromValue: '0'}], position: 54007, duration: 216 },
            { id: "eid2225", tween: [ "style", "${_source_rec_blue}", "opacity", '0', { fromValue: '1'}], position: 67976, duration: 134 },
            { id: "eid1683", tween: [ "style", "${_source_rec_blue}", "opacity", '0', { fromValue: '1'}], position: 82953, duration: 122 },
            { id: "eid701", tween: [ "style", "${_rad_parTube6}", "left", '654px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid702", tween: [ "style", "${_rad_parTube6}", "left", '671px', { fromValue: '654px'}], position: 10632, duration: 1183 },
            { id: "eid472", tween: [ "style", "${_rad_parTube6}", "left", '654px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid491", tween: [ "style", "${_rad_parTube6}", "left", '671px', { fromValue: '654px'}], position: 14349, duration: 1183 },
            { id: "eid609", tween: [ "style", "${_electron1}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15388, duration: 287 },
            { id: "eid624", tween: [ "style", "${_electron1}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15675, duration: 988 },
            { id: "eid549", tween: [ "style", "${_electron1}", "opacity", '0.0078125', { fromValue: '1'}], position: 16663, duration: 152 },
            { id: "eid1242", tween: [ "style", "${_electron1}", "opacity", '1', { fromValue: '0.007813000120222569'}], position: 38919, duration: 831 },
            { id: "eid1248", tween: [ "style", "${_electron1}", "opacity", '0', { fromValue: '1'}], position: 40056, duration: 194 },
            { id: "eid712", tween: [ "style", "${_electron8}", "left", '667px', { fromValue: '676px'}], position: 8250, duration: 1137 },
            { id: "eid305", tween: [ "style", "${_electron8}", "left", '667px', { fromValue: '676px'}], position: 15550, duration: 1137 },
            { id: "eid898", tween: [ "style", "${_electron8}", "left", '667px', { fromValue: '676px'}], position: 21557, duration: 1137 },
            { id: "eid1026", tween: [ "style", "${_electron8}", "left", '667px', { fromValue: '676px'}], position: 27341, duration: 1137 },
            { id: "eid695", tween: [ "style", "${_rad_parTube5}", "top", '199px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid696", tween: [ "style", "${_rad_parTube5}", "top", '132px', { fromValue: '199px'}], position: 10632, duration: 1183 },
            { id: "eid471", tween: [ "style", "${_rad_parTube5}", "top", '199px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid492", tween: [ "style", "${_rad_parTube5}", "top", '132px', { fromValue: '199px'}], position: 14349, duration: 1183 },
            { id: "eid867", tween: [ "style", "${_rad_parTube5}", "top", '199px', { fromValue: '229px'}], position: 19500, duration: 1132 },
            { id: "eid868", tween: [ "style", "${_rad_parTube5}", "top", '132px', { fromValue: '199px'}], position: 20632, duration: 1183 },
            { id: "eid1006", tween: [ "style", "${_rad_parTube5}", "top", '199px', { fromValue: '229px'}], position: 25750, duration: 1132 },
            { id: "eid1007", tween: [ "style", "${_rad_parTube5}", "top", '132px', { fromValue: '199px'}], position: 26882, duration: 1183 },
            { id: "eid408", tween: [ "style", "${_rad_parIn1}", "top", '89px', { fromValue: '332px'}], position: 5000, duration: 2392 },
            { id: "eid754", tween: [ "style", "${_rad_parIn1}", "top", '89px', { fromValue: '332px'}], position: 13002, duration: 2392 },
            { id: "eid814", tween: [ "style", "${_rad_parIn1}", "top", '89px', { fromValue: '332px'}], position: 18000, duration: 2392 },
            { id: "eid968", tween: [ "style", "${_rad_parIn1}", "top", '89px', { fromValue: '332px'}], position: 24000, duration: 2392 },
            { id: "eid212", tween: [ "style", "${_rad_parOut3}", "left", '224px', { fromValue: '343px'}], position: 517, duration: 3341 },
            { id: "eid226", tween: [ "style", "${_rad_parOut3}", "left", '629px', { fromValue: '224px'}], position: 3858, duration: 264 },
            { id: "eid1076", tween: [ "style", "${_rad_parOut3}", "left", '224px', { fromValue: '343px'}], position: 29750, duration: 3341 },
            { id: "eid1077", tween: [ "style", "${_rad_parOut3}", "left", '629px', { fromValue: '224px'}], position: 33091, duration: 264 },
            { id: "eid1188", tween: [ "style", "${_rad_parOut3}", "left", '224px', { fromValue: '343px'}], position: 34954, duration: 3341 },
            { id: "eid1189", tween: [ "style", "${_rad_parOut3}", "left", '629px', { fromValue: '224px'}], position: 38295, duration: 264 },
            { id: "eid1274", tween: [ "style", "${_rad_parOut3}", "left", '224px', { fromValue: '343px'}], position: 40801, duration: 3341 },
            { id: "eid1275", tween: [ "style", "${_rad_parOut3}", "left", '629px', { fromValue: '224px'}], position: 44142, duration: 264 },
            { id: "eid324", tween: [ "style", "${_TextTubeHeight}", "width", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid2019", tween: [ "style", "${_rad_parOut8}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2088", tween: [ "style", "${_rad_parOut8}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid2260", tween: [ "style", "${_radiationmiddle}", "top", '-93px', { fromValue: '-93px'}], position: 0, duration: 0 },
            { id: "eid716", tween: [ "style", "${_electron6}", "left", '667px', { fromValue: '651px'}], position: 8250, duration: 1137 },
            { id: "eid299", tween: [ "style", "${_electron6}", "left", '667px', { fromValue: '651px'}], position: 15595, duration: 1137 },
            { id: "eid903", tween: [ "style", "${_electron6}", "left", '667px', { fromValue: '651px'}], position: 21605, duration: 1137 },
            { id: "eid1031", tween: [ "style", "${_electron6}", "left", '667px', { fromValue: '651px'}], position: 27764, duration: 1137 },
            { id: "eid1087", tween: [ "style", "${_electron6}", "left", '667px', { fromValue: '651px'}], position: 33091, duration: 1137 },
            { id: "eid1461", tween: [ "style", "${_source_rec_blue}", "top", '333px', { fromValue: '327px'}], position: 54224, duration: 1474 },
            { id: "eid1462", tween: [ "style", "${_source_rec_blue}", "top", '336px', { fromValue: '333px'}], position: 55699, duration: 733 },
            { id: "eid1463", tween: [ "style", "${_source_rec_blue}", "top", '339px', { fromValue: '336px'}], position: 56432, duration: 1104 },
            { id: "eid1464", tween: [ "style", "${_source_rec_blue}", "top", '344px', { fromValue: '339px'}], position: 57534, duration: 3466 },
            { id: "eid1465", tween: [ "style", "${_source_rec_blue}", "top", '339px', { fromValue: '344px'}], position: 62750, duration: 2613 },
            { id: "eid1466", tween: [ "style", "${_source_rec_blue}", "top", '326px', { fromValue: '339px'}], position: 65363, duration: 2613 },
            { id: "eid1617", tween: [ "style", "${_source_rec_blue}", "top", '339px', { fromValue: '326px'}], position: 75827, duration: 1500 },
            { id: "eid1616", tween: [ "style", "${_source_rec_blue}", "top", '344px', { fromValue: '339px'}], position: 77327, duration: 1500 },
            { id: "eid1615", tween: [ "style", "${_source_rec_blue}", "top", '339px', { fromValue: '344px'}], position: 78939, duration: 2053 },
            { id: "eid1614", tween: [ "style", "${_source_rec_blue}", "top", '336px', { fromValue: '339px'}], position: 80992, duration: 654 },
            { id: "eid1613", tween: [ "style", "${_source_rec_blue}", "top", '333px', { fromValue: '336px'}], position: 81646, duration: 434 },
            { id: "eid1612", tween: [ "style", "${_source_rec_blue}", "top", '327px', { fromValue: '333px'}], position: 82080, duration: 873 },
            { id: "eid1467", tween: [ "style", "${_source_rec_blue}", "top", '340px', { fromValue: '344px'}], position: 87077, duration: 1500 },
            { id: "eid1468", tween: [ "style", "${_source_rec_blue}", "top", '325px', { fromValue: '340px'}], position: 88577, duration: 1500 },
            { id: "eid309", tween: [ "style", "${_electron9}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid709", tween: [ "style", "${_electron9}", "top", '56px', { fromValue: '137px'}], position: 8250, duration: 1137 },
            { id: "eid310", tween: [ "style", "${_electron9}", "top", '56px', { fromValue: '137px'}], position: 15388, duration: 1137 },
            { id: "eid896", tween: [ "style", "${_electron9}", "top", '56px', { fromValue: '137px'}], position: 21668, duration: 1137 },
            { id: "eid1024", tween: [ "style", "${_electron9}", "top", '56px', { fromValue: '137px'}], position: 27500, duration: 1137 },
            { id: "eid685", tween: [ "style", "${_rad_parTube2}", "left", '660px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid686", tween: [ "style", "${_rad_parTube2}", "left", '671px', { fromValue: '660px'}], position: 10632, duration: 1183 },
            { id: "eid464", tween: [ "style", "${_rad_parTube2}", "left", '660px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid487", tween: [ "style", "${_rad_parTube2}", "left", '671px', { fromValue: '660px'}], position: 14349, duration: 1183 },
            { id: "eid857", tween: [ "style", "${_rad_parTube2}", "left", '660px', { fromValue: '671px'}], position: 19250, duration: 1132 },
            { id: "eid858", tween: [ "style", "${_rad_parTube2}", "left", '671px', { fromValue: '660px'}], position: 20382, duration: 1183 },
            { id: "eid1120", tween: [ "style", "${_rad_parTube2}", "left", '660px', { fromValue: '671px'}], position: 31000, duration: 1132 },
            { id: "eid1121", tween: [ "style", "${_rad_parTube2}", "left", '671px', { fromValue: '660px'}], position: 32132, duration: 1183 },
            { id: "eid1214", tween: [ "style", "${_rad_parTube2}", "left", '660px', { fromValue: '671px'}], position: 36604, duration: 1132 },
            { id: "eid1215", tween: [ "style", "${_rad_parTube2}", "left", '671px', { fromValue: '660px'}], position: 37736, duration: 1183 },
            { id: "eid2243", tween: [ "style", "${_source_none}", "left", '369px', { fromValue: '312px'}], position: 52481, duration: 2982 },
            { id: "eid613", tween: [ "style", "${_electron6}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15457, duration: 287 },
            { id: "eid619", tween: [ "style", "${_electron6}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15744, duration: 988 },
            { id: "eid553", tween: [ "style", "${_electron6}", "opacity", '0.0078125', { fromValue: '1'}], position: 16732, duration: 152 },
            { id: "eid927", tween: [ "style", "${_electron6}", "opacity", '1', { fromValue: '0.007813000120222569'}], position: 21605, duration: 909 },
            { id: "eid934", tween: [ "style", "${_electron6}", "opacity", '0', { fromValue: '1'}], position: 22742, duration: 189 },
            { id: "eid1043", tween: [ "style", "${_electron6}", "opacity", '1', { fromValue: '0'}], position: 27764, duration: 894 },
            { id: "eid1055", tween: [ "style", "${_electron6}", "opacity", '0', { fromValue: '1'}], position: 28901, duration: 175 },
            { id: "eid1151", tween: [ "style", "${_electron6}", "opacity", '1', { fromValue: '0'}], position: 33091, duration: 865 },
            { id: "eid1161", tween: [ "style", "${_electron6}", "opacity", '0', { fromValue: '1'}], position: 34228, duration: 221 },
            { id: "eid683", tween: [ "style", "${_rad_parTube2}", "top", '207px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid684", tween: [ "style", "${_rad_parTube2}", "top", '132px', { fromValue: '207px'}], position: 10632, duration: 1183 },
            { id: "eid463", tween: [ "style", "${_rad_parTube2}", "top", '207px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid486", tween: [ "style", "${_rad_parTube2}", "top", '132px', { fromValue: '207px'}], position: 14349, duration: 1183 },
            { id: "eid855", tween: [ "style", "${_rad_parTube2}", "top", '207px', { fromValue: '229px'}], position: 19250, duration: 1132 },
            { id: "eid856", tween: [ "style", "${_rad_parTube2}", "top", '132px', { fromValue: '207px'}], position: 20382, duration: 1183 },
            { id: "eid1122", tween: [ "style", "${_rad_parTube2}", "top", '207px', { fromValue: '229px'}], position: 31000, duration: 1132 },
            { id: "eid1123", tween: [ "style", "${_rad_parTube2}", "top", '132px', { fromValue: '207px'}], position: 32132, duration: 1183 },
            { id: "eid1212", tween: [ "style", "${_rad_parTube2}", "top", '207px', { fromValue: '229px'}], position: 36604, duration: 1132 },
            { id: "eid1213", tween: [ "style", "${_rad_parTube2}", "top", '132px', { fromValue: '207px'}], position: 37736, duration: 1183 },
            { id: "eid306", tween: [ "style", "${_electron8}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid711", tween: [ "style", "${_electron8}", "top", '56px', { fromValue: '147px'}], position: 8250, duration: 1137 },
            { id: "eid307", tween: [ "style", "${_electron8}", "top", '56px', { fromValue: '147px'}], position: 15550, duration: 1137 },
            { id: "eid899", tween: [ "style", "${_electron8}", "top", '56px', { fromValue: '147px'}], position: 21557, duration: 1137 },
            { id: "eid1027", tween: [ "style", "${_electron8}", "top", '56px', { fromValue: '147px'}], position: 27341, duration: 1137 },
            { id: "eid210", tween: [ "style", "${_rad_parOut2}", "top", '-24px', { fromValue: '331px'}], position: 516, duration: 3606 },
            { id: "eid1080", tween: [ "style", "${_rad_parOut2}", "top", '-24px', { fromValue: '331px'}], position: 30063, duration: 3606 },
            { id: "eid1278", tween: [ "style", "${_rad_parOut2}", "top", '-24px', { fromValue: '331px'}], position: 40775, duration: 3606 },
            { id: "eid323", tween: [ "style", "${_TextTubeHeight}", "font-size", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid1478", tween: [ "transform", "${_source_rec_blue}", "scaleX", '1', { fromValue: '0.5'}], position: 54224, duration: 6776 },
            { id: "eid1479", tween: [ "transform", "${_source_rec_blue}", "scaleX", '0.47', { fromValue: '1'}], position: 62750, duration: 5226 },
            { id: "eid1624", tween: [ "transform", "${_source_rec_blue}", "scaleX", '1', { fromValue: '0.47'}], position: 75827, duration: 3000 },
            { id: "eid1625", tween: [ "transform", "${_source_rec_blue}", "scaleX", '0.5', { fromValue: '1'}], position: 78939, duration: 4014 },
            { id: "eid214", tween: [ "style", "${_rad_parOut4}", "left", '536px', { fromValue: '343px'}], position: 517, duration: 3430 },
            { id: "eid224", tween: [ "style", "${_rad_parOut4}", "left", '629px', { fromValue: '536px'}], position: 3947, duration: 176 },
            { id: "eid810", tween: [ "style", "${_rad_parOut4}", "left", '536px', { fromValue: '343px'}], position: 18313, duration: 3430 },
            { id: "eid811", tween: [ "style", "${_rad_parOut4}", "left", '629px', { fromValue: '536px'}], position: 21743, duration: 176 },
            { id: "eid958", tween: [ "style", "${_rad_parOut4}", "left", '536px', { fromValue: '343px'}], position: 24313, duration: 3430 },
            { id: "eid959", tween: [ "style", "${_rad_parOut4}", "left", '629px', { fromValue: '536px'}], position: 27743, duration: 176 },
            { id: "eid1184", tween: [ "style", "${_rad_parOut4}", "left", '536px', { fromValue: '343px'}], position: 35319, duration: 3430 },
            { id: "eid1185", tween: [ "style", "${_rad_parOut4}", "left", '629px', { fromValue: '536px'}], position: 38749, duration: 176 },
            { id: "eid1270", tween: [ "style", "${_rad_parOut4}", "left", '536px', { fromValue: '343px'}], position: 41166, duration: 3430 },
            { id: "eid1271", tween: [ "style", "${_rad_parOut4}", "left", '629px', { fromValue: '536px'}], position: 44596, duration: 176 },
            { id: "eid213", tween: [ "style", "${_rad_parOut3}", "top", '-20px', { fromValue: '331px'}], position: 517, duration: 3341 },
            { id: "eid227", tween: [ "style", "${_rad_parOut3}", "top", '-24px', { fromValue: '-20px'}], position: 3859, duration: 264 },
            { id: "eid1078", tween: [ "style", "${_rad_parOut3}", "top", '-17px', { fromValue: '331px'}], position: 29750, duration: 3341 },
            { id: "eid1079", tween: [ "style", "${_rad_parOut3}", "top", '-24px', { fromValue: '-17px'}], position: 33092, duration: 264 },
            { id: "eid1190", tween: [ "style", "${_rad_parOut3}", "top", '-18px', { fromValue: '331px'}], position: 34954, duration: 3341 },
            { id: "eid1191", tween: [ "style", "${_rad_parOut3}", "top", '-24px', { fromValue: '-18px'}], position: 38296, duration: 264 },
            { id: "eid1276", tween: [ "style", "${_rad_parOut3}", "top", '-20px', { fromValue: '331px'}], position: 40801, duration: 3341 },
            { id: "eid1277", tween: [ "style", "${_rad_parOut3}", "top", '-24px', { fromValue: '-20px'}], position: 44143, duration: 264 },
            { id: "eid41", tween: [ "style", "${_rad_parOut1}", "top", '-24px', { fromValue: '331px'}], position: 639, duration: 3606 },
            { id: "eid966", tween: [ "style", "${_rad_parOut1}", "top", '-24px', { fromValue: '331px'}], position: 24250, duration: 3606 },
            { id: "eid1082", tween: [ "style", "${_rad_parOut1}", "top", '-24px', { fromValue: '331px'}], position: 29955, duration: 3606 },
            { id: "eid1192", tween: [ "style", "${_rad_parOut1}", "top", '-24px', { fromValue: '331px'}], position: 35268, duration: 3606 },
            { id: "eid1280", tween: [ "style", "${_rad_parOut1}", "top", '-24px', { fromValue: '331px'}], position: 41115, duration: 3606 },
            { id: "eid2112", tween: [ "style", "${_rad_parIn1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid739", tween: [ "style", "${_rad_parIn1}", "opacity", '0.0546875', { fromValue: '1'}], position: 6113, duration: 313 },
            { id: "eid759", tween: [ "style", "${_rad_parIn1}", "opacity", '1', { fromValue: '0.054687999188899994'}], position: 13002, duration: 138 },
            { id: "eid775", tween: [ "style", "${_rad_parIn1}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid832", tween: [ "style", "${_rad_parIn1}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 82 },
            { id: "eid849", tween: [ "style", "${_rad_parIn1}", "opacity", '0', { fromValue: '1'}], position: 19066, duration: 279 },
            { id: "eid983", tween: [ "style", "${_rad_parIn1}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 126 },
            { id: "eid991", tween: [ "style", "${_rad_parIn1}", "opacity", '0', { fromValue: '1'}], position: 25406, duration: 426 },
            { id: "eid413", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '352px'}], position: 5000, duration: 2392 },
            { id: "eid520", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '352px'}], position: 13002, duration: 2392 },
            { id: "eid821", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '352px'}], position: 18000, duration: 2392 },
            { id: "eid973", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '352px'}], position: 24000, duration: 2392 },
            { id: "eid1099", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '352px'}], position: 29614, duration: 2392 },
            { id: "eid1209", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '335px'}], position: 34954, duration: 2392 },
            { id: "eid1287", tween: [ "style", "${_rad_parIn4}", "left", '344px', { fromValue: '335px'}], position: 40775, duration: 2392 },
            { id: "eid681", tween: [ "style", "${_rad_parTube1}", "left", '690px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid682", tween: [ "style", "${_rad_parTube1}", "left", '671px', { fromValue: '690px'}], position: 10632, duration: 1183 },
            { id: "eid461", tween: [ "style", "${_rad_parTube1}", "left", '690px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid497", tween: [ "style", "${_rad_parTube1}", "left", '671px', { fromValue: '690px'}], position: 14349, duration: 1183 },
            { id: "eid853", tween: [ "style", "${_rad_parTube1}", "left", '690px', { fromValue: '671px'}], position: 19344, duration: 1132 },
            { id: "eid854", tween: [ "style", "${_rad_parTube1}", "left", '671px', { fromValue: '690px'}], position: 20476, duration: 1183 },
            { id: "eid992", tween: [ "style", "${_rad_parTube1}", "left", '690px', { fromValue: '671px'}], position: 25123, duration: 1132 },
            { id: "eid993", tween: [ "style", "${_rad_parTube1}", "left", '671px', { fromValue: '690px'}], position: 26255, duration: 1183 },
            { id: "eid40", tween: [ "style", "${_rad_parOut1}", "left", '629px', { fromValue: '343px'}], position: 639, duration: 3606 },
            { id: "eid967", tween: [ "style", "${_rad_parOut1}", "left", '629px', { fromValue: '343px'}], position: 24250, duration: 3606 },
            { id: "eid1083", tween: [ "style", "${_rad_parOut1}", "left", '629px', { fromValue: '343px'}], position: 29955, duration: 3606 },
            { id: "eid1193", tween: [ "style", "${_rad_parOut1}", "left", '629px', { fromValue: '343px'}], position: 35268, duration: 3606 },
            { id: "eid1281", tween: [ "style", "${_rad_parOut1}", "left", '629px', { fromValue: '343px'}], position: 41115, duration: 3606 },
            { id: "eid2072", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid675", tween: [ "style", "${_rad_parTube4}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid676", tween: [ "style", "${_rad_parTube4}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1916 },
            { id: "eid536", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 15532, duration: 178 },
            { id: "eid880", tween: [ "style", "${_rad_parTube4}", "opacity", '1', { fromValue: '0'}], position: 19451, duration: 363 },
            { id: "eid895", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 919 },
            { id: "eid1013", tween: [ "style", "${_rad_parTube4}", "opacity", '1', { fromValue: '0'}], position: 25250, duration: 344 },
            { id: "eid1021", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 26865, duration: 867 },
            { id: "eid1135", tween: [ "style", "${_rad_parTube4}", "opacity", '1', { fromValue: '0'}], position: 31366, duration: 366 },
            { id: "eid1141", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 32969, duration: 905 },
            { id: "eid1309", tween: [ "style", "${_rad_parTube4}", "opacity", '1', { fromValue: '0'}], position: 42797, duration: 391 },
            { id: "eid1311", tween: [ "style", "${_rad_parTube4}", "opacity", '0', { fromValue: '1'}], position: 44332, duration: 940 },
            { id: "eid2068", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid669", tween: [ "style", "${_rad_parTube3}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid670", tween: [ "style", "${_rad_parTube3}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1916 },
            { id: "eid533", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 15532, duration: 178 },
            { id: "eid879", tween: [ "style", "${_rad_parTube3}", "opacity", '1', { fromValue: '0'}], position: 19137, duration: 363 },
            { id: "eid894", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 20686, duration: 919 },
            { id: "eid1014", tween: [ "style", "${_rad_parTube3}", "opacity", '1', { fromValue: '0'}], position: 25406, duration: 344 },
            { id: "eid1022", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 27021, duration: 867 },
            { id: "eid1137", tween: [ "style", "${_rad_parTube3}", "opacity", '1', { fromValue: '0'}], position: 31179, duration: 366 },
            { id: "eid1143", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 32782, duration: 905 },
            { id: "eid1222", tween: [ "style", "${_rad_parTube3}", "opacity", '1', { fromValue: '0'}], position: 36604, duration: 365 },
            { id: "eid1226", tween: [ "style", "${_rad_parTube3}", "opacity", '0', { fromValue: '1'}], position: 38150, duration: 924 },
            { id: "eid2318", tween: [ "style", "${_source_Strontim90}", "left", '339px', { fromValue: '312px'}], position: 13002, duration: 138 },
            { id: "eid2322", tween: [ "style", "${_source_Strontim90}", "left", '339px', { fromValue: '339px'}], position: 18000, duration: 0 },
            { id: "eid2335", tween: [ "style", "${_source_Strontim90}", "left", '315px', { fromValue: '307px'}], position: 59250, duration: 274 },
            { id: "eid2244", tween: [ "style", "${_source_Strontim90}", "left", '340px', { fromValue: '315px'}], position: 59524, duration: 1476 },
            { id: "eid2247", tween: [ "style", "${_source_Strontim90}", "left", '369px', { fromValue: '340px'}], position: 62750, duration: 1279 },
            { id: "eid615", tween: [ "style", "${_electron3}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15320, duration: 287 },
            { id: "eid622", tween: [ "style", "${_electron3}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15606, duration: 988 },
            { id: "eid555", tween: [ "style", "${_electron3}", "opacity", '0.0078125', { fromValue: '1'}], position: 16594, duration: 152 },
            { id: "eid926", tween: [ "style", "${_electron3}", "opacity", '1', { fromValue: '0'}], position: 21668, duration: 909 },
            { id: "eid933", tween: [ "style", "${_electron3}", "opacity", '0', { fromValue: '1'}], position: 22805, duration: 189 },
            { id: "eid1150", tween: [ "style", "${_electron3}", "opacity", '1', { fromValue: '0'}], position: 33003, duration: 865 },
            { id: "eid1160", tween: [ "style", "${_electron3}", "opacity", '0', { fromValue: '1'}], position: 34101, duration: 221 },
            { id: "eid1243", tween: [ "style", "${_electron3}", "opacity", '1', { fromValue: '0'}], position: 38919, duration: 831 },
            { id: "eid1249", tween: [ "style", "${_electron3}", "opacity", '0', { fromValue: '1'}], position: 40056, duration: 194 },
            { id: "eid1292", tween: [ "style", "${_electron3}", "opacity", '1', { fromValue: '0'}], position: 44841, duration: 819 },
            { id: "eid1294", tween: [ "style", "${_electron3}", "opacity", '0', { fromValue: '1'}], position: 45978, duration: 178 },
            { id: "eid2017", tween: [ "style", "${_rad_parOut4}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2094", tween: [ "style", "${_rad_parOut4}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid402", tween: [ "style", "${_rad_parIn3}", "top", '89px', { fromValue: '351px'}], position: 5000, duration: 2392 },
            { id: "eid518", tween: [ "style", "${_rad_parIn3}", "top", '89px', { fromValue: '351px'}], position: 13002, duration: 2392 },
            { id: "eid818", tween: [ "style", "${_rad_parIn3}", "top", '89px', { fromValue: '351px'}], position: 18000, duration: 2392 },
            { id: "eid1096", tween: [ "style", "${_rad_parIn3}", "top", '89px', { fromValue: '351px'}], position: 29750, duration: 2392 },
            { id: "eid1207", tween: [ "style", "${_rad_parIn3}", "top", '89px', { fromValue: '351px'}], position: 35143, duration: 2392 },
            { id: "eid1502", tween: [ "style", "${_source_rec_purple}", "opacity", '0', { fromValue: '1'}], position: 60777, duration: 223 },
            { id: "eid1681", tween: [ "style", "${_source_rec_purple}", "opacity", '1', { fromValue: '0'}], position: 78940, duration: 115 },
            { id: "eid2240", tween: [ "style", "${_source_none}", "opacity", '1', { fromValue: '1'}], position: 55500, duration: 0 },
            { id: "eid1438", tween: [ "transform", "${_source_rec_purple}", "skewY", '11deg', { fromValue: '21deg'}], position: 47081, duration: 3384 },
            { id: "eid1439", tween: [ "transform", "${_source_rec_purple}", "skewY", '0deg', { fromValue: '11deg'}], position: 50465, duration: 3542 },
            { id: "eid1349", tween: [ "transform", "${_source_rec_purple}", "skewY", '-14deg', { fromValue: '0deg'}], position: 54007, duration: 3384 },
            { id: "eid1352", tween: [ "transform", "${_source_rec_purple}", "skewY", '-21deg', { fromValue: '-14deg'}], position: 57393, duration: 3384 },
            { id: "eid1676", tween: [ "transform", "${_source_rec_purple}", "skewY", '-14deg', { fromValue: '-21deg'}], position: 79055, duration: 2010 },
            { id: "eid1677", tween: [ "transform", "${_source_rec_purple}", "skewY", '0deg', { fromValue: '-14deg'}], position: 81065, duration: 2010 },
            { id: "eid1678", tween: [ "transform", "${_source_rec_purple}", "skewY", '11deg', { fromValue: '0deg'}], position: 83075, duration: 2104 },
            { id: "eid1679", tween: [ "transform", "${_source_rec_purple}", "skewY", '21deg', { fromValue: '11deg'}], position: 85179, duration: 2010 },
            { id: "eid2070", tween: [ "style", "${_rad_parTube1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid667", tween: [ "style", "${_rad_parTube1}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid668", tween: [ "style", "${_rad_parTube1}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1250 },
            { id: "eid532", tween: [ "style", "${_rad_parTube1}", "opacity", '0', { fromValue: '1'}], position: 14866, duration: 844 },
            { id: "eid876", tween: [ "style", "${_rad_parTube1}", "opacity", '1', { fromValue: '0'}], position: 19344, duration: 363 },
            { id: "eid891", tween: [ "style", "${_rad_parTube1}", "opacity", '0', { fromValue: '1'}], position: 20893, duration: 919 },
            { id: "eid1015", tween: [ "style", "${_rad_parTube1}", "opacity", '1', { fromValue: '0'}], position: 25123, duration: 344 },
            { id: "eid1023", tween: [ "style", "${_rad_parTube1}", "opacity", '0', { fromValue: '1'}], position: 26738, duration: 867 },
            { id: "eid2014", tween: [ "style", "${_rad_parOut3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2091", tween: [ "style", "${_rad_parOut3}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid294", tween: [ "style", "${_electron4}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid719", tween: [ "style", "${_electron4}", "top", '56px', { fromValue: '153px'}], position: 8250, duration: 1137 },
            { id: "eid295", tween: [ "style", "${_electron4}", "top", '56px', { fromValue: '153px'}], position: 15457, duration: 1137 },
            { id: "eid906", tween: [ "style", "${_electron4}", "top", '56px', { fromValue: '153px'}], position: 21821, duration: 1137 },
            { id: "eid1033", tween: [ "style", "${_electron4}", "top", '56px', { fromValue: '153px'}], position: 27341, duration: 1137 },
            { id: "eid1090", tween: [ "style", "${_electron4}", "top", '56px', { fromValue: '153px'}], position: 32931, duration: 1137 },
            { id: "eid300", tween: [ "style", "${_electron6}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid715", tween: [ "style", "${_electron6}", "top", '56px', { fromValue: '153px'}], position: 8250, duration: 1137 },
            { id: "eid301", tween: [ "style", "${_electron6}", "top", '56px', { fromValue: '153px'}], position: 15595, duration: 1137 },
            { id: "eid902", tween: [ "style", "${_electron6}", "top", '56px', { fromValue: '153px'}], position: 21605, duration: 1137 },
            { id: "eid1030", tween: [ "style", "${_electron6}", "top", '56px', { fromValue: '153px'}], position: 27764, duration: 1137 },
            { id: "eid1086", tween: [ "style", "${_electron6}", "top", '56px', { fromValue: '153px'}], position: 33091, duration: 1137 },
            { id: "eid2259", tween: [ "style", "${_radiationmiddle}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid2015", tween: [ "style", "${_rad_parOut2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2093", tween: [ "style", "${_rad_parOut2}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid31", tween: [ "color", "${_Capture_Counts}", "color", 'rgba(215,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_rad_parOut5}", "top", '-19px', { fromValue: '331px'}], position: 517, duration: 3390 },
            { id: "eid223", tween: [ "style", "${_rad_parOut5}", "top", '-24px', { fromValue: '-19px'}], position: 3907, duration: 216 },
            { id: "eid1180", tween: [ "style", "${_rad_parOut5}", "top", '-18px', { fromValue: '331px'}], position: 34982, duration: 3390 },
            { id: "eid1181", tween: [ "style", "${_rad_parOut5}", "top", '-24px', { fromValue: '-18px'}], position: 38372, duration: 216 },
            { id: "eid1266", tween: [ "style", "${_rad_parOut5}", "top", '-19px', { fromValue: '331px'}], position: 40829, duration: 3390 },
            { id: "eid1267", tween: [ "style", "${_rad_parOut5}", "top", '-24px', { fromValue: '-19px'}], position: 44219, duration: 216 },
            { id: "eid608", tween: [ "style", "${_electron5}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15133, duration: 287 },
            { id: "eid620", tween: [ "style", "${_electron5}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15419, duration: 988 },
            { id: "eid548", tween: [ "style", "${_electron5}", "opacity", '0.0078125', { fromValue: '1'}], position: 16407, duration: 152 },
            { id: "eid929", tween: [ "style", "${_electron5}", "opacity", '1', { fromValue: '0'}], position: 21980, duration: 909 },
            { id: "eid936", tween: [ "style", "${_electron5}", "opacity", '0', { fromValue: '1'}], position: 23117, duration: 189 },
            { id: "eid1045", tween: [ "style", "${_electron5}", "opacity", '1', { fromValue: '0'}], position: 27605, duration: 894 },
            { id: "eid1057", tween: [ "style", "${_electron5}", "opacity", '0', { fromValue: '1'}], position: 28742, duration: 175 },
            { id: "eid1153", tween: [ "style", "${_electron5}", "opacity", '1', { fromValue: '0'}], position: 32744, duration: 865 },
            { id: "eid1163", tween: [ "style", "${_electron5}", "opacity", '0', { fromValue: '1'}], position: 33842, duration: 221 },
            { id: "eid691", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid692", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 10632, duration: 1183 },
            { id: "eid469", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid494", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 14349, duration: 1183 },
            { id: "eid863", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 19451, duration: 1132 },
            { id: "eid864", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 20583, duration: 1183 },
            { id: "eid1000", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 25250, duration: 1132 },
            { id: "eid1001", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 26382, duration: 1183 },
            { id: "eid1128", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 31366, duration: 1132 },
            { id: "eid1129", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 32498, duration: 1183 },
            { id: "eid1304", tween: [ "style", "${_rad_parTube4}", "top", '207px', { fromValue: '229px'}], position: 42797, duration: 1132 },
            { id: "eid1305", tween: [ "style", "${_rad_parTube4}", "top", '132px', { fromValue: '207px'}], position: 43929, duration: 1183 },
            { id: "eid2012", tween: [ "style", "${_rad_parOut5}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2089", tween: [ "style", "${_rad_parOut5}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid687", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid688", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 10632, duration: 1183 },
            { id: "eid467", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid488", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 14349, duration: 1183 },
            { id: "eid859", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 19137, duration: 1132 },
            { id: "eid860", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 20269, duration: 1183 },
            { id: "eid998", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 25406, duration: 1132 },
            { id: "eid999", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 26538, duration: 1183 },
            { id: "eid1126", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 31179, duration: 1132 },
            { id: "eid1127", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 32311, duration: 1183 },
            { id: "eid1216", tween: [ "style", "${_rad_parTube3}", "top", '199px', { fromValue: '229px'}], position: 36604, duration: 1132 },
            { id: "eid1217", tween: [ "style", "${_rad_parTube3}", "top", '132px', { fromValue: '199px'}], position: 37736, duration: 1183 },
            { id: "eid206", tween: [ "style", "${_Capture_Counts}", "left", '569px', { fromValue: '569px'}], position: 0, duration: 0 },
            { id: "eid2249", tween: [ "style", "${_rad_parOut1}", "opacity", '0', { fromValue: '0'}], position: 124, duration: 0 },
            { id: "eid2250", tween: [ "style", "${_rad_parOut1}", "opacity", '0', { fromValue: '0'}], position: 248, duration: 0 },
            { id: "eid2092", tween: [ "style", "${_rad_parOut1}", "opacity", '1', { fromValue: '0'}], position: 639, duration: 102 },
            { id: "eid407", tween: [ "style", "${_rad_parIn5}", "left", '344px', { fromValue: '340px'}], position: 5000, duration: 2392 },
            { id: "eid522", tween: [ "style", "${_rad_parIn5}", "left", '344px', { fromValue: '340px'}], position: 13002, duration: 2392 },
            { id: "eid823", tween: [ "style", "${_rad_parIn5}", "left", '344px', { fromValue: '340px'}], position: 18000, duration: 2392 },
            { id: "eid975", tween: [ "style", "${_rad_parIn5}", "left", '344px', { fromValue: '340px'}], position: 24000, duration: 2392 },
            { id: "eid291", tween: [ "style", "${_electron3}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid721", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 8250, duration: 1137 },
            { id: "eid292", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 15457, duration: 1137 },
            { id: "eid908", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 21668, duration: 1137 },
            { id: "eid1092", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 33003, duration: 1137 },
            { id: "eid1194", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 38919, duration: 1137 },
            { id: "eid1288", tween: [ "style", "${_electron3}", "top", '56px', { fromValue: '152px'}], position: 44841, duration: 1137 },
            { id: "eid232", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 515, duration: 3342 },
            { id: "eid255", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 3857, duration: 48 },
            { id: "eid233", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 3905, duration: 216 },
            { id: "eid508", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 13217, duration: 3342 },
            { id: "eid509", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 16559, duration: 48 },
            { id: "eid510", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 16607, duration: 216 },
            { id: "eid803", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 18215, duration: 3342 },
            { id: "eid804", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 21557, duration: 48 },
            { id: "eid805", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 21605, duration: 216 },
            { id: "eid955", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 24215, duration: 3342 },
            { id: "eid956", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 27557, duration: 48 },
            { id: "eid957", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 27605, duration: 216 },
            { id: "eid1073", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 29830, duration: 3342 },
            { id: "eid1074", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 33172, duration: 48 },
            { id: "eid1075", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 33220, duration: 216 },
            { id: "eid1177", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 35143, duration: 3342 },
            { id: "eid1178", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 38485, duration: 48 },
            { id: "eid1179", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 38533, duration: 216 },
            { id: "eid1263", tween: [ "style", "${_rad_parOut6}", "left", '92px', { fromValue: '343px'}], position: 40990, duration: 3342 },
            { id: "eid1264", tween: [ "style", "${_rad_parOut6}", "left", '173px', { fromValue: '92px'}], position: 44332, duration: 48 },
            { id: "eid1265", tween: [ "style", "${_rad_parOut6}", "left", '629px', { fromValue: '173px'}], position: 44380, duration: 216 },
            { id: "eid238", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 517, duration: 3341 },
            { id: "eid253", tween: [ "style", "${_rad_parOut7}", "left", '173px', { fromValue: '573px'}], position: 3858, duration: 48 },
            { id: "eid239", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '173px'}], position: 3906, duration: 215 },
            { id: "eid503", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 13002, duration: 3341 },
            { id: "eid504", tween: [ "style", "${_rad_parOut7}", "left", '580px', { fromValue: '573px'}], position: 16343, duration: 48 },
            { id: "eid505", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '580px'}], position: 16392, duration: 216 },
            { id: "eid795", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 18000, duration: 3341 },
            { id: "eid796", tween: [ "style", "${_rad_parOut7}", "left", '582px', { fromValue: '573px'}], position: 21341, duration: 48 },
            { id: "eid797", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '582px'}], position: 21389, duration: 216 },
            { id: "eid947", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 24000, duration: 3341 },
            { id: "eid948", tween: [ "style", "${_rad_parOut7}", "left", '579px', { fromValue: '573px'}], position: 27341, duration: 48 },
            { id: "eid949", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '579px'}], position: 27389, duration: 216 },
            { id: "eid1065", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 30000, duration: 3341 },
            { id: "eid1066", tween: [ "style", "${_rad_parOut7}", "left", '173px', { fromValue: '573px'}], position: 33341, duration: 48 },
            { id: "eid1067", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '173px'}], position: 33389, duration: 215 },
            { id: "eid1169", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 34928, duration: 3341 },
            { id: "eid1170", tween: [ "style", "${_rad_parOut7}", "left", '578px', { fromValue: '573px'}], position: 38269, duration: 48 },
            { id: "eid1171", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '578px'}], position: 38317, duration: 215 },
            { id: "eid1255", tween: [ "style", "${_rad_parOut7}", "left", '573px', { fromValue: '343px'}], position: 40775, duration: 3341 },
            { id: "eid1256", tween: [ "style", "${_rad_parOut7}", "left", '581px', { fromValue: '573px'}], position: 44116, duration: 48 },
            { id: "eid1257", tween: [ "style", "${_rad_parOut7}", "left", '629px', { fromValue: '581px'}], position: 44164, duration: 215 },
            { id: "eid240", tween: [ "style", "${_rad_parOut7}", "top", '-15px', { fromValue: '331px'}], position: 517, duration: 3341 },
            { id: "eid241", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-15px'}], position: 3905, duration: 216 },
            { id: "eid506", tween: [ "style", "${_rad_parOut7}", "top", '-8px', { fromValue: '331px'}], position: 13002, duration: 3341 },
            { id: "eid507", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-8px'}], position: 16392, duration: 216 },
            { id: "eid798", tween: [ "style", "${_rad_parOut7}", "top", '-19px', { fromValue: '331px'}], position: 18000, duration: 3341 },
            { id: "eid799", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-19px'}], position: 21389, duration: 216 },
            { id: "eid950", tween: [ "style", "${_rad_parOut7}", "top", '-20px', { fromValue: '331px'}], position: 24000, duration: 3341 },
            { id: "eid951", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-20px'}], position: 27389, duration: 216 },
            { id: "eid1068", tween: [ "style", "${_rad_parOut7}", "top", '-8px', { fromValue: '331px'}], position: 30000, duration: 3341 },
            { id: "eid1069", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-8px'}], position: 33388, duration: 216 },
            { id: "eid1172", tween: [ "style", "${_rad_parOut7}", "top", '-15px', { fromValue: '331px'}], position: 34928, duration: 3341 },
            { id: "eid1173", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-15px'}], position: 38316, duration: 216 },
            { id: "eid1258", tween: [ "style", "${_rad_parOut7}", "top", '-16px', { fromValue: '331px'}], position: 40775, duration: 3341 },
            { id: "eid1259", tween: [ "style", "${_rad_parOut7}", "top", '-24px', { fromValue: '-16px'}], position: 44163, duration: 216 },
            { id: "eid411", tween: [ "style", "${_rad_parIn6}", "left", '344px', { fromValue: '349px'}], position: 5000, duration: 2392 },
            { id: "eid524", tween: [ "style", "${_rad_parIn6}", "left", '344px', { fromValue: '352px'}], position: 13020, duration: 2392 },
            { id: "eid1101", tween: [ "style", "${_rad_parIn6}", "left", '344px', { fromValue: '349px'}], position: 30063, duration: 2392 },
            { id: "eid610", tween: [ "style", "${_electron2}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15595, duration: 287 },
            { id: "eid623", tween: [ "style", "${_electron2}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15882, duration: 988 },
            { id: "eid550", tween: [ "style", "${_electron2}", "opacity", '0.0078125', { fromValue: '1'}], position: 16870, duration: 152 },
            { id: "eid1152", tween: [ "style", "${_electron2}", "opacity", '1', { fromValue: '0.007813000120222569'}], position: 32821, duration: 865 },
            { id: "eid1162", tween: [ "style", "${_electron2}", "opacity", '0', { fromValue: '1'}], position: 33919, duration: 221 },
            { id: "eid1241", tween: [ "style", "${_electron2}", "opacity", '1', { fromValue: '0'}], position: 38919, duration: 831 },
            { id: "eid1247", tween: [ "style", "${_electron2}", "opacity", '0', { fromValue: '1'}], position: 40056, duration: 194 },
            { id: "eid697", tween: [ "style", "${_rad_parTube5}", "left", '660px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid698", tween: [ "style", "${_rad_parTube5}", "left", '671px', { fromValue: '660px'}], position: 10632, duration: 1183 },
            { id: "eid470", tween: [ "style", "${_rad_parTube5}", "left", '660px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid493", tween: [ "style", "${_rad_parTube5}", "left", '671px', { fromValue: '660px'}], position: 14349, duration: 1183 },
            { id: "eid869", tween: [ "style", "${_rad_parTube5}", "left", '660px', { fromValue: '671px'}], position: 19500, duration: 1132 },
            { id: "eid870", tween: [ "style", "${_rad_parTube5}", "left", '671px', { fromValue: '660px'}], position: 20632, duration: 1183 },
            { id: "eid1004", tween: [ "style", "${_rad_parTube5}", "left", '660px', { fromValue: '671px'}], position: 25750, duration: 1132 },
            { id: "eid1005", tween: [ "style", "${_rad_parTube5}", "left", '671px', { fromValue: '660px'}], position: 26882, duration: 1183 },
            { id: "eid1481", tween: [ "transform", "${_source_rec_blue}", "skewY", '11deg', { fromValue: '21deg'}], position: 54224, duration: 3311 },
            { id: "eid1482", tween: [ "transform", "${_source_rec_blue}", "skewY", '0deg', { fromValue: '11deg'}], position: 57534, duration: 3466 },
            { id: "eid1485", tween: [ "transform", "${_source_rec_blue}", "skewY", '-14deg', { fromValue: '0deg'}], position: 62750, duration: 2613 },
            { id: "eid1486", tween: [ "transform", "${_source_rec_blue}", "skewY", '-21deg', { fromValue: '-14deg'}], position: 65363, duration: 2613 },
            { id: "eid1627", tween: [ "transform", "${_source_rec_blue}", "skewY", '-14deg', { fromValue: '-21deg'}], position: 75827, duration: 1500 },
            { id: "eid1628", tween: [ "transform", "${_source_rec_blue}", "skewY", '0deg', { fromValue: '-14deg'}], position: 77327, duration: 1500 },
            { id: "eid1629", tween: [ "transform", "${_source_rec_blue}", "skewY", '11deg', { fromValue: '0deg'}], position: 78939, duration: 2053 },
            { id: "eid1630", tween: [ "transform", "${_source_rec_blue}", "skewY", '21deg', { fromValue: '11deg'}], position: 80992, duration: 1961 },
            { id: "eid2110", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid743", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 6113, duration: 313 },
            { id: "eid770", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 13002, duration: 138 },
            { id: "eid569", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid831", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 82 },
            { id: "eid848", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 19066, duration: 279 },
            { id: "eid981", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 126 },
            { id: "eid989", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 25406, duration: 426 },
            { id: "eid1106", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 29614, duration: 136 },
            { id: "eid1112", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 31500, duration: 166 },
            { id: "eid1231", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 34954, duration: 189 },
            { id: "eid1237", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 36840, duration: 304 },
            { id: "eid1301", tween: [ "style", "${_rad_parIn4}", "opacity", '1', { fromValue: '0'}], position: 40775, duration: 140 },
            { id: "eid1303", tween: [ "style", "${_rad_parIn4}", "opacity", '0', { fromValue: '1'}], position: 42797, duration: 146 },
            { id: "eid409", tween: [ "style", "${_rad_parIn1}", "left", '344px', { fromValue: '340px'}], position: 5000, duration: 2392 },
            { id: "eid755", tween: [ "style", "${_rad_parIn1}", "left", '344px', { fromValue: '340px'}], position: 13002, duration: 2392 },
            { id: "eid815", tween: [ "style", "${_rad_parIn1}", "left", '344px', { fromValue: '340px'}], position: 18000, duration: 2392 },
            { id: "eid969", tween: [ "style", "${_rad_parIn1}", "left", '344px', { fromValue: '340px'}], position: 24000, duration: 2392 },
            { id: "eid611", tween: [ "style", "${_electron4}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15320, duration: 287 },
            { id: "eid621", tween: [ "style", "${_electron4}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15606, duration: 988 },
            { id: "eid551", tween: [ "style", "${_electron4}", "opacity", '0.0078125', { fromValue: '1'}], position: 16594, duration: 152 },
            { id: "eid924", tween: [ "style", "${_electron4}", "opacity", '1', { fromValue: '0'}], position: 21821, duration: 909 },
            { id: "eid931", tween: [ "style", "${_electron4}", "opacity", '0', { fromValue: '1'}], position: 22958, duration: 189 },
            { id: "eid1041", tween: [ "style", "${_electron4}", "opacity", '1', { fromValue: '0'}], position: 27341, duration: 894 },
            { id: "eid1053", tween: [ "style", "${_electron4}", "opacity", '0', { fromValue: '1'}], position: 28478, duration: 175 },
            { id: "eid1149", tween: [ "style", "${_electron4}", "opacity", '1', { fromValue: '0'}], position: 32931, duration: 865 },
            { id: "eid1159", tween: [ "style", "${_electron4}", "opacity", '0', { fromValue: '1'}], position: 34029, duration: 221 },
            { id: "eid403", tween: [ "style", "${_rad_parIn3}", "left", '344px', { fromValue: '335px'}], position: 5000, duration: 2392 },
            { id: "eid519", tween: [ "style", "${_rad_parIn3}", "left", '344px', { fromValue: '335px'}], position: 13002, duration: 2392 },
            { id: "eid819", tween: [ "style", "${_rad_parIn3}", "left", '344px', { fromValue: '335px'}], position: 18000, duration: 2392 },
            { id: "eid1097", tween: [ "style", "${_rad_parIn3}", "left", '344px', { fromValue: '335px'}], position: 29750, duration: 2392 },
            { id: "eid1210", tween: [ "style", "${_rad_parIn3}", "left", '344px', { fromValue: '335px'}], position: 35143, duration: 2392 },
            { id: "eid1469", tween: [ "style", "${_source_rec_blue}", "left", '277px', { fromValue: '234px'}], position: 54224, duration: 3311 },
            { id: "eid1470", tween: [ "style", "${_source_rec_blue}", "left", '344px', { fromValue: '277px'}], position: 57534, duration: 3466 },
            { id: "eid1471", tween: [ "style", "${_source_rec_blue}", "left", '408px', { fromValue: '344px'}], position: 62750, duration: 2613 },
            { id: "eid1472", tween: [ "style", "${_source_rec_blue}", "left", '446px', { fromValue: '408px'}], position: 65363, duration: 2613 },
            { id: "eid1621", tween: [ "style", "${_source_rec_blue}", "left", '408px', { fromValue: '446px'}], position: 75827, duration: 1500 },
            { id: "eid1620", tween: [ "style", "${_source_rec_blue}", "left", '345px', { fromValue: '408px'}], position: 77327, duration: 1500 },
            { id: "eid1619", tween: [ "style", "${_source_rec_blue}", "left", '277px', { fromValue: '345px'}], position: 78939, duration: 2053 },
            { id: "eid1618", tween: [ "style", "${_source_rec_blue}", "left", '234px', { fromValue: '277px'}], position: 80992, duration: 1961 },
            { id: "eid1473", tween: [ "style", "${_source_rec_blue}", "left", '277px', { fromValue: '345px'}], position: 87077, duration: 1500 },
            { id: "eid1474", tween: [ "style", "${_source_rec_blue}", "left", '234px', { fromValue: '277px'}], position: 88577, duration: 1500 },
            { id: "eid2114", tween: [ "style", "${_rad_parIn5}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid749", tween: [ "style", "${_rad_parIn5}", "opacity", '0.0546875', { fromValue: '1'}], position: 5500, duration: 404 },
            { id: "eid768", tween: [ "style", "${_rad_parIn5}", "opacity", '1', { fromValue: '0.054687999188899994'}], position: 13002, duration: 138 },
            { id: "eid566", tween: [ "style", "${_rad_parIn5}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid833", tween: [ "style", "${_rad_parIn5}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 82 },
            { id: "eid850", tween: [ "style", "${_rad_parIn5}", "opacity", '0', { fromValue: '1'}], position: 19066, duration: 279 },
            { id: "eid980", tween: [ "style", "${_rad_parIn5}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 126 },
            { id: "eid988", tween: [ "style", "${_rad_parIn5}", "opacity", '0', { fromValue: '1'}], position: 25406, duration: 426 },
            { id: "eid230", tween: [ "style", "${_rad_parOut6}", "top", '-25px', { fromValue: '331px'}], position: 515, duration: 3342 },
            { id: "eid256", tween: [ "style", "${_rad_parOut6}", "top", '-25px', { fromValue: '-25px'}], position: 3857, duration: 48 },
            { id: "eid231", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-25px'}], position: 3905, duration: 216 },
            { id: "eid511", tween: [ "style", "${_rad_parOut6}", "top", '-18px', { fromValue: '331px'}], position: 13217, duration: 3342 },
            { id: "eid513", tween: [ "style", "${_rad_parOut6}", "top", '-22px', { fromValue: '-18px'}], position: 16607, duration: 56 },
            { id: "eid1796", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-22px'}], position: 16663, duration: 160 },
            { id: "eid800", tween: [ "style", "${_rad_parOut6}", "top", '-18px', { fromValue: '331px'}], position: 18215, duration: 3342 },
            { id: "eid802", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-18px'}], position: 21605, duration: 216 },
            { id: "eid952", tween: [ "style", "${_rad_parOut6}", "top", '-18px', { fromValue: '331px'}], position: 24215, duration: 3342 },
            { id: "eid953", tween: [ "style", "${_rad_parOut6}", "top", '-19px', { fromValue: '-18px'}], position: 27557, duration: 48 },
            { id: "eid954", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-19px'}], position: 27605, duration: 216 },
            { id: "eid1070", tween: [ "style", "${_rad_parOut6}", "top", '-16px', { fromValue: '331px'}], position: 29830, duration: 3342 },
            { id: "eid1071", tween: [ "style", "${_rad_parOut6}", "top", '-18px', { fromValue: '-16px'}], position: 33172, duration: 48 },
            { id: "eid1072", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-18px'}], position: 33220, duration: 216 },
            { id: "eid1174", tween: [ "style", "${_rad_parOut6}", "top", '-16px', { fromValue: '331px'}], position: 35143, duration: 3342 },
            { id: "eid1175", tween: [ "style", "${_rad_parOut6}", "top", '-20px', { fromValue: '-16px'}], position: 38485, duration: 48 },
            { id: "eid1176", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-20px'}], position: 38533, duration: 216 },
            { id: "eid1260", tween: [ "style", "${_rad_parOut6}", "top", '-16px', { fromValue: '331px'}], position: 40990, duration: 3342 },
            { id: "eid1261", tween: [ "style", "${_rad_parOut6}", "top", '-18px', { fromValue: '-16px'}], position: 44332, duration: 48 },
            { id: "eid1262", tween: [ "style", "${_rad_parOut6}", "top", '-24px', { fromValue: '-18px'}], position: 44380, duration: 216 },
            { id: "eid406", tween: [ "style", "${_rad_parIn5}", "top", '89px', { fromValue: '344px'}], position: 5000, duration: 2392 },
            { id: "eid523", tween: [ "style", "${_rad_parIn5}", "top", '89px', { fromValue: '344px'}], position: 13002, duration: 2392 },
            { id: "eid822", tween: [ "style", "${_rad_parIn5}", "top", '89px', { fromValue: '344px'}], position: 18000, duration: 2392 },
            { id: "eid974", tween: [ "style", "${_rad_parIn5}", "top", '89px', { fromValue: '344px'}], position: 24000, duration: 2392 },
            { id: "eid288", tween: [ "style", "${_electron2}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid723", tween: [ "style", "${_electron2}", "top", '56px', { fromValue: '136px'}], position: 8250, duration: 1137 },
            { id: "eid289", tween: [ "style", "${_electron2}", "top", '56px', { fromValue: '136px'}], position: 15733, duration: 1137 },
            { id: "eid1094", tween: [ "style", "${_electron2}", "top", '56px', { fromValue: '136px'}], position: 32821, duration: 1137 },
            { id: "eid1196", tween: [ "style", "${_electron2}", "top", '56px', { fromValue: '136px'}], position: 38919, duration: 1137 },
            { id: "eid722", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 8250, duration: 1137 },
            { id: "eid290", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 15457, duration: 1137 },
            { id: "eid909", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 21668, duration: 1137 },
            { id: "eid1093", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 33003, duration: 1137 },
            { id: "eid1195", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 38919, duration: 1137 },
            { id: "eid1289", tween: [ "style", "${_electron3}", "left", '667px', { fromValue: '667px'}], position: 44841, duration: 1137 },
            { id: "eid614", tween: [ "style", "${_electron9}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15250, duration: 287 },
            { id: "eid616", tween: [ "style", "${_electron9}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15537, duration: 988 },
            { id: "eid554", tween: [ "style", "${_electron9}", "opacity", '0', { fromValue: '1'}], position: 16525, duration: 152 },
            { id: "eid928", tween: [ "style", "${_electron9}", "opacity", '1', { fromValue: '0'}], position: 21668, duration: 909 },
            { id: "eid935", tween: [ "style", "${_electron9}", "opacity", '0', { fromValue: '1'}], position: 22805, duration: 189 },
            { id: "eid1044", tween: [ "style", "${_electron9}", "opacity", '1', { fromValue: '0'}], position: 27500, duration: 894 },
            { id: "eid1056", tween: [ "style", "${_electron9}", "opacity", '0', { fromValue: '1'}], position: 28637, duration: 175 },
            { id: "eid724", tween: [ "style", "${_electron2}", "left", '667px', { fromValue: '678px'}], position: 8250, duration: 1137 },
            { id: "eid287", tween: [ "style", "${_electron2}", "left", '667px', { fromValue: '678px'}], position: 15733, duration: 1137 },
            { id: "eid1095", tween: [ "style", "${_electron2}", "left", '667px', { fromValue: '678px'}], position: 32821, duration: 1137 },
            { id: "eid1197", tween: [ "style", "${_electron2}", "left", '667px', { fromValue: '678px'}], position: 38919, duration: 1137 },
            { id: "eid612", tween: [ "style", "${_electron8}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15412, duration: 287 },
            { id: "eid617", tween: [ "style", "${_electron8}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15699, duration: 988 },
            { id: "eid552", tween: [ "style", "${_electron8}", "opacity", '0.0078125', { fromValue: '1'}], position: 16687, duration: 152 },
            { id: "eid930", tween: [ "style", "${_electron8}", "opacity", '1', { fromValue: '0'}], position: 21557, duration: 909 },
            { id: "eid937", tween: [ "style", "${_electron8}", "opacity", '0', { fromValue: '1'}], position: 22694, duration: 189 },
            { id: "eid1046", tween: [ "style", "${_electron8}", "opacity", '1', { fromValue: '0'}], position: 27341, duration: 894 },
            { id: "eid1058", tween: [ "style", "${_electron8}", "opacity", '0', { fromValue: '1'}], position: 28478, duration: 175 },
            { id: "eid693", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid694", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 10632, duration: 1183 },
            { id: "eid468", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid495", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 14349, duration: 1183 },
            { id: "eid865", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 19451, duration: 1132 },
            { id: "eid866", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 20583, duration: 1183 },
            { id: "eid1002", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 25250, duration: 1132 },
            { id: "eid1003", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 26382, duration: 1183 },
            { id: "eid1130", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 31366, duration: 1132 },
            { id: "eid1131", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 32498, duration: 1183 },
            { id: "eid1306", tween: [ "style", "${_rad_parTube4}", "left", '677px', { fromValue: '671px'}], position: 42797, duration: 1132 },
            { id: "eid1307", tween: [ "style", "${_rad_parTube4}", "left", '671px', { fromValue: '677px'}], position: 43929, duration: 1183 },
            { id: "eid216", tween: [ "style", "${_rad_parOut5}", "left", '173px', { fromValue: '343px'}], position: 517, duration: 3390 },
            { id: "eid222", tween: [ "style", "${_rad_parOut5}", "left", '629px', { fromValue: '173px'}], position: 3907, duration: 216 },
            { id: "eid1182", tween: [ "style", "${_rad_parOut5}", "left", '173px', { fromValue: '343px'}], position: 34982, duration: 3390 },
            { id: "eid1183", tween: [ "style", "${_rad_parOut5}", "left", '629px', { fromValue: '173px'}], position: 38372, duration: 216 },
            { id: "eid1268", tween: [ "style", "${_rad_parOut5}", "left", '173px', { fromValue: '343px'}], position: 40829, duration: 3390 },
            { id: "eid1269", tween: [ "style", "${_rad_parOut5}", "left", '629px', { fromValue: '173px'}], position: 44219, duration: 216 },
            { id: "eid1427", tween: [ "style", "${_source_rec_purple}", "left", '277px', { fromValue: '234px'}], position: 47081, duration: 3384 },
            { id: "eid1426", tween: [ "style", "${_source_rec_purple}", "left", '345px', { fromValue: '277px'}], position: 50465, duration: 3542 },
            { id: "eid1346", tween: [ "style", "${_source_rec_purple}", "left", '408px', { fromValue: '345px'}], position: 54007, duration: 3384 },
            { id: "eid1350", tween: [ "style", "${_source_rec_purple}", "left", '446px', { fromValue: '408px'}], position: 57393, duration: 3384 },
            { id: "eid1671", tween: [ "style", "${_source_rec_purple}", "left", '408px', { fromValue: '446px'}], position: 79055, duration: 2010 },
            { id: "eid1670", tween: [ "style", "${_source_rec_purple}", "left", '345px', { fromValue: '408px'}], position: 81065, duration: 2010 },
            { id: "eid1669", tween: [ "style", "${_source_rec_purple}", "left", '277px', { fromValue: '345px'}], position: 83075, duration: 2104 },
            { id: "eid1668", tween: [ "style", "${_source_rec_purple}", "left", '234px', { fromValue: '277px'}], position: 85179, duration: 2010 },
            { id: "eid2330", tween: [ "style", "${_source_Strontim90}", "opacity", '0', { fromValue: '1'}], position: 46888, duration: 112 },
            { id: "eid2337", tween: [ "style", "${_source_Strontim90}", "opacity", '1', { fromValue: '0'}], position: 59524, duration: 106 },
            { id: "eid228", tween: [ "style", "${_papers}", "opacity", '0', { fromValue: '0'}], position: 3390, duration: 0 },
            { id: "eid229", tween: [ "style", "${_papers}", "opacity", '1', { fromValue: '0'}], position: 3606, duration: 0 },
            { id: "eid607", tween: [ "style", "${_electron7}", "opacity", '0.2245579957962036', { fromValue: '0'}], position: 15320, duration: 287 },
            { id: "eid618", tween: [ "style", "${_electron7}", "opacity", '1', { fromValue: '0.2245579957962036'}], position: 15606, duration: 988 },
            { id: "eid547", tween: [ "style", "${_electron7}", "opacity", '0.0078125', { fromValue: '1'}], position: 16594, duration: 152 },
            { id: "eid925", tween: [ "style", "${_electron7}", "opacity", '1', { fromValue: '0'}], position: 21764, duration: 909 },
            { id: "eid932", tween: [ "style", "${_electron7}", "opacity", '0', { fromValue: '1'}], position: 22910, duration: 189 },
            { id: "eid1042", tween: [ "style", "${_electron7}", "opacity", '1', { fromValue: '0'}], position: 27500, duration: 894 },
            { id: "eid1054", tween: [ "style", "${_electron7}", "opacity", '0', { fromValue: '1'}], position: 28637, duration: 175 },
            { id: "eid2079", tween: [ "style", "${_rad_parOut7}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2095", tween: [ "style", "${_rad_parOut7}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid1436", tween: [ "transform", "${_source_rec_purple}", "scaleX", '1', { fromValue: '0.5'}], position: 47081, duration: 6926 },
            { id: "eid1443", tween: [ "transform", "${_source_rec_purple}", "scaleX", '0.5', { fromValue: '1'}], position: 54007, duration: 6770 },
            { id: "eid1673", tween: [ "transform", "${_source_rec_purple}", "scaleX", '1', { fromValue: '0.5'}], position: 79055, duration: 4020 },
            { id: "eid1674", tween: [ "transform", "${_source_rec_purple}", "scaleX", '0.5', { fromValue: '1'}], position: 83075, duration: 4114 },
            { id: "eid215", tween: [ "style", "${_rad_parOut4}", "top", '-16px', { fromValue: '331px'}], position: 517, duration: 3430 },
            { id: "eid225", tween: [ "style", "${_rad_parOut4}", "top", '-24px', { fromValue: '-16px'}], position: 3947, duration: 176 },
            { id: "eid812", tween: [ "style", "${_rad_parOut4}", "top", '-16px', { fromValue: '331px'}], position: 18313, duration: 3430 },
            { id: "eid813", tween: [ "style", "${_rad_parOut4}", "top", '-24px', { fromValue: '-16px'}], position: 21743, duration: 176 },
            { id: "eid960", tween: [ "style", "${_rad_parOut4}", "top", '-16px', { fromValue: '331px'}], position: 24313, duration: 3430 },
            { id: "eid961", tween: [ "style", "${_rad_parOut4}", "top", '-24px', { fromValue: '-16px'}], position: 27743, duration: 176 },
            { id: "eid1186", tween: [ "style", "${_rad_parOut4}", "top", '-16px', { fromValue: '331px'}], position: 35319, duration: 3430 },
            { id: "eid1187", tween: [ "style", "${_rad_parOut4}", "top", '-24px', { fromValue: '-16px'}], position: 38749, duration: 176 },
            { id: "eid1272", tween: [ "style", "${_rad_parOut4}", "top", '-16px', { fromValue: '331px'}], position: 41166, duration: 3430 },
            { id: "eid1273", tween: [ "style", "${_rad_parOut4}", "top", '-24px', { fromValue: '-16px'}], position: 44596, duration: 176 },
            { id: "eid679", tween: [ "style", "${_rad_parTube1}", "top", '207px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid680", tween: [ "style", "${_rad_parTube1}", "top", '132px', { fromValue: '207px'}], position: 10632, duration: 1183 },
            { id: "eid462", tween: [ "style", "${_rad_parTube1}", "top", '207px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid496", tween: [ "style", "${_rad_parTube1}", "top", '132px', { fromValue: '207px'}], position: 14349, duration: 1183 },
            { id: "eid851", tween: [ "style", "${_rad_parTube1}", "top", '207px', { fromValue: '229px'}], position: 19344, duration: 1132 },
            { id: "eid852", tween: [ "style", "${_rad_parTube1}", "top", '132px', { fromValue: '207px'}], position: 20476, duration: 1183 },
            { id: "eid994", tween: [ "style", "${_rad_parTube1}", "top", '207px', { fromValue: '229px'}], position: 25123, duration: 1132 },
            { id: "eid995", tween: [ "style", "${_rad_parTube1}", "top", '132px', { fromValue: '207px'}], position: 26255, duration: 1183 },
            { id: "eid2120", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid733", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 6113, duration: 313 },
            { id: "eid772", tween: [ "style", "${_rad_parIn3}", "opacity", '1', { fromValue: '0'}], position: 13002, duration: 138 },
            { id: "eid564", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid830", tween: [ "style", "${_rad_parIn3}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 82 },
            { id: "eid847", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 19066, duration: 279 },
            { id: "eid1105", tween: [ "style", "${_rad_parIn3}", "opacity", '1', { fromValue: '0'}], position: 29750, duration: 136 },
            { id: "eid1111", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 31636, duration: 166 },
            { id: "eid1230", tween: [ "style", "${_rad_parIn3}", "opacity", '1', { fromValue: '0'}], position: 35143, duration: 189 },
            { id: "eid1236", tween: [ "style", "${_rad_parIn3}", "opacity", '0', { fromValue: '1'}], position: 37029, duration: 304 },
            { id: "eid297", tween: [ "style", "${_electron5}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid717", tween: [ "style", "${_electron5}", "top", '56px', { fromValue: '150px'}], position: 8250, duration: 1137 },
            { id: "eid298", tween: [ "style", "${_electron5}", "top", '56px', { fromValue: '150px'}], position: 15270, duration: 1137 },
            { id: "eid904", tween: [ "style", "${_electron5}", "top", '56px', { fromValue: '150px'}], position: 21980, duration: 1137 },
            { id: "eid1059", tween: [ "style", "${_electron5}", "top", '56px', { fromValue: '150px'}], position: 27605, duration: 1137 },
            { id: "eid1088", tween: [ "style", "${_electron5}", "top", '56px', { fromValue: '150px'}], position: 32744, duration: 1137 },
            { id: "eid412", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '324px'}], position: 5000, duration: 2392 },
            { id: "eid521", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '324px'}], position: 13002, duration: 2392 },
            { id: "eid820", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '324px'}], position: 18000, duration: 2392 },
            { id: "eid972", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '324px'}], position: 24000, duration: 2392 },
            { id: "eid1098", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '324px'}], position: 29614, duration: 2392 },
            { id: "eid1206", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '351px'}], position: 34954, duration: 2392 },
            { id: "eid1286", tween: [ "style", "${_rad_parIn4}", "top", '89px', { fromValue: '351px'}], position: 40775, duration: 2392 },
            { id: "eid2076", tween: [ "style", "${_rad_parTube2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid677", tween: [ "style", "${_rad_parTube2}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid678", tween: [ "style", "${_rad_parTube2}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1250 },
            { id: "eid537", tween: [ "style", "${_rad_parTube2}", "opacity", '0', { fromValue: '1'}], position: 14866, duration: 844 },
            { id: "eid878", tween: [ "style", "${_rad_parTube2}", "opacity", '1', { fromValue: '0'}], position: 19250, duration: 363 },
            { id: "eid893", tween: [ "style", "${_rad_parTube2}", "opacity", '0', { fromValue: '1'}], position: 20799, duration: 919 },
            { id: "eid1136", tween: [ "style", "${_rad_parTube2}", "opacity", '1', { fromValue: '0'}], position: 31000, duration: 366 },
            { id: "eid1142", tween: [ "style", "${_rad_parTube2}", "opacity", '0', { fromValue: '1'}], position: 32603, duration: 905 },
            { id: "eid1223", tween: [ "style", "${_rad_parTube2}", "opacity", '1', { fromValue: '0'}], position: 36604, duration: 365 },
            { id: "eid1227", tween: [ "style", "${_rad_parTube2}", "opacity", '0', { fromValue: '1'}], position: 38150, duration: 924 },
            { id: "eid718", tween: [ "style", "${_electron5}", "left", '667px', { fromValue: '692px'}], position: 8250, duration: 1137 },
            { id: "eid296", tween: [ "style", "${_electron5}", "left", '667px', { fromValue: '692px'}], position: 15270, duration: 1137 },
            { id: "eid905", tween: [ "style", "${_electron5}", "left", '667px', { fromValue: '692px'}], position: 21980, duration: 1137 },
            { id: "eid1032", tween: [ "style", "${_electron5}", "left", '667px', { fromValue: '692px'}], position: 27605, duration: 1137 },
            { id: "eid1089", tween: [ "style", "${_electron5}", "left", '667px', { fromValue: '692px'}], position: 32744, duration: 1137 },
            { id: "eid714", tween: [ "style", "${_electron7}", "left", '667px', { fromValue: '655px'}], position: 8250, duration: 1137 },
            { id: "eid302", tween: [ "style", "${_electron7}", "left", '667px', { fromValue: '655px'}], position: 15457, duration: 1137 },
            { id: "eid901", tween: [ "style", "${_electron7}", "left", '667px', { fromValue: '655px'}], position: 21773, duration: 1137 },
            { id: "eid1029", tween: [ "style", "${_electron7}", "left", '667px', { fromValue: '655px'}], position: 27500, duration: 1137 },
            { id: "eid1622", tween: [ "style", "${_source_rec_blue}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 82953, duration: 0 },
            { id: "eid2394", tween: [ "style", "${_source_rec_blue}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 82953, duration: 0 },
            { id: "eid2395", tween: [ "style", "${_source_rec_blue}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 82953, duration: 0 },
            { id: "eid2396", tween: [ "style", "${_source_rec_blue}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 82953, duration: 0 },
            { id: "eid2397", tween: [ "style", "${_source_rec_blue}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 82953, duration: 0 },
            { id: "eid2066", tween: [ "style", "${_rad_parTube6}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid671", tween: [ "style", "${_rad_parTube6}", "opacity", '0.9375', { fromValue: '1'}], position: 13217, duration: 399 },
            { id: "eid672", tween: [ "style", "${_rad_parTube6}", "opacity", '1', { fromValue: '0.9375'}], position: 13616, duration: 1916 },
            { id: "eid534", tween: [ "style", "${_rad_parTube6}", "opacity", '0', { fromValue: '1'}], position: 15532, duration: 178 },
            { id: "eid242", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 517, duration: 3341 },
            { id: "eid252", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 3858, duration: 48 },
            { id: "eid243", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 3907, duration: 216 },
            { id: "eid500", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 13140, duration: 3341 },
            { id: "eid501", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 16481, duration: 48 },
            { id: "eid502", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 16530, duration: 216 },
            { id: "eid790", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 18423, duration: 3341 },
            { id: "eid791", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 21764, duration: 48 },
            { id: "eid792", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 21813, duration: 216 },
            { id: "eid942", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 24423, duration: 3341 },
            { id: "eid943", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 27764, duration: 48 },
            { id: "eid944", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 27813, duration: 216 },
            { id: "eid1060", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 29614, duration: 3341 },
            { id: "eid1061", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 32955, duration: 48 },
            { id: "eid1062", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 33004, duration: 216 },
            { id: "eid1164", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 35066, duration: 3341 },
            { id: "eid1165", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 38407, duration: 48 },
            { id: "eid1166", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 38456, duration: 216 },
            { id: "eid1250", tween: [ "style", "${_rad_parOut8}", "left", '133px', { fromValue: '344px'}], position: 40913, duration: 3341 },
            { id: "eid1251", tween: [ "style", "${_rad_parOut8}", "left", '173px', { fromValue: '133px'}], position: 44254, duration: 48 },
            { id: "eid1252", tween: [ "style", "${_rad_parOut8}", "left", '629px', { fromValue: '173px'}], position: 44303, duration: 216 },
            { id: "eid2246", tween: [ "color", "${_source_Strontim90}", "background-color", 'rgba(102,109,215,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,109,215,1.00)'}], position: 97750, duration: 0 },
            { id: "eid211", tween: [ "style", "${_rad_parOut2}", "left", '629px', { fromValue: '343px'}], position: 516, duration: 3606 },
            { id: "eid1081", tween: [ "style", "${_rad_parOut2}", "left", '629px', { fromValue: '343px'}], position: 30063, duration: 3606 },
            { id: "eid1279", tween: [ "style", "${_rad_parOut2}", "left", '629px', { fromValue: '343px'}], position: 40775, duration: 3606 },
            { id: "eid699", tween: [ "style", "${_rad_parTube6}", "top", '199px', { fromValue: '229px'}], position: 9500, duration: 1132 },
            { id: "eid700", tween: [ "style", "${_rad_parTube6}", "top", '132px', { fromValue: '199px'}], position: 10632, duration: 1183 },
            { id: "eid473", tween: [ "style", "${_rad_parTube6}", "top", '199px', { fromValue: '229px'}], position: 13217, duration: 1132 },
            { id: "eid490", tween: [ "style", "${_rad_parTube6}", "top", '132px', { fromValue: '199px'}], position: 14349, duration: 1183 },
            { id: "eid404", tween: [ "style", "${_rad_parIn2}", "top", '89px', { fromValue: '340px'}], position: 5000, duration: 2392 },
            { id: "eid516", tween: [ "style", "${_rad_parIn2}", "top", '89px', { fromValue: '340px'}], position: 13002, duration: 2392 },
            { id: "eid816", tween: [ "style", "${_rad_parIn2}", "top", '89px', { fromValue: '340px'}], position: 18000, duration: 2392 },
            { id: "eid970", tween: [ "style", "${_rad_parIn2}", "top", '89px', { fromValue: '340px'}], position: 24000, duration: 2392 },
            { id: "eid710", tween: [ "style", "${_electron9}", "left", '667px', { fromValue: '687px'}], position: 8250, duration: 1137 },
            { id: "eid308", tween: [ "style", "${_electron9}", "left", '667px', { fromValue: '687px'}], position: 15388, duration: 1137 },
            { id: "eid897", tween: [ "style", "${_electron9}", "left", '667px', { fromValue: '687px'}], position: 21668, duration: 1137 },
            { id: "eid1025", tween: [ "style", "${_electron9}", "left", '667px', { fromValue: '687px'}], position: 27500, duration: 1137 },
            { id: "eid2118", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid741", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '1'}], position: 6113, duration: 313 },
            { id: "eid767", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '0'}], position: 13002, duration: 0 },
            { id: "eid568", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 394 },
            { id: "eid839", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '0'}], position: 19066, duration: 0 },
            { id: "eid1107", tween: [ "style", "${_rad_parIn6}", "opacity", '1', { fromValue: '0'}], position: 30063, duration: 136 },
            { id: "eid1113", tween: [ "style", "${_rad_parIn6}", "opacity", '0', { fromValue: '1'}], position: 31949, duration: 166 },
            { id: "eid244", tween: [ "style", "${_rad_parOut8}", "top", '-19px', { fromValue: '331px'}], position: 517, duration: 3250 },
            { id: "eid1786", tween: [ "style", "${_rad_parOut8}", "top", '-15px', { fromValue: '-19px'}], position: 3767, duration: 91 },
            { id: "eid1769", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-15px'}], position: 3858, duration: 49 },
            { id: "eid245", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-24px'}], position: 3907, duration: 216 },
            { id: "eid498", tween: [ "style", "${_rad_parOut8}", "top", '-19px', { fromValue: '-24px'}], position: 13140, duration: 3251 },
            { id: "eid1795", tween: [ "style", "${_rad_parOut8}", "top", '-22px', { fromValue: '-19px'}], position: 16391, duration: 139 },
            { id: "eid499", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-22px'}], position: 16530, duration: 216 },
            { id: "eid793", tween: [ "style", "${_rad_parOut8}", "top", '-20px', { fromValue: '331px'}], position: 18423, duration: 3390 },
            { id: "eid794", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-20px'}], position: 21813, duration: 216 },
            { id: "eid945", tween: [ "style", "${_rad_parOut8}", "top", '-17px', { fromValue: '331px'}], position: 24423, duration: 3341 },
            { id: "eid1815", tween: [ "style", "${_rad_parOut8}", "top", '-18px', { fromValue: '-17px'}], position: 27764, duration: 49 },
            { id: "eid946", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-18px'}], position: 27813, duration: 216 },
            { id: "eid1063", tween: [ "style", "${_rad_parOut8}", "top", '-15px', { fromValue: '331px'}], position: 29614, duration: 3341 },
            { id: "eid1816", tween: [ "style", "${_rad_parOut8}", "top", '-18px', { fromValue: '-15px'}], position: 32955, duration: 49 },
            { id: "eid1064", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-18px'}], position: 33004, duration: 216 },
            { id: "eid1167", tween: [ "style", "${_rad_parOut8}", "top", '-18px', { fromValue: '331px'}], position: 35066, duration: 3341 },
            { id: "eid1817", tween: [ "style", "${_rad_parOut8}", "top", '-18px', { fromValue: '-18px'}], position: 38407, duration: 49 },
            { id: "eid1168", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-18px'}], position: 38456, duration: 216 },
            { id: "eid1253", tween: [ "style", "${_rad_parOut8}", "top", '-20px', { fromValue: '331px'}], position: 40913, duration: 3390 },
            { id: "eid1254", tween: [ "style", "${_rad_parOut8}", "top", '-24px', { fromValue: '-20px'}], position: 44303, duration: 216 },
            { id: "eid410", tween: [ "style", "${_rad_parIn6}", "top", '89px', { fromValue: '351px'}], position: 5000, duration: 2392 },
            { id: "eid525", tween: [ "style", "${_rad_parIn6}", "top", '89px', { fromValue: '351px'}], position: 13020, duration: 2392 },
            { id: "eid1100", tween: [ "style", "${_rad_parIn6}", "top", '89px', { fromValue: '351px'}], position: 30063, duration: 2392 },
            { id: "eid689", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 9500, duration: 1132 },
            { id: "eid690", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 10632, duration: 1183 },
            { id: "eid466", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 13217, duration: 1132 },
            { id: "eid489", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 14349, duration: 1183 },
            { id: "eid861", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 19137, duration: 1132 },
            { id: "eid862", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 20269, duration: 1183 },
            { id: "eid996", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 25406, duration: 1132 },
            { id: "eid997", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 26538, duration: 1183 },
            { id: "eid1124", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 31179, duration: 1132 },
            { id: "eid1125", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 32311, duration: 1183 },
            { id: "eid1218", tween: [ "style", "${_rad_parTube3}", "left", '682px', { fromValue: '671px'}], position: 36604, duration: 1132 },
            { id: "eid1219", tween: [ "style", "${_rad_parTube3}", "left", '672px', { fromValue: '682px'}], position: 37736, duration: 1183 },
            { id: "eid2013", tween: [ "style", "${_rad_parOut6}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 124 },
            { id: "eid2090", tween: [ "style", "${_rad_parOut6}", "opacity", '1', { fromValue: '0'}], position: 515, duration: 102 },
            { id: "eid98", tween: [ "style", "${_electron1}", "top", '134px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid725", tween: [ "style", "${_electron1}", "top", '56px', { fromValue: '134px'}], position: 8250, duration: 1137 },
            { id: "eid112", tween: [ "style", "${_electron1}", "top", '56px', { fromValue: '134px'}], position: 15538, duration: 1137 },
            { id: "eid1199", tween: [ "style", "${_electron1}", "top", '56px', { fromValue: '134px'}], position: 38919, duration: 1137 },
            { id: "eid1425", tween: [ "style", "${_source_rec_purple}", "top", '333px', { fromValue: '327px'}], position: 47081, duration: 1508 },
            { id: "eid1445", tween: [ "style", "${_source_rec_purple}", "top", '336px', { fromValue: '333px'}], position: 48589, duration: 750 },
            { id: "eid1446", tween: [ "style", "${_source_rec_purple}", "top", '339px', { fromValue: '336px'}], position: 49337, duration: 1128 },
            { id: "eid1424", tween: [ "style", "${_source_rec_purple}", "top", '344px', { fromValue: '339px'}], position: 50465, duration: 3542 },
            { id: "eid1347", tween: [ "style", "${_source_rec_purple}", "top", '339px', { fromValue: '344px'}], position: 54007, duration: 3384 },
            { id: "eid1351", tween: [ "style", "${_source_rec_purple}", "top", '326px', { fromValue: '339px'}], position: 57393, duration: 3384 },
            { id: "eid1667", tween: [ "style", "${_source_rec_purple}", "top", '339px', { fromValue: '326px'}], position: 79055, duration: 2010 },
            { id: "eid1666", tween: [ "style", "${_source_rec_purple}", "top", '344px', { fromValue: '339px'}], position: 81065, duration: 2010 },
            { id: "eid1665", tween: [ "style", "${_source_rec_purple}", "top", '339px', { fromValue: '344px'}], position: 83075, duration: 2104 },
            { id: "eid1664", tween: [ "style", "${_source_rec_purple}", "top", '336px', { fromValue: '339px'}], position: 85179, duration: 670 },
            { id: "eid1663", tween: [ "style", "${_source_rec_purple}", "top", '333px', { fromValue: '336px'}], position: 85849, duration: 445 },
            { id: "eid1662", tween: [ "style", "${_source_rec_purple}", "top", '327px', { fromValue: '333px'}], position: 86294, duration: 895 },
            { id: "eid720", tween: [ "style", "${_electron4}", "left", '667px', { fromValue: '681px'}], position: 8250, duration: 1137 },
            { id: "eid293", tween: [ "style", "${_electron4}", "left", '667px', { fromValue: '681px'}], position: 15457, duration: 1137 },
            { id: "eid907", tween: [ "style", "${_electron4}", "left", '667px', { fromValue: '681px'}], position: 21821, duration: 1137 },
            { id: "eid1034", tween: [ "style", "${_electron4}", "left", '667px', { fromValue: '681px'}], position: 27341, duration: 1137 },
            { id: "eid1091", tween: [ "style", "${_electron4}", "left", '667px', { fromValue: '681px'}], position: 32931, duration: 1137 },
            { id: "eid405", tween: [ "style", "${_rad_parIn2}", "left", '344px', { fromValue: '353px'}], position: 5000, duration: 2392 },
            { id: "eid517", tween: [ "style", "${_rad_parIn2}", "left", '344px', { fromValue: '353px'}], position: 13002, duration: 2392 },
            { id: "eid817", tween: [ "style", "${_rad_parIn2}", "left", '344px', { fromValue: '353px'}], position: 18000, duration: 2392 },
            { id: "eid971", tween: [ "style", "${_rad_parIn2}", "left", '344px', { fromValue: '353px'}], position: 24000, duration: 2392 },
            { id: "eid303", tween: [ "style", "${_electron7}", "top", '148px', { fromValue: '148px'}], position: 966, duration: 0 },
            { id: "eid713", tween: [ "style", "${_electron7}", "top", '56px', { fromValue: '145px'}], position: 8250, duration: 1137 },
            { id: "eid304", tween: [ "style", "${_electron7}", "top", '56px', { fromValue: '145px'}], position: 15457, duration: 1137 },
            { id: "eid900", tween: [ "style", "${_electron7}", "top", '56px', { fromValue: '145px'}], position: 21773, duration: 1137 },
            { id: "eid1028", tween: [ "style", "${_electron7}", "top", '56px', { fromValue: '145px'}], position: 27500, duration: 1137 },
            { id: "eid726", tween: [ "style", "${_electron1}", "left", '667px', { fromValue: '651px'}], position: 8250, duration: 1137 },
            { id: "eid111", tween: [ "style", "${_electron1}", "left", '667px', { fromValue: '651px'}], position: 15538, duration: 1137 },
            { id: "eid1198", tween: [ "style", "${_electron1}", "left", '667px', { fromValue: '651px'}], position: 38919, duration: 1137 },
            { id: "eid257", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 514.56072538694 },
            { id: "eid219", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut2}', [0] ], ""], position: 515.96018637161 },
            { id: "eid221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut5}', [0] ], ""], position: 516.56072538694 },
            { id: "eid259", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 516.87292820334 },
            { id: "eid258", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 516.96018637161 },
            { id: "eid220", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut4}', [0] ], ""], position: 516.98410781451 },
            { id: "eid218", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut3}', [0] ], ""], position: 517.10343216346 },
            { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut1}', [0] ], ""], position: 638.96018637161 },
            { id: "eid751", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 13002.399460985 },
            { id: "eid753", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 13217 },
            { id: "eid1312", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 18000.399460985 },
            { id: "eid1313", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 18215 },
            { id: "eid1314", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut4}', [0] ], ""], position: 18313.863652914 },
            { id: "eid1315", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 18423.312202816 },
            { id: "eid1316", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 24000.399460985 },
            { id: "eid1318", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 24215 },
            { id: "eid1317", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut1}', [0] ], ""], position: 24250.399460985 },
            { id: "eid1319", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut4}', [0] ], ""], position: 24313.863652914 },
            { id: "eid1320", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 24423.312202816 },
            { id: "eid1321", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 29614.312202816 },
            { id: "eid1322", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut3}', [0] ], ""], position: 29750.542706777 },
            { id: "eid1323", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 29830 },
            { id: "eid1324", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut1}', [0] ], ""], position: 29955.399460985 },
            { id: "eid1325", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 30000.399460985 },
            { id: "eid1326", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut2}', [0] ], ""], position: 30063.545842138 },
            { id: "eid1327", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 34928.399460985 },
            { id: "eid1328", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut3}', [0] ], ""], position: 34954.542706777 },
            { id: "eid1329", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut5}', [0] ], ""], position: 34982 },
            { id: "eid1330", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 35066.312202816 },
            { id: "eid1331", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 35143 },
            { id: "eid1332", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut1}', [0] ], ""], position: 35268.399460985 },
            { id: "eid1333", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut4}', [0] ], ""], position: 35319.423382428 },
            { id: "eid1334", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut2}', [0] ], ""], position: 40775.399460985 },
            { id: "eid1335", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut7}', [0] ], ""], position: 40775.399460985 },
            { id: "eid1336", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut3}', [0] ], ""], position: 40801.542706777 },
            { id: "eid1337", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut5}', [0] ], ""], position: 40829 },
            { id: "eid1338", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut8}', [0] ], ""], position: 40913.312202816 },
            { id: "eid1339", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut6}', [0] ], ""], position: 40990 },
            { id: "eid1340", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut1}', [0] ], ""], position: 41115.399460985 },
            { id: "eid1341", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rad_parOut4}', [0] ], ""], position: 41166.423382428 }         ]
      }
   }
},
"slider": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      rect: [0,0,12,194],
      type: 'rect',
      display: 'none',
      id: 'slider2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      clip: ['rect(0px 13px 194px 0px)'],
      fill: ['rgba(222,228,236,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_slider2}": [
            ["color", "background-color", 'rgba(222,228,236,1.00)'],
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "clip", [0,13,194,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '194px'],
            ["style", "width", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "style", "${_slider2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"rad_part": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      borderRadius: ['61px 61px','61px 61px','61px 61px','61px 61px'],
      rect: [0,0,5,5],
      id: 'rad_part',
      stroke: [3,'rgba(87,221,250,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(37,192,217,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '10px'],
            ["style", "width", '10px']
         ],
         "${_rad_part}": [
            ["color", "background-color", 'rgba(37,192,217,1.00)'],
            ["style", "border-top-left-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '5px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '5px'],
            ["color", "border-color", 'rgba(87,221,250,1.00)'],
            ["style", "left", '1px'],
            ["style", "border-width", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"electron": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      borderRadius: ['61px 61px','61px 61px','61px 61px','61px 61px'],
      rect: [0,0,6,6],
      id: 'electron',
      stroke: [3,'rgba(166,250,86,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(48,217,37,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_electron}": [
            ["color", "background-color", 'rgba(48,217,37,1.00)'],
            ["style", "border-top-left-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '6px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [61,61], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '6px'],
            ["color", "border-color", 'rgba(166,250,86,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-width", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '11px'],
            ["style", "width", '11px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"dropmenu": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,0,133,19],
      transform: [[0,0]],
      font: ['digiface, verdana',12,'rgba(215,1,1,1)','normal','none','normal'],
      id: 'source',
      text: 'source material',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '133px']
         ],
         "${_source}": [
            ["style", "height", '19px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"material": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,0,143,25],
      font: ['Arial',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'material',
      text: 'source material',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_material}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '143px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"dropmenu2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      rect: [0,0,101,25],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(217,217,217,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [0,25,101,25],
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(217,217,217,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [0,50,101,25],
      id: 'RectangleCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(217,217,217,1.00)']
   },
   {
      id: 'paper',
      type: 'rect',
      rect: [6,6,0,0]
   },
   {
      id: 'lead',
      type: 'rect',
      rect: [6,30,0,0]
   },
   {
      id: 'dogfood',
      type: 'rect',
      rect: [6,57,0,0]
   }],
   symbolInstances: [
   {
      id: 'paper',
      symbolName: 'paper'
   },
   {
      id: 'dogfood',
      symbolName: 'dogfood'
   },
   {
      id: 'lead',
      symbolName: 'lead'
   }   ]
   },
   states: {
      "Base State": {
         "${_dogfood}": [
            ["style", "top", '63px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(217,217,217,1.00)']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '25px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(217,217,217,1.00)']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(217,217,217,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid207", tween: [ "style", "${_dogfood}", "top", '63px', { fromValue: '63px'}], position: 0, duration: 0 }         ]
      }
   }
},
"menu": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,1,101,25],
      transform: [[0,0]],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(230,230,230,1.00)']
   },
   {
      id: 'material2',
      type: 'rect',
      rect: [8,5,0,0]
   }],
   symbolInstances: [
   {
      id: 'material2',
      symbolName: 'material'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '1px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(230,230,230,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '151px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"radiationnumber": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [-190,-143,800,600],
      id: 'radiationnumber3',
      transform: [[0,0],[],[],[0.5231,0.5231]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/radiationnumber3.svg']
   },
   {
      rect: [152,88,143,34],
      transform: [[0,0]],
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(65,27,27,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_radiationnumber3}": [
            ["style", "top", '-144px'],
            ["transform", "scaleX", '0.523'],
            ["style", "left", '-191px'],
            ["transform", "scaleY", '0.523']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(65,27,27,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '88px'],
            ["style", "left", '153px'],
            ["style", "width", '143px']
         ],
         "${symbolSelector}": [
            ["style", "height", '314px'],
            ["style", "width", '418px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"paper": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,-1,143,25],
      transform: [[0,0]],
      font: ['Arial',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'materialCopy',
      text: 'paper',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_materialCopy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial'],
            ["style", "left", '1px'],
            ["style", "top", '-1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '143px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"lead": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,-1,143,25],
      transform: [[0,0]],
      font: ['Arial',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'materialCopy3',
      text: 'lead',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_materialCopy3}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial'],
            ["style", "left", '1px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '143px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"dogfood": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: [0,-1,143,25],
      transform: [[0,0]],
      font: ['Arial',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'materialCopy4',
      text: 'dogfood',
      align: 'auto',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '143px']
         ],
         "${_materialCopy4}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial'],
            ["style", "left", '1px'],
            ["style", "top", '-1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"papers": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: [0,0,25,25],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"source_rec": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','15px','20px','auto','auto'],
      fill: ['rgba(156,156,156,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['5px','0px','6px','20px','auto','auto'],
      fill: ['rgba(106,102,106,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(156,156,156,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '15px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(106,102,106,1.00)'],
            ["style", "height", '20px'],
            ["style", "top", '0px'],
            ["style", "left", '5px'],
            ["style", "width", '6px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7401593");
