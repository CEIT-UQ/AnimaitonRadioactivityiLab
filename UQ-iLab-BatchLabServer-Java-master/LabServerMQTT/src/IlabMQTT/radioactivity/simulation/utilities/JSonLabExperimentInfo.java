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
 * @author Chen
 */
public class JSonLabExperimentInfo  implements JSONStreamAware{

    int experimentId;
    String sbName;
    String userGroup;
         
    public JSonLabExperimentInfo(String sbName, String userGroup,int experimentId)
    {
     this.experimentId=  experimentId;
     this.sbName=sbName;
     this.userGroup=userGroup;
    }
            
    @Override
    public void writeJSONString(Writer out) throws IOException {
         LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("ExperimentId", String.valueOf(experimentId));
          obj.put("SbName", sbName);
          obj.put("UserGroup", userGroup);
         
          
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
