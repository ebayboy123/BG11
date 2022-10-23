package org.example;

import java.util.Scanner;

public class Infotainment {
    public static void main(String[] args) {
        double tankinhalt;
        double verbrauchProEins;
        double strecke;
        double benzinpreis;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Wie viel passt in deinen Tank?");
        String read1 = scanner.next();
        //tankinhalt = scanner.nextDouble();


        System.out.println("Wie viel ist dein Verbrauch pro 100km?");
        String read2 = scanner.next();
        //verbrauchProEins = Double.parseDouble(scanner.next()) / 100;


        System.out.println("Wie lange ist die Strecke?");
        String read3 = scanner.next();
        //strecke = scanner.nextDouble();


        System.out.println("Wie viel kostet ein Liter?");
        String read4 = scanner.next();
        //benzinpreis = Double.parseDouble(scanner.next());

        scanner.close();

        if (read1.contains("-") || read2.contains("-") || read3.contains("-") || read4.contains("-")) {
            System.out.println("Du hast einen negativen Wert angegeben!");
            System.exit(0);
        } else {
            tankinhalt = Double.parseDouble(read1);
            verbrauchProEins = Double.parseDouble(read2);
            strecke = Double.parseDouble(read3);
            benzinpreis = Double.parseDouble(read4);

            double literConsumed = strecke * verbrauchProEins;

            if (tankinhalt <= 0) {
                System.out.println("Ich glaube du solltest tanken!");
                System.exit(0);
            }


            if (literConsumed >= 0) {
                System.out.println("\nDu hast " + (Math.round(literConsumed * 100.0) / 100.0) + "l verbraucht!");
                System.out.println("Dies kostet dich: " + (Math.round((literConsumed * benzinpreis) * 100.0) / 100.0) + "€\n ");
            }
        }
    }
}