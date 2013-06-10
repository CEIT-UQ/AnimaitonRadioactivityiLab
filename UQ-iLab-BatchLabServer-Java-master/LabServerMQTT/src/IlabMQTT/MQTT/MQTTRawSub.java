/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package IlabMQTT.MQTT;

/**
 *
 * @author Chen
 */


import IlabMQTT.*;
import IlabMQTT.MQTT.simulation.animation.JSonSetTubeAni;
import IlabMQTT.utilities.JSonParser;
import IlabMQTT.utilities.MessageBroker;
import IlabMQTT.utilities.Topics;
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
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONObject;

public class MQTTRawSub implements MqttCallback {

	
	// Private instance variables
			private MqttClient Sub_Client;
                        private MqttClient Pub_Client;
			private String brokerUrl;
			private boolean quietMode;
			private MqttConnectOptions conOpt;
                        
			
			
    public MQTTRawSub(String brokerUrl, String clientId, boolean quietMode) throws MqttException {
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
			Pub_Client = new MqttClient(this.brokerUrl,clientId+"_Pub", dataStore);
			Sub_Client = new MqttClient(this.brokerUrl,clientId+"_Sub", dataStore);
			// Set this wrapper as the callback handler
	    	Sub_Client.setCallback(this);
	    	
		} catch (MqttException e) {
			e.printStackTrace();
			log("Unable to set up client: "+e.toString());
			System.exit(1);
		}
    }
	

	
	
	
	public void publish(String topicName, int qos, byte[] payload) throws MqttException
	{
		Pub_Client.connect();
    	log("Connected to "+brokerUrl + " with client ID "+Pub_Client.getClientId());
    	
    	// Get an instance of the topic
    	MqttTopic topic = Pub_Client.getTopic(topicName);

   		MqttMessage message = new MqttMessage(payload);
    	message.setQos(qos);
	
    	// Publish the message
    	String time = new Timestamp(System.currentTimeMillis()).toString();
    	log("MQTTJson Publishing at: "+time+ " to topic \""+topicName+"\" qos "+qos);
        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    	MqttDeliveryToken token = topic.publish(message);
	
    	// Wait until the message has been delivered to the server
    	token.waitForCompletion();
    	
    	// Disconnect the client
    	   Pub_Client.disconnect();
    	   log("Disconnected");
	}
	
      public void subscribe(String topicName, int qos) throws MqttException {
    	
    	// Connect to the server
    	Sub_Client.connect();
    	log("Connected to "+brokerUrl+" with client ID "+Sub_Client.getClientId());

    	// Subscribe to the topic
    	log("MQTTJson Subscribing to topic \""+topicName+"\" qos"+qos);
    	Sub_Client.subscribe(topicName, qos);
              
    	// Block until Enter is pressed
    	log("Press <Enter> to exit");
		try {
			System.in.read();
                        System.out.println("Enter exit");
		} catch (IOException e) {
			//If we can't read we'll just exit
                    System.err.println("error exit");
		}
		
		// Disconnect the client
		Sub_Client.disconnect();
		log("Disconnected");
    }
	
	/*	public void subscribe(String []topicName, int []qos) throws MqttException {
	    	String topic="";
	    	// Connect to the server
	    	Sub_Client.connect();
	    	log("Connected to "+brokerUrl+" with client ID "+Sub_Client.getClientId());

	    	// Subscribe to the topic
	    	for(int i=0;i<topicName.length;i++)
	    	{
	    		topic+=topicName[i]+" ";
	    	}
	    	log("MQTTJson Subscribing to topic \""+topic+"\" qos"+qos);
	    	Sub_Client.subscribe(topicName, qos);
	             
	    	// Block until Enter is pressed
	    	log("Press <Enter> to exit");
			try {
                              System.out.println("in try");
                             
				System.in.read();
			} catch (IOException e) {
				//If we can't read we'll just exit
			}
			
			// Disconnect the client
			Sub_Client.disconnect();
			log("Disconnected");
	    }*/
		
	  private void log(String message) {
	    	if (!quietMode) {
	    		System.out.println(message);
	    	}
	    }
	
	@Override
	public void connectionLost(Throwable arg0) {
		// TODO Auto-generated method stub
		System.err.println("connection Lost!!!~~ "+arg0.getMessage());
	}

	@Override
	public void deliveryComplete(MqttDeliveryToken arg0) {
		// TODO Auto-generated method stub
		System.out.println("Delivery complete");
	}
