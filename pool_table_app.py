


from datetime import datetime
from pool_table_class import Pooltable

tables = []


for index in range(12):
  table = Pooltable(index + 1)
  tables.append(table)

while True:

  print("------- Pool Table App -------")
  print("1. Check Out a table")
  print("2. Check in a table")
  print("3. View table availability")
  print("4. Type Q to quit this app")
  start = int(input("Enter a number:  "))

  if start == 1:
    check_out()
  
  if start == 2:  
    check_in()
   
  if start == 3:
    occupancy_check()
    
  
  if start == 4:  
    break


def format_time(time): 
  timestamp = time.strftime("%m/%d/%y at %I:%M %p")
  str_timestamp = timestamp
  return str_timestamp


def occupancy_check():
  print(" ------ Table List ------")
  for table in tables:
    if table.is_occupied == True:
      start = start.format_time(table.start_time)
      table.end_time = datetime.datetime.now()
      print(f"{tables} is occupied")
    else:
      print(f"{tables} is vacant")

def check_out():
  occupancy_check()
  choice = int(input("Please select a table to check it in:  "))
  chosen = tables[choice -1]
  if chosen.is_occupied == True:
    print("This table is occupied")
    
def check_in():
  occupancy_check()
  choice = int(input(" Please select an occupied table to close it out:  "))
  chosen = tables[choice-1]
  chosen.checked_back_in()
    
