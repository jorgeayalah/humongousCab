// //INSERTING EMPLOYEES

// db.employees.insert(
//     {
//       "_id" : NumberInt(10001),
//       "firstName" : "John",
//       "lastName" : "Higgins",
//       "info" : {
//         "phone" : "07426358798",
//         "workPhone" : "07587933345",
//         "email" : "johnhiggins789@gmail.com"
//       },
//       "address" : {
//         "postcode" : "E6 9XZ",
//         "street" : "Bankroft Road",
//         "houseNumber" : "24a",
//         "city" : "London"
//       },
//       "dob" : new Date("1988-05-20"),
//       "inCompanySince" : new Date("2017-07-14"),
//       "licence" : {
//         "licenceId" : "HIGGI743548DR4ER",
//         "countryIssued" : "United Kingdom",
//         "issueDate" : new Date("2005-04-05"),
//         "expiryDate" : new Date("2022-04-05")
//       },
//       "empStatus" : true,
//       "shiftId" : [NumberInt(1), NumberInt(2), NumberInt(3)],
//       "salary" : 33500
  
//     }
//   )


// INSERTING  DRIVERS

db.drivers.insert(
    {
        "_id" : NumberInt(22060912),
        "name" : "Jalen",
        "lastName" : "Paul",
        "pronouns"  : "he/his/him",
        "dateOfBirth"   : new Date("1990-12-25"), 
        "contactDetails": {
            "phone" : "077799822221",
            "workPhone" : "077799822233",
            "email" : "jalenpaul789@gmail.com"
        },
        "address"   : {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20a",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-08-20"),
            "licenceId" : "NDFU957054SM9IJ",
            "countryWhereIssued" : "Wales" 
        },
        "previousTwoRoles" : {
            "roleOne"   : "Secretary",
            "roleTwo"   : "Driver"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(1),
            "grumpyWhileDriving" : true
        },
        "shift"  : [NumberInt(1), NumberInt(2), NumberInt(3)]
    }
)

// CARS
db.cars.insertMany([
    {
        "registration":{
            "number": "PZ65 WSN",
            "regDate": new Date("2018-05-21")
        },
        "brand": "Lexus",
        "lastMOT": new Date( "2022-06-18"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(22060904), //Belongs to Alice Crisp
        "noSeats": NumberInt(5)
    },
    {
        "registration":{
            "number": "PZ68 GRE",
            "regDate": new Date("2017-08-22")
        },
        "brand": "honda",
        "lastMOT": new Date( "2022-03-16"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(22060901), //Belongs to Alice Crisp
        "noSeats": NumberInt(5)
    },
    {
        "registration":{
            "number": "NU65 FRE",
            "regDate": new Date("2019-10-13")
        },
        "brand": "bmw",
        "lastMOT": new Date( "2022-10-08"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(22060904), //Belongs to Alice Crisp
        "noSeats": NumberInt(7)
        
    },
    {
        "registration":{
        "number": "PZ46 NWA",
        "regDate": new Date("2015-12-21")
        },
        "brand": "Mercedes",
        "lastMOT": new Date( "2022-12-18"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(1010101), //Belongs to Company
        "noSeats": NumberInt(5)
        
    },
    {
        "registration":{
        "number": "LY55 DTA",
        "regDate": new Date("2013-08-26")
        },
        "brand": "Toyota",
        "lastMOT": new Date( "2022-08-18"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(22060904), //Belongs to Alice Crisp
        "noSeats": NumberInt(5)
        
    },
    {
        "registration":{
        "number": "PZ65 WSN",
        "regDate": new Date("2018-09-05")
        },
        "brand": "ford",
        "lastMOT": new Date( "2022-09-10"),
        "roadworthy": true, 
        "inService": false,
        "owner": NumberInt(1010101), //Belongs to Company
        "noSeats": NumberInt(7)
        
    }
      
])

// OPERATORS
db.operators.insertMany([   
    {
        "_id": NumberInt(2030405),
        "name": "Oluremi",
        "lastName": "Stockman",
        "shift":    {
            "morning": true,
            "afternoon": false,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030401),
        "name": "Jeff",
        "lastName": "Pain",
        "shift":    {
            "morning": true,
            "afternoon": false,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030402),
        "name": "Pasley",
        "lastName": "Harris",
        "shift":    {
            "morning": false,
            "afternoon": true,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030400),
        "name": "Luisa",
        "lastName": "Taranga",
        "shift":    {
            "morning": false,
            "afternoon": false,
            "night": true
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030409),
        "name": "Jackson",
        "lastName": "Gilman",
        "shift":    {
            "morning": false,
            "afternoon": true,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030408),
        "name": "Uriah",
        "lastName": "Beckman",
        "shift":    {
            "morning": false,
            "afternoon": false,
            "night": true
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030407),
        "name": "Ryan",
        "lastName": "Arman",
        "shift":    {
            "morning": false,
            "afternoon": true,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    },
    {
        "_id": NumberInt(2030406),
        "name": "Amanda",
        "lastName": "Tori",
        "shift":    {
            "morning": true,
            "afternoon": false,
            "night": false
        },
        "salary":   {
            "pay": 1100,
            "coin": "USD"
        }
    }
])

// // BOOKINGS
// db.bookings.insertMany([
//     {
//         "bookingDate" : new Date(2022-12-11),
//         "customer":
//         {
//             "name": Joe,
//             "lastName":Schmoe
//         },
//         "noPassengers": NumberInt(2),
//         "requests": "n/a",
//         "phone": "04203334567",
//         "addressStart"   : {
//             "postcode" : "E1 4PU",
//             "street" : "Westfield Way",
//             "houseNumber" : "30b",
//             "city" : "London"
//         },
//         //"startCoord":
//         //"endCoord":

//         "addressFinish"   : {
//             "postcode" : "TW6 EGW",
//             "street" : "Compass centre, Jackson Heights",
//             "houseNumber" : "Airport terminal 5",
//             "city" : "London"
//         },
//         "driv



//     }
// ])