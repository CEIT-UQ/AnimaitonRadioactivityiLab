
package uq.ilabs.labserver;

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
 *         &lt;element name="SubmitResult" type="{http://ilab.mit.edu}SubmissionReport" minOccurs="0"/>
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
    "submitResult"
})
@XmlRootElement(name = "SubmitResponse")
public class SubmitResponse {

    @XmlElement(name = "SubmitResult")
    protected SubmissionReport submitResult;

    /**
     * Gets the value of the submitResult property.
     * 
     * @return
     *     possible object is
     *     {@link SubmissionReport }
     *     
     */
    public SubmissionReport getSubmitResult() {
        return submitResult;
    }

    /**
     * Sets the value of the submitResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link SubmissionReport }
     *     
     */
    public void setSubmitResult(SubmissionReport value) {
        this.submitResult = value;
    }

}
