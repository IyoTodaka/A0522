//import java.util.function.DoubleBinaryOperator;

public class Memo {
    
    public static void main(String[] args) {

        Bank BankPrint = new RbcBank();
        BankPrint.print();

    // byte v = -128;

    // int V = 10.128952248;
    // float X = 10.128952248f;
    // Double Y = 10.128952248d;
    // System.out.println(V);
    // System.out.println(X);

    // int a = 1;
    // float b = 10.123456f;
    // float value = a*a + 2*a*b + b*b; 

    // System.out.println("Value of the equation is " + value);

    //     float x = 4;
    //     x *= 5;
    //     x -= 6;
    //     x += 1;
    //     x /= 2;

    //     System.out.println(x);
     }

}

class Bank{
        public void print(){
            System.out.println("prining bank");
        }
}

class RbcBank extends Bank{
    public void print(){
        System.out.println("RBC bank");
    }
}