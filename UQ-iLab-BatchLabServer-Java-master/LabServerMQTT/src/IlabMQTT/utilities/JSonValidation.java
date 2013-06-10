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
public class JSonValidation  implements JSONStreamAware{
    private boolean accepted=false;
    
    private double estRuntime=-1;
    
    private String errorMessage=null;
    
    public void setAccepted(boolean accepted) {
        this.accepted = accepted;
    }
    
    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
    
     public void setEstRuntime(double estRuntime) {
        this.estRuntime = estRuntime;
    }
     
      @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
		  LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("accepted", String.valueOf(this.accepted));
          obj.put("estRuntime", String.valueOf(this.estRuntime));
          obj.put("errorMessage", String.valueOf(this.errorMessage));
          
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
