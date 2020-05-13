import java.util.Random;
import java.util.Scanner;

/**
 * 
 */

/**
 * @author Kyweez
 *
 */
public class Exercise023v0 {

	public static boolean compare(byte inputNumber, byte searchedNumber) {
		if (inputNumber == searchedNumber)
			return (true);
		else if (inputNumber < searchedNumber) {
			System.out.println("It's more\n");
			return (false);
		}
		else {
			System.out.println("It's  less\n");
			return (false);
		}
	}
	
	public static int randomByte(int nb) {
		Random generator;
		int randomNumber;

		generator = new Random();
		randomNumber = generator.nextInt(nb + 1);
		return (randomNumber);
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		byte input = 0;
		byte toFind = (byte)randomByte(100);
		byte count = 0;
		boolean errorTest;
		boolean finish = false;

		sc.close();
	}

}
