# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
News.create([
    { 
      title: "United Airlines",
      content: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
    }, 
    { 
      title: "Southwest",
      content: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
    },
    { 
      title: "Delta",
      content: "https://open-flights.s3.amazonaws.com/Delta.png" 
    }, 
    { 
      title: "Alaska Airlines",
      content: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
    }, 
    { 
      title: "JetBlue",
      content: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
    }, 
    { 
      title: "American Airlines",
      content: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
    }
  ])

  reviews = Review.create([
    {
        title: 'first review',
        description: 'first description',
        score: 5,
        news: News.first
    },
    {
        title: 'second review',
        description: 'second description',
        score: 1,
        news: News.first
    }
  ])

Twitch.create([
  {
    streamer: "kittyplays",
    twitch_img: "https://i.ibb.co/0ZwHqc5/TW-Vistima.png"
  },
  {
    streamer: "legendarylea",
    twitch_img: "https://i.ibb.co/kxJpKHT/TW-Wakko.png"
  },
  {
    streamer: "kaceytron",
    twitch_img: "https://i.ibb.co/qxjQTKh/twwwwwwwwww.png"
  },
  {
    streamer: "xminks",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "miss_rage",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "ms_vixen",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "rakin",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "iwilldominate",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "alanzqtft",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "rapha",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
  {
    streamer: "nurok",
    twitch_img: "https://i.ibb.co/jhzN35n/Inicio.png"
  },
])