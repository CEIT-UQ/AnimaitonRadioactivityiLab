
package au.edu.uq.ilab;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the au.edu.uq.ilab package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _AuthHeader_QNAME = new QName("http://ilab.uq.edu.au/", "AuthHeader");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: au.edu.uq.ilab
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link StartLabExecutionResponse }
     * 
     */
    public StartLabExecutionResponse createStartLabExecutionResponse() {
        return new StartLabExecutionResponse();
    }

    /**
     * Create an instance of {@link ExecutionStatus }
     * 
     */
    public ExecutionStatus createExecutionStatus() {
        return new ExecutionStatus();
    }

    /**
     * Create an instance of {@link CancelLabExecution }
     * 
     */
    public CancelLabExecution createCancelLabExecution() {
        return new CancelLabExecution();
    }

    /**
     * Create an instance of {@link GetLabEquipmentStatus }
     * 
     */
    public GetLabEquipmentStatus createGetLabEquipmentStatus() {
        return new GetLabEquipmentStatus();
    }

    /**
     * Create an instance of {@link Validate }
     * 
     */
    public Validate createValidate() {
        return new Validate();
    }

    /**
     * Create an instance of {@link GetTimeUntilReady }
     * 
     */
    public GetTimeUntilReady createGetTimeUntilReady() {
        return new GetTimeUntilReady();
    }

    /**
     * Create an instance of {@link GetLabExecutionStatusResponse }
     * 
     */
    public GetLabExecutionStatusResponse createGetLabExecutionStatusResponse() {
        return new GetLabExecutionStatusResponse();
    }

    /**
     * Create an instance of {@link GetLabExecutionStatus }
     * 
     */
    public GetLabExecutionStatus createGetLabExecutionStatus() {
        return new GetLabExecutionStatus();
    }

    /**
     * Create an instance of {@link CancelLabExecutionResponse }
     * 
     */
    public CancelLabExecutionResponse createCancelLabExecutionResponse() {
        return new CancelLabExecutionResponse();
    }

    /**
     * Create an instance of {@link ValidateResponse }
     * 
     */
    public ValidateResponse createValidateResponse() {
        return new ValidateResponse();
    }

    /**
     * Create an instance of {@link Validation }
     * 
     */
    public Validation createValidation() {
        return new Validation();
    }

    /**
     * Create an instance of {@link GetLabEquipmentStatusResponse }
     * 
     */
    public GetLabEquipmentStatusResponse createGetLabEquipmentStatusResponse() {
        return new GetLabEquipmentStatusResponse();
    }

    /**
     * Create an instance of {@link LabEquipmentStatus }
     * 
     */
    public LabEquipmentStatus createLabEquipmentStatus() {
        return new LabEquipmentStatus();
    }

    /**
     * Create an instance of {@link AuthHeader }
     * 
     */
    public AuthHeader createAuthHeader() {
        return new AuthHeader();
    }

    /**
     * Create an instance of {@link GetLabExecutionResultsResponse }
     * 
     */
    public GetLabExecutionResultsResponse createGetLabExecutionResultsResponse() {
        return new GetLabExecutionResultsResponse();
    }

    /**
     * Create an instance of {@link GetTimeUntilReadyResponse }
     * 
     */
    public GetTimeUntilReadyResponse createGetTimeUntilReadyResponse() {
        return new GetTimeUntilReadyResponse();
    }

    /**
     * Create an instance of {@link StartLabExecution }
     * 
     */
    public StartLabExecution createStartLabExecution() {
        return new StartLabExecution();
    }

    /**
     * Create an instance of {@link GetLabExecutionResults }
     * 
     */
    public GetLabExecutionResults createGetLabExecutionResults() {
        return new GetLabExecutionResults();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AuthHeader }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ilab.uq.edu.au/", name = "AuthHeader")
    public JAXBElement<AuthHeader> createAuthHeader(AuthHeader value) {
        return new JAXBElement<AuthHeader>(_AuthHeader_QNAME, AuthHeader.class, null, value);
    }

}
