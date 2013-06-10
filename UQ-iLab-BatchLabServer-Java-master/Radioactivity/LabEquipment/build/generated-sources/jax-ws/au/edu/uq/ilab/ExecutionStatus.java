
package au.edu.uq.ilab;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ExecutionStatus complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ExecutionStatus">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ExecutionId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ExecuteStatus" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ResultStatus" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="TimeRemaining" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ErrorMessage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ExecutionStatus", propOrder = {
    "executionId",
    "executeStatus",
    "resultStatus",
    "timeRemaining",
    "errorMessage"
})
public class ExecutionStatus {

    @XmlElement(name = "ExecutionId")
    protected int executionId;
    @XmlElement(name = "ExecuteStatus")
    protected int executeStatus;
    @XmlElement(name = "ResultStatus")
    protected int resultStatus;
    @XmlElement(name = "TimeRemaining")
    protected int timeRemaining;
    @XmlElement(name = "ErrorMessage")
    protected String errorMessage;

    /**
     * Gets the value of the executionId property.
     * 
     */
    public int getExecutionId() {
        return executionId;
    }

    /**
     * Sets the value of the executionId property.
     * 
     */
    public void setExecutionId(int value) {
        this.executionId = value;
    }

    /**
     * Gets the value of the executeStatus property.
     * 
     */
    public int getExecuteStatus() {
        return executeStatus;
    }

    /**
     * Sets the value of the executeStatus property.
     * 
     */
    public void setExecuteStatus(int value) {
        this.executeStatus = value;
    }

    /**
     * Gets the value of the resultStatus property.
     * 
     */
    public int getResultStatus() {
        return resultStatus;
    }

    /**
     * Sets the value of the resultStatus property.
     * 
     */
    public void setResultStatus(int value) {
        this.resultStatus = value;
    }

    /**
     * Gets the value of the timeRemaining property.
     * 
     */
    public int getTimeRemaining() {
        return timeRemaining;
    }

    /**
     * Sets the value of the timeRemaining property.
     * 
     */
    public void setTimeRemaining(int value) {
        this.timeRemaining = value;
    }

    /**
     * Gets the value of the errorMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getErrorMessage() {
        return errorMessage;
    }

    /**
     * Sets the value of the errorMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setErrorMessage(String value) {
        this.errorMessage = value;
    }

}
