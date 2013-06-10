/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package IlabMQTT.radioactivity.simulation.utilities;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.LinkedHashMap;
import org.json.simple.JSONStreamAware;
import org.json.simple.JSONValue;


/**
 *
 * @author ch
 */
public class JSonSetSourceLocation implements JSONStreamAware{
    
    private String status;
    private char location;
    private boolean SimlateDelay;
    private int secondDelay;
    private String movement;
    
    public JSonSetSourceLocation(String status, char location)
    {
     this.status=status;
     this.location=location;
    
    }
    
     public void SetSimlateDelay(boolean SimlateDelay)
    {
        this.SimlateDelay=SimlateDelay;
    }
    
     public void SetSecondDelay(int secondDelay)
    {
        this.secondDelay=secondDelay;
    }
     
      public void Setmovement(String movement)
    {
        this.movement=movement;
    }
      
      @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
            LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("status", status);
          obj.put("location", String.valueOf(location));
          obj.put("SimlateDelay", String.valueOf(SimlateDelay));
          obj.put("secondDelay", String.valueOf(secondDelay));
          obj.put("movement", String.valueOf(movement));
         
          
          JSONValue.writeJSONString(obj, out);
	}
    
    
    public String getJsonString() throws IOException
	{
		
		 StringWriter out = new StringWriter();
		  this.writeJSONString(out);
		  String jsonText = out.toString();
		  return jsonText;
	}
}
