package IlabMQTT.MQTT;

import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttDefaultFilePersistence;
import org.eclipse.paho.client.mqttv3.MqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.MqttTopic;

import java.io.IOException;
import java.sql.Timestamp;

public class MQTTClient implements MqttCallback {

	
	// Private instance variables
			private MqttClient client;
			private String brokerUrl;
			private boolean quietMode;
			private MqttConnectOptions conOpt;
			
			
    public MQTTClient(String brokerUrl, String clientId, boolean quietMode) throws MqttException {
    	this.brokerUrl = brokerUrl;
    	this.quietMode = quietMode;
    	
    	//This sample stores files in a temporary directory...
    	//..a real application ought to store them somewhere 
    	//where they are not likely to get deleted or tampered with
    	String tmpDir = System.getProperty("java.io.tmpdir");
    	MqttDefaultFilePersistence dataStore = new MqttDefaultFilePersistence(tmpDir); 
    	
    	try {
    		// Construct the object that contains connection parameters 
    		// such as cleansession and LWAT
	    	conOpt = new MqttConnectOptions();
	    	conOpt.setCleanSession(false);

    		// Construct the MqttClient instance
			client = new MqttClient(this.brokerUrl,clientId, dataStore);
			
			// Set this wrapper as the callback handler
	    	client.setCallback(this);
	    	
		} catch (MqttException e) {
			e.printStackTrace();
			log("Unable to set up client: "+e.toString());
			System.exit(1);
		}
    }
	

	
	
	
	public void publish(String topicName, int qos, byte[] payload) throws MqttException
	{
		
		client.connect();
    	//log("Connected to "+brokerUrl + " with client ID "+client.getClientId());
    	
    	// Get an instance of the topic
    	MqttTopic topic = client.getTopic(topicName);

   		MqttMessage message = new MqttMessage(payload);
    	message.setQos(qos);
	
    	// Publish the message
    	String time = new Timestamp(System.currentTimeMillis()).toString();
    	//log("MQTTJson Publishing at: "+time+ " to topic \""+topicName+"\" qos "+qos);
    	MqttDeliveryToken token = topic.publish(message);
	
    	// Wait until the message has been delivered to the server
    	token.waitForCompletion();
    	
    	// Disconnect the client
    	client.disconnect();
    	//log("Disconnected");
	}
	
      public void subscribe(String topicName, int qos) throws MqttException {
    	
    	// Connect to the server
    	client.connect();
    	log("Connected to "+brokerUrl+" with client ID "+client.getClientId());

    	// Subscribe to the topic
    	log("MQTTJson Subscribing to topic \""+topicName+"\" qos"+qos);
    	client.subscribe(topicName, qos);
              
    	// Block until Enter is pressed
    	log("Press <Enter> to exit");
		try {
                  
			System.in.read();
		} catch (IOException e) {
			//If we can't read we'll just exit
		}
		
		// Disconnect the client
		client.disconnect();
		log("Disconnected");
    }
	
		public void subscribe(String []topicName, int []qos) throws MqttException {
	    	String topic="";
	    	// Connect to the server
	    	client.connect();
	    	log("Connected to "+brokerUrl+" with client ID "+client.getClientId());

	    	// Subscribe to the topic
	    	for(int i=0;i<topicName.length;i++)
	    	{
	    		topic+=topicName[i]+" ";
	    	}
	    	log("MQTTJson Subscribing to topic \""+topic+"\" qos"+qos);
	    	client.subscribe(topicName, qos);
	             
	    	// Block until Enter is pressed
	    	log("Press <Enter> to exit");
			try {
                              System.out.println("in try");
                             
				System.in.read();
			} catch (IOException e) {
				//If we can't read we'll just exit
			}
			
			// Disconnect the client
			client.disconnect();
			log("Disconnected");
	    }
		
	  private void log(String message) {
	    	if (!quietMode) {
	    		System.out.println(message);
	    	}
	    }
	
	@Override
	public void connectionLost(Throwable arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deliveryComplete(MqttDeliveryToken arg0) {
		// TODO Auto-generated method stub
		System.out.println("Delivery complete");
	}
//////////////////???need to improve??//////////////
	@Override
	public void messageArrived(MqttTopic topic, MqttMessage message)
			throws Exception {
		// TODO Auto-generated method stub
		String time = new Timestamp(System.currentTimeMillis()).toString();
		
		//parse topic
		String topicName=topic.getName();
		String []topicSlice=topicName.split("/");
		
		boolean IsJson=false;
		String subTopic=null;
		/*output for debugging
		for(int i=0;i<topicSlice.length;i++)
		{
			log("slice: "+topicSlice[i]);
		}
		*/
		//judge topic is for a Json message or not
	
		
			for(int i=0;i<topicSlice.length;i++)
			{
				if(topicSlice[i].equals("JSon"))
				{
					IsJson=true;
					break;
				}
			}
			String content=new String(message.getPayload());
			 System.out.println("Time:\t" +time +
		              "  Topic:\t" + topic.getName() + 
		              "  QoS:\t" + message.getQos());
                         System.out.println(new String(message.getPayload())+"\n");
		
		/*if(IsJson)
		{
			String content=new String(message.getPayload());
			 System.out.println("Time:\t" +time +
		              "  Topic:\t" + topic.getName() + 
		              "  QoS:\t" + message.getQos());
			 JSonParser JP=new JSonParser();
			 //JP.JSonPase(content, subTopic);
		   JP.JSonContainerFactory(content);
		}
		else
		{
		System.out.println("Time:\t" +time +
                           "  Topic:\t" + topic.getName() + 
                           "  Message:\t" + new String(message.getPayload()) +
                           "  QoS:\t" + message.getQos());
		}*/
	}

	
	

}
