import java.util.Scanner;

/**
 * User has to input a sphere radius.
 * The program calculates and display the area and the volume.
 * 
 * WARNING !!!
 * This exercise do not check the user input error cases.
 * We assume that the user will put valid values.
 * Also, we don't cover the max/min values.
 */

/**
 * @author Kyweez
 */
public class Exercice120 {
	
	/**
	 * 
	 * @param sphere radius
	 * @return sphere area
	 */
	public static double area(double radius) {
		return (4 * Math.PI * Math.pow(radius, 2));
	}
	
	/**
	 * 
	 * @param sphere radius
	 * @return sphere volume
	 */
	public static double volume(double radius) {
		return ((4 * Math.PI * Math.pow(radius, 3))/3);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		//Variables declaration
		Scanner sc;
		double radius;
		
		//Program title
		System.out.println("Average calculating program");
		System.out.println("========================================\n");
		
		//### Start ###//
		sc = new Scanner(System.in);
		System.out.println("Please enter the sphere radius :");
		radius = sc.nextDouble();
		System.out.println("Area = " + area(radius));
		System.out.println("Volume = " + volume(radius));
		
		//Scanner closing (Do not forget)
		sc.close();
	}
}