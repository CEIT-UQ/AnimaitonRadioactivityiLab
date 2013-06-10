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
public class JSonStatus implements JSONStreamAware{
    public String Validate="Validate";
    public String ValidateCompleted="ValidateCompleted";
    public String Running="Running, time left %s s";
    public String Cancelled="Cancelled";
    public String startRunning="Start running";
    public String Completed="Completed";
    public String status=null;
    public String detail=null;
    public JSonStatus()
    {
        this.status="";
        this.detail="";
    }
    
    public void setStatus(String status)
    {
        //reset detail
        this.detail="";
        
        this.status=status;
    }
    public void setDetail(String detail)
    {
        this.detail=detail;
        
    }
    
    @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
      LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("Status", this.status);
          obj.put("Detail", this.detail);
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
