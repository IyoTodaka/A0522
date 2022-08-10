import grandChilds.Crocodile;
import grandChilds.Eagle;
import grandChilds.Eel;

public class App {
    public static void main(String[] args) throws Exception {
        Crocodile crocodile = new Crocodile();
        Eagle eagle = new Eagle();
        Eel eel = new Eel();

        for (String string : crocodile.showInfo()) {
            System.out.print(string);
            System.out.print(", ");
        }
        System.out.println();
        for (String string : eagle.showInfo()) {
            System.out.print(string);
            System.out.print(", ");
        }
        System.out.println();
        for (String string : eel.showInfo()) {
            System.out.print(string);
            System.out.print(", ");
        }
    }

}
