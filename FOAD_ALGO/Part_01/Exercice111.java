import java.util.Scanner;

/**
 * User has to input 2 integers.
 * The program calculates the average of the 2 numbers and display the result as a double number.
 */

/**
 * @author Kyweez
 */
public class Exercice111 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner sc;
		double nbr1;
		double nbr2;
		sc = new Scanner(System.in);
		System.out.println("Average of 2 numbers calculating program");
		System.out.println("========================================\n");
		System.out.println("Please insert 2 numbers separated by a space:");
		nbr1 = Double.parseDouble(sc.next());
		nbr2 = Double.parseDouble(sc.next());
		System.out.println("The average of " + nbr1 + " and " + nbr2 + " is : " + (nbr1 + nbr2) / 2);
		sc.close();
	}
}
