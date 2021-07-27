
#Factorial

number = int(input("enter number in here:   "))

factorial = 1

if number == 0:
   print("The factorial of 0 is 1")
else:
   for int in range(1,number + 1):
       factorial = factorial * int
   print("The factorial of", number, "is",factorial)



