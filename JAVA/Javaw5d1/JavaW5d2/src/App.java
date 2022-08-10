import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {

        String url = "jdbc:mysql://127.0.0.1:3306/homework0713";
        String user = "root";
        String password = "19882003bB";
        int rowsAffected = 0;

        try {
            //eastablish connection
            Connection conn = DriverManager.getConnection(url, user, password);

            //create a statement object
            Statement statement = conn.createStatement();

            
            Scanner s = new Scanner(System.in);
            
            while(true){
                System.out.println("select an option :");
                System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*");
                System.out.println("1) Print all employees :");
                System.out.println("2) Add an employee :");
                System.out.println("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*");
                
                int num = s.nextInt();
                
                if(num == 1){
                    // statement.executeQuery("SELECT * FROM employee_table");
        
                    //ResultSet interface
                    ResultSet resultSet = statement.executeQuery("SELECT * FROM employees_table");
                    
                    System.out.println("----------------------------------");
                    while(resultSet.next()){
                        
                        System.out.println(resultSet.getString("name") + " - " + resultSet.getString("department") + " ($"+resultSet.getString("salary")+")");
                    }
                    System.out.println("----------------------------------");
                    

                }else if(num == 2){

                    System.out.print("Please enter a name :" );
                    s.nextLine();
                    String name = s.nextLine();
                    System.out.print("Please enter a department :" );
                    String department = s.nextLine();

                    System.out.print("Please enter a salary :" );
                    int salary = s.nextInt();

                    System.out.println("\n\n");

                    String qry = "INSERT INTO employees_table (name, department, salary) VALUES (?, ?, ?)";
                    PreparedStatement statement2 = conn.prepareStatement(qry);
                    statement2.setString(1, name);
                    statement2.setString(2, department);
                    statement2.setInt(3, salary);
                    statement2.executeUpdate();

                }else{
                    System.out.println("Please try again..");
                    break;
                }

            }
            s.close();

        } catch (SQLException e) {
                e.printStackTrace();
        }

    }
}
