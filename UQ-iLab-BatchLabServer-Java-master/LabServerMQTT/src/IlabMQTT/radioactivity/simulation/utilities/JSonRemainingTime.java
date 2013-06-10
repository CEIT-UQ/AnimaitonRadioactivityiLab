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
public class JSonRemainingTime implements JSONStreamAware{
       private String status;
       private int RemainingTime=-1;
       public JSonRemainingTime(String status)
       {
           this.status=status;
       }
       
    public void SetRemainingTime(int time)
    {
         this.RemainingTime=time;
    }
    
        @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
            LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("status", status);       
          obj.put("RemaingTime", String.valueOf(RemainingTime));
    
          
         
          
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
