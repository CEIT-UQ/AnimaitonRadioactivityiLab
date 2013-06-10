
package au.edu.uq.ilab;

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
 *         &lt;element name="GetLabEquipmentStatusResult" type="{http://ilab.uq.edu.au/}LabEquipmentStatus" minOccurs="0"/>
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
    "getLabEquipmentStatusResult"
})
@XmlRootElement(name = "GetLabEquipmentStatusResponse")
public class GetLabEquipmentStatusResponse {

    @XmlElement(name = "GetLabEquipmentStatusResult")
    protected LabEquipmentStatus getLabEquipmentStatusResult;

    /**
     * Gets the value of the getLabEquipmentStatusResult property.
     * 
     * @return
     *     possible object is
     *     {@link LabEquipmentStatus }
     *     
     */
    public LabEquipmentStatus getGetLabEquipmentStatusResult() {
        return getLabEquipmentStatusResult;
    }

    /**
     * Sets the value of the getLabEquipmentStatusResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link LabEquipmentStatus }
     *     
     */
    public void setGetLabEquipmentStatusResult(LabEquipmentStatus value) {
        this.getLabEquipmentStatusResult = value;
    }

}
