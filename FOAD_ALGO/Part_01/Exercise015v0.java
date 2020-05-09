import java.util.Scanner;

/**
 * Read the initial amount placed on an account
 * Read the interest offered by the bank
 * And read the number N of years of investment
 * Calculate the value acquired by the amount invested during N years:
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise015v0 {

	public static double simpleInterest(double amount, double rate, byte duration) {
		return (amount*(1 + duration * rate));
	}
	
	public static double compoundInterest(double amount, double rate, byte duration) {
		double finalAmount;
		finalAmount = amount;
		for (int i = 0; i < (int)duration; i++) {
			finalAmount *= (1+rate);
		}
		return (finalAmount);
	}
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		double initialAmount;
		double interestRate;
		byte duration;

		// Program title
		System.out.println("Interest calculator program");
		System.out.println("===========================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter a deposit :");
		initialAmount = sc.nextDouble();
		System.out.println("Please enter an interest rate :");
		interestRate = sc.nextDouble();
		System.out.println("Please enter a duration (years) :");
		duration = sc.nextByte();
		System.out.println("Amount after simple interests   = " + simpleInterest(initialAmount, interestRate, duration));
		System.out.println("Amount after compound interests = " + compoundInterest(initialAmount, interestRate, duration));

		// Scanner closing (Do not forget)
		sc.close();
	}
}