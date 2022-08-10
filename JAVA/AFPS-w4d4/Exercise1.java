import java.util.Scanner;

public class Exercise1 {

    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);
        System.out.print("Input the start: ");
        int start = s.nextInt();

        System.out.print("Input the End: ");
        int end = s.nextInt();

        for(; start <= end;){
            System.out .print(start + " ");
            start++;
        }

        s.close();
    }
    
}
