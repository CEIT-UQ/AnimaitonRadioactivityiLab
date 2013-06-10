package IlabMQTT.utilities;


import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.ContainerFactory;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class JSonParser {
	
    
//knew the exact key    
	public void JSonPase(String content, String subTopic) throws ParseException
	{
	//JSon command
		if(subTopic.equals("number"))
		{
			JSONParser parser=new JSONParser();
			Object obj=parser.parse(content);
			
		      JSONObject obj1=(JSONObject)obj;
		         
		      System.out.println("======field \"first\"==========");
		      System.out.println(obj1.get("first"));  
		      
		      System.out.println("======field \"second\"==========");
		      System.out.println(obj1.get("second"));  
		      
		      System.out.println("======field \"third\"==========");
		      System.out.println(obj1.get("third"));
		}
		else
		{
			System.out.println("invalid subTopic");
		}
	 
	}
        
        public JSONObject JsonPaser(String content) throws ParseException
        {
                     JSONParser parser=new JSONParser();
                     Object obj=parser.parse(content);
                     JSONObject obj1=(JSONObject)obj;
                      return obj1;
        }
	//output without knowing the exact key
    public void JSonContainerFactory(String jsonText)
    {
    	JSONParser parser = new JSONParser();
    	  ContainerFactory containerFactory = new ContainerFactory(){
    	    public List creatArrayContainer() {
    	      return new LinkedList();
    	    }

    	    public Map createObjectContainer() {
    	      return new LinkedHashMap();
    	    }
    	                        
    	  };
    	                
    	  try{
    	    Map json = (Map)parser.parse(jsonText, containerFactory);
    	    Iterator iter = json.entrySet().iterator();
    	    System.out.println("==iterate result==");
    	    while(iter.hasNext()){
    	      Map.Entry entry = (Map.Entry)iter.next();
    	      System.out.println(entry.getKey() + ": " + entry.getValue());
    	    }
    	                        
    	    System.out.println("==toJSONString()==");
    	    System.out.println(JSONValue.toJSONString(json));
    	  }
    	  catch(ParseException pe){
    	    System.out.println(pe);
    	  }
    }
/*	public static void main(String args[])
	{
		JSonParser JP=new JSonParser();
		try {
			JP.JSonPase("{\"first\": 123, \"second\": [4, 5, 6], \"third\": 789}", "number");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		JP.JSonContainerFactory("{\"first\": 123, \"second\": [4, 5, 6], \"third\": 789}");
	}*/
}
