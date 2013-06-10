/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package uq.ilabs.library.labequipment.devices;

import java.util.logging.Level;
import uq.ilabs.library.lab.utilities.Delay;
import uq.ilabs.library.lab.utilities.Logfile;
import uq.ilabs.library.labequipment.engine.LabEquipmentConfiguration;

//MQTT package
import IlabMQTT.MQTT.MQTTClient;
import IlabMQTT.utilities.*;
import IlabMQTT.radioactivity.simulation.utilities.*;
import java.io.IOException;
import java.util.logging.Logger;
/**
 *
 * @author uqlpayne
 */
public class DeviceFlexMotionSimulation extends DeviceFlexMotion {

    //<editor-fold defaultstate="collapsed" desc="Constants">
    private static final String STR_ClassName = DeviceFlexMotionSimulation.class.getName();
    private static final Level logLevel = Level.FINER;
    //topics
    private static final String Set_distance="Set distance";
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="Variables">
    private int currentTubeDistance;
    private char currentSourceLocation;
    private char currentAbsorberLocation;
    
     //MQTT properity
    private String Topic_SetTubeDistance=this.topis.iLabRadioactivitySimulationRaw+this.topis.SetTubeDistance;
    private MQTTClient sampleClient;
    private int qos=2;
    private MessageBroker ms;
    private Topics topis;
    private JSonStatus status;
    private MQTTConsts MQTTconsts;
    private StatusNames StatusName;
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="Properties">
    private boolean delaysSimulated;

    public boolean isDelaysSimulated() {
        return delaysSimulated;
    }

    public void setDelaysSimulated(boolean delaysSimulated) {
        this.delaysSimulated = delaysSimulated;
    }
    //</editor-fold>

    public DeviceFlexMotionSimulation(LabEquipmentConfiguration labEquipmentConfiguration) throws Exception {
        super(labEquipmentConfiguration);

        final String methodName = "DeviceFlexMotionSimulation";
        Logfile.WriteCalled(Level.CONFIG, STR_ClassName, methodName);

        try {
            /*
             * Initialise properties
             */
            this.delaysSimulated = true;
            
            //parameter generation
            this.MQTTconsts=new MQTTConsts();
            this. ms=new MessageBroker();
            this.topis=new Topics();
            this.StatusName=new StatusNames();
            /*mqtt creation*/
           
		String broker = ms.autum;
		int port = 1883;
                String url = "tcp://"+broker+":"+port;
	        String clientId = "DFMJavaV3_;";
                 boolean quietMode=false;                 
                 sampleClient = new MQTTClient(url,clientId,quietMode);

        } catch (Exception ex) {
            Logfile.WriteError(ex.toString());
            throw ex;
        }

        Logfile.WriteCompleted(Level.CONFIG, STR_ClassName, methodName);
    }

    @Override
    public boolean Initialise() {
        final String methodName = "Initialise";
        Logfile.WriteCalled(logLevel, STR_ClassName, methodName);

        boolean success = false;

        try {
            /*
             * Initialise local variables and properties
             */
            this.currentSourceLocation = this.sourceHomeLocation;
            this.currentAbsorberLocation = this.absorberHomeLocation;
            this.currentTubeDistance = this.tubeHomeDistance;

            success = true;
        } catch (Exception ex) {
            Logfile.WriteError(ex.toString());
        }

        Logfile.WriteCompleted(logLevel, STR_ClassName, methodName,
                String.format(STRLOG_Success_arg, success));

        return success;
    }

    /**
     * Get the time in seconds it takes to move the tube from one position to another.
     *
     * @param startDistance The distance in millimeters for the start of the move.
     * @param endDistance The distance in millimeters for the end of the move.
     * @return
     */
    @Override
    public double GetTubeMoveTime(int startDistance, int endDistance) {
        double seconds;

        /*
         * Get the absolute distance
         */
        int distance = endDistance - startDistance;
        if (distance < 0) {
            distance = -distance;
        }

        /*
         * Tube move rate is in seconds per millimetre
         */
      
        seconds = (distance * this.tubeMoveRate);
         System.out.println("second: "+seconds+" distance: "+distance+" rate: ");
        return seconds;
    }

    /**
     *
     * @param toLocation
     * @return
     */
    @Override
    protected double GetSourceSelectTime(char toLocation) {
        double seconds = 0.0;

        int index = toLocation - this.sourceFirstLocation;
        if (index >= 0 && index < this.sourceSelectTimes.length) {
            seconds = this.sourceSelectTimes[index];
        }

        return seconds;
    }

    /**
     *
     * @param fromLocation
     * @return
     */
    @Override
    protected double GetSourceReturnTime(char fromLocation) {
        double seconds = 0.0;

        int index = fromLocation - this.sourceFirstLocation;
        if (index >= 0 && index < this.sourceReturnTimes.length) {
            seconds = this.sourceReturnTimes[index];
        }

        return seconds;
    }

    /**
     *
     * @param toLocation
     * @return
     */
    @Override
    protected double GetAbsorberSelectTime(char toLocation) {
        double seconds = 0.0;

        if (this.absorbersPresent == true) {
            int index = toLocation - this.absorberFirstLocation;
            if (index >= 0 && index < this.absorberSelectTimes.length) {
                seconds = this.absorberSelectTimes[index];
            }
        }

        return seconds;
    }

