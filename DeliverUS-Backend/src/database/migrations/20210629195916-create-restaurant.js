module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      averageServiceMinutes: {
        type: Sequelize.DOUBLE
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      herolmage: {
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'online',
          'offline',
          'closed',
          'temporarily closed'
        ]
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'User'
          },
          key: 'id'
        }
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
