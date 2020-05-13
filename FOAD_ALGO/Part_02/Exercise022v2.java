import java.util.Scanner;
import java.util.regex.*;

/**
 * The user inputs a unit of measurement (C or F).
 * Then he inputs a range of values ​​(minimum, maximum).
 * Once the 2 values ​​have been entered, the program converts the entire value range and displays the result.
 */

/**
 * @author Kyweez
 */
public class Exercise022v2 {
	/**
	 * This method converts the temperature depending on the unit
	 * @param temperature
	 * @param unit
	 * @return converted temperature
	 */
	public static double converter(double temperature, String unit) {
		if (unit.equals("C"))
			return ((temperature*9/5)+32);
		else
			return ((temperature-32)*5/9);

	}
	/**
	 * This method checks if the value isn't out of bounds
	 * @param inputValue
	 * @param min
	 * @param max
	 * @return a boolean true or false
	 */
	public static boolean boundsChecker(String inputValue, double min, double max) {
		double value = Double.parseDouble(inputValue);
		if (value >= min && value <= max)
			return (true);
		else
			return (false);
	}
	
	/**
	 * This method the double if if the value entered is correct
	 * @param sc
	 * @param pattern
	 * @param bound
	 * @return A valid input
	 */
	public static double setInputDouble(Scanner sc, String pattern, double[] bound) {
		boolean validInput = false;
		String input = "";
		while (!validInput) {
			System.out.println("\nInsert a value between " + bound[0] + " & " + bound[1]);
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
	/**
	 * This method set the unit if the input is correct
	 * @param sc
	 * @param pattern
	 * @return The valid input
	 */
	public static String setInputString (Scanner sc, String pattern) {
		boolean validInput = false;
		String input = "";
		while (!validInput) {
			System.out.println("Please insert a unit (C/F)");
			input = sc.nextLine();
			if (regexChecker(pattern, input))
				return (input);
			else
				System.out.println("Bad input, try again!\n");
		}
		return (input);
	}
	
	/**
	 * This method check if the input match to the regular expression
	 * @param pattern
	 * @param input
	 * @return a boolean true or false
	 */
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
		String patternValue = "^(-?[0-9]{1,10})(.[0-9]+)?$";
		double value1;
		double value2 = 0;
		double[] bound = {-459.67, 5000000};
		boolean validValue = false;
		

		// Program title
		System.out.println("Temperature converter program");
		System.out.println("=============================");

		// ### Start ###
		unit = setInputString(sc, paternUnit);
		System.out.print("\nFirst value\n-----------");
		value1 = setInputDouble(sc, patternValue, bound);
		System.out.print("\nSecond value\n------------");
		while (!validValue) {
			value2 = setInputDouble(sc, patternValue, bound);
			if (value1 < value2)
				validValue = true;
			else
				System.out.println("The second value must be higher than the first one !");
		}
		sc.close();
		//Printing results
		System.out.println("\n-----------------------------------");
		System.out.println("############# RESULTS #############");
		System.out.println("-----------------------------------");		
		for (double i = value1; i <= value2; i++) {
			System.out.print(Math.round(i) + " °" + unit + " = ");
			System.out.println(converter(Math.round(i), unit) + " °" + (unit.equals("C")?"F":"C"));
		}
		System.out.println("-----------------------------------");		
	}
}