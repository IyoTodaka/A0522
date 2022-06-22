package jave.Car;
import java.util.ArrayList;



public class Lab3Q3 {

    public static void main(String[] args){

        ArrayList<Car> carList = new ArrayList<Car>();
        ArrayList<Car> ordCarList = new ArrayList<Car>();

        carList.add(new Car("Alfa Romeo","8C",2009));
        carList.add(new Car("Tesla","Model3",2018));
        carList.add(new Car("DeLorean","DMC-12",1981));
        carList.add(new Car("Porsche","GT",2004));
        carList.add(new Car("Land Rover","Jeep",1951));
        
       // Collections.sort(carList,new CarComparator())



       // carList.sorted();

        for(int i=0; i<carList.size(); i++){
			System.out.format("%s - %s - %d\n",
                carList.get(i).getBrand(),
                carList.get(i).getModel(),
                carList.get(i).getLaunched());
		}

    }

}