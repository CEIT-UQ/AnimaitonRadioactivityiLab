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

public class JSonSetTubeDistance implements JSONStreamAware{
    
    private String status;
    private int secondDelay;
    private int ToLocation;
    private int FromLocation;
    private double secondSpent;
    private double moveRate;
    public JSonSetTubeDistance(String status, int FromLocation, int ToLocation)
    {
     this.status=status;
     this.FromLocation=FromLocation;
     this.ToLocation=ToLocation;
    }

    public void SetSecondDelay(int secondDelay)
    {
        this.secondDelay=secondDelay;
    }
    public void SetSecondSpent(double second)
    {
        this.secondSpent=second;
    }
    
    public void SetMoveRate(double rate)
    {
        this.moveRate=rate;
    }
      @Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
            LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("Status", status);
          obj.put("From", String.valueOf(FromLocation));
          obj.put("To", String.valueOf(ToLocation));
          //obj.put("SimlateDelay", String.valueOf(SimlateDelay));
          obj.put("SecondsTotal", String.valueOf(secondDelay));
          obj.put("SecondSpent", String.valueOf(secondSpent));
          obj.put("MoveRate", String.valueOf(moveRate));
          
         
          
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
