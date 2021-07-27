import json

users = []

    
while True:
    
    name = input("Enter name:  ")

    age = int(input("Enter age:   "))

    user = {"name": name, "age": age}

    users.append(user)

    with open("users.json", "w") as file:
            json.dump(user, file)
    
    choice = input("Q to quit, or any key to continue:  ")
    
    if choice == "q":
        break




with open("users.json") as file:
        json.load(file)

for use in users:
    print(user[f'{name}, {age}'])
    