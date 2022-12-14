puts "planting seeds 🌱"

User.destroy_all
Memory.destroy_all
Comment.destroy_all

puts "Creating Users..."
u1 = User.create(name: 'Test', email: 'Test@email.com', password: '11111')
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

puts "testing User Profiles..."
test_profile = UserProfile.create(first_name: "Test", last_name: "McTest", dob: "2020-04-20", pob: "Sacramento", current_city: "Denver", family: "N/A", interests: "Funk", user_id: u1.id)

# puts "testing Avatars..."
# first = Avatar.create(user_profile_id: test_profile.id)

# first.image.attach(
#     io: File.open('./public/avatars/elephant.png'),
#     filename: 'elephant.png',
#     content_type: 'application/png'
# )

puts "Making Memories..."
m1 = Memory.create(title: "Trip to the Dunes", category: "vacation", status: "past", main_img: "https://www.nps.gov/common/uploads/grid_builder/grsa/crop16_9/2E8879CA-EF95-283E-C88B7FE90F149C36.jpg?width=950&quality=90&mode=crop", description: "Mel and I went to the Sand Dunes and had a lovely time.", likes: 5, user_id: u2.id, date: Date.new(2017, 06, 01))
m2 = Memory.create(title: "Wedding: Season 2", category: "celebration", status: "past", main_img: "https://ktrg.net/wp-content/uploads/2020/10/Loft-Entrance-Front-View-1.jpg", description: "Melody's wedding was as magical as she is.", likes: 600, user_id: u2.id, date: Date.new(2022, 07, 16))
m3 = Memory.create(title: "Wedding: Season 1", category: "celebration", status: "past", main_img: "https://i0.wp.com/jeanhedrenrealtor.com/wp-content/uploads/2021/05/Heilig-34.jpg?fit=1200%2C800&ssl=1", description: "Jon's wedding was the dopest dope I've ever smoked! SEND THAT SHIIIIT!", likes: 25, user_id: u3.id, date: '2021-07-17')
m4 = Memory.create(title: "Daddaroo at Hilton Head", category: "celebration", status: "past", main_img: "https://s7.bluegreenvacations.com/is/image/BGV/south-carolina-hilton-head-island-lighthouse?$bg2-hero-lg$", description: "We had a lovely time.", likes: 15, user_id: u5.id, date: '2021-05-08')
m5 = Memory.create(title: "Christmas at the Chateau 2022", category: "holiday", status: "future", main_img: "https://www.christiesrealestate.com/localimagereader.ashx?imageurl=siteresources%2Fsiteresources%2Fmy%20folder%2Fimages%2Farticles%2F6158-evergreen%2Fevergreen1.jpg&imagecache=true", description: "Holiday in the mountains with all the family and all the dogs.", likes: 2, user_id: u6.id, date: '2022-12-24')
m6 = Memory.create(title: "HoneyMoon in Puerto Rico", category: "romance", status: "future", main_img: "https://www.discoverpuertorico.com/sites/default/files/styles/horizontal/public/2020-10/191-3-7762_jpeg.jpg?h=f4d242a0&itok=W5IW-JPs", description: "Half the time in the city, half the time on the beach, all the time in love", likes: 2, user_id: u3.id, date: '2023-05-15')
m7 = Memory.create(title: "Baby P is Coming Soon!", category: "event", status: "present", main_img: "https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_1200/v1581022086/hello-baby/baby-shower-theme-header.jpg", description: "We're so excited to welcome Baby P in April", likes: 34, user_id: u11.id, date: '2023-04-10')
m8 = Memory.create(title: "Hamilton at the DCPA", category: "event", status: "past", main_img: "https://upload.wikimedia.org/wikipedia/en/8/83/Hamilton-poster.jpg", description: "We went to see Hamilton at the DCPA", likes: 2, user_id: u3.id, date: '2018-10-15')
m9 = Memory.create(title: "Cats at the DCPA", category: "event", status: "past", main_img: "https://static01.nyt.com/images/2016/07/24/arts/06ALW2/24cats-lead-superJumbo-v5.jpg", description: "We unfortunately saw cats and left at intermission", likes: 0, user_id: u3.id, date: '2018-02-14')
m10 = Memory.create(title: "Improvised Shakespeare", category: "event", status: "past", main_img: "https://apeconcerts.com/wp-content/uploads/2018/05/theimprovisedshakespearecomapny_1024-1024x574.jpg", description: "Improvised Shakespeare; only SOUNDS like a bad idea, but never is.", likes: 4, user_id: u2.id, date: '2021-01-05')

