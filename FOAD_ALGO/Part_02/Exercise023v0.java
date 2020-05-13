import java.util.Random;

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
			System.out.println("It' more\n");
			return (false);
		}
		else {
			System.out.println("It' less\n");
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

	}

}
