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
public class JSonDataCapture implements JSONStreamAware {
    int  data;
    int  distanceIndex;
    int  trialsIndex;
    public JSonDataCapture()
    {
        data=-1;
        distanceIndex=-1;
        trialsIndex=-1;
    }
    
    public void SetData(int data)
    {
        this.data=data;
    }
    public void SetdistanceIndex(int distanceIndex)
    {
        this.distanceIndex=distanceIndex;
    }
    public void SettrialsIndex(int trialsIndex)
    {
        this.trialsIndex=trialsIndex;
    }
    
     @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
		  LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("data", String.valueOf(this.data));
          obj.put("distanceIndex", String.valueOf(this.distanceIndex));
          obj.put("trialsIndex", String.valueOf(this.trialsIndex));
         
          
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
