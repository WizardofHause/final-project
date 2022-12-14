puts "planting seeds 🌱"

User.destroy_all
Memory.destroy_all
Comment.destroy_all

puts "Creating Test User"
u1 = User.create(name: 'Test', email: 'Test', password: '1111')
u2 = User.create(name: "Jon", email: "jon@email.com", password: "abc123")
u3 = User.create(name: "Melody", email: "melody@email.com", password: "mel123")
u4 = User.create(name: "Sam", email: "sam@email.com", password: "sam123")
u5 = User.create(name: "Tim", email: "tim@email.com", password: "tim123")
u6 = User.create(name: "Julie", email: "julie@email.com", password: "jul123")
u7 = User.create(name: "Jess", email: "jess@email.com", password: "jes123")
u8 = User.create(name: "Joe", email: "joe@email.com", password: "joe123")
u9 = User.create(name: "Lucy", email: "lucy@email.com", password: "luc123")
u10 = User.create(name: "Stella", email: "stella@email.com", password: "ste123")
u11 = User.create(name: "Abbie", email: "abbie@email.com", password: "abb123")
u12 = User.create(name: "Tobey", email: "tobey@email.com", password: "tob123")
u13 = User.create(name: "August", email: "august@email.com", password: "aug123")
u14 = User.create(name: "Judy", email: "judy@email.com", password: "jud123")

puts "Making Memories..."
m1 = Memory.create(title: "Trip to the Dunes", type: "vacation", status: "completed", main_img: "https://www.nps.gov/common/uploads/grid_builder/grsa/crop16_9/2E8879CA-EF95-283E-C88B7FE90F149C36.jpg?width=950&quality=90&mode=crop", description: "Mel and I went to the Sand Dunes and had a lovely time.", likes: 5, user_id: u2 )
m2 = Memory.create(title: "Wedding: Season 2", type: "celebration", status: "completed", main_img: "https://ktrg.net/wp-content/uploads/2020/10/Loft-Entrance-Front-View-1.jpg", description: "Melody's wedding was as magical as she is.", likes: 600, user_id: u2)
m3 = Memory.create(title: "Wedding: Season 1", type: "celebration", status: "completed", main_img: "https://i0.wp.com/jeanhedrenrealtor.com/wp-content/uploads/2021/05/Heilig-34.jpg?fit=1200%2C800&ssl=1", description: "Jon's wedding was the dopest dope I've ever smoked! SEND THAT SHIIIIT!", likes: 25, user_id: u3)
m4 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m5 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m6 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m7 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m8 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m9 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )
m10 = Memory.create(title: "", type: "", status: "", main_img: "", description: "", likes: "", user_id: )

puts "Generating Comments..."
Comment.create(user_id: u1, memory_id: m1, body: "What a great trip!")
Comment.create(user_id: u1, memory_id: m2, body: "")
Comment.create(user_id: u1, memory_id: m3, body: "")
Comment.create(user_id: u2, memory_id: m4, body: "")
Comment.create(user_id: u2, memory_id: m5, body: "")
Comment.create(user_id: u2, memory_id: m6, body: "")
Comment.create(user_id: u3, memory_id: m7, body: "")
Comment.create(user_id: u3, memory_id: m8, body: "")
Comment.create(user_id: u3, memory_id: m9, body: "")
Comment.create(user_id: u4, memory_id: m10, body: "")
Comment.create(user_id: u4, memory_id: , body: "")
Comment.create(user_id: u4, memory_id: , body: "")
Comment.create(user_id: u5, memory_id: , body: "")
Comment.create(user_id: u5, memory_id: , body: "")
Comment.create(user_id: u5, memory_id: , body: "")
Comment.create(user_id: u6, memory_id: , body: "")
Comment.create(user_id: u6, memory_id: , body: "")
Comment.create(user_id: u6, memory_id: , body: "")
Comment.create(user_id: u7, memory_id: , body: "")
Comment.create(user_id: u7, memory_id: , body: "")
Comment.create(user_id: u7, memory_id: , body: "")
Comment.create(user_id: u8, memory_id: , body: "")
Comment.create(user_id: u8, memory_id: , body: "")
Comment.create(user_id: u8, memory_id: , body: "")
Comment.create(user_id: u9, memory_id: , body: "")
Comment.create(user_id: u9, memory_id: , body: "")
Comment.create(user_id: u9, memory_id: , body: "")
Comment.create(user_id: u10, memory_id: , body: "")
Comment.create(user_id: u10, memory_id: , body: "")
Comment.create(user_id: u10, memory_id: , body: "")
Comment.create(user_id: u11, memory_id: , body: "")
Comment.create(user_id: u11, memory_id: , body: "")
Comment.create(user_id: u11, memory_id: , body: "")
Comment.create(user_id: u12, memory_id: , body: "")
Comment.create(user_id: u12, memory_id: , body: "")
Comment.create(user_id: u12, memory_id: , body: "")
Comment.create(user_id: u13, memory_id: , body: "")
Comment.create(user_id: u13, memory_id: , body: "")
Comment.create(user_id: u13, memory_id: , body: "")
Comment.create(user_id: u14, memory_id: , body: "")
Comment.create(user_id: u14, memory_id: , body: "")
Comment.create(user_id: u14, memory_id: , body: "")




puts "grow baby grow 👨🏻‍🌾"