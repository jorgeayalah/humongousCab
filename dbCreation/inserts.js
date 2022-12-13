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