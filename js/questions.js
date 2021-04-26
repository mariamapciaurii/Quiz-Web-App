// creating an array and passing the number, questions, options, and answers
// category Celebrities
//difficulty easy
let questions = {
  celeb: [{
      difficulty: 1,
      question: "By what name is Carlos Estevez better known?",
      answer: "Charlie Sheen",
      options: [
        "Charlie Sheen",
        "Ricky Martin",
        "Bruno Mars",
        "Joaquin Phoenix",
      ],
    },
    {
      difficulty: 1,
      question: "Which celebrity announced his presidency in 2015?",
      answer: "Kanye West",
      options: [
        "Donald Trump",
        "Leonardo DiCaprio",
        "Kanye West",
        "Miley Cyrus",
      ],
    },
    {
      difficulty: 1,
      question: "Neil Hamburger is played by which comedian?",
      answer: "Gregg Turkington",
      options: [
        "Nathan Fielder",
        "Gregg Turkington",
        "Tim Heidecker",
        "Todd Glass",
      ],
    },
    {
      difficulty: 1,
      question: "By which name is Ramon Estevez better known as?",
      answer: "Martin Sheen",
      options: [
        "Charlie Sheen",
        "Emilio Estevez",
        "Ramon Sheen",
        "Martin Sheen",
      ],
    },
    {
      difficulty: 1,
      question: "What was James Coburn's last film role before his death?",
      answer: "American Gun",
      options: ["American Gun", "Monsters Inc", "Texas Rangers", "Snow Dogs"],
    },
    {
      difficulty: 2,
      question: "What is Doug Walker's YouTube name? ",
      answer: "The Nostalgia Critic",
      options: ["The Angry Video Game Nerd", "AngryJoeShow", "The Nostalgia Critic", "The Cinema Snob"],
    },
    {
      difficulty: 2,
      question: " Paul McCartney has always used his middle name. What is his real first name?",
      answer: "James",
      options: [
        "John",
        "Jack",
        "Justin",
        "James"
      ],
    },
    {
      difficulty: 2,
      question: "What was the cause of death for Freddie Mercury?",
      answer: "Pneumonia",
      options: [
        "Pneumonia",
        "Stomach Cancer",
        "HIV",
        "Brain Hemorrhage"
      ],
    },
    {
      difficulty: 2,
      question: "If he was still alive, in what year would Elvis Presley celebrate his 100th birthday?",
      answer: "2035",
      options: [
        "2030",
        "2035",
        "2040",
        "2045"
      ],
    },
    {
      difficulty: 2,
      question: "Where was Kanye West born?",
      answer: "Atlanta, Georgia",
      options: [
        "Chicago, Illinois",
        "Los Angeles, California",
        "Atlanta, Georgia",
        "Detroit, Michigan"
      ],
    },

    {
      difficulty: 3,
      question: "Which famous New York Yankees outfielder did Marilyn Monroe marry?",
      answer: "Joe DiMaggio",
      options: [
        "Joe DiMaggio",
        "Tino Martinez",
        "Babe Ruth",
        "Mason Williams"
      ],
    },
    {
      difficulty: 3,
      question: "Which radio personality calls himself &quot;The King of All Media&quot;?",
      answer: "Howard Stern",
      options: [
        "Rush Limbaugh",
        "Pete Tong",
        "Ryan Seacrest",
        "Howard Stern"
      ],
    },
    {
      difficulty: 3,
      question: "Nikki Diamond portrayed which Gladiator in the 1992 TV show Gladiators?",
      answer: "Scorpio",
      options: [
        "Scorpio",
        "Jet",
        "Nightshade",
        "Falcon"
      ],
    },
    {
      difficulty: 3,
      question: "Which television show has Dan Gheesling been on?",
      answer: "Big Brother",
      options: [
        "Big Brother",
        "Jeopardy",
        "Survivor",
        "The Bachelor"
      ],
    },
    {
      difficulty: 3,
      question: " What was the cause of death for Freddie Mercury?",
      answer: "Pneumonia",
      options: ["Pneumonia", "Stomach Cancer", "HIV", "TEST"],
    },
  ],
  sport: [
    {
      difficulty: 1,
      question: "Which country will host the 2020 Summer Olympics?",
      answer: "Japan",
      options: ["Japan",
        "China",
        "Australia",
        "Germany"
      ],
    },
    {
      difficulty: 1,
      question: "Which driver has been the Formula 1 world champion for a record 7 times?",
      answer: "Michael Schumacher",
      options: ["Ayrton Senna",
        "Michael Schumacher",
        "Fernando Alonso",
        "Jim Clark"
      ],
    },
    {
      difficulty: 1,
      question: "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
      answer: "7 - 1",
      options: ["7 - 1",
        "0 - 1",
        "3 - 4",
        "16 - 0"
      ],
    },
    {
      difficulty: 1,
      question: "Which team won 2014 FIFA World Cup in Brazil?",
      answer: "Germany",
      options: ["Argentina",
        "Brazil",
        "Germany",
        "Australia"
      ],
    },
    {
      difficulty: 1,
      question: "This Canadian television sportscaster is known for his Hockey Night in Canada role, a commentary show during hockey games",
      answer: "Don Cherry",
      options: ["ADon McKellar",
        "Don Taylor ",
        "Donald Sutherland",
        "Don Cherry"
      ],
    },
    {
      difficulty: 2,
      question: "What is the most common type of pitch thrown by pitchers in baseball?",
      answer: "Fastball",
      options: ["Fastball",
        "Slowball",
        "Screwball",
        "Palmball"
      ],
    },
    {
      difficulty: 2,
      question: "Who is often called the Maestro in the men tennis circuit?",
      answer: "Roger Federer",
      options: ["Boris Becker",
        "Bill Tilden",
        "Roger Federer",
        "Pete Sampras"
      ],
    },
    {
      difficulty: 2,
      question: "Which country will host the 2022 FIFA World Cup?",
      answer: "Qatar",
      options: ["Qatar",
        "USA",
        "Japan",
        "Switzerland"
      ],
    },
    {
      difficulty: 2,
      question: "Who won the UEFA Champions League in 2016?",
      answer: "Real Madrid C.F.",
      options: ["FC Bayern Munich",
        "Atletico Madrid",
        "Manchester City F.C.",
        "Real Madrid C.F."
      ],
    },
    {
      difficulty: 2,
      question: "Which Italian footballer told Neuer where putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
      answer: "Pelle",
      options: ["Pelle",
        "Insigne",
        "Barzagli",
        "Giaccherini"
      ],
    },
    {
      difficulty: 3,
      question: "What is the full name of the footballer &quot;Cristiano Ronaldo",
      answer: "Cristiano Ronaldo dos Santos Aveiro",
      options: ["Cristiano Ronaldo los Santos Diego",
        "Cristiano Armando Diego Ronaldo",
        "Cristiano Luis Armando Ronaldo",
        "Cristiano Ronaldo dos Santos Aveiro"
      ],
    },
    {
      difficulty: 3,
      question: "Which player kung-fu kicked a Crystal Palace fan in January 1995?",
      answer: "Eric Cantona",
      options: ["Eric Cantona",
      "David Seamen",
      "Ashley Cole",
      "Mark Hughes"
      ],
    },
    {
      difficulty: 3,
      question: "The Mazda 787B won the 24 Hours of Le Mans in what year?",
      answer: "1991",
      options: ["1995",
        "1991",
        "2000",
        "1197"
      ],
    },
    {
      difficulty: 3,
      question: "In Canadian football, scoring a rouge is worth how many points?",
      answer: "1",
      options: ["2",
        "1",
        "3",
        "4"
      ],
    },
      {
      difficulty: 3,
      question: "Who did Steven Gerrard win the Champions League with?",
      answer: "Liverpool",
      options: ["Liverpool", "Real Madrid", "Chelsea", "Man City"],
    }
  ],
 
  animals: [{
      difficulty: 1,
      question: "What is the fastest  land animal?",
      answer: "Cheetah",
      options: ["Lion", "Cheetah", "Thomson&Gazelle", "Pronghorn Antelope"],
    },
    {
      difficulty: 1,
      question: "Hippocampus is the Latin name for which marine creature?",
      answer: "Seahorse",
      options: ["Dolphin", "Whale", "Seahorse", "Octopus"],
    },
    {
      difficulty: 1,
      question: "How many legs do butterflies have?",
      answer: "6",
      options: ["2", "6", "4", "0"],
    },
    {
      difficulty: 1,
      question: "What do you call a baby bat?",
      answer: "Pup",
      options: ["Cub", "Chick", "Kid", "Pup"],
    },
    {
      difficulty: 1,
      question: "What is Grumpy Cat's real name?",
      answer: "Tardar Sauce",
      options: ["Tardar Sauce", "Sauce", "Minnie", "Broccoli"],
    },
    {
      difficulty: 2,
      question: "What is the collective noun for a group of crows?",
      answer: "Murder",
      options: ["Gaggle", "Herd", "Murder", "Pack"],
    },
    {
      difficulty: 2,
      question: "What colour is the female blackbird?",
      answer: "Brown",
      options: ["Brown", "Black", "White", "Yellow"],
    },
    {
      difficulty: 2,
      question: "What is the name of a rabbit's abode?",
      answer: "Burrow",
      options: ["Nest", "Burrow", "Den", "Dray"],
    },
    {
      difficulty: 2,
      question: "Which species of Brown Bear is not extinct?",
      answer: "Syrian Brown Bear",
      options: ["Syrian Brown Bear", "California Grizzly Bear", "Atlas Bear", "Mexican Grizzly Bear"],
    },
    {
      difficulty: 2,
      question: "What scientific suborder does the family Hyaenidae belong to?",
      answer: "Feliformia",
      options: ["Haplorhini", "Caniformia", "Ciconiiformes", "Feliformia"],
    },
    {
      difficulty: 3,
      question: "What is the scientific name of the cheetah?",
      answer: "Acinonyx jubatus",
      options: ["Acinonyx jubatus", "Panthera onca", "Lynx rufus", "Felis catus"],
    },
    {
      difficulty: 3,
      question: "What is the scientific name of the Budgerigar?",
      answer: "Melopsittacus undulatus",
      options: ["Nymphicus hollandicus", "Pyrrhura molinae", "Melopsittacus undulatus", "Ara macao"],
    },
    {
      difficulty: 3,
      question: "Which of these animals is NOT a lizard?",
      answer: "Tuatara",
      options: ["Tuatara", "Komodo Dragon", "Gila Monster", "Green Iguana"],
    },
    {
      difficulty: 3,
      question: "Unlike on most salamanders, this part of a newt is flat?",
      answer: "Tail",
      options: ["Head", "Tail", "Teeth", "Feet"],
    },
    {
      difficulty: 3,
      question: "What is the collective noun for vultures?",
      answer: "Wake",
      options: ["Ambush", "Building", "Gaze", "Wake"],
    },
  ],
};