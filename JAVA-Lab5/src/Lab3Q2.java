import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

public class Lab3Q2 {

	public static void main(String[] args) {
		
        Random rnd = new Random();
        ArrayList<Integer> arrayList = new ArrayList<>();
        

        for(int i = 0; i < 10; i++){
            arrayList.add(rnd.nextInt(50) + 1);
        }

        ArrayList<Integer> copyList = new ArrayList<>(arrayList);
        arrayList.set(arrayList.size()-1, -5);


        System.out.println("\narrayList:");
        for(int i: arrayList){
            System.out.print(i + " ");
        }

        System.out.println("\ncopyList:");
        for(int i: copyList){
            System.out.print(i + " ");

        }
	}

}