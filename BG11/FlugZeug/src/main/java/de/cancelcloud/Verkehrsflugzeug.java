package de.cancelcloud;

public abstract class Verkehrsflugzeug extends Flugzeug {
    private int anzahlFluegel = 1;        // Anzahl Flügelpaare
    private int anzPassagiere;            // Anzahl Passagiere

    public Verkehrsflugzeug(String hersteller, int maxSpeed, int anzahlFluegel, int anzPassagiere) {
        this.hersteller = hersteller;
        this.maxSpeed = maxSpeed;
        this.anzahlFluegel = anzahlFluegel;
        this.anzPassagiere = anzPassagiere;
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

    abstract public boolean getLooping();

    // more methods
    private void setAnzPassagiere(int anzPassagiere) {
        this.anzPassagiere = anzPassagiere;
    }
}