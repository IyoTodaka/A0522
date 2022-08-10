package grandChilds;

import childs.Reptile;

public class Crocodile extends Reptile {


    public Crocodile() {
        super("Hard-shelled eggs");

    }

    public Crocodile(String skinType, String bone, String eggType) {
        super(skinType, bone, eggType);
    }

    public Crocodile(int height, int weight, String animalType, String bloodType, String skinType, String bone,
            String eggType) {
        super(height, weight, animalType, bloodType, skinType, bone, eggType);
    }

    public String[] showInfo() {
        String[] info = {this.getAnimalType(),this.getBloodType(),getBone(),this.getEggType(),this.getSkinType(), Integer.toString(this.getHeight()),Integer.toString(this.getWeight())};
        return info;

    }
    
    
}
