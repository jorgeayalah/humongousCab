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
<<<<<<< Updated upstream
//   )
=======
//   )


// INSERTING...
//  DRIVERS

db.drivers.insert(
    {
        "_id" : NumberInt(22060900),
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
        "shift"  : [false, true, false] //morning, noon or night
    },
    {
        "_id" : NumberInt(22060901),
        "name" : "Olliver",
        "lastName" : "Williams",
        "pronouns"  : "he/his/him",
        "dateOfBirth"   : new Date("1995-07-20"), 
        "contactDetails": {
            "phone" : "077799822228",
            "workPhone" : "077799822233",
            "email" : "olliwilliams20@gmail.com"
        },
        "address"   : {
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
            "roleOne"   : "Teacher",
            "roleTwo"   : "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : true
        },
        "shift"  : [false, false, true] //morning, noon or night
    },
    {
        "_id" : NumberInt(22060902),
        "name" : "Jorge",
        "lastName" : "Hernandez",
        "pronouns"  : "he/his/him",
        "dateOfBirth"   : new Date("1996-11-20"), 
        "contactDetails": {
            "phone" : "077799822238",
            "workPhone" : "077799822763",
            "email" : "jorge.hdez@gmail.com"
        },
        "address"   : {
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
            "roleOne"   : "Driver",
            "roleTwo"   : "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(2),
            "grumpyWhileDriving" : false
        },
        "shift"  : [false, false, true] //morning, noon or night
    },
    {
        "_id" : NumberInt(22060903),
        "name" : "Christina",
        "lastName" : "Pharrell",
        "pronouns"  : "they/them",
        "dateOfBirth"   : new Date("1999-05-29"), 
        "contactDetails": {
            "phone" : "077799822321",
            "workPhone" : "077799822321",
            "email" : "pharrell.christi@gmail.com"
        },
        "address"   : {
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
            "roleOne"   : "Teacher",
            "roleTwo"   : "Volunteer"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : true
        },
        "shift"  : [false, false, true] //morning, noon or night
    },
    {
        "_id" : NumberInt(22060904),
        "name" : "Alice",
        "lastName" : "Crisp",
        "pronouns"  : "she/her",
        "dateOfBirth"   : new Date("1994-10-21"), 
        "contactDetails": {
            "phone" : "077799820123",
            "workPhone" : "077799820123",
            "email" : "aalice.crispp@gmail.com"
        },
        "address"   : {
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
            "roleOne"   : "Teacher",
            "roleTwo"   : "Chef"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : false
        },
        "shift"  : [true, false, false] //morning, noon or night
    },
    {
        "_id" : NumberInt(22060905),
        "name" : "Alice",
        "lastName" : "Crisp",
        "pronouns"  : "she/her",
        "dateOfBirth"   : new Date("1994-10-21"), 
        "contactDetails": {
            "phone" : "077799820123",
            "workPhone" : "077799820123",
            "email" : "aalice.crispp@gmail.com"
        },
        "address"   : {
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
            "roleOne"   : "Teacher",
            "roleTwo"   : "Chef"
        },
        "disciplinaryProc"  : {
            "amountOfWarnings"  : NumberInt(0),
            "grumpyWhileDriving" : false
        },
        "shift"  : [true, false, false] //morning, noon or night
    }
)

//  CARS
>>>>>>> Stashed changes
