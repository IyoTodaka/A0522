import java.util.Scanner;
import java.util.Arrays;

public class Exercise4 {
    
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);
        
        System.out.print("How many integers will be added? ");
        int n = s.nextInt();

        int arr[] = new int[n];

        for(int i = 0; i <= n-1; i++){
            System.out.print("Enter an integer: ");
            arr[i] = s.nextInt();
        }

        int sum = Arrays.stream(arr).sum();
        System.out.print("The sum is :" + sum);

        s.close();
    }
}
