from datetime import datetime, timedelta

class Pooltable:
    def __init__(self, name):
        self.name = name
        self.available = True
        self.start_time = None
        self.end_time = None

    def check_out(self):
        self.available = False
        self.start_time = datetime.now()


    def check_in(self):
        self.available = True
        self.end_time = datetime.now()

    def play_time(self):
        if self.start_time == None:
            time_diff = timedelta(minutes = 0)
        elif self.end_time == None:
            time_diff = datetime.now() - self.start_time
        else:
            time_diff = self.end_time - self.start_time
        output_minutes = time_diff.total_seconds() / 60 
        return output_minutes

    def say_name(self):
        print(self.name)