package de.cancelcloud;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double number1 = 0;
        double number2 = 0;


        Scanner scanner = new Scanner(System.in);
        System.out.println("Zahl 1");

        String read1 = scanner.next();
        if (read1.isEmpty()) {
            number1 = 0.0;
        } else {
            number1 = Double.parseDouble(read1);
        }

        System.out.println("Zahl 2");
        String read2 = scanner.next();

        if (read2.isEmpty()) {
            number2 = 0.0;
        } else {
            number2 = Double.parseDouble(read2);
        }

        if (number2 == 0.0) {
            System.out.println("Division nicht durchführbar!");
            System.exit(0);
        }
        System.out.println(number1);
        System.out.println(number2);
        double addition = number1 + number2;
        double substraktion = number1 - number2;
        float diff = (float) (number1 / (float) number2);
        double multiplication = number1 * number2;

        System.out.println("------------------------------------------------------------");
        System.out.println("Das Ergebniss ist einer addition ist: " + addition);
        System.out.println("Das Ergebniss ist einer subtraktion ist: " + substraktion);
        System.out.println("Die Division ist: " + diff);
        System.out.println("Die Multiplikation ist: " + multiplication);
        System.out.println("------------------------------------------------------------");

    }
}