import java.util.Scanner;
import java.util.regex.*;

/**
 * The user enters a value in kilometers between 0.01 and 1,000,000.
 * If the value is out of range, the user is asked to enter a new value.
 * If the value is equal to "q", the program ends and closes.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values separated by spaces.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise021v2 {

	public static boolean regexChecker(String pattern, String input) {
		Pattern regexPattern = Pattern.compile(pattern);
		Matcher regexMatcher = regexPattern.matcher(input);
		return (regexMatcher.find());
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		String regexPattern;
		String inputString;
		boolean continueProgram;
		boolean validInput;
		double doubleInput;
		String[] tabInput;

		// Program title
		System.out.println("Distance converter program");
		System.out.println("==========================\n");

		// ### Start ###
		// Assignments
		sc = new Scanner(System.in);
		regexPattern = "^([0-9]{1,10})(\\.[0-9]+)?\\s(km|mi)$";
		continueProgram = true;
		tabInput = new String[2];
		doubleInput = 2;
		// Execute until the user wants to quit the program
		while (continueProgram) {
			validInput = false;
			while (!validInput) {
				System.out.println("___________________________________________________________\n"
						+ "Please insert a distance and its unity (separated by space)"
						+ "\nValue must be between 0.01 and 1 000 000" + "\nExample 1 : 12.12 km"
						+ "\nExample 2 : 32432 mi" + "\nInsert Q to leave the program"
						+ "\n___________________________________________________________\n");
				inputString = sc.nextLine();
				if (regexChecker(regexPattern, inputString)) {
					tabInput = inputString.split(" ");
					doubleInput = Double.parseDouble(tabInput[0]);
					if (doubleInput >= 0.01 && doubleInput <= 1000000) {
						if (tabInput[1].contentEquals("mi"))
							System.out
									.println("\n" + doubleInput + " miles = " + doubleInput * 1.609 + " kilometers\n");
						else
							System.out
									.println("\n" + doubleInput + " kilometers = " + doubleInput / 1.609 + " miles\n");
						validInput = true;
					} else {
						System.out.print("Bad input : ");
						System.out.println(
								doubleInput >= 0.01 ? doubleInput + " is too high" : doubleInput + " is too low");
					}
				} else if (inputString.equalsIgnoreCase("q")) {
					validInput = true;
					continueProgram = false;
					System.out.println("END OF PROGRAM");
				} else
					System.out.println("Bad input\n");
			}
		}
		sc.close();
	}
}