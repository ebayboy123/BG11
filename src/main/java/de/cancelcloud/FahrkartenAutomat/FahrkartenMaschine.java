package de.cancelcloud.FahrkartenAutomat;

import java.util.Scanner;


public class FahrkartenMaschine {
    //This is the main class of the project
    //and will run independently of the Main class
    //the user will be asked for input, which zone he wants to buy a ticket for
    //and how many tickets he wants to buy
    //the program will then calculate the price and ask for the money
    //if the user has enough money, the program will print the ticket
    //if the user has not enough money, the program will ask for more money
    //if the user has more money, the program will print the ticket and give back the change


    //variable definitions
    static Scanner scanner = new Scanner(System.in);


    //costs
    static double ticketMoney = 0.0;
    static double ticketDone = 0.0;

    //temp variables
    static int ticketCountTemp = 0;
    static double moneyTemp = 0.0;

    static String ticketZoneTemp = "";
    static boolean underagedTemp = false;
    static boolean cardTemp = false;


    public static void main(String[] args) {
//Start of the program
        System.out.println("--------------------------------");
        System.out.println("Herzlich Willkommen bei der Bahn!");
        System.out.println("--------------------------------");

        //print ticket types
        printTicketTypes();
        //fetch user input and display selected one
        getTicketTypes(scanner);

        processZone(scanner);
        calculateToBill();
        buyMore();
    }

    private static void printTicketTypes() {
        //print ticket types
        System.out.println("------Fahrkarten Automat-----");
        System.out.println("Bitte wählen sie eine Fahrkarte für die gewünschte Zone aus:");
        System.out.println("A: 2,50€");
        System.out.println("B: 3,70€");
        System.out.println("C: 5,20€");
    }

    private static void getTicketTypes(Scanner scanner) {
        //fetch ticket types
        String ticketType = scanner.nextLine().toLowerCase();
        switch (ticketType) {
            case "a" -> {
                ticketZoneTemp = "a";
                System.out.println("Sie haben die Zone A gewählt");
            }
            case "b" -> {
                ticketZoneTemp = "b";
                System.out.println("Sie haben die Zone B gewählt");
            }
            case "c" -> {
                ticketZoneTemp = "c";
                System.out.println("Sie haben die Zone C gewählt");
            }
            default -> {
                System.out.println("Bitte geben sie eine gültige Zone ein!");
                System.out.println("Es gibt nur die Zonen A, B und C");
                getTicketTypes(scanner);
            }
        }
    }

    private static void processZone(Scanner scanner) {
        //process the entered zone
        //ask for amount of tickets
        System.out.println("Wie viele möchten sie kaufen?");
        String read = scanner.nextLine();
        try {
            ticketCountTemp = Integer.parseInt(read);
            askForAge(scanner);
        } catch (Exception e) {
            System.out.println("Bitte geben sie eine Zahl ein!");
            processZone(scanner);
        }

    }

    private static void askForAge(Scanner scanner) {

        //ask for age
        System.out.println("Sind sie unter 18?");
        String underagedRead = scanner.nextLine().toLowerCase();
        switch (underagedRead) {
            case "ja" -> {
                underagedTemp = true;

                System.out.println("Sie bekommen 50% Rabatt");
                askForCard(scanner);
            }
            case "nein" -> {
                underagedTemp = false;
                System.out.println("Danke für ihre Ehrlichkeit");
                askForCard(scanner);
            }
            default -> {
                System.out.println("Bitte geben sie 'ja' oder 'nein' ein!");
                askForAge(scanner);
            }
        }
    }

    private static void askForCard(Scanner scanner) {


        //ask for card
        System.out.println("Haben sie eine BahnCard?");
        String answerRead = scanner.nextLine().toLowerCase();
        switch (answerRead) {
            case "ja" -> {
                cardTemp = true;
                System.out.println("Sie bekommen 25% Rabatt");
            }
            case "nein" -> {
                cardTemp = false;
                System.out.println("Danke für ihre Ehrlichkeit");
            }
            default -> {
                System.out.println("Bitte geben sie 'ja' oder 'nein' ein!");
                askForCard(scanner);
            }
        }
    }


    private static void calculateToBill() {
        //calculate price

        switch (ticketZoneTemp) {
            case "a" -> moneyTemp = 2.50;
            case "b" -> moneyTemp = 3.70;
            case "c" -> moneyTemp = 5.20;
        }
        if (underagedTemp) {
            moneyTemp = moneyTemp * 0.5;
        }
        if (cardTemp) {
            moneyTemp = moneyTemp * 0.75;
        }
        moneyTemp = moneyTemp * ticketCountTemp;
        ticketMoney = ticketMoney + moneyTemp;
        moneyTemp = 0.0;
        ticketCountTemp = 0;
        //System.out.println("Sie müssen " + ticketMoney + "€ zahlen");

    }


    private static void buyMore() {
        //ask if the user wants to buy more tickets
        System.out.println("Möchten sie noch mehr Tickets kaufen?");
        //print current bill

        String answerRead = scanner.nextLine().toLowerCase();
        switch (answerRead) {
            case "ja" -> main(null);

            case "nein" -> askForMoney();

            default -> {
                System.out.println("Bitte geben sie 'ja' oder 'nein' ein!");
                buyMore();
            }
        }
    }


    private static void askForMoney() {
        //ask for money

        System.out.println("Bitte werfen sie das Geld ein");
        System.out.println("Sie müssen " + (ticketMoney - ticketDone) + "€ noch begleichen");
        System.out.println("Tipp: Wenn sie kleiner als 1€ einwerfen wollen, so müssen sie für 10 Cent: 0.10 eingeben");
        try {
            moneyTemp = scanner.nextDouble();
            //check if the user has enough money or ask for more money
            calculateChange();
        } catch (Exception e) {
            System.out.println("Bitte geben sie eine Zahl ein!");
            askForMoney();
        }
        System.out.println("--------------------------------");
    }

    private static void calculateChange() {
        //calculate bill and change
        ticketDone = ticketDone + moneyTemp;
        double change = ticketDone - ticketMoney;
        System.out.println("--------------------------------");
        System.out.println("Sie haben " + moneyTemp + "€ eingeworfen");
        if (change < 0) {
            System.out.println("Sie haben nicht genug Geld eingeworfen!");
            System.out.println("Sie müssen noch " + (change * -1) + "€ zahlen");
            askForMoney();
        } else if (change == 0) {
            System.out.println("Sie haben genug Geld!");
        } else {
            System.out.println("Sie haben genug Geld!");
            System.out.println("Ihr Wechselgeld beträgt " + change + "€");
            System.out.println("Vielen Dank für ihren Einkauf!");


            //Reset all variables
            ticketMoney = 0.0;
            ticketDone = 0.0;
            ticketCountTemp = 0;
            moneyTemp = 0.0;
            ticketZoneTemp = "";
            underagedTemp = false;
            cardTemp = false;

            main(null);
        }
    }
}