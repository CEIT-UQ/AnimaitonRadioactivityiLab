
package uq.ilabs.labserver;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
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
 *         &lt;element name="experimentID" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="experimentSpecification" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="userGroup" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="priorityHint" type="{http://www.w3.org/2001/XMLSchema}int"/>
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
    "experimentID",
    "experimentSpecification",
    "userGroup",
    "priorityHint"
})
@XmlRootElement(name = "Submit")
public class Submit {

    protected int experimentID;
    protected String experimentSpecification;
    protected String userGroup;
    protected int priorityHint;

    /**
     * Gets the value of the experimentID property.
     * 
     */
    public int getExperimentID() {
        return experimentID;
    }

    /**
     * Sets the value of the experimentID property.
     * 
     */
    public void setExperimentID(int value) {
        this.experimentID = value;
    }

    /**
     * Gets the value of the experimentSpecification property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExperimentSpecification() {
        return experimentSpecification;
    }

    /**
     * Sets the value of the experimentSpecification property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExperimentSpecification(String value) {
        this.experimentSpecification = value;
    }

    /**
     * Gets the value of the userGroup property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUserGroup() {
        return userGroup;
    }

    /**
     * Sets the value of the userGroup property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUserGroup(String value) {
        this.userGroup = value;
    }

    /**
     * Gets the value of the priorityHint property.
     * 
     */
    public int getPriorityHint() {
        return priorityHint;
    }

    /**
     * Sets the value of the priorityHint property.
     * 
     */
    public void setPriorityHint(int value) {
        this.priorityHint = value;
    }

}
