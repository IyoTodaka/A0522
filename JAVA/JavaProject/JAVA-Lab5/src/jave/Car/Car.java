package jave.Car;

public class Car {

    private String brand;
    private String model;
    private int launched;

    
    public Car() {
        brand = "";
        model = "";
        launched = 0;
    }

    public Car(String brand, String model, int launched) {
        this.brand = brand;
        this.model = model;
        this.launched = launched;
    }

    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public int getLaunched() {
        return launched;
    }
    public void setLaunched(int launched) {
        this.launched = launched;
    }

    
}
