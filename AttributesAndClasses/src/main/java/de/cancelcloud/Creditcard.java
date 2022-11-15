package de.cancelcloud;

public class Creditcard {

    //attributes of an creditcard
    int secretNumeber;
    String type;
    double availableMoney = 2000.0;


    public Creditcard() {

    }

    //methods of an creditcard
    public void viewSecretNumber() {
        System.out.println("The secret number is: " + secretNumeber);
    }

    public void viewType() {
        System.out.println("The type of the creditcard is: " + type);
    }

    public void viewAvailableMoney() {
        System.out.println("The available money is: " + availableMoney);
    }

    public void doMoney(int changeMoney) {
        if (changeMoney == 0) {
            System.out.println(availableMoney);
        } else {
            availableMoney = availableMoney + changeMoney;
        }
    }
}
