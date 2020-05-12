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
public class Exercise022v1 {
	
	public static void converter(String inputString) {
		String[] tabInput;
		double value;
		tabInput = inputString.split(" ");
		if (tabInput[1].equals("F")) {
			value = Double.parseDouble(tabInput[0]);
			value = (value - 32)*5/9;
			tabInput[1] = "C";
		}
		else {
			value = Double.parseDouble(tabInput[0]);
			value = (value * 9/5) + 32;
			tabInput[1] = "F";
		}
		System.out.println(inputString + " = " + value + " °" + tabInput[1]);
	}
	
	/**
	 * 
	 * @param pattern
	 * @param input
	 * @return
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
		Scanner sc;
		String regexPattern;
		String inputString;

		// Program title
		System.out.println("Temperature converter program");
		System.out.println("=============================");

		// ### Start ###
		// Assignments
		regexPattern = "^(-?[0-9]{1,10})(\\.[0-9]+)?(\\s((c|C)|(f|F)))$";
		sc = new Scanner(System.in);
		inputString = sc.nextLine();
		if(regexChecker(regexPattern, inputString)) {
			if (Double.parseDouble(inputString.split(" ")[0]) >= -459.67) {
				if (Double.parseDouble(inputString.split(" ")[0]) <= 5000000) {
					converter(inputString);
				}
				else
					System.out.println("Bad input : Too hot !");
			}
			else
				System.out.println("Bad input : Too cold !");

		}
		else
			System.out.println("Bad input");
		sc.close();	
	}
}