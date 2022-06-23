package genericsDemo;

public class WildCard {
    
    public static void main(String[] args) {
        NumberFunctions<Integer> iObj = new NumberFunctions<>(2);
        NumberFunctions<Double> dObj = new NumberFunctions<>(-2.0);
    

        System.out.println(iObj.absEqual(dObj));
    }
}

class NumberFunctions<T extends Number>{

    T num;

    NumberFunctions(T num){
        this.num = num;
    }

    boolean absEqual(NumberFunctions<?> obj){
        if(Math.abs(num.doubleValue()) == Math.abs(obj.num.doubleValue()))
            return true;
        return false;
    }
}