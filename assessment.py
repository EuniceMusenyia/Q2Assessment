# question 1
# input : length, moral lessons, language
# output: stories translation to different languages.
# process: class Stories, then subclasses to inherit the main class attributes.


class Story:
    def __init__(self, length, moral_lesson, ageGroup):
        self.title = length
        self.moral_lesson = moral_lesson
        self.age_group = ageGroup

class Story1 (Story):
    def __init__(self, title):
        self.title = title

    def give_story(self):
        print(f"The title of the sory is{self.title}")


class Story_Teller(Story):

    def tell_story(self):
        print (f"{self.name} is telling the story{self.title}")


class Translator(Story):
    def __init__(self, translator, language, audienceLanguage):
        super().__init__(translator, language)
        self.audienceLanguage = audienceLanguage

    def story_translation(self):
        print(f"{self.translator} will translate {self.title} from {self.language} to {self.audienceLanguange}")
        

# question 2
# input: ingredients, preptime, cookngmethod, nutritionalinfo
# output: different coisines with their various prep methods, nutritions and their ingrediates
# process: create a class recipe with the attributes ingrediates, prep time, method and nutrition info.
# create a method inthe class recipe to dispay the recipes. then create subclasses for the different 
# recipes which inherit from the main class.


class Recipe:
    def __init__(self, ingredients, prep_time, cooking_method, nutritional_info):
        self.ingredients = ingredients
        self.preparation_time = prep_time
        self.cooking_method = cooking_method
        self.nutritional_info = nutritional_info

    def coisine_recipe(self):
        print("Ingredients:")
        for ingredient in self.ingredients:
            print(f"{ingredient}")
        print(f"{self.prep_time}")
        print(f"{self.cooking_method}")
        print(f"{self.nutritional_info}")
  


class Moroccan_recipe(Recipe):
   def __init__(self, ingredients, prep_time, cooking_method, nutritional_info):
        super().__init__( ingredients, prep_time, cooking_method, nutritional_info)


        def moroccan_recipe(self):
            super().moroccan_recipe()
        print(f"The morocaan recipe uses the following {self.ingredients}")


class Ethiopian_recipe(Recipe):
   def __init__(self, ingredients, prep_time, cooking_method, nutritional_info):
        super().__init__( ingredients, prep_time, cooking_method, nutritional_info)

        def ethiopia_recipe(self):
            super().coisine_recipe()
        print(f"The Ethiopian recipe uses the following {self.ingredients}")


class Nigerian_recipe(Recipe):
    def __init__(self, ingredients, prep_time, cooking_method, nutritional_info):
        super().__init__( ingredients, prep_time, cooking_method, nutritional_info)

    def nigeria_recipe(self):
        super().coisine_recipe()
        print(f"The Nigerian recipe uses the following {self.ingredients}")

# question 3

#  input: diet, lifespan, migrationpatterns,
#  output: predators, prey
#  process: create a class species with the attriutes in the output, then create subclasses 
#  to inherit from the main class with the methods of determining if the species are either preys or predators.ageGroup

class Species:
    def __init__(self,diet, lifespan, migrationpatterns):
        self.diet = diet
        self.lifespan = lifespan
        self.migrationpatterns = lifespan



class Predator(Species):
    def getpredator(self,feeding):
        if self.feeding == "hunt":
            return "{self.species} is a predator"


class Prey(Species):
     def getpredator(self,feeding):
        if self.feeding != "hunt":
            return "{self.species} is a prey"

# question 4


# question 5

# input: name, price, quantity
# output: product total value
# process: a class product with a method on calculating the total value of product.
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity

# question 6
# question 7

class FlightBooking:
    def __init__(self):
        self.flight = []
        self.booking = []

    def search_flights(self, destination, date):
        flights = []
        for flight in self.flights:
            if flight.destination == destination and flight.date == date:
                flights.append(flight)
        return flights

    def reserve_seat(self, flight):
        if flight.available_seats > 0:
        
            return "book flight"
        else:
            return "flight full"




# question 8:

