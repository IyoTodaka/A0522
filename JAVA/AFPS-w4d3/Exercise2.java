import java.util.Scanner;


public class Exercise2{

    public static void main(String[] args){

        
        Scanner s = new Scanner(System.in);

        System.out.print("Input the cents: ");

        int inData = s.nextInt();
        int cents = inData % 100;
        int dollar = (int)inData / 100;

        System.out.print("The value is "+ dollar +" dollars and "+cents+" cents.");

        s.close();
    }
}