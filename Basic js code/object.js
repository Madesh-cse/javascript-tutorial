var person = {


    firstName: 'Adam',
    secondName: 'Smith',
    age: 25,
    ownsCar : false

}
    console.log(person)

    // two ways to access the object 

    // bracket notation

  console.log(person ["firstName"]) 

    // dot operator

   console.log(person.secondName) ;

   var mad = {
    //key:value

    FirstName : "Madesh",

    LastName : "Mohan",

    BioPic  : ["School","college"],

    education : {
      Class : [1,2,3,4,5,6,7,8,9,10,11,12,"1year","2year"]
    }
   }

   console.log(mad.BioPic[1])

   console.log(mad.education.Class[12]);

   mad.BioPic[0] = "Kindergarden"

   console.log(mad.BioPic)

   mad.activity = ["sports","programming"]

   console.log(mad);

   delete mad.education.Class[2]  // delete property

   console.log(mad.education.Class)

   mad.education.Class[2] = "good boy"

   console.log(mad.education.Class)