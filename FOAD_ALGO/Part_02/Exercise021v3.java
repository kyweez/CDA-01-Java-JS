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
	public static String conversion(String toConvert) {
		String[] convertedValue;
		double value;
		convertedValue = toConvert.split(" ");
		if (convertedValue[1].contentEquals("mi")) {
			value = Double.parseDouble(convertedValue[0])*1.609;
			convertedValue[1] = "km";
		}
		return convertedValue[0];
	}
	
	public static void convertTab(ArrayList<String> tab) {
		for (int i = 0; i < tab.size(); i++) {
			if (!tab.get(i).contains("km")) {
				tab.set(i, tab.get(i).concat(conversion(tab.get(i))));
			}
		}
	}
	public static void formatTab(ArrayList<String> tab) {
		for (int i = 0; i < tab.size(); i++) {
			if (!tab.get(i).contains("km") && !tab.get(i).contains("mi"))
				tab.set(i, tab.get(i).concat(" km"));
		}
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
		Scanner sc;
		String regexPattern;
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
		continueProgram = true;
		stringArray = new ArrayList<String>();
		sc = new Scanner(System.in);
		while (continueProgram) {
			convert = false;
			stringArray.clear();
			while (!convert) {
				System.out.println("Insert a disance");
				inputString = sc.nextLine();
				if (regexChecker(regexPattern, inputString)) {
					stringArray.add(inputString);
				} else if (inputString.equalsIgnoreCase("go") || inputString.equalsIgnoreCase("quit")) {
					convert = true;
					continueProgram = inputString.equalsIgnoreCase("go") ? true : false;
				} else {
					System.out.println("Bad input");
				}
			}
			formatTab(stringArray);
			for (int i = 0; i < stringArray.size(); i++) {
				System.out.println(stringArray.get(i));
			}
		}
		sc.close();
	}
}