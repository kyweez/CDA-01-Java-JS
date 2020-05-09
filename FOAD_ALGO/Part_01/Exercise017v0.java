import java.util.Scanner;

/**
 * Read 2 numbers a and b. Write them in ascending order.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise017v0 {
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int number1;
		int number2;

		// Program title
		System.out.println("Sorting program");
		System.out.println("===============\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number :");
		number1 = sc.nextInt();
		System.out.println("Please enter a second number :");
		number2 = sc.nextInt();
		System.out.println(number1 >= number2 ? number1 + " >= " + number2 : number2 + " >= " + number1);
		sc.close();
	}
}