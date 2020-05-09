import java.util.Scanner;

/**
 *  Read an integer and determine all of its divisors other than 1 and itself.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise190 {
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int number;

		// Program title
		System.out.println("Find all divisors");
		System.out.println("=================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number :");
		number = sc.nextInt();
		for (int i = 2; i < number; i++) {
			if (number%i == 0) {
				System.out.println(i);
			}
		}
		sc.close();
	}
}