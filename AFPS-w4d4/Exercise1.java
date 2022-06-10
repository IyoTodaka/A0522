import java.util.Scanner;

public class Exercise1 {

    public static void main(String[] args) {
        
        Scanner num = new Scanner(System.in);
        System.out.print("Input the start: ");
        int start = num.nextInt();

        System.out.print("Input the End: ");
        int end = num.nextInt();

        for(; start <= end;){
            System.out .print(start + " ");
            start++;
        }

        num.close();
    }
    
}
