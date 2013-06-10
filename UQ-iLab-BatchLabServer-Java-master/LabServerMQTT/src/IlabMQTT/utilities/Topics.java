/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package IlabMQTT.utilities;

/**
 *
 * @author ch
 */
public class Topics {
    
     public static final String ValidationReport="ValidationReport";
     public static final String ExperimentSpecification="ExperimentSpecification";
     
     public static final String Status="Status";
     
     public static final String EstExecutionTime="EstExecutionTime";
     public static final String ActExecutionTime="ActExecutionTime";
    //movement topics 
     public static final String SetAbsorberLocation="Select_absorber";
     public static final String SetSourceLocation="Select_source";
     public static final String SetTubeDistance="Set_distance";
     public static final String CaptureCounts = "Capture_counts";
     //labExperimentInfo topic
     public static final String LabExperimentInfo = "LabExperimentInfo";
     /*
    public static final String ReturnSource = "Return_source";
    public static final String ReturnAbsorber = "Return_absorber";
    public static final String ReturnTube = "Return_tube";
    */

     public static final String RemainingTime="RemainingTime";  
     public static final String RandomNumber="RandomNumber";
 
     //main topics
     public static final String iLabTempleSimulation="ilab/radiation-1/template/Simulation/";
     public static final String iLabTempleEquipment="ilab/radiation-1/template/Equipment/";
     public static final String iLabRadioactivitySimulationRaw="ilab/radiation-1/Radioactivity/Simulation/Raw/";
     public static final String iLabRadioactivitySimulationAnimation="ilab/radiation-1/Radioactivity/Simulation/Animation/";
     //ilab/radiation-1/Radioactivity/Simulation/Raw/#
     //ilab/radiation-1/Radioactivity/Simulation/Animation/#
}
