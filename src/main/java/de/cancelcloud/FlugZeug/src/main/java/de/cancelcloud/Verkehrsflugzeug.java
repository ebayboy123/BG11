package de.cancelcloud.FlugZeug.src.main.java.de.cancelcloud;

public abstract class Verkehrsflugzeug extends Flugzeug {
    private int anzahlFluegel = 1;        // Anzahl Flügelpaare
    private int anzPassagiere;            // Anzahl Passagiere

    public Verkehrsflugzeug(String hersteller, int maxSpeed, int anzPassagiere) {
        //wenn die Anzahl der Flügel immer 1 sein soll, brauchst du auch nicht den Parameter
        //public Verkehrsflugzeug(String hersteller, int maxSpeed, int anzPassagiere) {
        this.hersteller = hersteller;
        this.maxSpeed = maxSpeed;
        anzahlFluegel;
        this.anzPassagiere = anzPassagiere;
        //oder super(hersteller, maxSpeed, 1);
        //this.anzPassagiere = anzPassagiere;
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

    private int getAnzPassagiere() {
        return anzPassagiere;
    }

    //abstract public boolean getLooping();
    //nicht ganz richtig ....
    public boolean getLooping() {
        return false;
    }

    // more methods
    private void setAnzPassagiere(int anzPassagiere) {
        this.anzPassagiere = anzPassagiere;
    }
}