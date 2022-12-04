// Total 4 categories and 10 questions in each category
const QUESTIONS = {
    probability: [
      {
        question:
          " What is the probability of an impossible event?",
        options: ["1","0","Insufficient data","Not defined"],
        answer: "0",
      },
      {
        question: "How many outcomes are possible when drawing a card from deck of cards?",
        options: ["1","13","52","26"],
        answer: "52",
      },
      {
        question:
          "Two unbiased coins are tossed.What is the probability of getting at most one head?",
        options: ["53/ 366", "1/7", "2/7", "53/365"],
        answer: "53/366",
      },
      {
        question:
          " The probability that it will rain tomorrow is 0.85. What is the probability that it will not rain tomorrow",
        options: ["0.25", "0.145", "3/20", "none of these"],
        answer: "3/20",
      },
      {
        question:
          "Who provided the definition for probability?",
        options: ["Archimedes","Einstein","Euclid","Simon Laplace"],
        answer: "Simon Laplace",
      },
      {
        question:
          " What will be the probability of getting odd numbers if a dice is thrown?",
        options: ["2/7", "5/9", "3/9", "7/2"],
        answer: "5/9",
      },
      {
        question: "In a discrete probability distribution, the sum of all probabilities is always?",
        options: ["1","0","Undefined","Infinite"],
        answer: "1",
      },
      {
        question: "The sum of the probability of an event and non event is :",
        options: ["1", "2", "10", "6"],
        answer: "1",
      },
      {
        question:
          "What is the probability of a sure event?",
        options: ["1","0","1/4","1/2"],
        answer: "1",
      },
      {
        question:
          "What is the probability of getting a sum as 3 if a dice is thrown?",
        options: ["7/4", "3/2", "15/18", "1/18"],
        answer: "1/18",
      },
    ],
    //pipes and cisterns
    "Pipes and Cisterns": [
      {
        question:
        "A tank can be filled by two taps A and B in 5 hours and 15 hours respectively.Tap C can empty the tank in 5 hours.If all the three taps are opened simultaneously,approximately how long will it take to fill the tank completely?",
        options: ["24 hours","15 hours","20 hours","12 hours"],
        answer: "15 hours",
      },
      {
        question:
          "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        options: [
          "10 min. 20 sec.",
          "11 min. 45 sec.",
          "14 min. 40 sec.",
          "12 min. 30 sec.",
        ],
        answer: "14 min. 40 sec.",
      },
      {
        question:
          "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
        options: ["5/11","6/11","7/11","8/11"],
        answer: "6/11",
      },
      {
        question:
          "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        options: ["15 mins", "6 mins", "17 mins", "12 mins"],
        answer: "12 mins",
      },
      {
        question:
          "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
        options: ["30/17 hrs", "30/11 hrs", "60/17 hrs", "9/2 hrs"],
        answer: "60/17 hrs",
      },
      {
        question:
          "One fill pipe A is 3 times faster than second fill pipe B and takes 32 minutes less than the fill pipe B. When will the cistern be full if both pipes are opened together?",
        options: ["10 min", "12 min", "6 min", "8 min"],
        answer: "12 min",
      },
      {
        question:
          "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:",
        options: ["13/3 hrs", "7 hrs", "8 hrs", "14 hrs"],
        answer: "14 hrs",
      },
      {
        question:
          "three pipes A,B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The slNoer of hours taken by C alone to fill the tank is:",
        options: ["24 min", "16 min", "20 min", "21 min"],
        answer: "21 min",
      },
      {
        question:
          "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        options: ["5 min", "9 min", "10 min", "15 min"],
        answer: "9 min",
      },
      {
        question:
          "Pipe K fills a tank in 30 minutes. Pipe L can fill the same tank 5 times as fast as pipe K. If both the pipes were kept open when the tank is empty, how much time will it take for the tank to overflow ?",
        options: ["7 minutes", "9 minutes", "12 minutes", "5 minutes"],
        answer: "5 minutes",
      },
    ],
  
    //problem on age
    "Problems On Age": [
      {
        question:
          "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
        options: ["2 times","5/2 times","11/4 times","3 times"],
        answer: "2 times",
      },
      {
        question:
          "In 10 years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B, the present age of B is :",
        options: ["37", "38", "39", "41"],
        answer: "39",
      },
      {
        question:
          "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        options: ["4 years", "8 years", "10 years", "None of these"],
        answer: "4 years",
      },
      {
        question:
          "Rajeev's age after 15 years will be 5 times his age 5 years back. What is the present age of rajeev?",
        options: ["10", "17", "21", "20"],
        answer: "10",
      },
      {
        question:
          "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        options: ["7", "8", "9", "10"],
        answer: "10",
      },
      {
        question:
          "The ages of Krish and Vaibhav are in the proportion of 3:5. After 9 years, the proportion of their ages will be 3 : 4. Then the current age of Vaibhav is:",
        options: ["19", "27", "24", "15"],
        answer: "15",
      },
      {
        question:
          "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        options: ["24", "27", "40", "CND"],
        answer: "24",
      },
      {
        question:
          "Eight years ago, Ajay's age was 4/3 times that of Vijay. Eight years hence, Ajay's age will be 6/5 times that of Vijay. What is the present age of Ajay ?",
        options: ["40", "28", "22", "39"],
        answer: "40",
      },
      {
        question:
          "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
        options: ["14 years", "18 years", "20 years", "22 years"],
        answer: "22 years",
      },
      {
        question:
          "Raju got married 8years ago. His present age is 6/5 times his age at the time of his marriage  Raju's sister was 10years younger to him at the time of his marriage. The present age of Raju's sister is?",
        options: ["31", "35", "38", "48"],
        answer: "38",
      },
    ],
    //profit and loss
    "Profit And Loss": [
      {
        question:
          "Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:",
        options: ["32/7%","60/11%","10%","12%"],
        answer: "60/11%",
      },
      {
        question:
          "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
        options: ["9%", "5%", "8%", "15%"],
        answer: "5%",
      },
      {
        question:
          "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        options: ["15", "16", "18", "25%"],
        answer: "16",
      },
      {
        question:
          "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction ?",
        options: ["16", "18", "14", "19"],
        answer: "18",
      },
      {
        question:
          "If selling price is doubled, the profit triples. Find the profit percent.",
        options: ["200/3", "100", "316/3", "120"],
        answer: "100",
      },
      {
        question:
          "If the cost price is 25% of selling price. Then what is the profit percent.",
        options: ["150%", "300%", "200%", "350%"],
        answer: "300%",
      },
      {
        question:
          "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        options: ["30%","70%","100%","250"],
        answer: "70%",
      },
      {
        question:
          "A Shopkeeper sells two articles at Rs.1000 each, making a profit of 20% on the first article and a loss of 20% on the second article. Find the net Profit or loss that he makes? ",
        options: ["9%", "5%", "8%", "4%"],
        answer: "4%",
      },
      {
        question:
          "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        options: ["3","4","5","6"],
        answer: "5",
      },
      {
        question:
          "A person incurs a loss of 5% be selling a watch for Rs. 1140. At what price should the watch be sold to earn 5% profit.",
        options: ["Rs.1360", "Rs.1260", "Rs.1280", "Rs.1160"],
        answer: "Rs.1260",
      },
    ],
  };