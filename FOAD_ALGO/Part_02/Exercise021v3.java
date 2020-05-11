import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.*;

/**
 * The user enters a value in kilometers between 0.01 and 1,000,000.
 * If the value is out of range, the user is asked to enter a new value. If the value is equal to "q", the program ends and closes.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values separated by spaces.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise021v3 {

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
		String regexAction;
		String inputString;
		ArrayList<String> stringArray;
		boolean convert;
		boolean continueProgram;

		// Program title
		System.out.println("Distance converter program");
		System.out.println("==========================\n");

		// ### Start ###
		// Assignments
		regexPattern = "^([0-9]{1,10})(\\.[0-9]+)?(\\s(km|mi))?$";
		regexAction = "^go$|^quit$";
		convert = false;
		continueProgram = true;
		stringArray = new ArrayList<String>();
		sc = new Scanner(System.in);
		while (continueProgram) {
			while (!convert) {
				System.out.println("Insert a disance");
				inputString = sc.nextLine();
				if (regexChecker(regexPattern, inputString)) {
					stringArray.add(inputString);
				} 
				else if (inputString.equalsIgnoreCase(regexAction)) {
					convert = true;
					continueProgram = inputString.equalsIgnoreCase("go") ? true : false;
				} 
				else {
					System.out.println("Bad input");
				}
			}

			sc.close();
		}
	}
}