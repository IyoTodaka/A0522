package childs;

import parents.Animal;

public class Fish extends Animal{

    private String livingEnvironment;
    private String respiratoryOrgans;

    public Fish() {
        super();
        this.livingEnvironment = "Live in water";
        this.respiratoryOrgans = "Has gills";
    }

    
    public Fish(String livingEnvironment, String respiratoryOrgans) {
        super();
        this.livingEnvironment = livingEnvironment;
        this.respiratoryOrgans = respiratoryOrgans;
    }


    public Fish(int height, int weight, String animalType, String bloodType, String livingEnvironment,
            String respiratoryOrgans) {
        super(height, weight, animalType, bloodType);
        this.livingEnvironment = livingEnvironment;
        this.respiratoryOrgans = respiratoryOrgans;
    }


    public String getLivingEnvironment() {
        return livingEnvironment;
    }
    public void setLivingEnvironment(String livingEnvironment) {
        this.livingEnvironment = livingEnvironment;
    }
    public String getRespiratoryOrgans() {
        return respiratoryOrgans;
    }
    public void setRespiratoryOrgans(String respiratoryOrgans) {
        this.respiratoryOrgans = respiratoryOrgans;
    }


   
    

    
    
}
