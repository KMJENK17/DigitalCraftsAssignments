# file = open("guest.txt", "w")
# name = input("enter your name here:   ")
# file.write(name)
# file.close()

# with open("todo.txt", "w") as file:
#     file.write("clean ya room \n" "do the dishes you hog")
    


# task_name = input("Enter todo list task: ")
# with open("todo.txt", "a") as file:
#     file.write("\n")
#     file.write(task_name)
    
# with open("todo.txt") as file:
#     content = file.read()
#     print(content)

# with open("todo.txt") as file:
#     lines = file.readlines()

# print(lines)
# file = open("favdish.txt", "w")

# while True:
#     dish = input("What is your favorite dish?  \n enter Q to display all")
#     file = open("favdish.txt", "w")
#     with open("favdish.txt", "a") as file:
#         file.write(dish)

#     if dish == "Q":
#         with open("todo.txt") as file:
#             content = file.read()
#             print(content)

#         break


emails = ("jvye@msn.com, vwxjjjg@msn.com, vhvxfuy@apple.com, yrhs@hotmail.com, fsqqxo@apple.com, ulouyut@hotmail.com, focuwq@apple.com, jonl@msn.com, xjiwixj@msn.com, peej@yahoo.com, zjfsrsvv@gmail.com, leqoewm@hotmail.com, dkky@yahoo.com, tvqxjg@yahoo.com, lmmyz@hotmail.com, oclxjq@apple.com, qmfeff@yahoo.com, hxuhnm@gmail.com, tyfjkw@hotmail.com, dpynrsq@apple.com, wyhyprqv@apple.com, lbeuoqv@msn.com, vgvrtx@apple.com, mgypi@gmail.com, jzvpr@msn.com, peej@yahoo.com, rtwjsl@msn.com, tinwl@apple.com, udwo@gmail.com, qmfeff@yahoo.com, xmkhuppo@hotmail.com, hinqs@apple.com, fkhr@gmail.com, dpynrsq@apple.com, qjjxjqi@yahoo.com, ykux@yahoo.com, hldqqhlj@apple.com, fnti@yahoo.com, rmmmr@apple.com, peej@yahoo.com, dpynrsq@apple.com, gvpzty@msn.com, gfngl@apple.com, qlxg@apple.com, mmwfg@apple.com, bvsfzk@msn.com, cbwiojkj@gmail.com, bhlh@yahoo.com, gzxs@yahoo.com, kjpoojm@gmail.com, ndnyfvjo@msn.com, mhvingou@hotmail.com, brjf@apple.com, ejdltm@hotmail.com")
file = open("duplicate-free-email-list.txt")
file.write(emails)
file.close()

file = open("emails_1.txt")


with open("duplicate-free-email-list.txt", "a") as file:
    content = file.read()
    lst = content.split(',')
    dup_arr = []
    unique_arr = []
    for item in lst:
        if item not in unique_arr:
            unique_arr.append(item)
        else:
            dup_arr.append(item)


    print(unique_arr)
    print("------")
    print(dup_arr)
    print("------")

with open("emails_1.txt", "a") as file:
    for item in dup_arr:
        file.write(item)
        file.write("\n")