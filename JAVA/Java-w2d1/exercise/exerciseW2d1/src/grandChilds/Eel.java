package grandChilds;

import childs.Fish;

public class Eel extends Fish {

private String specialSkills;


public Eel() {
    super();
    this.specialSkills = "Release electric charge";
}
public Eel(String specialSkills) {
    super();
    this.specialSkills = specialSkills;
}

public Eel(String livingEnvironment, String respiratoryOrgans, String specialSkills) {
    super(livingEnvironment, respiratoryOrgans);
    this.specialSkills = specialSkills;
}

public Eel(int height, int weight, String animalType, String bloodType, String livingEnvironment,
        String respiratoryOrgans, String specialSkills) {
    super(height, weight, animalType, bloodType, livingEnvironment, respiratoryOrgans);
    this.specialSkills = specialSkills;
}

public String getSpecialSkills() {
    return specialSkills;
}

public void setSpecialSkills(String specialSkills) {
    this.specialSkills = specialSkills;
}

public String[] showInfo() {
    String[] info = {this.getAnimalType(),this.getBloodType(),getLivingEnvironment(),this.getRespiratoryOrgans() ,this.getSpecialSkills(), Integer.toString(this.getHeight()),Integer.toString(this.getWeight())};
    return info;

}

    

    
}
