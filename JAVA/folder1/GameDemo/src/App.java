import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        Scanner s = new Scanner(System.in);
        String flag = "0";

        while(true){
            top();
            String text1 = s.nextLine();

            if(text1.toUpperCase().equals("E")){

                livingRoom();
                break;

            }else if(text1.toUpperCase().equals("G")){

                giveUp();
                break;

            }else{
                tryAgain();
            }
        }

        
        while(true){
            String text2 = s.nextLine();

            switch (text2.toUpperCase()) {
                case "E":
                    entranceHall();
                break;

                case "B":
                    bedRoom();
                    String text6 = s.nextLine();

                    if(text6.toUpperCase().equals("L")){
                        livingRoom();

                    }else if(text6.toUpperCase().equals("C")){
                        bedRoomA();
                        livingRoom();

                    }else if(text6.toUpperCase().equals("U")){
                        bedRoomB();
                        livingRoom();

                    }else{
                        passError();
                        livingRoom();
                    }
                break;

                case "H":
                    hallway(flag);
                    String text7 = s.nextLine();

                    if(text7.toUpperCase().equals("P")){
                        picture();
                        livingRoom();

                    }else if(text7.toUpperCase().equals("W") && flag.equals("0") ){
                        wall1();
                        livingRoom();
                        flag = "1";

                    }else if(text7.toUpperCase().equals("W") && flag.equals("1") ){
                        wall2();
                        livingRoom();

                    }else{
                        passError();
                        livingRoom();
                    }
                break;

                case "G":
                    giveUp();
                    top();
                break;

                case "L":
                    livingRoom();
                break;

                case "D":
                    door();
                    String text3 = s.nextLine();

                    switch (text3.toUpperCase()) {
                        case "L":
                            livingRoom();
                        break;

                        case "RED":
                            next();
                            String text4 = s.nextLine();
                            endJudge(text3,text4);
                            top();
                        break;

                        case "WHITE":
                            next();
                            String text5 = s.nextLine();
                            endJudge(text3,text5);
                            top();
                        break;

                        default:
                            passError();
                            livingRoom();

                    }
                break;
             
                default:
                    tryAgain();
                    livingRoom();   
            }
        } 
    }

    public static void top(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[ Escape game ]\n");
        System.out.println("E : Enter");
        System.out.println("G : Give up\n");
        System.out.println("Please press [E] or [G]");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

    }

    public static void livingRoom(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Living room]\n");
        System.out.println("E : Entrance hall");
        System.out.println("H : Hallway");
        System.out.println("B : Bedroom\n");
        System.out.println("G : Give up");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void giveUp(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("You cannot leave this room forever...\nBye.");
    }

    public static void tryAgain(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("Hmm...?Please try again");
    }

    public static void entranceHall(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Entrance Hall]\n");
        System.out.println("D : Door\n");
        System.out.println("L : Living room");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

    }

    public static void bedRoom(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Bed room]\n");
        System.out.println("C : Check the bed");
        System.out.println("U : Check the under the bed\n");
        System.out.println("L : Living room");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

    }

    public static void hallway(String flag){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Hallway]\n");
        System.out.println("P : Check the picture");

        if(flag.equals("0")){
            System.out.println("W : Look through the hole in the wall.\n");
            flag = "1";

        }else{
            System.out.println("W : Look through the hole in the wall [again].\n");
        } 
        System.out.println("L : Living room");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

    }
     public static void picture(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Check the picture]\n");
        System.out.println("It's a photo of blue bird");
        System.out.println("=========");
        System.out.println("|  BLACK | ");
        System.out.println("| [Bird] | ");
        System.out.println("|        | ");
        System.out.println("=========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void wall1(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Look through the hole in the wall]\n");
        System.out.println("I saw eye to eye with someone");
        System.out.println("===========");
        System.out.println("|         | ");
        System.out.println("| <●> <●> | ");
        System.out.println("|         | ");
        System.out.println("===========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void wall2(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Look through the hole in the wall [again]]\n");
        System.out.println("My eyes met with someone,but it was a mirror.");
        System.out.println("I see a WHITE flowers behind the mirror.");
        System.out.println("===========");
        System.out.println("|   BLUE  | ");
        System.out.println("|  ☆☆☆ | ");
        System.out.println("|[Flowers]| ");
        System.out.println("===========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }


    public static void door(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Enter the first password]\n");
        System.out.print("⇒  ");

    }

    public static void next(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Enter the next password]\n");
        System.out.print("⇒  ");

    }

    public static void endJudge(String ans1, String ans2){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        
        if(ans1.toUpperCase().equals("RED") && ans2.toUpperCase().equals("RED")){
            endA();

        }else if(ans1.toUpperCase().equals("WHITE") && ans2.toUpperCase().equals("Black")){
            endB();

        }else if(ans1.toUpperCase().equals("WHITE") && ans2.toUpperCase().equals("BLUE")){
            endC();

        }
    }

    public static void endA(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[END A : Hasty]\n");
        System.out.println("[The door opened.]");
        System.out.println("[I proceeded through the door and came to a room I had seen before.]");
        System.out.println("[Returned to the same living room...]\n");
        System.out.println("==========");
        System.out.println("|        | ");
        System.out.println("| [Loop] | ");
        System.out.println("|    END | ");
        System.out.println("==========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

    }

    public static void endB(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[END B : Escape Success]\n");
        System.out.println("[The door opened.]");
        System.out.println("[I was able to return to my daily life.]");
        System.out.println("[However, I always feel like someone is watching me...]\n");
        System.out.println("==========");
        System.out.println("|         | ");
        System.out.println("| <●> <●> | ");
        System.out.println("|     END | ");
        System.out.println("==========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void endC(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[END C : Escape Success]\n");
        System.out.println("[The door opened.]");
        System.out.println("[I'm able to go outside. I feel so good.]");
        System.out.println("[I go to Tim Horton's for donuts.]\n");
        System.out.println("==========");
        System.out.println("|         | ");
        System.out.println("| [Truth] | ");
        System.out.println("|     END | ");
        System.out.println("==========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }


    public static void passError(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("The door won't open. Looks like the password is wrong...\n");
        System.out.println("Hint: 1: book color, 2: hallway");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void bedRoomA(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Check the bed]\n");
        System.out.println("There was a notepaper under the pillow.");
        System.out.println("My favorite is books, second is flowers.");
        System.out.println("========================");
        System.out.println("|   [RED]   |   [RED]  |");
        System.out.println("|-----------|----------|");
        System.out.println("| My favorite is books,|");
        System.out.println("| second is flowers.   |");
        System.out.println("========================");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

    public static void bedRoomB(){
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
        System.out.println("[Check the under the bed]\n");
        System.out.println("Under the bed was a white book with a key cover.");
        System.out.println("=========");
        System.out.println("|       | ");
        System.out.println("|[WHITE]| ");
        System.out.println("|       | ");
        System.out.println("=========");
        System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
    }

}
