
import json


class PoolTable:
    def __init__(self, table_number):
        self.table_number - table_number

pt = PoolTable(6)
print(pt.__dict__)
pt_dict = {"table_number": pt.table_number}
with open("pool_tables.json", "w") as file:
    json.dump(pt.__dict__, file)
