import java.util.Scanner;

/**
 * Read 2 numbers a and b.
 * Put the contents of a in b and that of b in a.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercice140 {

	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		double a;
		double b;
		double temp;

		// Program title
		System.out.println("Values swap program");
		System.out.println("===================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number a :");
		a = sc.nextDouble();
		System.out.println("a = " + a);
		System.out.println("Please enter a number b :");
		b = sc.nextDouble();
		System.out.println("b = " + b);
		System.out.println("\nExecution of the algorithm...");
		temp = a;
		a = b;
		b = temp;
		System.out.println("Now, a = " + a + " and b = " + b);

		// Scanner closing (Do not forget)
		sc.close();
	}
}