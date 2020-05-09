import java.util.Scanner;

/**
 * Read a number and find if it's a prime number.
 * A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise016v0 {

	public static boolean isPrime(int number) {
		//Negative numbers are not prime. 0 and 1 too.
		if (number < 2)
			return (false);
		//This algorithm is fine but a range of the loop is useless actually
		//Optimized version in v1.6.1
		for (int i = 2; i < number; i++) {
			if (number % i == 0)
				return (false);
		}
		return (true);
	}

	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int number;

		// Program title
		System.out.println("Is prime program (non optimized algo)");
		System.out.println("=====================================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number :");
		number = sc.nextInt();
		System.out.println(number + (isPrime(number)?" is prime": " isn't prime"));
		// Scanner closing (Do not forget)
		sc.close();
	}
}