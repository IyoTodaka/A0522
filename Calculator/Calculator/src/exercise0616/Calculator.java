package exercise0616;

public class Calculator {

    private double num1;
    private double num2;


    public Calculator(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }


 
    double add(){
        return num1+num2;
    }
    double substract(){
        return num1-num2;
    }
    double multiply(){
        return num1*num2;
    }
    double divide(){
        return num1/num2;
    }

}
