
package uq.ilabs.labequipment;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CancelLabExecutionResult" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "cancelLabExecutionResult"
})
@XmlRootElement(name = "CancelLabExecutionResponse")
public class CancelLabExecutionResponse {

    @XmlElement(name = "CancelLabExecutionResult")
    protected boolean cancelLabExecutionResult;

    /**
     * Gets the value of the cancelLabExecutionResult property.
     * 
     */
    public boolean isCancelLabExecutionResult() {
        return cancelLabExecutionResult;
    }

    /**
     * Sets the value of the cancelLabExecutionResult property.
     * 
     */
    public void setCancelLabExecutionResult(boolean value) {
        this.cancelLabExecutionResult = value;
    }

}
