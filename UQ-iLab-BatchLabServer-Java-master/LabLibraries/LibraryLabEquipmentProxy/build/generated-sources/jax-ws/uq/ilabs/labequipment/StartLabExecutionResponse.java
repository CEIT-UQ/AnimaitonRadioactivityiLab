
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
 *         &lt;element name="StartLabExecutionResult" type="{http://ilab.uq.edu.au/}ExecutionStatus" minOccurs="0"/>
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
    "startLabExecutionResult"
})
@XmlRootElement(name = "StartLabExecutionResponse")
public class StartLabExecutionResponse {

    @XmlElement(name = "StartLabExecutionResult")
    protected ExecutionStatus startLabExecutionResult;

    /**
     * Gets the value of the startLabExecutionResult property.
     * 
     * @return
     *     possible object is
     *     {@link ExecutionStatus }
     *     
     */
    public ExecutionStatus getStartLabExecutionResult() {
        return startLabExecutionResult;
    }

    /**
     * Sets the value of the startLabExecutionResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link ExecutionStatus }
     *     
     */
    public void setStartLabExecutionResult(ExecutionStatus value) {
        this.startLabExecutionResult = value;
    }

}
