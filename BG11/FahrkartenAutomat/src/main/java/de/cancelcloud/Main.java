package de.cancelcloud;

import java.util.Scanner;

public class Main {

    //Variable definitions
    static boolean AZone = false;
    static boolean BZone = false;
    static boolean CZone = false;
    static int ACount = 0;
    static int BCount = 0;
    static int CCount = 0;
    int ACountTemp = 0;
    int BCountTemp = 0;
    int CCountTemp = 0;
    static double ACost = 2.50;
    static double BCost = 3.70;
    static double CCost = 5.20;
    static double moneyneeded = 0.0;
    double moneyTemp = 0.0;
    static double moneygiven = 0.0;
    static boolean card = false;
    static boolean AZoneUnderaged = false;
    static boolean BZoneUnderaged = false;
    static boolean CZoneUnderaged = false;
    static int AZoneUnderAgedCount = 0;
    static int BZoneUnderAgedCount = 0;
    static int CZoneUnderAgedCount = 0;
    static double underagedBonus = 0.5;
    static boolean temp = false;

    public static void main(String[] args) {
        final String PAP = "https://www.figma.com/file/Ms44nLn8H7FdXFgLACBdEV/FahrkartenAutomat?node-id=0%3A1";
        Scanner scanner = new Scanner(System.in);


        //Start of the program
        //print ticket types
        printTicketTypes();
        //fetch ticket types
        getTicketTypes(scanner);


        //request amount of tickets
        System.out.println("Wie viele möchten sie kaufen?");
        int amount = 0;
        try {
            amount = scanner.nextInt();
        } catch (Exception e) {
            System.out.println("Bitte geben sie eine Zahl ein!");
            //TODO(@cancel-cloud) add a way to restart the program
        }
//        System.out.println("Sie haben " + amount + " Tickets gewählt");
        //count tickets and add to variable
        countvariable(amount);
       /* try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (NumberFormatException exception) {

        }

        */

        System.out.println("Bist du über 18?");
        String answer = scanner.next();

        if (answer.contains("ja") || answer.contains("yes")) temp = true;

        //calculate money needed
        calculateMoneyNeeded();


        //set all variables to false
        resetVariables();

        //restart ticket automata
        main(args);
    }

    private static void resetVariables() {

        AZone = false;
        BZone = false;
        CZone = false;
        ACount = 0;
        BCount = 0;
        CCount = 0;
        moneyneeded = 0.0;
        moneygiven = 0.0;

        AZoneUnderaged = false;
        BZoneUnderaged = false;
        CZoneUnderaged = false;
        AZoneUnderAgedCount = 0;
        BZoneUnderAgedCount = 0;
        CZoneUnderAgedCount = 0;
        card = false;
    }

    private static void calculateMoneyNeeded() {
        if (AZone) {
            if (AZoneUnderaged) {
                moneyneeded += (ACount * ACost) - underagedBonus;
            } else {
                moneyneeded += ACount * ACost;
            }
        }
        if (BZone) {
            if (BZoneUnderaged) {
                moneyneeded += (BCount * BCost) - underagedBonus;
            } else {
                moneyneeded += BCount * BCost;
            }
        }
        if (CZone) {
            if (CZoneUnderaged) {
                moneyneeded += (CCount * CCost) - underagedBonus;
            } else {
                moneyneeded += CCount * CCost;
            }
        }
        System.out.println("Sie müssen " + moneyneeded + "€ zahlen");
    }

    private static void countvariable(int amount) {
        if (AZone) {
            ACount = amount;
        } else if (BZone) {
            BCount = amount;
        } else if (CZone) {
            CCount = amount;
        }
    }

    public static void printTicketTypes() {
        System.out.println("Für welche Zone möchten sie ein Ticket kaufen?");
        System.out.println("Möglichkeiten sind: 'A'         'B'         'C'");
        System.out.println("                   2.50€       3.70€      5.20€");
    }

    public static String getTicketTypes(Scanner scanner) {
        switch (scanner.next().toLowerCase()) {
            case "a" -> {
                System.out.println("Zone 'A' wurde gewählt");
                AZone = true;
                return "A";

            }
            case "b" -> {
                System.out.println("Zone 'B' wurde gewählt");
                BZone = true;
                return "B";

            }
            case "c" -> {
                System.out.println("Zone 'C' wurde gewählt");
                CZone = true;
                return "C";

            }

            default -> {
                System.out.println("Das scheint keine gültige Eingabe zu sein! Versuchen sie es noch einmal!");
                return "ERROR";
            }
        }
    }
}