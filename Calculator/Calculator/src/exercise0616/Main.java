package exercise0616;

import java.util.Scanner;

public class Main {
    
    public static void main (String[] args) throws Exception {
        

        Scanner s = new Scanner(System.in);
        
        
        while(true){
            double num1;
            double num2;
            String ope;
            

            System.out.println("Please type the first number");
            num1 = s.nextDouble();

            System.out.println("Choose an operation:\n > Type + for addition\n > Type - for subtraction\n > Type * for multiplication\n > Type / for division");
            ope = s.next();

            System.out.println("Please type the second number");
            num2 = s.nextDouble();

            if(ope.equals("/")  && num2 == 0){
                System.out.println("cannot divide by zero");
                
            }else{
                Calculator calc = new Calculator(num1,num2);
                switch (ope) {
                    case "+":
                        System.out.println(calc.add());
                        break;
                    case "-":
                        System.out.println(calc.substract());
                        break;
                    case "*":
                        System.out.println(calc.multiply());
                        break;
                    case "/":
                        System.out.println(calc.divide());
                        break;
                    
                }

            }

            
            
            System.out.println("Do you want to continue or quit?");

            if(s.next().equals("continue")){
                continue;
            }else{
                break;
            }
         }

        System.out.println("Buy!");
        s.close();
    }
}
