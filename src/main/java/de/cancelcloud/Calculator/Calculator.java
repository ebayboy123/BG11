package de.cancelcloud.Calculator;

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        double number1;
        double number2;
        String modifier;


        Scanner scanner = new Scanner(System.in);
        System.out.println("Zahl 1");

        String read1 = scanner.next();
        if (read1.isEmpty()) {
            number1 = 0.0;
        } else {
            if (read1.contains(",")) {
                System.out.println("That shouldn´t contain a ',' rather a '.'!");
                System.exit(1);
            }

            try {
                Double.parseDouble(read1);
            } catch (Exception e) {
                System.out.println("Your first element is not a number");
                System.exit(1);
            }
            number1 = Double.parseDouble(read1);
        }

        System.out.println("Zahl 2");
        String read2 = scanner.next();

        System.out.println("Modifier or operator");
        modifier = scanner.next();

        if (read2.isEmpty()) {
            number2 = 0.0;
        } else {
            if (read2.contains(",")) {
                System.out.println("That shouldn´t contain a ',' rather a '.'!");
                System.exit(1);
            }
            try {
                Double.parseDouble(read2);
            } catch (Exception e) {
                System.out.println("Your second element is not a number");
                System.exit(1);
            }
            number2 = Double.parseDouble(read2);
        }

        if (number2 == 0.0) {
            System.out.println("Division nicht durchführbar!");
            System.exit(0);
        }

        double addition = number1 + number2;
        double substraktion = number1 - number2;
        float diff = (float) (number1 / (float) number2);
        double multiplication = number1 * number2;
        double modulo = number1 % number2;

        System.out.println("------------------------------------------------------------");
        switch (modifier) {
            case "+" -> {
                System.out.println("Das Ergebniss ist einer addition ist: " + addition);
                break;
            }
            case "-" -> {
                System.out.println("Das Ergebniss ist einer subtraktion ist: " + substraktion);
                break;
            }
            case "*" -> {
                System.out.println("Die Multiplikation ist: " + multiplication);
                break;
            }
            case "/" -> {
                System.out.println("Die Division ist: " + diff);
                break;
            }

            case "%" -> {
                System.out.println("Der Modulo von Zahl zwei in relation auf Zahl eins ist : " + modulo);
            }

            default -> {
                System.out.println("This isnt a correct operator, please use one of: '+'; '-'; '*'; '/'; '%'");
            }
        }
        System.out.println("------------------------------------------------------------");
    }
}