import java.util.Scanner;

/**
 * User has to input a circle radius and an angle
 * The program calculates and display the circular sector area.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercise130 {

	/**
	 * 
	 * @param circular sector radius
	 * @param circular sector angle
	 * @return circular sector area
	 */
	public static double area(double radius, float angle) {
		return (Math.PI * Math.pow(radius, 2) * angle / 360);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Variables declaration
		Scanner sc;
		double radius;
		float angle;
		boolean validAngle;

		// Program title
		System.out.println("Circular sector area calculator");
		System.out.println("===============================\n");

		// ### Start ###//
		sc = new Scanner(System.in);
		angle = 0f;
		validAngle = false;
		System.out.println("Please enter the circular sector radius :");
		radius = sc.nextDouble();
		while (!validAngle) {
			System.out.println("Please enter the circular sector angle (between 0 and 360) :");
			angle = sc.nextFloat();
			if (angle < 0f || angle > 360f)
				System.out.println("Bad input");
			else
				validAngle = true;
		}
		System.out.println("Area = " + area(radius, angle));

		// Scanner closing (Do not forget)
		sc.close();
	}
}