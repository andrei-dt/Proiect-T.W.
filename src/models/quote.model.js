module.exports = (sequelize, DataTypes) => {
    const Quote = sequelize.define("quote", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        quoteText: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'quote_text'
        },
        quoteAuthor: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'quote_author'

        },
        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'created_at'

        },

    }, {
        timestamps: false
    });
    Quote.associate = (models) => {
        Quote.hasMany(models.translation);
    };
    return Quote;
};