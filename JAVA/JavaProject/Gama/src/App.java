import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {

        Scanner s = new Scanner(System.in);
        Room currentRoom = new Room();
         
        while(true){
            if(currentRoom.isMovedRoom()){
                clrscr();
                currentRoom.printRoom();
            } 
            
            currentRoom.doCmd(s.nextLine().toUpperCase());
            if(currentRoom.isClearFlag() ){
                break;
            }
        }
        s.close();
    }
    public static void clrscr(){
		//Clears Screen in java
		try {
			if (System.getProperty("os.name").contains("Windows"))
				new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
			else
				Runtime.getRuntime().exec("clear");
				System.out.print("\033\143");
		} catch (IOException | InterruptedException ex) {}
	}
}

class Room{
    private char roomKey;
    private String roomName;
    private boolean flag;
    private boolean clearFlag;
    private boolean movedRoom;
    private String frame;
    private List<String> enableCommands;
    Scanner s = new Scanner(System.in);

    
    public Room() {
        moveRoom('T');
        this.flag = false;
        this.clearFlag = false;
        this.frame = "=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=";
    }

    public boolean isMovedRoom() {
        return movedRoom;
    }


    public boolean isClearFlag() {
        return clearFlag;
    }

    public void setClearFlag(boolean clearFlag) {
        this.clearFlag = clearFlag;
    }

    public char getRoomKey() {
        return roomKey;
    }

    public void setRoomKey(char roomKey) {
        this.roomKey = roomKey;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public void printRoom(){
        String [] cmds = getCommands();
        System.out.println(frame);
        System.out.println("[" + this.roomName +"]\n");
        for (String string : cmds) {
            System.out.println(string);
        }
        System.out.println(frame);
        
    }
    public void doCmd(String cmd){
 
        if(enableCommands.contains(cmd)){

            switch(cmd){
                case "E":
                    if(roomKey == 'T'){ 
                        moveRoom('L'); 
                        break;
                    }else if(roomKey =='L'){
                        moveRoom('E'); 
                        break;
                    }
                case "L":
                    moveRoom('L'); 
                    break;
                case "B":
                    moveRoom('B');
                    break;
                case "H":
                    moveRoom('H');
                    break;
                case "W":
                    this.movedRoom = false;
                    commandW();
                    break;
                case "G":
                    this.movedRoom = false;
                    this.clearFlag = true;
                    System.out.println(frame + "\nYou cannot leave this room forever...\nBye.");
                    break;
                case "D":
                    this.movedRoom = false;
                    System.out.print(frame + "\nPlease enter the [first] password.\n⇒  ");
                    String pass1 = s.nextLine();
                    System.out.print(frame + "\nPlease enter the [second] password.\n⇒  ");
                    String pass2 = s.nextLine();
                    endJudge(pass1,pass2);
                    break;

                case "C":
                    this.movedRoom = false;
                    System.out.println(frame);
                    System.out.println("[Check the bed]\n");
                    System.out.println("There was a notepaper under the pillow.");
                    System.out.println("========================");
                    System.out.println("|   [RED]   |   [RED]  |");
                    System.out.println("|-----------|----------|");
                    System.out.println("| My favorite is books,|");
                    System.out.println("| second is flowers.   |");
                    System.out.println("========================");
                    break;

                case "U":
                    this.movedRoom = false;
                    System.out.println(frame);
                    System.out.println("[Check the under the bed]\n");
                    System.out.println("Under the bed was a white book with a key cover.");
                    System.out.println("=========");
                    System.out.println("|       | ");
                    System.out.println("|[WHITE]| ");
                    System.out.println("|       | ");
                    System.out.println("=========");
                    break;

                case "P":
                    this.movedRoom = false;
                    System.out.println("[Check the picture]\n");
                    System.out.println("It's a photo of blue bird");
                    System.out.println("=========");
                    System.out.println("|  BLACK | ");
                    System.out.println("| [Bird] | ");
                    System.out.println("|        | ");
                    System.out.println("=========");
                    break;

                default:
                this.movedRoom = false;
                    System.out.println(frame + "\nHmm...?Please try again");
            
                }      
            }else{
                this.movedRoom = false;
                System.out.println(frame + "\nHmm...?Please try again");
            }
        }

    private String[] getCommands(){
        String[] cmds;

        switch(roomKey){
            case 'T':
                cmds = new String[] {"E : Enter", "G : Give up\n\n","Please press [E] or [G]"};
                break;
            case 'L':
                cmds = new String[] {"E : Entrance hall", "H : Hallway", "B : Bedroom\n","G : Give up"};
                break;
            case 'E':
                cmds = new String[] {"D : Door", "H : Hallway", "B : Bedroom\n","L : Living room"};
                break;

            case 'B':
                cmds = new String[] {"C : Check the bed", "U : Check the under the bed\n","L : Living room"};
                break;  

            case 'H':
                if(flag){
                    cmds = new String[] {"P : Check the picture", "W : Look through the hole in the wall [☆ again].\n","L : Living room"};

                }else{
                    cmds = new String[] {"P : Check the picture", "W : Look through the hole in the wall.\n","L : Living room"};
  
                }
                break;

            default:
                cmds = new String[] {"error \n"};
        }
        return cmds;

    }
    private void commandW(){
        if(flag){
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
            System.out.println("[Look through the hole in the wall [again]]\n");
            System.out.println("My eyes met with someone,but it was a mirror.");
            System.out.println("I see a WHITE flowers behind the mirror.");
            System.out.println("===========");
            System.out.println("|   BLUE  | ");
            System.out.println("|   ☆☆☆   | ");
            System.out.println("|[Flowers]| ");
            System.out.println("===========");
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

        }else{
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
            System.out.println("[Look through the hole in the wall]\n");  
            System.out.println("I saw eye to eye with someone");
            System.out.println("===========");
            System.out.println("|         | ");
            System.out.println("| <●> <●> | ");
            System.out.println("|         | ");
            System.out.println("===========");
            System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
            flag = true;
        }
    }
    private void endJudge(String ans1, String ans2){
        System.out.println(frame);
        
        if(ans1.toUpperCase().equals("RED") && ans2.toUpperCase().equals("RED")){
            endA();
            this.clearFlag = true;

        }else if(ans1.toUpperCase().equals("WHITE") && ans2.toUpperCase().equals("BLACK")){
            endB();
            this.clearFlag = true;

        }else if(ans1.toUpperCase().equals("WHITE") && ans2.toUpperCase().equals("BLUE")){
            endC();
            this.clearFlag = true;

        }else{
            System.out.println("\nThe door wasn't opened. Looks like the password is wrong...\n");
            System.out.println("Hint: 1: book color, 2: hallway\n");

        }
    }
    private void endA(){
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

    private void endB(){
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

    private void endC(){
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
    
    private void moveRoom(char key){

        this.enableCommands = new ArrayList<String>(); 
        this.roomKey = key;
        this.movedRoom = true;

        switch (key) {
            case 'T':
                this.roomName = " Escape game ";
                enableCommands.addAll(Arrays.asList("E","G"));
                break;

            case 'L':
                this.roomName = "Living room";
                enableCommands.addAll(Arrays.asList("E","G","B","H"));
                break;    
            
            case 'E':
                this.roomName = "Entrance";
                enableCommands.addAll(Arrays.asList("L","B","H","D"));
                break;

            case 'B':
                this.roomName = "Bed room";
                enableCommands.addAll(Arrays.asList("U","C","L"));
                break;

            case 'H':
                this.roomName = "Hallway";
                enableCommands.addAll(Arrays.asList("P","W","L"));
                break;    
            
            default:
                break;
        }
    }
}
