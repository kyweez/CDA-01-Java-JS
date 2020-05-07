import java.util.Scanner;

/**
 * User has to input 2 integers.
 * The program calculates the average of the 2 numbers and display the result as a double number.
 * After each calculation, the user is invited to perform another calculation or exit the program.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values separated by spaces.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise113 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		//Variables declaration
		Scanner sc;
		int count;
		double numberSum;
		String userInput;
		String[] inputTab;
		boolean restartProgram;
		
		//Program title
		System.out.println("Average calculating complex program");
		System.out.println("===================================\n");
		
		//### Start ###//
		sc = new Scanner(System.in);
		restartProgram = true;
		while (restartProgram) {
			count = 0;
			numberSum = 0;
			System.out.println("Please insert as many numbers as you want separated by a space:");
			userInput = sc.nextLine();
			//We split the string and put the result in a tab.
			inputTab = userInput.split(" ");
			//We make the sum of the numbers
			for (int i = 0; i < inputTab.length; i++) {
				numberSum += Double.parseDouble(inputTab[i]);
				count++;
			}
			//Print result
			System.out.println("You inputed " + count + " numbers. The average is : " + numberSum/count);
			System.out.println("\nPress y + \"Enter\" if you want to restart the program or any key if you want to leave:");
			restartProgram = sc.nextLine().contentEquals("y");
			System.out.println(restartProgram ? "Restarting program...\n" : "Thanks for using this program");  
		}
		//Scanner closing (Do not forget)
		sc.close();
	}
}