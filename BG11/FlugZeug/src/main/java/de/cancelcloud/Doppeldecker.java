package de.cancelcloud;

public abstract class Doppeldecker extends Flugzeug {
    private int anzahlFluegel = 2;        // Anzahl Flügelpaare

    private double loopingSpeed;         // Looping Geschwindigkeit

    private boolean offenesCockpit;      // Offenes Cockpit


    public Doppeldecker(String hersteller, int maxSpeed, String immatNummer, boolean offenesCockpit) {
        this.hersteller = hersteller;
        this.maxSpeed = maxSpeed;
        this.immatNummer = immatNummer;
        this.offenesCockpit = offenesCockpit;
    }
    public Doppeldecker(String hersteller, int maxSpeed, String immatNummer, boolean offenesCockpit) {
        this.hersteller = hersteller;
        this.maxSpeed = maxSpeed;
        this.immatNummer = immatNummer;
        this.offenesCockpit = true;
    }

    public String getImmatNummer() {
        return immatNummer;
    }

    protected void setImmatNummer(String immatNummer) {
        this.immatNummer = immatNummer;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    private void getOffenesCockpit() {
        return offenesCockpit;
    }

    abstract public boolean getLooping(double loopingSpeed) {
        if (this.loopingSpeed >= 320) {
            return true;
        } else {
            return false;
        }
    }
    // I don't know how to do this, but I think it's something like this:
    /*
    private void offenesCockpit(boolean offenesCockpit) {
        this.offenesCockpit = offenesCockpit;
    }

     */

    // guessing end.
}