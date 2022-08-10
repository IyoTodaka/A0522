package childs;

import parents.Animal;

public class Birds extends Animal {

    private String specializedOrgan;
    private String specialSkills;


    
    public Birds() {
        super();
        this.specializedOrgan = "Animals with feathers";
        this.specialSkills = "Can fly";

    }

    public Birds(String specializedOrgan, String specialSkills) {
        super();
        this.specializedOrgan = specializedOrgan;
        this.specialSkills = specialSkills;
    }

    public Birds(int height, int weight, String animalType, String bloodType, String specializedOrgan,
            String specialSkills) {
        super(height, weight, animalType, bloodType);
        this.specializedOrgan = specializedOrgan;
        this.specialSkills = specialSkills;
    }
    
    public String getSpecialOrgans() {
        return specializedOrgan;
    }
    public void setSpecialOrgans(String specializedOrgan) {
        this.specializedOrgan = specializedOrgan;
    }
    public String getSpecialSkills() {
        return specialSkills;
    }
    public void setSpecialSkills(String specialSkills) {
        this.specialSkills = specialSkills;
    }
    
}
