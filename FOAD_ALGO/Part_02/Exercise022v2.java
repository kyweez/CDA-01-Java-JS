import java.util.Scanner;
import java.util.regex.*;

import javax.swing.text.StyledEditorKit.BoldAction;

/**
 * The user inputs a numerical value between -459.67 and 5,000,000 followed by the temperature unit:
 * 		▪ C for Celsius
 * 		▪ F for Fahrenheit
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values separated by spaces.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise022v2 {

	public static boolean boundsChecker(String inputValue, double min, double max) {
		double value = Double.parseDouble(inputValue);
		if (value >= min && value <= max)
			return (true);
		else
			return (false);
	}
	
	public static double setInputDouble(Scanner sc, String pattern, double[] bound) {
		boolean validInput = false;
		String input = "";
		while (!validInput) {
			System.out.println("Insert a value between " + bound[0] + " & " + bound[1]);
			input = sc.nextLine();
			if (regexChecker(pattern, input)) {
				if (boundsChecker(input, bound[0], bound[1]))
					return (Double.parseDouble(input));
				else
					System.out.println("Bad input !");
			}
			else 
				System.out.println("Bad input, try again!");
		}
		return (Double.parseDouble(input));
	}
	
	public static String setInputString (Scanner sc, String pattern) {
		boolean validInput = false;
		String input = "";
		while (!validInput) {
			System.out.println("Please insert a unit (C/F)");
			input = sc.nextLine();
			if (regexChecker(pattern, input))
				return (input);
			else
				System.out.println("Bad input, try again!");
		}
		return (input);
	}
	
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
		Scanner sc = new Scanner(System.in);;
		String unit;
		String paternUnit = "(^C$)|(^F$)";
		String patternValue = "^(-?[0-9]{1,10})(\\\\.[0-9]+)?$";
		double value1;
		double value2 = 0;
		double[] bound = {-459.67, 5000000};
		boolean validValue = true;
		

		// Program title
		System.out.println("Temperature converter program");
		System.out.println("=============================");

		// ### Start ###
		// Assignments
		unit = setInputString(sc, paternUnit);
		value1 = setInputDouble(sc, patternValue, bound);
		while (validValue) {
			value2 = setInputDouble(sc, patternValue, bound);
			if (value1 > value2) {
				System.out.println("The second value must be higher than the first one !");
			}
		}
		System.out.println("RESULT = " + value1 +" "+ value2 +" "+ unit);
		sc.close();
	}
}