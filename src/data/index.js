(function (data){
  var seedData = require("./seedData");
  var database = require("./data");
  data.getNoteCategories= function(next){

  next(null,seedData.initailNotes);
 }; 

 function seedDatabase() {
  database.getDb(function (err,db) {
   if(err)
   {
     console.log("Failed to connect" + err);
   } else
   {
     db.notes.count(function (err,count) {
      if (err)
      {
        console.log("Error failed to fine notes"); 
      }  else
      {
        if (count==0)
        { 
          console.log("Seeding the database");
          seedData.initialNotes.forEach(function (item){
           db.notes.insert(function (err) {
            if (err) console.log("Failed to insert seed data");
           });
          });
         } 
	 else {
	  console.log("Database already seeded");
	}	
       }
    });
   }
  });
 
 }

 seedDatabase();

}) (module.exports);