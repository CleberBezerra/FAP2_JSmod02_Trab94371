//const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Conexao = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Conexao;
}