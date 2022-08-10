import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
import java.util.Arrays;

public class Lab3Q1 {

	public static void main(String[] args) {

        Random rnd = new Random();
        Scanner s = new Scanner(System.in);
        ArrayList<Integer> arrayList = new ArrayList<>();

        for(int i = 0; i < 10; i++){
            arrayList.add(rnd.nextInt(50) + 1);
        }

        System.out.println(arrayList);
        System.out.println("Please type the number");
        int num = s.nextInt();
		 
        if(Arrays.asList(arrayList).contains(num)){
            System.out.println(num + " is Found!");
       }
       else{
            System.out.println(num + " is not Found!");
       }
       s.close();
       System.exit(0);
       System.out.print("\033[H\033[2J");
       System.out.flush();
    }         
}
