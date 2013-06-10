
package uq.ilabs.servicebroker;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the uq.ilabs.servicebroker package. 
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

    private final static QName _SbAuthHeader_QNAME = new QName("http://ilab.mit.edu", "sbAuthHeader");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: uq.ilabs.servicebroker
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetLabInfo }
     * 
     */
    public GetLabInfo createGetLabInfo() {
        return new GetLabInfo();
    }

    /**
     * Create an instance of {@link Validate }
     * 
     */
    public Validate createValidate() {
        return new Validate();
    }

    /**
     * Create an instance of {@link GetEffectiveQueueLength }
     * 
     */
    public GetEffectiveQueueLength createGetEffectiveQueueLength() {
        return new GetEffectiveQueueLength();
    }

    /**
     * Create an instance of {@link RetrieveResultResponse }
     * 
     */
    public RetrieveResultResponse createRetrieveResultResponse() {
        return new RetrieveResultResponse();
    }

    /**
     * Create an instance of {@link ResultReport }
     * 
     */
    public ResultReport createResultReport() {
        return new ResultReport();
    }

    /**
     * Create an instance of {@link GetLabConfigurationResponse }
     * 
     */
    public GetLabConfigurationResponse createGetLabConfigurationResponse() {
        return new GetLabConfigurationResponse();
    }

    /**
     * Create an instance of {@link GetExperimentStatusResponse }
     * 
     */
    public GetExperimentStatusResponse createGetExperimentStatusResponse() {
        return new GetExperimentStatusResponse();
    }

    /**
     * Create an instance of {@link LabExperimentStatus }
     * 
     */
    public LabExperimentStatus createLabExperimentStatus() {
        return new LabExperimentStatus();
    }

    /**
     * Create an instance of {@link GetLabConfiguration }
     * 
     */
    public GetLabConfiguration createGetLabConfiguration() {
        return new GetLabConfiguration();
    }

    /**
     * Create an instance of {@link ValidateResponse }
     * 
     */
    public ValidateResponse createValidateResponse() {
        return new ValidateResponse();
    }

    /**
     * Create an instance of {@link ValidationReport }
     * 
     */
    public ValidationReport createValidationReport() {
        return new ValidationReport();
    }

    /**
     * Create an instance of {@link GetLabStatusResponse }
     * 
     */
    public GetLabStatusResponse createGetLabStatusResponse() {
        return new GetLabStatusResponse();
    }

    /**
     * Create an instance of {@link LabStatus }
     * 
     */
    public LabStatus createLabStatus() {
        return new LabStatus();
    }

    /**
     * Create an instance of {@link GetEffectiveQueueLengthResponse }
     * 
     */
    public GetEffectiveQueueLengthResponse createGetEffectiveQueueLengthResponse() {
        return new GetEffectiveQueueLengthResponse();
    }

    /**
     * Create an instance of {@link WaitEstimate }
     * 
     */
    public WaitEstimate createWaitEstimate() {
        return new WaitEstimate();
    }

    /**
     * Create an instance of {@link NotifyResponse }
     * 
     */
    public NotifyResponse createNotifyResponse() {
        return new NotifyResponse();
    }

    /**
     * Create an instance of {@link SubmitResponse }
     * 
     */
    public SubmitResponse createSubmitResponse() {
        return new SubmitResponse();
    }

    /**
     * Create an instance of {@link ClientSubmissionReport }
     * 
     */
    public ClientSubmissionReport createClientSubmissionReport() {
        return new ClientSubmissionReport();
    }

    /**
     * Create an instance of {@link Cancel }
     * 
     */
    public Cancel createCancel() {
        return new Cancel();
    }

    /**
     * Create an instance of {@link CancelResponse }
     * 
     */
    public CancelResponse createCancelResponse() {
        return new CancelResponse();
    }

    /**
     * Create an instance of {@link SbAuthHeader }
     * 
     */
    public SbAuthHeader createSbAuthHeader() {
        return new SbAuthHeader();
    }

    /**
     * Create an instance of {@link RetrieveResult }
     * 
     */
    public RetrieveResult createRetrieveResult() {
        return new RetrieveResult();
    }

    /**
     * Create an instance of {@link Submit }
     * 
     */
    public Submit createSubmit() {
        return new Submit();
    }

    /**
     * Create an instance of {@link GetLabStatus }
     * 
     */
    public GetLabStatus createGetLabStatus() {
        return new GetLabStatus();
    }

    /**
     * Create an instance of {@link Notify }
     * 
     */
    public Notify createNotify() {
        return new Notify();
    }

    /**
     * Create an instance of {@link GetExperimentStatus }
     * 
     */
    public GetExperimentStatus createGetExperimentStatus() {
        return new GetExperimentStatus();
    }

    /**
     * Create an instance of {@link GetLabInfoResponse }
     * 
     */
    public GetLabInfoResponse createGetLabInfoResponse() {
        return new GetLabInfoResponse();
    }

    /**
     * Create an instance of {@link ArrayOfString }
     * 
     */
    public ArrayOfString createArrayOfString() {
        return new ArrayOfString();
    }

    /**
     * Create an instance of {@link ExperimentStatus }
     * 
     */
    public ExperimentStatus createExperimentStatus() {
        return new ExperimentStatus();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SbAuthHeader }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ilab.mit.edu", name = "sbAuthHeader")
    public JAXBElement<SbAuthHeader> createSbAuthHeader(SbAuthHeader value) {
        return new JAXBElement<SbAuthHeader>(_SbAuthHeader_QNAME, SbAuthHeader.class, null, value);
    }

}
