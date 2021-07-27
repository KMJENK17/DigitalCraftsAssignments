import json
with open("car.json", "w") as file:
    car = {"make": "Tesla", "model": "Model 3", "noOfSeats": 4}
    json.dump(car, file)