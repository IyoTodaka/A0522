import java.util.Scanner;

public class Exercise2 {
    
    public static void main(String[] args) {
        
        Scanner num = new Scanner(System.in);
        System.out.print("Input the N: ");
        int n = num.nextInt();
        int sum = 0;
        
        for(int i = 1; i <= n; i++){
            sum = sum + i;
        }

        System.out.printf("The sum of 1 to %d is %d", n ,sum);

        num.close();
    }
}