    /**
     *
     * @param fromLocation
     * @return
     */
    @Override
    protected double GetAbsorberReturnTime(char fromLocation) {
        double seconds = 0.0;

        if (this.absorbersPresent == true) {
            int index = fromLocation - this.absorberFirstLocation;
            if (index >= 0 && index < this.absorberReturnTimes.length) {
                seconds = this.absorberReturnTimes[index];
            }
        }

        return seconds;
    }

    /**
     *
     * @param targetDistance
     * @return boolean
     */
    @Override
    public boolean SetTubeDistance(int distance) {
        final String methodName = "SetTubeDistance";
        Logfile.WriteCalled(logLevel, STR_ClassName, methodName,
                String.format(STRLOG_Distance_arg, distance));
        
       System.out.println(methodName+" called"+",distance: "+distance+ ",currentTubeDistance: "+this.currentTubeDistance+"TubeRate: "+this.tubeMoveRate+"aaa");

         JSonSetTubeDistance JSonSetTubeDistance=new JSonSetTubeDistance(StatusName.SetTube,this.currentTubeDistance, distance);
         JSonSetTubeDistance.SetMoveRate(this.tubeMoveRate);
        /*
         * Check if simulating delays
         */  
        if (this.delaysSimulated == true) {
            int seconds = (int) this.GetTubeMoveTime(this.currentTubeDistance, distance);
            JSonSetTubeDistance.SetSecondDelay(seconds);
         /*   for (int i = 0; i < seconds; i++) {
               
                    Delay.MilliSeconds(1000);
                     JSonSetTubeDistance.SetSecondSpent(i+1);
                     
              /* publish  SetTubeDistance message      
                try {
                    System.out.println("topic: "+Topic_SetTubeDistance);
                    this.sampleClient.publish(Topic_SetTubeDistance, qos, JSonSetTubeDistance.getJsonString().getBytes());
                } catch (Exception ex) {
                    Logger.getLogger(DeviceFlexMotionSimulation.class.getName()).log(Level.SEVERE, null, ex);
                }
                 System.out.println("T");
            } */
            
              for (int i = 0; i < seconds*2; i++) {
               
                    Delay.MilliSeconds(500);
                     JSonSetTubeDistance.SetSecondSpent((((double)i/2+0.5)));
                     
              // publish  SetTubeDistance message      
                try {
                    System.out.println("topic: "+Topic_SetTubeDistance);
                    this.sampleClient.publish(Topic_SetTubeDistance, qos, JSonSetTubeDistance.getJsonString().getBytes());
                } catch (Exception ex) {
                    Logger.getLogger(DeviceFlexMotionSimulation.class.getName()).log(Level.SEVERE, null, ex);
                }
                 System.out.println("Tnew");
            }
            
        }

        this.currentTubeDistance = distance;

        Logfile.WriteCompleted(logLevel, STR_ClassName, methodName);

        return true;
    }

    /**
     *
     * @param location
     * @return boolean
     */
    @Override
    public boolean SetAbsorberLocation(char location) {
        
        
        final String methodName = "SetAbsorberLocation";
        System.out.println(methodName+" called");
        Logfile.WriteCalled(logLevel, STR_ClassName, methodName,
                String.format(STRLOG_Location_arg, location));
    System.out.println(methodName+" called"+",location: "+location+ ",homeLocaton: "+this.absorberHomeLocation);
        if (this.absorbersPresent == true) {
            /*
             * Check if simulating delays
             */
            if (this.delaysSimulated == true) {
                /*
                 * Determine if selecting or returning absorber
                 */
                int seconds;
                if (location != this.absorberHomeLocation) {
                    seconds = (int) this.GetAbsorberSelectTime(location);
                } else {
                    seconds = (int) this.GetAbsorberReturnTime(this.currentAbsorberLocation);
                }

                for (int i = 0; i < seconds; i++) {
                    Delay.MilliSeconds(1000);
                    System.out.println("A");
                }
            }

            this.currentAbsorberLocation = location;
        }

        Logfile.WriteCompleted(logLevel, STR_ClassName, methodName);

        return true;
    }

    /**
     *
     * @param location
     * @return boolean
     */
    @Override
    public boolean SetSourceLocation(char location) {
        final String methodName = "SetSourceLocation";
        Logfile.WriteCalled(logLevel, STR_ClassName, methodName,
                String.format(STRLOG_Location_arg, location));
        System.out.println(methodName+" called"+",location: "+location+ ",homeLocaton: "+this.sourceHomeLocation);
        /*
         * Check if simulating delays
         */
        if (this.delaysSimulated == true) {
            /*
             * Determine if selecting or returning source
             */
            int seconds;
            if (location != this.sourceHomeLocation) {
                seconds = (int) this.GetSourceSelectTime(location);
            } else {
                seconds = (int) this.GetSourceReturnTime(this.currentSourceLocation);
            }

            for (int i = 0; i < seconds; i++) {
                Delay.MilliSeconds(1000);
                System.out.println("S");
            }
        }

        this.currentSourceLocation = location;

        Logfile.WriteCompleted(logLevel, STR_ClassName, methodName);

        return true;
    }
}
