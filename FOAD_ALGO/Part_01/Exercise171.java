import java.util.Scanner;

/**
 * Read 3 numbers a, b and c. Write them in ascending order.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise171 {
	
	//Simple algorithm
	public static void sortInteger(int[] tab) {
		boolean sortedTab = (false);
		int i = 0;
		int j = i + 1;
		int	temp = 0;
		
		while (!sortedTab) {
			sortedTab = true;
			while (i < (tab.length - 1)) {
				if (tab[i] > tab[j]) {
					temp = tab[i];
					tab[i] = tab[j];
					tab[j] = temp;
				}
			}
		}
	}
	
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		String userInput;
		String[] inputTab;
		int[] numberTab;

		// Program title
		System.out.println("Sorting program (bubble algo)");
		System.out.println("============================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please insert as many numbers as you want separated by a space:");
		userInput = sc.nextLine();
		//We split the string and put the result in a tab.
		inputTab = userInput.split(" ");
		//Integer tab initialization
		numberTab = new int[inputTab.length];
		//Fill the integer tab
		for (int i = 0; i < numberTab.length; i++) {
			numberTab[i] = Integer.parseInt(inputTab[i]);
		}
		for (int i : numberTab) {
			System.out.println(i);
		}
		sc.close();
	}
}