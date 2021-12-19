const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Translation = sequelize.define("translation", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        translationText: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'translation_text'
        },
        translationLang: {
            type: DataTypes.STRING(10),
            allowNull: false,
            field: 'translation_lang'

        },
        translationSource: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'translation_source'

        },
        quoteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned: true,
            field: 'quote_id'

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
    Translation.associate = (models) => {
        Translation.belongsTo(models.quote, {
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
    };
    return Translation;
};