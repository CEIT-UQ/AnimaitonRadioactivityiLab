/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package IlabMQTT.MQTT.simulation.animation;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.LinkedHashMap;
import org.json.simple.JSONStreamAware;
import org.json.simple.JSONValue;

/**
 *
 * @author Chen
 */
public class JSonSetTubeAni implements JSONStreamAware{
    public int height;
    public JSonSetTubeAni(int height)
    {
        this.height=height;
    }

    @Override
    public void writeJSONString(Writer out) throws IOException {
        LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("Height", String.valueOf(height)); 
          JSONValue.writeJSONString(obj, out);
    }
    
     public String getJsonString() throws IOException{
		
	   StringWriter out = new StringWriter();
            this.writeJSONString(out);
           String jsonText = out.toString();
           return jsonText;
    }
}
