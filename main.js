const astroMessages = {
  aries: [
    "It's a good time to begin a new project you've been putting off -- start the plan",
    "Use your creative abilities to come up with new ideas and directions. Be careful not to show your temper when dealing with the boss. Trips should be your choice."
  ],
  taurus: [
    "Like most days, today is a good one to spend on yourself. Indulge in your favorites.",
    " Do not allow colleagues to hinder your ambitions. Turn things around, make sure that they do their share. Think twice before you speak."
  ],
  gemini: [
    "Too much focus on partners could eventually leave you feeling neglected. Balance it.",
    "You may be tired of working for someone else. You're ready to take action and take over. Your mate may not be too sure about your intentions."
  ],
  cancer: [
    "The hard choices you're making today are going to push your life in a new direction.",
    "Changes in your home may be alarming at first. Implement your ideas into your projects at work. New emotional connections can be made through business contacts."
  ],
  leo: [
    "A friendship is entering a new phase, so communication may be strained for a while.",
    "You should visit a friend or relative who hasn't been well. Travel will be fun, but expect it to cost you. Deception is likely."
  ],
  virgo: [
    "Talking about what you stand for and truly believe is a good way to spend this day.",
    "Someone you work with could try to undermine you. Money problems will get worse if your partner hasn't been playing by the rules. Emotional matters may not be easy for you to handle."
  ],
  libra: [
    "Take advantage of your high energy to communicate complicated goals and ideas.",
    "Take your time and try not to overload yourself. Rest and relaxation will be more favorable than you think. Discuss your objectives with peers or lovers."
  ],
  scorpio: [
    "Sometimes it's not about winning or losing. Giving in altogether may not be so bad.",
    "Females may put demands or added responsibilities on you. Hold on; your time will come. Your willingness to help others can and will lead to fatigue if you don't learn to say no."
  ],
  sagittarius: [
    "You're especially tuned in to your group of friends now. Get ready to have some fun!",
    "Opportunities for new partnerships will develop through the organizations you encounter. You are best to concentrate on work. This may not be the time to lend or borrow."
  ],
  capricorn: [
    "Go ahead and take the initiative on a work project or two. Your boss will be happy!",
    "This is probably causing upset and confusion on the home front. Be careful; you may upset someone you live with if you don't consult with them. You have been going through a period of change that has caused problems for you with your loved ones."
  ],
  aquarius: [
    "Investigate a different culture or philosophy to find the comfort you need now.",
    "You can make money if you're willing to push your ideas on those in a position to support your efforts. Be careful of disclosing personal information. Use discrimination and play hard to get."
  ],
  pisces: [
    "Finding a balance between business and pleasure means you'll have to reorganize.",
    "You will be in the mood for competition, and your ability to lead a group will bring you popularity. You can make career moves that will bring you a much higher income. You will enjoy travel and getting together with peers."
  ]
};

//Creates random number

const randomNumber = (max,  min) =>  {
  return Math.floor(Math.random() * (max - min) + min);
}

//console.log(randomNumber(2, 0));
//Takes a astrological sign, creates a random number and returns a message based on the two

const printMessage = astroSign => {
  let randNum = randomNumber(2, 0);
  //console.log(randNum);
  return astroMessages[astroSign][randNum];
};

const piscesMessage = printMessage('pisces')

console.log(piscesMessage);