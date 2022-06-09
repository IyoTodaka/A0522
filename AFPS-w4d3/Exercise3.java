import java.util.Scanner;


public class Exercise3 {
    public static void main(String[] args){

        int inDAta;
        Scanner d = new Scanner(System.in);

        System.out.print("Input a number: ");
        inDAta = d.nextInt();

        for(int i = 1; i <= 10; i++){
            System.out.print(inDAta + " x " + i + " = " + inDAta*i + "  ");

        }
        d.close();
    }
}
