# tasks = []

# while True:

#     print("1 Add Task")
#     print("2 Delete Task")
#     print("3 View All Tasks")
#     print("q Quit")

    
tasks = []

while True:

    print("------------------- Task App ------------------")
    print("1. to Add Tasks")
    print("2. to Delete Tasks")
    print("3. to View All Tasks")
    print("(q) to Quit ")
    print("")
    print("")
    selection = (input("Enter your option number: "))



    if selection == "1":
        print("-------------- Task Maker -------------------")
        print("")
        title = input("Enter your task: ")
        print("")
        print("---------------------------------------------")
        print("-------------- Priority of Task -------------------")
        print("")
        priority = input("Enter the task priority level 'high', 'medium', or 'low': ")
        print("")
        print("---------------------------------------------")
        print("-------------- Task Created -------------------")
        task_dict = {"title" : title, "priority" : priority}
        print("")
        print("")
        tasks.append(task_dict)
        print(task_dict)

    elif selection == "3":
        i = 1
        for task in tasks:
            print(f"{i} - {task['title']} - {task['priority']}")
            i += 1
        
    
    elif selection == "q":
        break

