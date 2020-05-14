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
public class Exercise110v0 {
	
	//This method returns if a number is perfect
	public static boolean isPerfect(int number) {
		return (number == divisorSum(number));
	}
	
	//This method find all divisors of a number add them together
	public static int divisorSum(int number) {
		int sum = 0;
		// No need to test over number/2
		for (int i = 1; i <= number/2; i++) {
			if (number%i == 0) {
				//Test to avoid overflows
				if (i <= 2147483647 - sum)
					sum += i;
				else {
					System.out.println("This program can't handle this number : Out of bounds");
					return (-1);
				}
			}
		}
		return (sum);
	}
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int number;
		int i = 0;
		int j = 1;

		// Program title
		System.out.println("Perfect number program");
		System.out.println("======================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a number of the perfect number you want to see :");
		number = sc.nextInt();
		while (i < number) {
			if (isPerfect(j)) {
				System.out.println(j + " is a perfect number");
				i++;
			}
			j++;
		}
		sc.close();
	}
}

