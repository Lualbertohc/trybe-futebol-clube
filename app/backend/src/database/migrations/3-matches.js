'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('matches', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            homeTeamId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'teams',
                    key: 'id',
                },
                field: 'home_team_id',
            },
            homeTeamGoals: {
                type: Sequelize.INTEGER,
                allowNull: false,
                field: 'home_team_goals',
            },
            awayTeamId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'teams',
                    key: 'id',
                },
                field: 'away_team_id',
            },
            awayTeamGoals: {
                type: Sequelize.INTEGER,
                allowNull: false,
                field: 'away_team_goals',
            },
            inProgress: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                field: 'in_progress',
            },
        });
    },

    async down(queryInterface, _) {
        await queryInterface.dropTable('matches');
    }
};