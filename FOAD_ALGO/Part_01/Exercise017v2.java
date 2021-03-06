import java.util.Scanner;

/**
 * Read as many numbers as you want (separated by a space).
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise017v2 {
	
	//Shaker sort algorithm
	public static void sortInteger(int[] tab) {
		boolean sortedTab = (false);
		int i;
		int j;
		int minBound = 0;
		int maxBound = tab.length - 1;
		int	temp = 0;
		
		while (!sortedTab) {
			sortedTab = (true);
			i = minBound;
			j = i + 1;
			//Push the highest value to her good place
			while (j <= maxBound) {
				//Swap value each time tab[i] > tab[j]
				if (tab[i] > tab[j]) {
					temp = tab[i];
					tab[i] = tab[j];
					tab[j] = temp;
					sortedTab = (false); //Deny the end of the sort by telling it's not sorted
				}
				i++;
				j++;
			}
			maxBound--; //The biggest maxBound has been set, no need to browse all the table
			if (!sortedTab) {
				sortedTab = (true);
				j = maxBound;
				i = j -1;
				while (i >= minBound) {
					if (tab[i] > tab[j]) {
						temp = tab[i];
						tab[i] = tab[j];
						tab[j] = temp;
						sortedTab = (false); //Deny the end of the sort by telling it's not sorted
					}
					i--;
					j--;
				}
				minBound++; //The lowest minBound has been set, no need to browse all the table
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
		System.out.println("Sorting program (shaker algo)");
		System.out.println("==============================\n");

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
		sortInteger(numberTab);
		for (int i : numberTab) {
			System.out.print(i+" ");
		}
		sc.close();
	}
}