package grandChilds;

import childs.Birds;

public class Eagle extends Birds {

    public Eagle() {
        super();
    }

    public Eagle(String specializedOrgan, String specialSkills) {
        super(specializedOrgan, specialSkills);
    }

    public Eagle(int height, int weight, String animalType, String bloodType, String specializedOrgan,
            String specialSkills) {
        super(height, weight, animalType, bloodType, specializedOrgan, specialSkills);
    }

    public String[] showInfo() {
        String[] info = {this.getAnimalType(),this.getBloodType(),getSpecialOrgans(),this.getSpecialSkills(), Integer.toString(this.getHeight()),Integer.toString(this.getWeight())};
        return info;

    }
    
}
