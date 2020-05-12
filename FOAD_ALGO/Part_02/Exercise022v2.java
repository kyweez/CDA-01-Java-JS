import java.util.Scanner;
import java.util.regex.*;

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
		String unit;
		String pattern;
		String value1;
		String value2;
		boolean validUnit;
		boolean validMinValue;
		boolean validMaxValue;

		// Program title
		System.out.println("Temperature converter program");
		System.out.println("=============================");

		// ### Start ###
		// Assignments
		sc = new Scanner(System.in);
		pattern = "^(-?[0-9]{1,10})(\\.[0-9]+)?$";
		value1 = "";
		value2 = "";
		unit = "";
		validUnit = false;
		while (!validUnit) {
			System.out.println("Insert a temperature unit (C or F)");
			unit = sc.nextLine();
			if (regexChecker("(^C$)|(^F$)", unit)) {
				validUnit = true;
				validMinValue = false;
				while (!validMinValue) {
					System.out.println("Insert a minimum temperature");
					value1 = sc.nextLine();
					if (regexChecker(pattern, value1)) {
						if (Double.parseDouble(value1) >= -459.67) {
							if (Double.parseDouble(value1) <= 5000000) {
								validMinValue = true;
								System.out.println("Insert a maximum temperature");
								value2 = sc.nextLine();
								if (regexChecker(pattern, value2)) {
									if (Double.parseDouble(value2) >= -459.67) {
										if (Double.parseDouble(value2) <= 5000000) {
											validMaxValue = true;
										}
										else {
											System.out.println("Bad input insert a value between -459.67 and 5000000");
										}
									}
									else {
										System.out.println("Bad input insert a value between -459.67 and 5000000");
									}

								}
								else {
									System.out.println("Bad input : Insert a valid value ");
								}
							}
							else {
								System.out.println("Bad input insert a value between -459.67 and 5000000");
							}
						}
						else {
							System.out.println("Bad input insert a value between -459.67 and 5000000");
						}

					}
					else {
						System.out.println("Bad input : Insert a valid value ");
					}
				}
			}
			System.out.println("Bad input : Insert C or F");
		}
		System.out.println(value1 + " " + value2 + " " + unit);

		sc.close();
	}
}