package IlabMQTT.MQTT;


import java.io.IOException;
import org.eclipse.paho.client.mqttv3.MqttException;
import IlabMQTT.utilities.JSonNumber;
import IlabMQTT.utilities.*;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author ch
 */
public class MQTTMainSub {
    /**
	 * @param args
	 */
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        System.out.println("Im in MQTTMainSub");
    	boolean quietMode = false;
		String action = "publish";
		String topic = "";
		String message = "Message from MQTTv3 Java client";
		int qos = 2;
		String broker = "130.102.129.175";
                //String broker = "209.217.126.103";
		int port = 1883;
		boolean isJson=false;
		int []MulitQos=new int[3];
		String []MulitTopic=new String[3];
		// Parse the arguments - 
				for (int i=0; i<args.length; i++) {
					// Check this is a valid argument
					if (args[i].length() == 2 && args[i].startsWith("-")) {
						char arg = args[i].charAt(1);
						// Handle the no-value arguments
						switch(arg) {
						case 'h': case '?':	printHelp(); return;
						case 'q': quietMode = true;	continue;
						}
						// Validate there is a value associated with the argument
						if (i == args.length -1 || args[i+1].charAt(0) == '-') {
							System.out.println("Missing value for argument: "+args[i]);
							printHelp();
							return;
						}
						switch(arg) {
						case 'a': action = args[++i];                 break;
						case 't': topic = args[++i];                  break;
						case 'j': message = args[++i];
						          isJson=true;                        break;
						case 'm': message = args[++i];                break;
						case 's': qos = Integer.parseInt(args[++i]);  break;
						case 'b': broker = args[++i];                 break;
						case 'p': port = Integer.parseInt(args[++i]); break;
						default: 
							System.out.println("Unrecognised argument: "+args[i]);
							printHelp(); 
							return;
						}
					} else {
						System.out.println("Unrecognised argument: "+args[i]);
						printHelp(); 
						return;
					}
				}
				
				// Validate the provided arguments
				if (!action.equals("publish") && !action.equals("subscribe")) {
					System.out.println("Invalid action: "+action);
					printHelp();
					return;
				}
				if (qos < 0 || qos > 2) {
					System.out.println("Invalid QoS: "+qos);
					printHelp();
					return;
				}
				//change from source code
				if(isJson)
				{
					
					
					//parse the input json string
					
					String []MArray=message.split(",");
					for(int i=0;i<MArray.length;i++)
					{
						System.out.println("MArray: "+MArray[i]);
					}
					
					if(MArray.length!=3)
					{
						System.out.println("Invalid JSon message: "+message);
						return;
					}
					
					
					try {							
						JSonNumber jn=new JSonNumber(MArray[0],MArray[1],MArray[2]);
						message=jn.getJsonString();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				//is not JSON
				else if (topic.equals("")) {
					// Set the default topic according to the specified action
					if (action.equals("publish")) {
						
							topic = "Sample/Java/string";
						
						
					} else {
						//does not make sense beacuse subscribe certain MulitTopics
						topic = "Sample/#";
					}
				}
				
				String url = "tcp://"+broker+":"+port;
				String clientId = "SampleJavaV3_"+action;

				// With a valid set of arguments, the real work of 
				// driving the client API can begin
				
				try {
					// Create an instance of the Sample client wrapper
					MQTTClient sampleClient = new MQTTClient(url,clientId,quietMode);
					
					// Perform the specified action
					if (action.equals("publish"))
					{
						sampleClient.publish(topic,qos,message.getBytes());
					}
                                        
					else if (action.equals("subscribe")) {
                                            Topics topics=new Topics();	
					//subscribe to certain topics
						MulitTopic[0]="Sample/Java/#";
						MulitTopic[1]="ilab/radiation-1/template/#";
						MulitTopic[2]=topics.iLabRadioactivitySimulationRaw+"#";
						MulitQos[0]=qos;
						MulitQos[1]=qos;
						MulitQos[2]=qos;
					    sampleClient.subscribe(MulitTopic,MulitQos);	
						
						
						
					}
				} catch(MqttException me) {
					System.out.println("reason "+me.getReasonCode());
					System.out.println("msg "+me.getMessage());
					System.out.println("loc "+me.getLocalizedMessage());
					System.out.println("casue "+me.getCause());
					System.out.println("excep "+me);
					me.printStackTrace();
				}
                               
	}
	
    static void printHelp() {
        System.out.println(
            "Syntax:\n\n"+
            "    Sample [-h] [-a publish|subscribe] [-t <topic>] [-m <message text>]\n"+
            "            [-s 0|1|2] -b <hostname|IP address>] [-p <brokerport>]\n\n"+
            "    -h  Print this help text and quit\n"+
            "    -q  Quiet mode (default is false)\n"+
            "    -a  Perform the relevant action (default is publish)\n" +
            "    -t  Publish/subscribe to <topic> instead of the default\n" +
            "            (publish: \"Sample/Java/v3\", subscribe: \"Sample/#\")\n" +
            "    -m  Use <message text> instead of the default\n" +
            "            (\"Message from MQTTv3 Java client\")\n" +
            "    -s  Use this QoS instead of the default (2)\n" +
            "    -b  Use this name/IP address instead of the default (localhost)\n" +
            "    -p  Use this port instead of the default (1883)\n\n" +
            "Delimit strings containing spaces with \"\"\n\n"+
            "Publishers transmit a single message then disconnect from the server.\n"+
            "Subscribers remain connected to the server and receive appropriate\n"+
            "messages until <enter> is pressed.\n\n"
            );
    }
}
