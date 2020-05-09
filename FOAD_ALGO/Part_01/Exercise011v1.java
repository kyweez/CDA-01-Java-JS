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
public class Exercise011v1 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		//Variables declaration
		Scanner sc;
		double nbr1;
		double nbr2;
		//Program title
		System.out.println("Average of 2 numbers calculating  simple program");
		System.out.println("================================================\n");
		//Start
		System.out.println("Please insert 2 numbers separated by a space:");
		sc = new Scanner(System.in);
		nbr1 = Double.parseDouble(sc.next());
		nbr2 = Double.parseDouble(sc.next());
		//Print result
		System.out.println("The average of " + nbr1 + " and " + nbr2 + " is : " + (nbr1 + nbr2) / 2);
		//Scanner closing (Do not forget)
		sc.close();
	}
}