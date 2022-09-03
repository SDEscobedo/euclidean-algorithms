
# Basic Euclidean Algorithm
# Python3

# gcd of a and b
def gcd(a, b):
    if a == 0:
        return b
 
    return gcd(b % a, a)
 
# Interface
if __name__ == "__main__":
  print("Enter two integers: ")
  a_text = input ("a: ")
  a = int(a_text)
  b_text = input ("b: ")
  b = int(b_text)
  print("gcd(", a, ",", b, ") = ", gcd(a, b))