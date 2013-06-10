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
public class JSonEstExecutionTime implements JSONStreamAware{
    String timeStarted;
    String timeCompleted;
    public JSonEstExecutionTime(String timeStarted, String timeCompleted)
    {
        this.timeStarted=timeStarted;
        this.timeCompleted=timeCompleted;
    }
    
       @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
		  LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("timeStarted", String.valueOf(this.timeStarted));
          obj.put("timeCompleted", String.valueOf(this.timeCompleted));
         
          
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
