import java.util.Scanner;

/**
 * User has to input 2 integers.
 * The program calculates the average of the 2 numbers and display the result as a double number.
 * After each calculation, the user is invited to perform another calculation or exit the program.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values separated by spaces.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez

 */
public class Exercice112 {

	/**
	 * @param args
	 * 
	 */
	public static void main(String[] args) {
		//Variables declaration
		Scanner sc;
		double nbr1;
		double nbr2;
		boolean restartProgram;
		//Program title
		System.out.println("Average of 2 numbers calculating complex program");
		System.out.println("================================================\n");
		//Start
		sc = new Scanner(System.in);
		restartProgram = true;
		while (restartProgram) {
			System.out.println("Please insert 2 numbers separated by a space:");
			nbr1 = Double.parseDouble(sc.next());
			nbr2 = Double.parseDouble(sc.next());
			//Print result
			System.out.println("The average of " + nbr1 + " and " + nbr2 + " is : " + (nbr1 + nbr2) / 2);
			System.out.println("\nPress y + \"Enter\" if you want to restart the program or n + \"Enter\" if you want to leave:");
			restartProgram = sc.next().contentEquals("y");
			System.out.println(restartProgram ? "Restarting program...\n" : "Thanks for using this program");  
		}
		//Scanner closing (Do not forget)
		sc.close();
	}
}