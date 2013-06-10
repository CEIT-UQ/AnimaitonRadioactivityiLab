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


public class JSonNumber implements JSONStreamAware{
 String first=null;
 String second=null;
 String third=null;
 	public JSonNumber(String first, String second, String third)
 	{
 		this.first=first;
 		this.second=second;
 		this.third=third;
 	}
	@Override
	public void writeJSONString(Writer out) throws IOException {
		// TODO Auto-generated method stub
		  LinkedHashMap<String, String> obj = new LinkedHashMap<String, String>();
          obj.put("first", this.first);
          obj.put("second", this.second);
          obj.put("third", this.third);
          JSONValue.writeJSONString(obj, out);
	}
	public String getJsonString() throws IOException
	{
		
		 StringWriter out = new StringWriter();
		  this.writeJSONString(out);
		  String jsonText = out.toString();
		  return jsonText;
	}
	/*
	public static void main(String args[]) throws IOException
	{
		
		JSonNumber number=new JSonNumber("1","yes","iG");
		 StringWriter out = new StringWriter();
		  number.writeJSONString(out);
		  String jsonText = out.toString();
		  System.out.print(jsonText);
	}
	/*public static void main(String args[]) throws IOException
	{
		JSonNumber number=new JSonNumber("1","yes","iG");
		System.out.println("JSon: "+number.getJsonString());
	}
	*/
	
}