//////////////////???need to improve??//////////////
	@Override
	public void messageArrived(MqttTopic topic, MqttMessage message) throws Exception {
		// TODO Auto-generated method stub
                JSonParser JP=new JSonParser();
                
		String time = new Timestamp(System.currentTimeMillis()).toString();
		String content=new String(message.getPayload());
	        System.out.println("Time:\t" +time +
		                 "  Topic:\t" + topic.getName() + 
		                 "  QoS:\t" + message.getQos());
                 System.out.println(new String(message.getPayload())+"\n");
                 
                 
		//parse topic
		String topicName=topic.getName();
		String []topicSlice=topicName.split("/");
		
               //parse the message
               String SubTopic=topicSlice[topicSlice.length-1];
	        System.out.println("Subtopic: "+SubTopic);
              
                String SendTopic="";
                
               if( SubTopic.equals(Topics.SetTubeDistance))
               {
                      JSONObject obj=JP.JsonPaser(new String(message.getPayload()));
                      int From=Integer.parseInt(obj.get("From").toString());
                      int To=Integer.parseInt(obj.get("To").toString());
                      double secondSpent=Double.parseDouble(obj.get("SecondSpent").toString());
                      int SecondsTotal=Integer.parseInt(obj.get("SecondsTotal").toString());
                      double moveRate=Double.parseDouble(obj.get("MoveRate").toString());
                      int height=-1;
                      if((secondSpent==SecondsTotal)||(From==To))
                      {
                          height=To;
                      }
                      else if(From>To)
                      {
                          height= (int)(From-(secondSpent/moveRate));
                      }
                      else if(From<To)
                      {
                          height= (int)(From+(secondSpent/moveRate));
                      }
                      JSonSetTubeAni SetTubeA=new JSonSetTubeAni(height);
                      SendTopic=Topics.iLabRadioactivitySimulationAnimation+Topics.SetTubeDistance;
                     
                      this.publish(SendTopic, 2, SetTubeA.getJsonString().getBytes());
                        System.out.println("Sent,PUB_TOPIC: "+SendTopic);
               }
               else if(SubTopic.equals(Topics.CaptureCounts))
               {
                   
                   SendTopic=Topics.iLabRadioactivitySimulationAnimation+Topics.CaptureCounts;
                  
                   this.publish(SendTopic,2, message.getPayload());
                   
                   System.out.println("Sent,PUB_TOPIC: "+SendTopic);
               }
               else if(SubTopic.equals(Topics.Status))
               {
                   SendTopic=Topics.iLabRadioactivitySimulationAnimation+Topics.Status;    
                   System.out.println("before ");
                   this.publish(SendTopic, 0, message.getPayload());
                   
                     System.out.println("Sent,PUB_TOPIC: "+SendTopic);
                   
               }
               else if(SubTopic.equals(Topics.LabExperimentInfo))
               {
                   SendTopic=Topics.iLabRadioactivitySimulationAnimation+Topics.LabExperimentInfo;    
                   this.publish(SendTopic, 0, message.getPayload());     
                   System.out.println("Sent,PUB_TOPIC: "+SendTopic);
               }
               else
               {
                   System.out.println("wrong subtopic!!!!!");
                   
               }      
	}

	public static void main(String args[]) 
        {
                System.out.println("Im in MQTTRawSub");
    	        boolean quietMode = false;
		String SUB_Topic = Topics.iLabRadioactivitySimulationRaw+"#";
		int qos = 2;
		String broker = MessageBroker.autum;
		int port = 1883;
               
                String url = "tcp://"+broker+":"+port;
	        String clientId = "MQTTRawSub";
                
        try {
            MQTTRawSub MQTTClient=new MQTTRawSub(url,clientId,quietMode);
            MQTTClient.subscribe(SUB_Topic,0);
        } catch (MqttException ex) {
            Logger.getLogger(MQTTRawSub.class.getName()).log(Level.SEVERE, null, ex);
            System.err.println(ex.getCause()+" "+ex.getMessage());
        }
        }
	

}

