// INSERTING...

//  DRIVERS
db.drivers.insertMany([
    {
        "_id" : NumberInt(22060900),
        "name" : "Jalen",
        "lastName" : "Paul",
        "pronouns"  : "he/his/him",
        "dateOfBirth": new Date("1990-12-25"), 
        "contactDetails": {
            "phone" : "077799822221",
            "workPhone" : "077799822233",
            "email" : "jalenpaul789@gmail.com"
        },
        "address": {
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
            "roleOne": "Secretary",
            "roleTwo": "Driver"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(1),
            "grumpyWhileDriving" : true
        },
        "shift": {
            "morning": false,
            "noon"   : true,
            "night"  : false
        },
        "isAvailable": true, 
        "revenue": {
            "grossIncome": NumberInt(3600), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 1200,  // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060901),
        "name" : "Jorge",
        "lastName" : "Hernandez",
        "pronouns"  : "he/his/him",
        "dateOfBirth": new Date("1996-11-20"), 
        "contactDetails": {
            "phone" : "077799822238",
            "workPhone" : "077799822763",
            "email" : "jorge.hdez@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20c",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-03-16"),
            "licenceId" : "NDFU957054SM8JH",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Driver",
            "roleTwo": "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(2),
            "grumpyWhileDriving" : false
        },
        "shift"  :{
            "morning": false,
            "noon"   : false,
            "night"  : true
        },
        "isAvailable": true, 
        "revenue": {
            "grossIncome": NumberInt(2700), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 1000,  // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060902),
        "name" : "Olliver",
        "lastName" : "Williams",
        "pronouns"  : "he/his/him",
        "dateOfBirth": new Date("1995-07-20"), 
        "contactDetails": {
            "phone" : "077799822228",
            "workPhone" : "077799822233",
            "email" : "olliwilliams20@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20b",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-06-20"),
            "licenceId" : "NDFU957054SM6OJ",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Teacher",
            "roleTwo": "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : true
        },
        "shift"  :{
            "morning": false,
            "noon"   : false,
            "night"  : true
        },
        "isAvailable": true, 
        "revenue": {
            "grossIncome": NumberInt(3350), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 1100,  // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060903),
        "name" : "Henry",
        "lastName" : "Scott",
        "pronouns"  : "he/his/him",
        "dateOfBirth": new Date("1996-11-20"), 
        "contactDetails": {
            "phone" : "077799822238",
            "workPhone" : "077799822763",
            "email" : "henry.scott@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20c",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-03-16"),
            "licenceId" : "NDFU957054SM8JH",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Driver",
            "roleTwo": "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(2),
            "grumpyWhileDriving" : false
        },
        "shift"  :{
            "morning": false,
            "noon"   : false,
            "night"  : true
        },
        "isAvailable": false,
        "revenue": {
            "grossIncome": NumberInt(3000), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 1000,  // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060904),
        "name" : "Christina",
        "lastName" : "Pharrell",
        "pronouns"  : "they/them",
        "dateOfBirth": new Date("1999-05-29"), 
        "contactDetails": {
            "phone" : "077799822321",
            "workPhone" : "077799822321",
            "email" : "pharrell.christi@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20d",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-06-20"),
            "licenceId" : "NDFU957054SM1PC",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Teacher",
            "roleTwo": "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : true
        },
        "shift"  :{
            "morning": false,
            "noon"   : false,
            "night"  : true
        },
        "isAvailable": false,
        "revenue": {
            "grossIncome": NumberInt(3400), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": false
                },
                "value" : 0.35, // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060905),
        "name" : "Alice",
        "lastName" : "Crisp",
        "pronouns"  : "she/her",
        "dateOfBirth": new Date("1994-10-21"), 
        "contactDetails": {
            "phone" : "077799820123",
            "workPhone" : "077799820123",
            "email" : "aalice.crispp@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20e",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-01-08"),
            "licenceId" : "NDFU957054SM7AC",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Teacher",
            "roleTwo": "Chef"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : false
        },
        "shift"  :{
            "morning": true,
            "noon"   : false,
            "night"  : false
        },
        "isAvailable": false,
        "revenue": {
            "grossIncome": NumberInt(3000), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 0.33, // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    },
    {
        "_id" : NumberInt(22060906),
        "name" : "Muhammad",
        "lastName" : "Gill",
        "pronouns"  : "he/him/his",
        "dateOfBirth": new Date("1994-10-21"), 
        "contactDetails": {
            "phone" : "077799820129",
            "workPhone" : "077799820129",
            "email" : "muhammad.g@gmail.com"
        },
        "address": {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "20e",
            "city" : "London"
        },
        "employmentRec" : {
            "employedSince": new Date("2021-01-08"),
            "licenceId" : "NDFU957054SM7AC",
            "countryWhereIssued" : "England" 
        },
        "previousTwoRoles" : {
            "roleOne": "Teacher",
            "roleTwo": "Demonstrator"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : false
        },
        "shift"  :{
            "morning": true,
            "noon"   : false,
            "night"  : false
        },
        "isAvailable": false,
        "revenue": {
            "grossIncome": NumberInt(3300), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": false
                },
                "value" : 0.34, // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    }
])


// CARS
db.cars.insertMany([
    {
        "_id": NumberInt(70000220),
        "registration":{
            "number": "PZ65 WSN",
            "regDate": new Date("2018-05-21")
        },
        "brand": "Lexus",
        "isLuxury": false,
        "lastMOT": new Date( "2022-06-18"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060900), //Belongs to Jalen
        "noSeats": NumberInt(5),
        "location": {
            type: "Point",
            coordinates: [51.522412, -0.042520] // Mile end
        }
    },
    {
        "_id": NumberInt(70000221),
        "registration":{
            "number": "PZ68 GRE",
            "regDate": new Date("2017-08-22")
        },
        "brand": "honda",
        "isLuxury": false,
        "lastMOT": new Date( "2022-03-16"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060901), //Belongs to Jorge
        "noSeats": NumberInt(5),
        "location": {
            type: "Point",
            coordinates: [51.506549, -0.027246] // Canary Wharf
        }
    },
    {
        "_id": NumberInt(70000222),
        "registration":{
            "number": "NU65 FRE",
            "regDate": new Date("2019-10-13")
        },
        "brand": "bmw",
        "isLuxury": false,
        "lastMOT": new Date( "2022-10-08"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060902), //Belongs to Olliver
        "noSeats": NumberInt(7),
        "location": {
            type: "Point",
            coordinates: [51.501285, -0.130141] //Westminster
        }
    },
    {
        "_id": NumberInt(70000223),
        "registration":{
        "number": "PZ46 NWA",
        "regDate": new Date("2015-12-21")
        },
        "brand": "Mercedes",
        "isLuxury": true,
        "lastMOT": new Date( "2022-12-18"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060903), //Belongs to Henry
        "noSeats": NumberInt(5),
        "location": {
            type: "Point",
            coordinates: [51.539052, -0.138681] //Camden
        }
    },
    {
        "_id": NumberInt(70000224),
        "registration":{
        "number": "LY55 DTA",
        "regDate": new Date("2013-08-26")
        },
        "brand": "Toyota",
        "isLuxury": false,
        "lastMOT": new Date( "2022-08-18"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060904), //Belongs to Christina
        "noSeats": NumberInt(5),
        "location": {
            type: "Point",
            coordinates: [51.482074, -0.005441] //Greenwich
        }
    },
    {
        "_id": NumberInt(70000225),
        "registration":{
        "number": "PZ65 WSN",
        "regDate": new Date("2018-09-05")
        },
        "brand": "ford",
        "isLuxury": false,
        "lastMOT": new Date( "2022-09-10"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(1010101), //Belongs to Alice
        "noSeats": NumberInt(7),
        "location": {
            type: "Point",
            coordinates: [51.518854, -0.079414] //Liverpool Stret
        }
    },
    {
        "_id": NumberInt(70000226),
        "registration":{
        "number": "PZ65 WRT",
        "regDate": new Date("2018-04-10")
        },
        "brand": "RangeRover",
        "isLuxury": true,
        "lastMOT": new Date( "2022-09-10"),
        "isRoadworthy": true, 
        "isInService": false,
        "owner": NumberInt(22060906), //Belongs to Muhammad
        "noSeats": NumberInt(7),
        "location": {
            type: "Point",
            coordinates: [51.510470, -0.185101] //Notting Hill
        }
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


db.clients.insertMany([
    {
        "_id": NumberInt(23405060),          //onoff via the phone
        "name": "Jose",
        "lastName": "Serrano",
        "phone": "04203456906",
    },
    {
        "_id": NumberInt(23405061),          //regular corporate
        "name": "Joe",
        "lastName": "Schmoe",
        "phone": "04203334567",
        "email": "joes@gmail.com",
        "isCorporate": true,        // schemaless
        "corporation": "Google",
        "reminder": 
        {
            "tenMin":       false,
            "thirtyMin":    true,
            "oneHour":      true,
            "oneDay":       true
        }
    },
    {
        "_id": NumberInt(23405062),          // regular private
        "name": "Jessica",
        "lastName": "Sweet",
        "phone": "04205464567",
        "email": "jessica.candy@gmail.com",
        "isCorporate": false,        // schemaless
        "reminder": 
        {
            "tenMin":       false,
            "thirtyMin":    true,
            "oneHour":      true,
            "oneDay":       true
        }
    }
])

// BOOKINGS
db.bookings.insertMany([
    {
        "_id": NumberInt(5000010),
        "bookingDate" : new Date(2022-12-11),
        "frequency": 
        {
            "daily": false,
            "weekly": false,
            "monthly": true,
            // "custom": {      // schemalessness
            //     "mo": false,
            //     "tu": false,                
            //     "we": false,                
            //     "th": false,                
            //     "fr": false,                
            //     "sa": false,                
            //     "su": false,                
            // }
        },
        "client":
        {
            "name": "Joe",
            "lastName": "Schmoe",
            "phone": "04203334567",
        },
        "noPassengers": NumberInt(1),
        "wantsLuxury": false,
        "requests": "n/a",
        "addressStart"   : {
            "postcode" : "E1 4PU",
            "street" : "Westfield Way",
            "houseNumber" : "30b",
            "city" : "London"
        },
        "addressFinish"   : {
            "postcode" : "TW6 EGW",
            "street" : "Compass centre, Jackson Heights",
            "houseNumber" : "Airport terminal 5",
            "city" : "London"
        },
        //"startCoord":
        //"endCoord":
    },
    {
        "_id": NumberInt(5000011),
        "bookingDate" : new Date(2022-10-15),
        "frequency": 
        {
            "daily": false,
            "weekly": false,
            "monthly": false,
            "custom": {      // schemalessness
                "mo": true,
                "tu": false,                
                "we": true,                
                "th": false,                
                "fr": true,                
                "sa": false,                
                "su": false,                
            }
        },
        "client":
        {
            "name": "Jessica",
            "lastName": "Sweet",
            "phone": "04205464567",
        },
        "noPassengers": NumberInt(2),
        "wantsLuxury": true,
        "requests": "n/a",
        "addressStart"   : {
            "postcode" : "E1 3NS",
            "street" : "Stayners Road",
            "houseNumber" : "45c",
            "city" : "London"
        },
        "addressFinish"   : {
            "postcode" : "WC1E 7HU",
            "street" : "Malet St",
            "houseNumber" : "Senate House University of London",
            "city" : "London"
        },
        //"startCoord":
        //"endCoord":
    }
])

db.payment.insertMany([
    {
        "_id": NumberInt(90000),
        "bookingID": NumberInt(5000010),
        "total": Number(45),
        "method":
        {
            "debit": true,
            "credit": false,
            "applePay":false,

        }

    }
])

// QUERIES

// db.drivers.aggregate([{     //this $match notation works for more than two or more embedded document fields
//     '$match': {
//         "revenue": {
//             "salary": {
//                 "type": {
//                     "isFixed": false,
//                     "anotherField": true
//                 }
//             }
//         }
//     }
//   )

// db.drivers.aggregate([{
//     '$match': {
//         "revenue.salary.type.isFixed": false
//     },
//     '$project': {
//         _id: 1, name: 1, lastName: 1, revenue: 1
//     }
// }]).pretty()

// db.drivers.aggregate([{
//     $match: {
//         "revenue.salary.type.isFixed": false
//     }
// },
// {
//     $project: {
//         _id: 1, name: 1, lastName: 1, revenue: 1
//     }
// }
// ]).pretty()

// db.cars.aggregate([
//     {
//     "$search": {
//         "geoWithin": {
//             "circle": {
//                 "center": {
//                     "type": "Point",
//                     "coordinates" : [51.517775, -0.027087] 
//                 },
//                 "radius": 1600
//             },
//             "path": "location"
//         }
//     }
// },
//     {
//     $limit: 2
//     },
//     {
//         $project: {
//         "_id": 1,
//         "brand": 1
//         }
//     }
// ])

// db.cars.aggregate([
//     {
//       "$search": {
//         "geoWithin": {
//           "circle": {
//             "center": {
//               "type": "Point",
//               "coordinates": [51.517775, -0.027087]
//             },
//             "radius": 1600
//           },
//           "path": "location"
//         }
//       }
//     },
//     {
//       $limit: 2
//     },
//     {
//       $project: {
//         "_id": 0,
//         "brand": 1,
//         "owner": 1
//       }
//     }
//   ])

// db.drivers.aggregate([
//     {
//         $match: 
//     }
// ])

