package jave.Car;

import java.util.Comparator;

public class CarComparator implements Comparator<Car>{
    public int compare(Car car1, Car car2){
        return car1.getLaunched() < car2.getLaunched() ? -1 : 1;
    }
    
}
