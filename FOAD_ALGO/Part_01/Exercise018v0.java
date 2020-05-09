import java.util.Scanner;

/**
 * Read a year A.
 * Determine if year A is a leap year. If A is not divisible by 4, the year is not a leap year.
 * If A is divisible by 4, the year is a leap year unless A is divisible by 100 and not by 400.
 * Write a message "Leap" or "No leap" as appropriate.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise018v0 {
	
	public static boolean leapYear(int year) {
		return (year % 4 == 0 ? (year % 100 == 0 && year % 400 !=0) ? (false) : (true) : (false));
	} 
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		int year;

		// Program title
		System.out.println("Leap year or not ? Let's have fun with ternary operations");
		System.out.println("=========================================================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please insert a year");
		year = sc.nextInt();
		if (leapYear(year))
			System.out.println(year + " is a leap year");
		else
			System.out.println(year + " is a non leap year");
		sc.close();
	}
}