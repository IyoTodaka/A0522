import java.util.Scanner;

public class Exercise2 {
    
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);
        System.out.print("Input the N: ");
        int n = s.nextInt();
        int sum = (n+1)*n/2;
        

        System.out.printf("The sum of 1 to %d is %d", n ,sum);

        s.close();
    }
}
