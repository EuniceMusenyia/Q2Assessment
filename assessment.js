// # question 1
// # input : length, moral lessons, language
// # output: stories translation to different languages.
// # process: class Stories, then subclasses to inherit the main class attributes.


class Story{
    constructor(length, moral_lesson, ageGroup){
        this.title = length
        this.moral_lesson = moral_lesson
        this.age_group = ageGroup
    }
}

class Story1 extends Story{
    constructor(title){
        this.title = title
    }

    give_story(){
       console.log("The title of the sory is{this.title}")
    }

}
class Story_Teller extends Story{

    tell_story(){
        console.log("{this.name} is telling the story{this.title}")

    }
}
class Translator extends Story{

    story_translation(){
        console.log("{this.translator} will translate {this.title} from {this.language} to {this.audienceLanguange}")
    }
}     

// # question 2
// # input: ingredients, preptime, cookngmethod, nutritionalinfo
// # output: different coisines with their various prep methods, nutritions and their ingrediates
// # process: create a class recipe with the attributes ingrediates, prep time, method and nutrition info.
// # create a method inthe class recipe to dispay the recipes. then create subclasses for the different 
// # recipes which inherit from the main class.


class Recipe{
    constructor(ingredients, prep_time, cooking_method, nutritional_info){
        this.ingredients = ingredients
        this.preparation_time = prep_time
        this.cooking_method = cooking_method
        this.nutritional_info = nutritional_info
    }
    coisine_recipe(){
        console.log("Ingredients:")
        for (ingredient in self.ingredients){
            console.log("{ingredient}")
        }
       console.log("{this.prep_time}")
        console.log("{this.cooking_method}")
        console.log("{this.nutritional_info}")
  
    }
}

class Moroccan_recipe extends Recipe{
  constructor(ingredients, prep_time, cooking_method, nutritional_info){
        super( ingredients, prep_time, cooking_method, nutritional_info)

  }
        moroccan_recipe(){
            super().moroccan_recipe()
        console.log("The morocaan recipe uses the following {this.ingredients}")

        }
    }

class Ethiopian_recipe extends Recipe{
   constructor(ingredients, prep_time, cooking_method, nutritional_info){
        super( ingredients, prep_time, cooking_method, nutritional_info)
   }
        ethiopia_recipe(){
            super().coisine_recipe()
        console.log("The Ethiopian recipe uses the following {this.ingredients}")
        }
    }
class Nigerian_recipe extends Recipe{
    constructor (self, ingredients, prep_time, cooking_method, nutritional_info){
        super().__init__( ingredients, prep_time, cooking_method, nutritional_info)
    }
    nigeria_recipe(self){
        super().coisine_recipe()
        console.log("The Nigerian recipe uses the following {this.ingredients}")
    }
}
// # question 3
// input: diet, lifespan, migrationpatterns,
// output: predators, prey
// process: create a class species with the attriutes in the output, then create subclasses 
// to inherit from the main class with the methods of determining if the species are either preys or predators.ageGroup
class Species{
    constructor(diet, lifespan, migrationpatterns){
        this.diet = diet
        this.lifespan = lifespan
        this.migrationpatterns = lifespan

    }
}

class Predator extends Species{
    getpredator(feeding){
        if (this.feeding == "hunt"){
            return "{self.species} is a predator"
        }
}
}

class Prey extends Species{
     getpredator(self,feeding){
        if (self.feeding != "hunt"){
            return "{self.species} is a prey"
        }
}
}

// # question 4
// input:
// output:
// process:

// # question 5

// # input: name, price, quantity
// # output: product total value
// # process: a class product with a method on calculating the total value of product.
class Product{
     constructor(self, name, price, quantity){
        self.name = name
        self.price = price
        self.quantity = quantity
     }
    total_value(){
        return self.price * self.quantity
    }
}

// # question 6
// # question 7
class FlightBooking{
    constructor( flight, booking){
        this.flight = []
        this.booking = []
        

    search_flights(self, destination, date){
        flights = []
        for (flight in self.flights)
            if (flight.destination == destination and flight.date == date){
                flights.append(flight);
            }
        return flights
    }  
}
}  

    reserve_seat(flight){
        if (flight.available_seats > 0);{
        
            return "book flight"
        }
        else{
            return "flight full"
        
    }
}
// # question 8:

