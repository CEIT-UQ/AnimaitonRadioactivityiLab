/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package IlabMQTT.utilities;

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
public class JSonExecutionTime implements JSONStreamAware{
    
    public int ExecutionTime;
    public JSonExecutionTime(int time)
    {
     ExecutionTime=time;   
    }
    
     @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
		  LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("ActualExecutionTime", String.valueOf(ExecutionTime));
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
