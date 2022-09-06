//Basic Euclidean Algorithm
//Language: C

#include <stdio.h>
 
// gcd of a and b
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
 
// Interface
int main()
{
    int a, b;
    printf("Enter two integers: \n a: ");
    scanf("%d", &a);
    printf(" b: ");
    scanf("%d", &b);
    printf("gcd(%d, %d) = %d", a, b, gcd(a, b));
    return 0;
}