puts "Generating Comments..."
Comment.create(user_id: u1.id, memory_id: m1.id, body: "What a great trip!")
Comment.create(user_id: u1.id, memory_id: m2.id, body: "So wonderful!")
Comment.create(user_id: u1.id, memory_id: m3.id, body: "I ate so much I barfed!")
Comment.create(user_id: u2.id, memory_id: m4.id, body: "Look at my fancy new hat!")
Comment.create(user_id: u2.id, memory_id: m5.id, body: "Anybody want a peanut?")
Comment.create(user_id: u2.id, memory_id: m6.id, body: "Never gonna give you up, never gonna let you down...")
Comment.create(user_id: u3.id, memory_id: m7.id, body: "Sometimes when the sun shines I DON'T smile.")
Comment.create(user_id: u3.id, memory_id: m8.id, body: "Look at that S-Car go!")
Comment.create(user_id: u3.id, memory_id: m9.id, body: "Wait a minute, WAIT A MINUTE!")
Comment.create(user_id: u4.id, memory_id: m10.id, body: "Ain't nobody got THYME for dat!")
Comment.create(user_id: u4.id, memory_id: m1.id, body: "Shake, rattle, and ROOOOOLLLLLLL!")
Comment.create(user_id: u4.id, memory_id: m2.id, body: "If you ever say that again, I'll come over there and make you a cake!")
Comment.create(user_id: u5.id, memory_id: m3.id, body: "He was born in the summer of his 27th year...ROCKY MOUNTAIN HIIIIIGH!")
Comment.create(user_id: u5.id, memory_id: m4.id, body: "I smoke two joints in the morning, I smoke two joints at night.")
Comment.create(user_id: u5.id, memory_id: m5.id, body: "Isn't the word 'marimba' a goofy name for an instrument? MA-RIIIMMMM-BAAAAAA.")
Comment.create(user_id: u6.id, memory_id: m6.id, body: "Quickly now")
Comment.create(user_id: u6.id, memory_id: m7.id, body: "Shovel the driveway before the snowplow comes so I can get the car out the driveway.")
Comment.create(user_id: u6.id, memory_id: m8.id, body: "Dear Diary, Last night I ate a sandwich. It was just okay I guess.")
Comment.create(user_id: u7.id, memory_id: m9.id, body: "Weeeellllllllll, listen here ya' doggone little honeysuckle, I'll tell you whut.")
Comment.create(user_id: u7.id, memory_id: m10.id, body: "I don't even care that I can't slam dunk. It's not a problem.")
Comment.create(user_id: u7.id, memory_id: m1.id, body: "Mix 2 eggs and 2 tablespoons of water")
Comment.create(user_id: u8.id, memory_id: m2.id, body: "That right there? That's a deaaad giveaway.")
Comment.create(user_id: u8.id, memory_id: m3.id, body: "CASH ME OUTSIDE!")
Comment.create(user_id: u8.id, memory_id: m4.id, body: "I'm the lordy lord of FlavorTown and I deserve respect!")
Comment.create(user_id: u9.id, memory_id: m5.id, body: "Don't steal my shoes! Come ON! My SHOOOOES!")
Comment.create(user_id: u9.id, memory_id: m6.id, body: "I--I dunno.")
Comment.create(user_id: u9.id, memory_id: m7.id, body: "Don't make me break my foot off in yo ass!")
Comment.create(user_id: u10.id, memory_id: m8.id, body: "One, two, buckle-my-shoe! But who has buckles these days? QUAKERS. THAT'S WHO.")
Comment.create(user_id: u10.id, memory_id: m9.id, body: "Ever dance with the devil in the pale moonlight? Ever make pancakes for dinner? Same thing.")
Comment.create(user_id: u10.id, memory_id: m10.id, body: "What's love got to do with it? What's love but a second-hand emotion?")
Comment.create(user_id: u11.id, memory_id: m1.id, body: "It's probably a some-kinda, million-year, sorta deal or somethin. We'll see.")
Comment.create(user_id: u11.id, memory_id: m2.id, body: "I never had so much fun on a boat!")
Comment.create(user_id: u11.id, memory_id: m3.id, body: "How many cups of sugar does it take to get to the moon?")
Comment.create(user_id: u12.id, memory_id: m4.id, body: "If it takes a chicken and a half a day and a half to lay an egg and a half, how long does it take a grasshopper with a wooden leg to kick the seeds out of a dill pickle?")
Comment.create(user_id: u12.id, memory_id: m5.id, body: "Dunkin Donuts doesn't even sell donuts. Fake News")
Comment.create(user_id: u12.id, memory_id: m6.id, body: "Look at the happy couple! Wow! Much couple!")
Comment.create(user_id: u13.id, memory_id: m7.id, body: "Habba bab, blab gabba blab dab. You know?")
Comment.create(user_id: u13.id, memory_id: m8.id, body: "Shimmy shimmy shimmy shimmy shimmy to the left, shimmy shimmy shimmy shimmy shimmy to the right.")
Comment.create(user_id: u13.id, memory_id: m9.id, body: "I had ice cream with Ronald Reagan once. He was an asshole.")
Comment.create(user_id: u14.id, memory_id: m10.id, body: "OH I WANNA DANCE WITH SOMEBAAHDAAAY!")
Comment.create(user_id: u14.id, memory_id: m1.id, body: "I'll allow it!")
Comment.create(user_id: u14.id, memory_id: m2.id, body: "Didn't have THAT on my 1939 Bingo Card!")

puts "grow baby grow 👨🏻‍🌾"