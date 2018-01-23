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
        }
        
        },{
            timestamps: true,
            freezeTableName: true
    });
    
    sequelize.sync({
        //force: true
    })
    
    // .then(function () {
    //     Worker.create({
    //         name: "Kane",
    //         zip_code: 95868,
    //         email: "Kane@mail.com",
    //         phone: "(959)-334-2341",
    //         service: "Auto mechanic"
    //     })
    // })
    return Worker;
}
