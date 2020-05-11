import java.util.Scanner;

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
public class Exercise021v1 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		double input = 0;
		String inputString = "";
		boolean continueProgram = true;
		boolean validInput;

		// Program title
		System.out.println("Km to Miles converter program");
		System.out.println("=============================\n");

		// ### Start ###
		sc = new Scanner(System.in);
		// Execute until the user wants to quit the program
		while (continueProgram) {
			validInput = false;
			// Execute until the input is good
			while (!validInput) {
				System.out.println("Please insert a distance between 0,01 and 1'000'000 in km: (insert q to quit)");
				// Check if the input value is a double
				if (sc.hasNextDouble()) {
					input = sc.nextDouble();
					// Check if the value isn't out of bound
					if (input >= 0.01 && input <= 1000000) {
						validInput = true;
						System.out.println(input + " km = " + (input/1.609) + "miles\n");
					} 
					else {
						System.out.print("Bad input : ");
						System.out.println(input >= 0.01 ? input + " is too high" : input + " is too low");
					}
				}
				//If the value isn't a double, is it a q ?
				else if (sc.hasNext()) {
					inputString = sc.next();
					if (inputString.equalsIgnoreCase("q")) {
						continueProgram = false;
						validInput = true;
						System.out.println("EOF");
					}
					else
						System.out.println("Bad input (Check to use ',' instead of '.')\n");
				}
			}
		}
		sc.close();
	}
}