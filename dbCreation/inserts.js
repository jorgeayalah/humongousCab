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
        "_id" : NumberInt(22060902),
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
        "_id" : NumberInt(22060901),
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
        "revenue": {
            "grossIncome": NumberInt(3300), // Total revenue drives produces for the company
            "salary": {
                "type" : 
                {
                    "isFixed": true
                },
                "value" : 0.34, // If fixed just substract qty from grossIncome
                                // else (percentage) then multiply factor value by grossIncome
                "coin"  : "GBP"
            }
        }
    }
])

//  CARS


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
// }])

db.drivers.aggregate([{     //the dot notation works for $match when only looking for an exact embedded document field 
    '$match': {
        "revenue.salary.type.isFixed": false
    }
}])