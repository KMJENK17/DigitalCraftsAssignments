#prime-not prime
print("Please choose an option")

print("1. Add")

print("2. Subtract")

print("3. Multiply")

print("4. Divison")


#Function to allow for addition

def add(number1, number2):
    result = number1 + number2
    print(result)

    
#Function to allow for subtractionc

def subtraction(number1, number2):
    result = number1 - number2
    print(result)

#Function to allow for multiplication to occur

def multiply(number1, number2):
    result = number1 * number2
    print(result)

#Function to allow for divison to occur

def divison(number1, number2):
    result = number1 / number2
    print(result)



choose = int(input("Choose an option "))

number1 = int(input("Enter your first number "))

number2 = int(input("Enter your second number "))

if choose ==1:
    print(number1, "+", number2), "=",
    add(number1, number2)

elif choose == 2:
    print(number1, "-", number2, "=",
        subtraction(number1, number2))
elif choose == 3:
    print(number1, "*", number2, "=",
        multiply(number1, number2))
  
elif choose == 4:
    print(number1, "/", number2, "=",
        divison(number1, number2))



number = int(input("enter number here:     "))

for num in range (2,number):
    if number % num ==0:
        print("Not prime")
        break
else:
    print("prime")

