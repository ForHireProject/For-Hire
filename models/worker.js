module.exports = function (sequelize, DataTypes) {
     
    var Worker = sequelize.define("Worker", {
        // slug: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     primaryKey: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

        },{
            timestamps: true,
            freezeTableName: true
    });
    
    // sequelize.sync({
    //     //force: true
    // })
    
    // .then(function () {
    //     Worker.create({
    //         name: "Sam",
    //         zip_code: 27531,
    //         email: "sam@mail.com",
    //         phone: "(345)-434-3124",
    //         service: "Automobile",
    //         category: "Mechanical",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Josh",
    //         zip_code: 27532,
    //         email: "josh@mail.com",
    //         phone: "(233)-222-1222",
    //         service: "Termites",
    //         category: "Industrial",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Janna",
    //         zip_code: 27433,
    //         email: "janna@mail.com",
    //         phone: "(212)-333-3144",
    //         service: "Care-giver",
    //         category: "Service",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Mike",
    //         zip_code: 27533,
    //         email: "meek@mail.com",
    //         phone: "(233)-222-1222",
    //         service: "Painter",
    //         category: "Construction",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Andy",
    //         zip_code: 23221,
    //         email: "sam@mail.com",
    //         phone: "(345)-434-3124",
    //         service: "Hairstylist",
    //         category: "Service",
    //         availability: false
    //     }),
    //     Worker.create({
    //         name: "Will",
    //         zip_code: 54323,
    //         email: "willie@mail.com",
    //         phone: "(232)-909-8989",
    //         service: "Cook",
    //         category: "Service",
    //         availability: false
    //     })
    //     Worker.create({
    //         name: "Michelle",
    //         zip_code: 27400,
    //         email: "mit@mail.com",
    //         phone: "(212)-333-3144",
    //         service: "Dog walker",
    //         category: "Service",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Carmela",
    //         zip_code: 23004,
    //         email: "car@mail.com",
    //         phone: "(233)-222-1222",
    //         service: "Carpentry",
    //         category: "Construction",
    //         availability: true
    //     })
    //     Worker.create({
    //         name: "Jordan",
    //         zip_code: 27533,
    //         email: "jordan@mail.com",
    //         phone: "(345)-434-3124",
    //         service: "Automobile",
    //         category: "Mechanical",
    //         availability: true
    //     }),
    //     Worker.create({
    //         name: "Keena",
    //         zip_code: 27533,
    //         email: "Keena@mail.com",
    //         phone: "(233)-212-1222",
    //         service: "Baby-sitter",
    //         category: "Service",
    //         availability: false
    //     })
    //     Worker.create({
    //         name: "Dwayne",
    //         zip_code: 27533,
    //         email: "dwayne@mail.com",
    //         phone: "(212)-133-3144",
    //         service: "Movers",
    //         category: "Service",
    //         availability: false
    //     }),
    //     Worker.create({
    //         name: "Ryan",
    //         zip_code: 27523,
    //         email: "ryan@mail.com",
    //         phone: "(232)-252-1292",
    //         service: "Gardening",
    //         category: "Service",
    //         availability: true
    //     })

    // })
    return Worker;
}