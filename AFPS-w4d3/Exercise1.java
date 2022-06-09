import java.util.Scanner;


public class Exercise1{

    public static void main(String[] args){

        double inDAta;
        Scanner s = new Scanner(System.in);

        System.out.print("Input the radius: ");
        inDAta = s.nextDouble();
        inDAta =  inDAta * inDAta * Math.PI;

        System.out.print("The radius is: "+ inDAta);

        s.close();
    }
}