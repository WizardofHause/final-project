# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "planting seeds 🌱"
User.destroy_all

puts "Creating Test User"
User.create(name: 'Test', email: 'Test', password: '1111')

puts "grow baby grow 👨🏻‍🌾"