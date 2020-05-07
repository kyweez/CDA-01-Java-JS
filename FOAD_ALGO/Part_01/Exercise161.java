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
public class Exercise161 {

	public static boolean isPrime(int number) {
		//	Negative numbers are not prime. 0 and 1 too.
		//	Even numbers are not prime
		if (number < 2 || (number != 2 && number % 2 == 0))
			return (false);
		//**Optimized version**//
		//	Given N, A and B : 3 integers 
		//	if N = A.B
		//	then A <= sqrt(N) or B <= sqrt(N)
		//	Assume A >= B, we can write the followings
		//	A <= sqrt(N)
		//	A^2 <= N
		//	A*A <= N
		//	A <= N/A
		//	We can look for every iteration of A from 0 to sqrt(N)
		for (int i = 3; i <= number/i ; i++) {
			if (number % i == 0)
				return (false);
			i++;
		}
		return (true);
	}

	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int number;

		// Program title
		System.out.println("Is prime program (optimized algo)");
		System.out.println("=================================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number :");
		number = sc.nextInt();
		System.out.println(number + (isPrime(number)?" is prime": " isn't prime"));
		// Scanner closing (Do not forget)
		sc.close();
	}
}