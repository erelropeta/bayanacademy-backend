const mongoose = require('mongoose');
const Listing = require('./models/listing');

mongoose
    .connect('mongodb://localhost:27017/airbnb')
    .then(() => {
        console.log('Connected!');
    })
    .catch((err) => {
        console.log('Error :/');
        console.log(err);
    });

const seedListings = [
    {
        title: 'Adaaran Club Rannalhi, Maldives, Water Bungalows',
        name: 'Adaaran Club Rannalhi',
        category: 'island',
        host: 'Dorothy',
        image: 'https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=1200',
        price: 33352,
        address: 'Maldives',
        datePosted: `June 2022`,
        description: `Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively at the tip of the South Male atoll within the exotic collection of islands known as the Maldives. Its unique location offers access to pristine beaches, excellent scuba diving opportunities and a relaxed environment with easy access to the capital city of Male.`,
        reviews: [],
    },
    {
        title: 'Exclusive & Private Island Resort: Floral Island',
        name: 'Floral Island',
        category: 'island',
        host: 'Philipe',
        image: 'https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=1200',
        price: 33333,
        address: 'El Nido, MIMAROPA, Philippines',
        datePosted: `November 2017`,
        description: `We can accommodate up to 24+ Persons. Accepts Weddings and Events\n
            Inclusions\n
            •Exclusive & Private Island Retreat\n
            •All Meals (Filipino Cuisine)\n
            •Coffee/Tea/Water\n
            •Daily House keeping upon request\n
            •Use of Snorkeling Gears & Kayak\n
            •Boat Transfer\n
            •Unforgettable Island Experiences\n
            \n\n
            Additional Services\n
            •Massage\n
            •Soda, Alcohol & Cocktails\n
            •Van Pick up/drop\n
            •Day Trips\n
            \n
            November - May: Minimum 8 Participants per booking\n
            June - October: Minimum 6 Participants per booking\n
            The space\n
            Floral Island Resort is nestled in the middle of Talacanen island and offers a secluded and exclusive atmosphere. With only 8 rooms, restaurant, chill-out place, bonfire- and grill on the beach and a lovely overlooking massage hut, Floral Island Resort is perfect for small groups up to 24 guests.
            \n\n
            We provide you with boat transfers, healthy and fresh meals from the region (breakfast, lunch and dinner), free use of kayaks, free wi-fi in the restaurant, 24hrs. solar power and comfortable accommodation withprivate shower and electric fan. Drinks and other services like island hopping, fishing trips, etc. are not included. Scuba diving on request!
            \n\n
            We are proud to be part of the coral triangle initiative, an international project planting artificial coral reefs. Visit our coral-domes and taklobo (giant clams) garden just in front of the Resort
            \n\n
            Be a CORAL HERO and plant yourself some corals!
            \n\n
            We welcome everybody who love nature and respect the environments. Help us keep our place authentic and clean. Protect the wildlife, flora, fauna and the rich biodiversity of the island. Take with you unforgettable island life experiences… but leave the rest behind!\n
            Guest access\n
            From Puerto Princesa - Hire a private Van to Caniqui Wharf (approx 4 hours followed by a quick 10-15min speedboat ride to the Island.
            \n\n
            From El Nido - Hire a private Van to Caniqui Wharf (approx 1h15min followed by a quick 10-15min speedboat ride to the Island.
            \n\n
            From Manila - Several Airlines are offering cheaper flights directly to Puerto Princesa City, the down side is the 4 hours drive to the Caniqui wharf. Daily flights to El Nido is catered by AirSwift.
            \n\n
            Incase you're self-driving, we can provide you a safe parking space in Caniqui
            Other things to note\n
            IMPORTANT FACTS ABOUT THE PROPERTY
            \n\n
            - Floral Island Resort is located North-East of Palawan, on Talacanen Island, Taytay Bay and NOT in El Nido Bay (Please see our location pin on the Map). We are est. 1.5 hour away from El Nido Town Proper and 4 hours from Puerto Princesa City.
            \n\n
            - Your main Host on the Island will be my Parents, Martin (59 y/o, swiss, living in the Philippines since 1983) and my Mom Flora (58 y/o, Filipina)
            \n\n
            - Every drop of water is brought to the Island from the Mainland. We hope you respect and save water as well as possible.
            \n\n
            - Floral Island Resort is completely Solar powered. Please turn off all lights, electric Fan and other appliances if not being used .
            \n\n
            - We have a complete First Aid Set on site for minor injuries. The next hospital is in Taytay, an hour away from the Island.
            \n\n
            - We accept Philippine Peso, USD and EURO bills on the Island. creditcard payment with a surcharge of 3.5% of the total amount is also available.`,
        reviews: [
            {
                username: 'Maria',
                review: 'We absolutely loved this place. The place is absolutely beautiful and looks just like the pictures to a T. They were very accommodating and nice. We loved how they adjusted to our eating schedule. The food was amazing. Everything was amazing.',
            },
            {
                username: 'Sean',
                review: 'My family and I can not say enough about the wonderful time we had. You have read the reviews and it is all true. Simply one of the most relaxing and pampered vacations we have ever been on. Treat yourself to this experience. They have truly created paradise with the most amazing staff. We will miss you Oreo and Koi.',
            },
        ],
    },
    {
        title: 'The Venta Suites - Chamber 3',
        name: 'The Venta Suites',
        category: 'bed & breakfast',
        host: 'Lieza',
        image: 'https://a0.muscache.com/im/pictures/40684bcd-410b-4c63-b9d5-0eeb3ed0111f.jpg?im_w=720',
        price: 14835,
        address: 'Guagua, Philippines',
        datePosted: `June 2021`,
        description: `The Venta Suites is a former wood kiln-dryer facility now re-purposed into a bed & breakfast. Each “Chamber” suite are designed uniquely.
            \n\n
            CHAMBER 3 - 1 king bed, folding single beds, 2 en-suite toilet & bath, living & dining room, private indoor plunge pool (non-heated) & terrace.
            \n\n
            Rate is good for 4 persons; max. of 2 extra pax (w/ extra charge).
            \n\n
            Breakfast included. Free WIFI & Netflix.
            \n\n
            In the same compound are Fabrika Dining resto and Rural Bar & Cafe.`,
        reviews: [
            {
                username: 'Matthew',
                review: `The place is amazing and the service is beyond what's expected.`,
            },
            {
                username: 'Cassie',
                review: `Great stay at Lieza’s! All their staff were very helpful. The place was well designed and it came with free breakfast:) thank you so much for making us feel welcome :)`,
            },
            {
                username: 'Michael',
                review: `Had an amazing time. Highly recommended! Thank you, Lieza & to your amazing staff!`,
            },
        ],
    },
    {
        title: `Private Guest House at Nana's Farm - 2F Suite`,
        name: `Nana's Farm Tagaytay`,
        category: 'bed & breakfast',
        host: 'Odessa',
        image: 'https://a0.muscache.com/im/pictures/79e16a2f-26e8-4c94-82b8-ceb87ea88da3.jpg?im_w=720',
        price: 6279,
        address: 'Amadeo, Metro Tagaytay, Philippines',
        datePosted: `July 2016`,
        description: `Our guest house is in a private one-hectare farm we call Nana's Farm. It was thoughtfully built & designed with our guests in mind. Please read our reviews.
                    \n\n
                    This suite occupies the entire second floor. Spacious bedroom, bathroom with bath tub, living room, kitchenette & balcony.
                    \n\n
                    It has a separate entrance & doesn't share hallways with the suite at the ground floor. Entire farm has one guest house only, separated into two suites, facing opposite sides of the gardens.
                    \n\n
                    Strong wifi by PLDTFibr.`,
        reviews: [
            {
                username: 'Christopher',
                review: `A great place for a nice, peaceful get away from the city. This was actually my second time staying at Nana's, and I enjoyed it just as much as I did the first time. Have to say that it looks even better than the pictures. Looking for a romantic getaway? This is it. I proposed here on my first trip and Odessa helped to get photographers, musicians, flowers, and even put together a wonderful dinner for us. Can't recommend this place enough. You will not be disappointed. My fiance and I will be back soon for sure!`,
            },
            {
                username: 'Sendrely',
                review: `This one is now my favorite in Tagaytay (vs. all other listings and B&Bs). Hard to beat with what it offers and it offers plenty - seclusion, the view, good coffee, very comfy bed, netflix, the option to be served breakfast (for an additional fee but they provide coffee and bread for free), ample space, clean everything. It really feels like home. It's good value for money and I will definetely come back.`,
            },
            {
                username: 'Alice',
                review: `My husband and I were looking to getaway and Nana's Farm was the perfect place. The place was clean, had all the amenities we needed. Love that the bedroom had a glass sliding door. Gives you privacy and a homey feel. The living room couch is just the right size. Ideal for lounging while watching movies on Netflix. We enjoyed the cool weather. No need for air conditioning and electric fan. What's nice is that when you look outside the windows, greens surround you. An add on to rest and relaxation. Odessa was quick to respond to each query. Aveth was courteous and made sure we were comfortable and attended to our needs. Thank you for a wonderful stay and looking forward to the next! `,
            },
        ],
    },
    {
        title: `Aura House 2bds Eco Bamboo House, Pool, River View`,
        name: `Aura house Bali`,
        category: 'omg',
        host: 'Wayan',
        image: `https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=1200`,
        price: 18844,
        address: `Abiansemal, Bali, Indonesia`,
        datePosted: `February 2019`,
        description: `Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise. Aura House is situated 25min away from Ubud, and 35min away from Canggu. `,
        reviews: [
            {
                username: `Janos`,
                image: `https://a0.muscache.com/im/pictures/user/f8c524b2-797f-4499-bcbf-c224f7d03e7b.jpg?im_w=240`,
                review: `Location was nice and treehouse was insanely cool! The wifi was meh and half of the plugs didn’t work and complimentary breakfast was horrible but besides that it was amazing!`,
            },
            {
                username: `Cindy`,
                image: `https://a0.muscache.com/im/pictures/user/92256b8b-f75c-4c3a-85a2-57c60e6b17c0.jpg?im_w=240`,
                review: `Wow, what an amazing stay. Aura house is heavenly. The sounds of the river and nature are wonderful and it's like staying in a giant tree house made of bamboo!`,
            },
            {
                username: `Emma`,
                image: `https://a0.muscache.com/im/pictures/user/43d9122a-193d-47e6-a6b2-637179710395.jpg?im_w=240`,
                review: `This is one of the best Airbnb experiences we’ve ever had. From check in to check out, the staff was extremely friendly and helpful. Caesar was the best and made sure we had everything we needed. We used a private driver multiple and Mr Yasa was great and made sure we were able to see everything we wanted to. The food was also delicious. I could not recommend this place more and we will definitely be back hopefully with more people to experience more of the stunning homes on the property. Many thanks to the staff and property for such a treat after two long years of Covid.`,
            },
            {
                username: `Andhika`,
                image: `https://a0.muscache.com/im/pictures/user/73813f3e-fab0-460d-8590-7a651d3b0112.jpg?im_w=240`,
                review: `Beautiful space and clean. However, the air conditioner on the bottom room didnt work properly, even after they fixed it.`,
            },
        ],
    },
    {
        title: `Pine Needle Treehouse at Tudor in the Pines`,
        name: `Tudor in the Pines`,
        category: 'omg',
        host: 'Marietta',
        image: `https://a0.muscache.com/im/pictures/78362fe0-ac0e-47d5-a929-bb3be94c9695.jpg?im_w=1200`,
        price: 6133,
        address: `Baguio, Philippines`,
        datePosted: `December 2020`,
        description: `Hidden amidst the dense foliage of Baguio City’s pinewood forest, Tudor in the Pines is a remarkable estate in the Philippines compromising of seven (7) unique residences within a gated property, accommodating a maximum of 30 guests. With the convenience of multiple road accesses to and from the city, and to different highland provinces of the Cordilleras. Tudor in the Pines is perfectly located as your home base to travel the Northern wonders of the Philippines.`,
        reviews: [
            {
                username: `Japhet Ace`,
                image: `https://a0.muscache.com/im/pictures/user/853525cc-3031-4c49-a087-5ff6a129e301.jpg?im_w=240`,
                review: `Great host, great place, love the design! The host was incredibly responsive and very informative. Would visit again 100%`,
            },
            {
                username: `Andrew`,
                image: `https://a0.muscache.com/im/pictures/user/e9f47e27-78a7-4966-a80f-99c089771788.jpg?im_w=240`,
                review: `This was an incredible experience. The design is incomparable to any hotel I've stayed in Baguio, and it captures the 90's out-in-the-woods Baguio feeling that I've always enjoyed since I was a kid, but with a modern, glamping feel that's difficult to describe.`,
            },
            {
                username: `Jenny`,
                image: `https://a0.muscache.com/im/pictures/user/1c00b5c2-fa38-455b-9977-a487274132ed.jpg?im_w=240`,
                review: `It’s a charming place but if your plan is to stay in for most of the time, the place might not be comfortable for you. I worked remotely from there and I was hunched the whole time because there was no proper table and chair. My back hurt by end of the trip. Perhaps it can be improved by having a common area devoted to treehouse guests. `,
            },
        ],
    },
    {
        title: `Reversible Destiny Lofts/for4people`,
        name: `Reversible Destiny Lofts`,
        category: 'omg',
        host: 'Matsuda',
        image: `https://a0.muscache.com/im/pictures/58680634/03047561_original.jpg?im_w=1200`,
        price: 9181,
        address: `Mitaka-shi, Japan`,
        datePosted: `April 2021`,
        description: `The “Reversible Destiny Lofts MITAKA -In Memory of Helen Keller-“, built by architects/artists Shusaku Arakawa + Madeline Gins, are the first residential units designed “to not to die.” Would you like to enjoy the Reversible Destiny life with your family or close friends? In the morning when the sun light comes into the yellow spherical room, you may feel as if there were a miniature sun inside your apartment. In the late afternoon when the sun goes down, there is a moment you see the bumpy floor looks like the Arabian dessert,,, You can enjoy the room throughout the day and night.`,
        reviews: [
            {
                username: `Michael`,
                image: `https://a0.muscache.com/im/users/2853924/profile_pic/1341624109/original.jpg?im_w=240`,
                review: `Very interesting place to stay. It didn't seem very practical as a living space, but fascinating and fun to experience for a few days. We, including our son, and visiting friends had a very good time. It gets you thinking about architecture in perhaps new ways. `,
            },
            {
                username: `Emily`,
                image: `https://a0.muscache.com/im/users/958782/profile_pic/1313113920/original.jpg?im_w=240`,
                review: `A must-stay near Tokyo for art/architecture fans. The space is incredible and is so much fun to experience. Great sushi/ramen joints nearby, and Matsuda provides a map of restaurants/sites to see/bus stops. It's easy to get to from the Chuo line via bus, and only takes less than 40 minutes to get to Shinjuku. Matsuda was incredibly accommodating due to the incoming typhoon, and it was a great place to hole up in during the storm! One of the most memorable Airbnbs we've stayed in.`,
            },
            {
                username: `Cedar`,
                image: `https://a0.muscache.com/im/pictures/user/d2efd4df-9ab9-4781-b80e-25d603479c71.jpg?im_w=240`,
                review: `As a longtime fan of the work of Arakawa & Gins, I was greatly looking forward to staying at the Reversible Destiny Lofts. The experience definitely exceeded my expectations. Though the space is purposefully uneven and unusual, it is very inspiring and comfortable. I can’t wait to come back.`,
            },
        ],
    },
    {
        title: `Nacpan Beach Glamping, Ocean View Room`,
        name: `Nacpan Beach Glamping`,
        category: 'beach',
        host: 'Nacpan',
        image: `https://a0.muscache.com/im/pictures/a2467f35-2869-4d3d-ac4c-81c553a3e643.jpg?im_w=1200`,
        price: 9013,
        address: `El Nido, Philippines`,
        datePosted: `May 2019`,
        description: `Nacpan Glamping is located on one of the top rated beaches in Asia, ‘Nacpan Beach’, El Nido, Palawan. Stretching 4.2km, this white sand beach is fast becoming a World renowned must see destination in the Philippines.`,
        reviews: [
            {
                username: `Ashley`,
                image: `https://a0.muscache.com/im/pictures/user/745767db-8178-4974-a600-8593a9edb26c.jpg?im_w=240`,
                review: `Absolutely loved this place. My boyfriend proposed to me here with a beautiful private dinner on the beach!Everybody is super sweet and helpful and they went above and beyond to meet our needs. Also, you HAVE to get a massage from angies touch right beside the Sunmai restaurant. We will definitely be back again.`,
            },
            {
                username: `Carolina`,
                image: `https://a0.muscache.com/im/pictures/user/a15b347b-ac53-4243-be9c-6b7ad5d5e3d8.jpg?im_w=240`,
                review: `If you have the spirit of adventure, and even if you don’t , Nacpan Glamping will tap into your hippie heart! The beach 🏖 is stunning and the tent gardens beautiful. Nightly entertainment is very cool , delicious cocktails and good food add to the experience. Staff is friendly and accommodating, Can’t wait to return!`,
            },
            {
                username: `Melody`,
                image: `https://a0.muscache.com/im/pictures/user/57fb723e-0128-474a-abfd-d2a8f1bb5404.jpg?im_w=240`,
                review: `This place is beautiful, peaceful and very relaxing. Food though needs some improvement, it was dry, overly cooked with minimal menu to choose from. The breakfast was not something I expected, it needs to be improved. But overall this place has an amazing location despite of the issues with transportation.`,
            },
            {
                username: `Lisa`,
                image: `https://a0.muscache.com/im/pictures/user/74005a40-b9b6-4d53-82db-cfa70e66bff7.jpg?im_w=240`,
                review: `his incredible oasis went way beyond our expectations. The staff were so hospitable and accommodating. We stayed in the tents and they were so luxurious. The bathrooms we always clean. I got sick one day and the chef made me a special soup and the staff gave me medication. They went above and beyond to make sure you were enjoying your time. Everyone was so happy and helpful. Not to mention nacpan beach is like paradise! Highly recommend.`,
            },
        ],
    },
    {
        title: `Happy Together Loft Two Seminyak`,
        name: `Happy Together Loft Bali`,
        category: 'tiny home',
        host: 'Happy Together',
        image: `https://a0.muscache.com/im/pictures/edf9775b-e979-4996-81c6-2605390f0e7f.jpg?im_w=1200`,
        price: 3759,
        address: `Kuta, Bali, Indonesia`,
        datePosted: `October 2018`,
        description: `Feel a true Balinese welcome by stepping between pink bougainvilleas that match exterior walls, and into a courtyard with tropical plantings. A sense of belonging continues inside with a comforting blend of modern conveniences and local accents.`,
        reviews: [
            {
                username: `Ajay`,
                image: `https://a0.muscache.com/im/pictures/user/f7d19398-32ad-4739-a6fd-c6dd09214d97.jpg?im_w=240`,
                review: `Very chic place and very close to the Seminyak nightlife. Our only regret was that we were only here for one night. Will definitely stay here again and longer as this stay in perfect in every way. Close to the major beach clubs but also private at the same time.`,
            },
            {
                username: `Julisa`,
                image: `https://a0.muscache.com/im/pictures/user/5dc3c2e9-f28e-475b-8fdd-95b38ffe43be.jpg?im_w=240`,
                review: `This was my husband and I’s first stop in Bali and it couldn’t have gone any better! Happy Together is operated by Villa Kresna & the staff is an absolute dream! We checked in VERY late into the night & even though reception was closed, they arranged a driver to pick us up at the airport and had a security guard greet us with our key & a welcome drink! I’ve never received such good customer service in America! The rest of our stay was peaceful! Straw Hut has amazing meals, we enjoyed the swimming pool attached to the Villa and the beach is about a 3 minute walk! We only wish we could’ve stayed longer! They even double checked my room and found my cell phone that I almost left behind at check-out! We will be staying here again when we visit Bali!`,
            },
            {
                username: `Sarah`,
                image: `https://a0.muscache.com/im/users/11190327/profile_pic/1434716847/original.jpg?im_w=240`,
                review: `We cannot wait to come back!! The staff are incredible, the villa itself was super comfortable and so gorgeously decorated, the location is great: about 10 mins walk to Seminyak Square. So happy we stayed here x`,
            },
        ],
    },
    {
        title: `Daldahouse No. 102`,
        name: `Jeju Dalda House Pension`,
        category: 'tiny home',
        host: '희도',
        image: `https://a0.muscache.com/im/pictures/5af8e57d-b103-4ef4-959e-b64a2e53b78a.jpg?im_w=1200`,
        price: 6296,
        address: `Jeju-si, South Korea`,
        datePosted: `June 2017`,
        description: `This is a pension located in Gimnyeong Village. There are a total of 4 rooms in 101, 102, 103, and 104. It is recommended for those who want to feel a quiet Jeju in Jeju Village.`,
        reviews: [
            {
                username: `희선`,
                image: `https://a0.muscache.com/im/pictures/user/f20466ae-07ba-4288-a960-abb474050523.jpg?im_w=240`,
                review: `It was clean! 3 people stayed, but it was spacious enough, and the terrace was especially nice ~ I really liked the time I spent sitting on the terrace in the sunshine in the morning!`,
            },
            {
                username: `Hunter`,
                image: `https://a0.muscache.com/im/pictures/user/e9e7af4b-2ecd-40d8-bbb6-1a31678eafe9.jpg?im_w=240`,
                review: `it was very cleanly, and had a great location, wonderful host, overall an amazing experience.`,
            },
        ],
    },
    // {
    //     title: ``,
    //     name: ``,
    //     category: '',
    //     host: '',
    //     image: ``,
    //     price: ,
    //     description: ``,
    //     address: ``,
    //     reviews: [
    //         {
    //             username: ``,
    //             image: ``,
    //             review: ``,
    //         },
    //     ],
    // },
];

Listing.insertMany(seedListings)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
