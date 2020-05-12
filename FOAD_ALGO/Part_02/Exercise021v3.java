import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.*;

/**
 * The user enters a value in kilometers between 0.01 and 1,000,000.
 * If the value is out of range, the user is asked to enter a new value.
 * The user can enter as many values as he wants
 * If the value is equal to "go" : Prompt all conversion and restart program
 * If the value is equal to "quit": Prompt all conversion and stop program
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
	/**
	 * 
	 * @param distance we need to convert
	 * @return converted distance with the unity (and '=' sign)
	 */
	public static String conversion(String toConvert) {
		String[] convertedValue;
		double value;
		
		// We store the value and the unity in a String[]
		convertedValue = toConvert.split(" ");
		//We convert the value and the unity
		if (convertedValue[1].contentEquals("mi")) {
			value = Double.parseDouble(convertedValue[0])*1.609;
			convertedValue[1] = "km";
		}
		else {
			value = Double.parseDouble(convertedValue[0])/1.609;
			convertedValue[1] = "mi";
		}
		return (" = " + value + " " + convertedValue[1]);
	}
	
	/**
	 * This Method will replace the original value by the expected result
	 * It applies on each index of the ArrayList
	 * @param the formated array ("Value" + "Space" + "Unity"
	 */
	public static void convertTab(ArrayList<String> tab) {
		for (int i = 0; i < tab.size(); i++) {
				tab.set(i, tab.get(i).concat(conversion(tab.get(i))));
		}
	}
	
	/**
	 * This method will format the array in order to apply operations on it
	 * It adds "km" if the user didnt write a unity
	 * @param the original array (user inputs)
	 */
	public static void formatTab(ArrayList<String> tab) {
		for (int i = 0; i < tab.size(); i++) {
			if (!tab.get(i).contains("km") && !tab.get(i).contains("mi"))
				tab.set(i, tab.get(i).concat(" km"));
		}
	}

	/**
	 * This method will check if the value entered isn't out of bounds.
	 * This method print a message if the value is too low/high
	 * Otherwise it adds value in the array
	 * @param stringArray
	 * @param inputString
	 */
	public static void checkBounds (ArrayList<String> stringArray, String inputString) {
		if (inputString.contains("mi") || inputString.contains("km")) {
			if (Double.parseDouble(inputString.split(" ")[0]) >= 0.01){
				if (Double.parseDouble(inputString.split(" ")[0]) <= 1000000)
					stringArray.add(inputString);
				else
					System.out.println("Your value is too high");
			}
			else
				System.out.println("Your value is too low");
		}
		else if (Double.parseDouble(inputString) >= 0.01){
			if (Double.parseDouble(inputString) <= 1000000)
				stringArray.add(inputString);
			else
				System.out.println("Your value is too high");
		}
		else
			System.out.println("Your value is too low");
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
		ArrayList<String> stringArray;
		boolean convert;
		boolean continueProgram;

		// Program title
		System.out.println("Distance converter program");
		System.out.println("==========================");

		// ### Start ###
		// Assignments
		regexPattern = "^([0-9]{1,10})(\\.[0-9]+)?(\\s(km|mi))?$";
		continueProgram = true;
		stringArray = new ArrayList<String>();
		sc = new Scanner(System.in);
		
		// Launch the program until the user input "quit"
		while (continueProgram) {
			convert = false;
			// Reset the array if the loop start again ("go" command)
			stringArray.clear();
			// Ask the user to input a valid value
			while (!convert) {
				System.out.println("\nInsert a disance between 0.01 and 1'000'000");
				inputString = sc.nextLine();
				// Fill in the array if the value correct
				if (regexChecker(regexPattern, inputString)) {
					checkBounds(stringArray, inputString);
				} 
				// If the value isn't correct, is a command ?
				else if (inputString.equalsIgnoreCase("go") || inputString.equalsIgnoreCase("quit")) {
					convert = true;
					continueProgram = inputString.equalsIgnoreCase("go") ? true : false;
				} 
				// We tell the user's input is incorrect
				else
					System.out.println("Bad input");
			}
			formatTab(stringArray);
			convertTab(stringArray);
			// Print result
			System.out.println("\n-----------------------------------");
			System.out.println("############# RESULTS #############");
			System.out.println("-----------------------------------");

			for (int i = 0; i < stringArray.size(); i++) {
				System.out.println(stringArray.get(i));
			}
			System.out.println("-----------------------------------");
			if (continueProgram)
				System.out.println("RESTART PRORGRAM");
			else
				System.out.println("END OF PRORGRAM");
		}
		sc.close();
	}
}