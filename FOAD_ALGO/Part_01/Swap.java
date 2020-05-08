import java.util.Scanner;

public class Swap {
	
	public static void swap(Integer a, Integer b) {
		Integer temp;
		
		temp = a;
		a = b;
		b = temp;
	}
	
	public static void main(String[] args) {
		Scanner sc;
		Integer a;
		Integer b;

		sc = new Scanner(System.in);
		System.out.println("Please enter a number a :");
		a = sc.nextInt();
		System.out.println("Please enter a number b :");
		b = sc.nextInt();
		System.out.println("Before : a = " + a + " and b = " + b);
		swap(a, b);
		System.out.println("After  : a = " + a + " and b = " + b);
		sc.close();
	}
}