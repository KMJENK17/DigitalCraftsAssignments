

#Palindrome


Word = input("please enter word here:     ")
 
No  = ""
for letters in Word:
     No = letters + No
 
if (Word == No):
    print("Yes")
else:
    print("No")
   