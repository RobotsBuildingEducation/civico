export const getObjectsByGroup = (groupNumber, arrayOfObjects) => {
  return arrayOfObjects.filter((obj) => obj.group === groupNumber);
};

export const steps = {
  en: [
    // Group 1: Principles of American Democracy (Questions 1-12)
    {},
    {
      group: "1",
      title: "Supreme Law",
      description: "Understanding the Constitution as supreme law",
      isMultipleChoice: true,
      question: {
        questionText: "What is the supreme law of the land?",
        options: [
          "the Constitution",
          "the Declaration of Independence",
          "the Bill of Rights",
          "Federal Laws",
        ],
        answer: "the Constitution",
      },
    },
    {
      group: "1",
      title: "Constitution Purpose",
      description: "Understanding the Constitution's functions",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What does the Constitution do?",
        options: [
          "sets up the government",
          "defines the government",
          "protects basic rights of Americans",
          "establishes taxes",
        ],
        answer: [
          "sets up the government",
          "defines the government",
          "protects basic rights of Americans",
        ],
      },
    },
    {
      group: "1",
      title: "First Three Words",
      description: "Opening of the Constitution",
      isSingleLineText: true,
      question: {
        questionText:
          "The idea of self-government is in the first three words of the Constitution. What are these words?",
        placeholder: "Enter the three words...",
        answer: "We the People",
      },
    },
    {
      group: "1",
      title: "Amendment Definition",
      description: "Understanding constitutional amendments",
      isCodeCompletion: true,
      question: {
        questionText: "What is an amendment?",
        options: [
          "a change (to the Constitution)",
          "a change to the Constitution",
          "an addition (to the Constitution)",
          "a modification to the Constitution",
        ],
        answer: "a change (to the Constitution)",
      },
    },
    {
      group: "1",
      title: "First Ten Amendments",
      description: "The Bill of Rights",
      isSingleLineText: true,
      question: {
        questionText:
          "What do we call the first ten amendments to the Constitution?",
        placeholder: "Enter the name...",
        answer: "the Bill of Rights",
      },
    },
    {
      group: "1",
      title: "First Amendment Rights",
      description: "Understanding First Amendment freedoms",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What is one right or freedom from the First Amendment?",
        options: [
          "speech",
          "religion",
          "assembly",
          "press",
          "petition the government",
        ],
        answer: [
          "speech",
          "religion",
          "assembly",
          "press",
          "petition the government",
        ],
      },
    },
    {
      group: "1",
      title: "Constitution Amendments",
      description: "Total number of amendments",
      isCodeCompletion: true,
      question: {
        questionText: "How many amendments does the Constitution have?",
        options: ["twenty-seven (27)", "27", "twenty seven", "27 amendments"],
        answer: "twenty-seven (27)",
      },
    },
    {
      group: "1",
      title: "Declaration Purpose",
      description: "Purpose of Declaration of Independence",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What did the Declaration of Independence do?",
        options: [
          "announced our independence (from Great Britain)",
          "declared our independence (from Great Britain)",
          "said that the United States is free (from Great Britain)",
          "created the Constitution",
        ],
        answer: [
          "announced our independence (from Great Britain)",
          "declared our independence (from Great Britain)",
          "said that the United States is free (from Great Britain)",
        ],
      },
    },
    {
      group: "1",
      title: "Declaration Rights",
      description: "Rights in Declaration of Independence",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What are two rights in the Declaration of Independence?",
        options: ["life", "liberty", "pursuit of happiness", "bearing arms"],
        answer: ["life", "liberty", "pursuit of happiness"],
      },
    },
    {
      group: "1",
      title: "Religious Freedom",
      description: "Understanding religious freedom",
      isMultipleChoice: true,
      question: {
        questionText: "What is freedom of religion?",
        options: [
          "You can practice any religion, or not practice a religion.",
          "You must practice a religion",
          "You can practice only certain religions",
          "You must practice the main religion",
        ],
        answer: "You can practice any religion, or not practice a religion.",
      },
    },
    {
      group: "1",
      title: "Economic System",
      description: "U.S. economic system",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What is the economic system in the United States?",
        options: [
          "capitalist economy",
          "market economy",
          "socialist economy",
          "mixed economy",
        ],
        answer: ["capitalist economy", "market economy"],
      },
    },
    {
      group: "1",
      title: "Rule of Law",
      description: "Understanding rule of law",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What is the 'rule of law'?",
        options: [
          "Everyone must follow the law.",
          "Leaders must obey the law.",
          "Government must obey the law.",
          "No one is above the law.",
        ],
        answer: [
          "Everyone must follow the law.",
          "Leaders must obey the law.",
          "Government must obey the law.",
          "No one is above the law.",
        ],
      },
    },

    // Group 2: System of Government (Questions 13-47)
    {
      group: "2",
      title: "Government Branches",
      description: "Branches of government",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one branch or part of the government.",
        options: [
          "Congress",
          "legislative",
          "President",
          "executive",
          "the courts",
          "judicial",
        ],
        answer: [
          "Congress",
          "legislative",
          "President",
          "executive",
          "the courts",
          "judicial",
        ],
      },
    },
    {
      group: "2",
      title: "Preventing Power Concentration",
      description: "Checks and balances in government",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What stops one branch of government from becoming too powerful?",
        options: [
          "checks and balances",
          "separation of powers",
          "the Constitution",
          "federal laws",
        ],
        answer: ["checks and balances", "separation of powers"],
      },
    },
    {
      group: "2",
      title: "Executive Branch Leader",
      description: "Leadership of executive branch",
      isSingleLineText: true,
      question: {
        questionText: "Who is in charge of the executive branch?",
        placeholder: "Enter the position...",
        answer: "the President",
      },
    },
    {
      group: "2",
      title: "Federal Laws",
      description: "Creation of federal laws",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Who makes federal laws?",
        options: [
          "Congress",
          "Senate and House (of Representatives)",
          "(U.S. or national) legislature",
          "the President",
        ],
        answer: [
          "Congress",
          "Senate and House (of Representatives)",
          "(U.S. or national) legislature",
        ],
      },
    },
    {
      group: "2",
      title: "Congress Parts",
      description: "Two parts of Congress",
      isMultipleChoice: true,
      question: {
        questionText: "What are the two parts of the U.S. Congress?",
        options: [
          "the Senate and House (of Representatives)",
          "the House and Senate",
          "the Representatives and Senators",
          "the Legislature and Parliament",
        ],
        answer: "the Senate and House (of Representatives)",
      },
    },
    {
      group: "2",
      title: "Number of Senators",
      description: "Total U.S. Senators",
      isCodeCompletion: true,
      question: {
        questionText: "How many U.S. Senators are there?",
        options: ["one hundred (100)", "100", "one hundred", "hundred"],
        answer: "one hundred (100)",
      },
    },
    {
      group: "2",
      title: "Senator Term",
      description: "Length of Senate term",
      isCodeCompletion: true,
      question: {
        questionText: "We elect a U.S. Senator for how many years?",
        options: ["six (6)", "6", "six years", "6 years"],
        answer: "six (6)",
      },
    },
    {
      group: "2",
      title: "State Senator",
      description: "Current state Senator",
      isSingleLineText: true,
      question: {
        questionText: "Who is one of your state's U.S. Senators now?",
        placeholder: "Enter Senator name...",
        answer: "Answers will vary",
      },
    },
    {
      group: "2",
      title: "House Members",
      description: "Number of Representatives",
      isCodeCompletion: true,
      question: {
        questionText:
          "The House of Representatives has how many voting members?",
        options: [
          "four hundred thirty-five (435)",
          "435",
          "four hundred thirty five",
          "435 members",
        ],
        answer: "four hundred thirty-five (435)",
      },
    },
    {
      group: "2",
      title: "Representative Term",
      description: "Length of Representative term",
      isCodeCompletion: true,
      question: {
        questionText: "We elect a U.S. Representative for how many years?",
        options: ["two (2)", "2", "two years", "2 years"],
        answer: "two (2)",
      },
    },
    {
      group: "2",
      title: "Your Representative",
      description: "Current Representative",
      isSingleLineText: true,
      question: {
        questionText: "Name your U.S. Representative.",
        placeholder: "Enter Representative name...",
        answer: "Answers will vary",
      },
    },
    {
      group: "2",
      title: "Senator Representation",
      description: "Who Senators represent",
      isMultipleChoice: true,
      question: {
        questionText: "Who does a U.S. Senator represent?",
        options: [
          "all people of the state",
          "only their political party",
          "only those who voted for them",
          "their district",
        ],
        answer: "all people of the state",
      },
    },
    {
      group: "2",
      title: "Representative Distribution",
      description: "Why states have different numbers of Representatives",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Why do some states have more Representatives than other states?",
        options: [
          "(because of) the state's population",
          "(because) they have more people",
          "(because) some states have more people",
          "because they are larger states",
        ],
        answer: [
          "(because of) the state's population",
          "(because) they have more people",
          "(because) some states have more people",
        ],
      },
    },
    {
      group: "2",
      title: "Presidential Term",
      description: "Length of presidential term",
      isCodeCompletion: true,
      question: {
        questionText: "We elect a President for how many years?",
        options: ["four (4)", "4", "four years", "4 years"],
        answer: "four (4)",
      },
    },
    {
      group: "2",
      title: "Presidential Election Month",
      description: "Month of presidential election",
      isSingleLineText: true,
      question: {
        questionText: "In what month do we vote for President?",
        placeholder: "Enter month...",
        answer: "November",
      },
    },

    {
      group: "2",
      title: "Current President",
      description: "Name of current President",
      isSingleLineText: true,
      question: {
        questionText:
          "What is the name of the President of the United States now?",
        placeholder: "Enter current President's name...",
        answer: "Visit uscis.gov/citizenship/testupdates",
      },
    },
    {
      group: "2",
      title: "Current Vice President",
      description: "Name of current Vice President",
      isSingleLineText: true,
      question: {
        questionText:
          "What is the name of the Vice President of the United States now?",
        placeholder: "Enter current Vice President's name...",
        answer: "Visit uscis.gov/citizenship/testupdates",
      },
    },
    {
      group: "2",
      title: "Presidential Succession",
      description: "Who becomes President if current President cannot serve",
      isMultipleChoice: true,
      question: {
        questionText:
          "If the President can no longer serve, who becomes President?",
        options: [
          "the Vice President",
          "the Speaker of the House",
          "the Secretary of State",
          "the Chief Justice",
        ],
        answer: "the Vice President",
      },
    },
    {
      group: "2",
      title: "Second Succession",
      description:
        "Succession if both President and Vice President cannot serve",
      isMultipleChoice: true,
      question: {
        questionText:
          "If both the President and the Vice President can no longer serve, who becomes President?",
        options: [
          "the Speaker of the House",
          "Secretary of State",
          "Chief Justice",
          "Senate Majority Leader",
        ],
        answer: "the Speaker of the House",
      },
    },
    {
      group: "2",
      title: "Military Commander",
      description: "Commander in Chief",
      isMultipleChoice: true,
      question: {
        questionText: "Who is the Commander in Chief of the military?",
        options: [
          "the President",
          "Secretary of Defense",
          "Chairman of Joint Chiefs",
          "highest ranking General",
        ],
        answer: "the President",
      },
    },
    {
      group: "2",
      title: "Bill Signing",
      description: "Who signs bills into law",
      isMultipleChoice: true,
      question: {
        questionText: "Who signs bills to become laws?",
        options: [
          "the President",
          "Congress",
          "Supreme Court",
          "Senate Majority Leader",
        ],
        answer: "the President",
      },
    },
    {
      group: "2",
      title: "Bill Veto",
      description: "Who can veto bills",
      isMultipleChoice: true,
      question: {
        questionText: "Who vetoes bills?",
        options: [
          "the President",
          "Congress",
          "Supreme Court",
          "Speaker of the House",
        ],
        answer: "the President",
      },
    },
    {
      group: "2",
      title: "Cabinet Role",
      description: "Purpose of President's Cabinet",
      isMultipleChoice: true,
      question: {
        questionText: "What does the President's Cabinet do?",
        options: [
          "advises the President",
          "makes laws",
          "approves laws",
          "elects the President",
        ],
        answer: "advises the President",
      },
    },
    {
      group: "2",
      title: "Cabinet Positions",
      description: "Cabinet-level positions",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What are two Cabinet-level positions?",
        options: [
          "Secretary of State",
          "Secretary of Defense",
          "Secretary of Education",
          "Attorney General",
          "Vice President",
        ],
        answer: [
          "Secretary of State",
          "Secretary of Defense",
          "Secretary of Education",
          "Attorney General",
          "Vice President",
        ],
      },
    },
    {
      group: "2",
      title: "Judicial Branch Role",
      description: "Function of judicial branch",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What does the judicial branch do?",
        options: [
          "reviews laws",
          "explains laws",
          "resolves disputes (disagreements)",
          "decides if a law goes against the Constitution",
        ],
        answer: [
          "reviews laws",
          "explains laws",
          "resolves disputes (disagreements)",
          "decides if a law goes against the Constitution",
        ],
      },
    },
    {
      group: "2",
      title: "Highest Court",
      description: "Highest court in the U.S.",
      isMultipleChoice: true,
      question: {
        questionText: "What is the highest court in the United States?",
        options: [
          "the Supreme Court",
          "Federal Circuit Court",
          "District Court",
          "State Supreme Court",
        ],
        answer: "the Supreme Court",
      },
    },
    // These questions should be inserted in Group 2 after the Cabinet positions questions
    {
      group: "2",
      title: "Supreme Court Size",
      description: "Number of Supreme Court justices",
      isSingleLineText: true,
      question: {
        questionText: "How many justices are on the Supreme Court?",
        placeholder: "Visit uscis.gov/citizenship/testupdates...",
        answer:
          "Visit uscis.gov/citizenship/testupdates for the number of justices on the Supreme Court",
      },
    },
    {
      group: "2",
      title: "Chief Justice",
      description: "Current Chief Justice name",
      isSingleLineText: true,
      question: {
        questionText: "Who is the Chief Justice of the United States now?",
        placeholder: "Visit uscis.gov/citizenship/testupdates...",
        answer:
          "Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States",
      },
    },
    {
      group: "2",
      title: "Federal Powers",
      description: "Powers of federal government",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        options: [
          "to print money",
          "to declare war",
          "to create an army",
          "to make treaties",
        ],
        answer: [
          "to print money",
          "to declare war",
          "to create an army",
          "to make treaties",
        ],
      },
    },
    {
      group: "2",
      title: "State Powers",
      description: "Powers belonging to states",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Under our Constitution, some powers belong to the states. What is one power of the states?",
        options: [
          "provide schooling and education",
          "provide protection (police)",
          "provide safety (fire departments)",
          "give a driver's license",
          "approve zoning and land use",
        ],
        answer: [
          "provide schooling and education",
          "provide protection (police)",
          "provide safety (fire departments)",
          "give a driver's license",
          "approve zoning and land use",
        ],
      },
    },
    {
      group: "2",
      title: "State Governor",
      description: "Current state Governor",
      isSingleLineText: true,
      question: {
        questionText: "Who is the Governor of your state now?",
        placeholder: "Enter Governor name...",
        answer: "Answers will vary",
      },
    },
    {
      group: "2",
      title: "State Capital",
      description: "Capital of your state",
      isSingleLineText: true,
      question: {
        questionText: "What is the capital of your state?",
        placeholder: "Enter state capital...",
        answer: "Answers will vary",
      },
    },
    {
      group: "2",
      title: "Political Parties",
      description: "Major U.S. political parties",
      isMultipleChoice: true,
      question: {
        questionText:
          "What are the two major political parties in the United States?",
        options: [
          "Democratic and Republican",
          "Republican and Independent",
          "Democratic and Green",
          "Republican and Libertarian",
        ],
        answer: "Democratic and Republican",
      },
    },
    {
      group: "2",
      title: "President Party",
      description: "Current President's political party",
      isSingleLineText: true,
      question: {
        questionText: "What is the political party of the President now?",
        placeholder: "Visit uscis.gov/citizenship/testupdates...",
        answer:
          "Visit uscis.gov/citizenship/testupdates for the political party of the President",
      },
    },
    {
      group: "2",
      title: "House Speaker",
      description: "Current Speaker of the House",
      isSingleLineText: true,
      question: {
        questionText:
          "What is the name of the Speaker of the House of Representatives now?",
        placeholder: "Visit uscis.gov/citizenship/testupdates...",
        answer:
          "Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives",
      },
    },

    // Starting Group 3: Rights and Responsibilities (48-57)
    {
      group: "3",
      title: "Voting Amendments",
      description: "Constitutional amendments about voting",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "There are four amendments to the Constitution about who can vote. Describe one of them.",
        options: [
          "Citizens eighteen (18) and older (can vote).",
          "You don't have to pay (a poll tax) to vote.",
          "Any citizen can vote. (Women and men can vote.)",
          "A male citizen of any race (can vote).",
        ],
        answer: [
          "Citizens eighteen (18) and older (can vote).",
          "You don't have to pay (a poll tax) to vote.",
          "Any citizen can vote. (Women and men can vote.)",
          "A male citizen of any race (can vote).",
        ],
      },
    },
    {
      group: "3",
      title: "Citizen Responsibilities",
      description: "Unique citizen responsibilities",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What is one responsibility that is only for United States citizens?",
        options: [
          "serve on a jury",
          "vote in a federal election",
          "pay taxes",
          "obey laws",
        ],
        answer: ["serve on a jury", "vote in a federal election"],
      },
    },
    {
      group: "3",
      title: "Citizen Rights",
      description: "Rights only for citizens",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one right only for United States citizens.",
        options: [
          "vote in a federal election",
          "run for federal office",
          "freedom of speech",
          "freedom of religion",
        ],
        answer: ["vote in a federal election", "run for federal office"],
      },
    },
    {
      group: "3",
      title: "Everyone's Rights",
      description: "Rights for all U.S. residents",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What are two rights of everyone living in the United States?",
        options: [
          "freedom of expression",
          "freedom of speech",
          "freedom of assembly",
          "freedom to petition the government",
          "freedom of religion",
          "the right to bear arms",
        ],
        answer: [
          "freedom of expression",
          "freedom of speech",
          "freedom of assembly",
          "freedom to petition the government",
          "freedom of religion",
          "the right to bear arms",
        ],
      },
    },
    {
      group: "3",
      title: "Pledge Loyalty",
      description: "Pledge of Allegiance loyalty",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What do we show loyalty to when we say the Pledge of Allegiance?",
        options: ["the United States", "the flag", "the President", "Congress"],
        answer: ["the United States", "the flag"],
      },
    },
    {
      group: "3",
      title: "Citizenship Promise",
      description: "Promises when becoming citizen",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What is one promise you make when you become a United States citizen?",
        options: [
          "give up loyalty to other countries",
          "defend the Constitution and laws of the United States",
          "obey the laws of the United States",
          "serve in the U.S. military (if needed)",
          "serve (do important work for) the nation (if needed)",
          "be loyal to the United States",
        ],
        answer: [
          "give up loyalty to other countries",
          "defend the Constitution and laws of the United States",
          "obey the laws of the United States",
          "serve in the U.S. military (if needed)",
          "serve (do important work for) the nation (if needed)",
          "be loyal to the United States",
        ],
      },
    },
    {
      group: "3",
      title: "Voting Age",
      description: "Presidential voting age requirement",
      isCodeCompletion: true,
      question: {
        questionText: "How old do citizens have to be to vote for President?",
        options: [
          "eighteen (18) and older",
          "18 and older",
          "eighteen and above",
          "18 years or more",
        ],
        answer: "eighteen (18) and older",
      },
    },
    {
      group: "3",
      title: "Democratic Participation",
      description: "Ways to participate in democracy",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What are two ways that Americans can participate in their democracy?",
        options: [
          "vote",
          "join a political party",
          "help with a campaign",
          "join a civic group",
          "join a community group",
          "give an elected official your opinion on an issue",
          "call Senators and Representatives",
          "publicly support or oppose an issue or policy",
          "run for office",
          "write to a newspaper",
        ],
        answer: [
          "vote",
          "join a political party",
          "help with a campaign",
          "join a civic group",
          "join a community group",
          "give an elected official your opinion on an issue",
          "call Senators and Representatives",
          "publicly support or oppose an issue or policy",
          "run for office",
          "write to a newspaper",
        ],
      },
    },
    {
      group: "3",
      title: "Tax Deadline",
      description: "Federal income tax deadline",
      isCodeCompletion: true,
      question: {
        questionText:
          "When is the last day you can send in federal income tax forms?",
        options: ["April 15", "April 15th", "15th of April", "April fifteenth"],
        answer: "April 15",
      },
    },
    {
      group: "3",
      title: "Selective Service",
      description: "Male registration requirement",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "When must all men register for the Selective Service?",
        options: [
          "at age eighteen (18)",
          "between eighteen (18) and twenty-six (26)",
          "at 18 years old",
          "between 18 and 26 years",
        ],
        answer: [
          "at age eighteen (18)",
          "between eighteen (18) and twenty-six (26)",
        ],
      },
    },

    // Group 4: Colonial Period and Independence (58-70)
    {
      group: "4",
      title: "Colonial Reasons",
      description: "Reasons colonists came to America",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What is one reason colonists came to America?",
        options: [
          "freedom",
          "political liberty",
          "religious freedom",
          "economic opportunity",
          "practice their religion",
          "escape persecution",
        ],
        answer: [
          "freedom",
          "political liberty",
          "religious freedom",
          "economic opportunity",
          "practice their religion",
          "escape persecution",
        ],
      },
    },
    {
      group: "4",
      title: "Native Americans",
      description: "Original inhabitants",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Who lived in America before the Europeans arrived?",
        options: [
          "American Indians",
          "Native Americans",
          "Indigenous peoples",
          "First peoples",
        ],
        answer: ["American Indians", "Native Americans"],
      },
    },
    {
      group: "4",
      title: "Slavery",
      description: "Groups sold as slaves",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What group of people was taken to America and sold as slaves?",
        options: [
          "Africans",
          "people from Africa",
          "African people",
          "African slaves",
        ],
        answer: ["Africans", "people from Africa"],
      },
    },
    {
      group: "4",
      title: "British Conflict",
      description: "Reasons for fighting British",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Why did the colonists fight the British?",
        options: [
          "because of high taxes (taxation without representation)",
          "because the British army stayed in their houses (boarding, quartering)",
          "because they didn't have self-government",
          "because of unfair trade",
        ],
        answer: [
          "because of high taxes (taxation without representation)",
          "because the British army stayed in their houses (boarding, quartering)",
          "because they didn't have self-government",
        ],
      },
    },
    {
      group: "4",
      title: "Declaration Author",
      description: "Writer of Declaration of Independence",
      isSingleLineText: true,
      question: {
        questionText: "Who wrote the Declaration of Independence?",
        placeholder: "Enter the author's name...",
        answer: "(Thomas) Jefferson",
      },
    },
    {
      group: "4",
      title: "Declaration Date",
      description: "When Declaration was adopted",
      isCodeCompletion: true,
      question: {
        questionText: "When was the Declaration of Independence adopted?",
        options: [
          "July 4, 1776",
          "July 4th, 1776",
          "July Fourth, 1776",
          "4th of July, 1776",
        ],
        answer: "July 4, 1776",
      },
    },
    {
      group: "4",
      title: "Original States",
      description: "Three of original 13 states",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "There were 13 original states. Name three.",
        options: [
          "New Hampshire",
          "Massachusetts",
          "Rhode Island",
          "Connecticut",
          "New York",
          "New Jersey",
          "Pennsylvania",
          "Delaware",
          "Maryland",
          "Virginia",
          "North Carolina",
          "South Carolina",
          "Georgia",
        ],
        answer: [
          "New Hampshire",
          "Massachusetts",
          "Rhode Island",
          "Connecticut",
          "New York",
          "New Jersey",
          "Pennsylvania",
          "Delaware",
          "Maryland",
          "Virginia",
          "North Carolina",
          "South Carolina",
          "Georgia",
        ],
      },
    },
    {
      group: "4",
      title: "Constitutional Convention",
      description: "What happened at convention",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What happened at the Constitutional Convention?",
        options: [
          "The Constitution was written.",
          "The Founding Fathers wrote the Constitution.",
          "The Constitution was signed",
          "The Bill of Rights was written",
        ],
        answer: [
          "The Constitution was written.",
          "The Founding Fathers wrote the Constitution.",
        ],
      },
    },
    {
      group: "4",
      title: "Constitution Year",
      description: "When Constitution was written",
      isCodeCompletion: true,
      question: {
        questionText: "When was the Constitution written?",
        options: ["1787", "seventeen eighty-seven", "in 1787", "year 1787"],
        answer: "1787",
      },
    },
    {
      group: "4",
      title: "Federalist Papers",
      description: "Writers of Federalist Papers",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        options: [
          "(James) Madison",
          "(Alexander) Hamilton",
          "(John) Jay",
          "Publius",
        ],
        answer: [
          "(James) Madison",
          "(Alexander) Hamilton",
          "(John) Jay",
          "Publius",
        ],
      },
    },
    {
      group: "4",
      title: "Benjamin Franklin",
      description: "Franklin's achievements",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What is one thing Benjamin Franklin is famous for?",
        options: [
          "U.S. diplomat",
          "oldest member of the Constitutional Convention",
          "first Postmaster General of the United States",
          'writer of "Poor Richard\'s Almanac"',
          "started the first free libraries",
        ],
        answer: [
          "U.S. diplomat",
          "oldest member of the Constitutional Convention",
          "first Postmaster General of the United States",
          'writer of "Poor Richard\'s Almanac"',
          "started the first free libraries",
        ],
      },
    },
    {
      group: "4",
      title: "Father of Country",
      description: "Who is called Father of Our Country",
      isSingleLineText: true,
      question: {
        questionText: 'Who is the "Father of Our Country"?',
        placeholder: "Enter the name...",
        answer: "(George) Washington",
      },
    },
    {
      group: "4",
      title: "First President",
      description: "First U.S. President",
      isSingleLineText: true,
      question: {
        questionText: "Who was the first President?",
        placeholder: "Enter the name...",
        answer: "(George) Washington",
      },
    },

    // Group 5: 1800s (71-77)
    {
      group: "5",
      title: "Louisiana Territory",
      description: "Territory bought from France",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "What territory did the United States buy from France in 1803?",
        options: [
          "the Louisiana Territory",
          "Louisiana",
          "Louisiana Purchase",
          "New Orleans",
        ],
        answer: ["the Louisiana Territory", "Louisiana"],
      },
    },
    {
      group: "5",
      title: "1800s Wars",
      description: "Wars fought in 1800s",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one war fought by the United States in the 1800s.",
        options: [
          "War of 1812",
          "Mexican-American War",
          "Civil War",
          "Spanish-American War",
        ],
        answer: [
          "War of 1812",
          "Mexican-American War",
          "Civil War",
          "Spanish-American War",
        ],
      },
    },
    {
      group: "5",
      title: "Civil War Name",
      description: "Name for North vs South war",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name the U.S. war between the North and the South.",
        options: [
          "the Civil War",
          "the War between the States",
          "the War of Northern Aggression",
          "the War for Southern Independence",
        ],
        answer: ["the Civil War", "the War between the States"],
      },
    },
    {
      group: "5",
      title: "Civil War Cause",
      description: "Problems leading to Civil War",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one problem that led to the Civil War.",
        options: [
          "slavery",
          "economic reasons",
          "states' rights",
          "territorial expansion",
        ],
        answer: ["slavery", "economic reasons", "states' rights"],
      },
    },
    {
      group: "5",
      title: "Lincoln Achievement",
      description: "Important Lincoln accomplishment",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What was one important thing that Abraham Lincoln did?",
        options: [
          "freed the slaves (Emancipation Proclamation)",
          "saved (or preserved) the Union",
          "led the United States during the Civil War",
          "established national banking",
        ],
        answer: [
          "freed the slaves (Emancipation Proclamation)",
          "saved (or preserved) the Union",
          "led the United States during the Civil War",
        ],
      },
    },
    {
      group: "5",
      title: "Emancipation Proclamation",
      description: "Effect of Proclamation",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What did the Emancipation Proclamation do?",
        options: [
          "freed the slaves",
          "freed slaves in the Confederacy",
          "freed slaves in the Confederate states",
          "freed slaves in most Southern states",
        ],
        answer: [
          "freed the slaves",
          "freed slaves in the Confederacy",
          "freed slaves in the Confederate states",
          "freed slaves in most Southern states",
        ],
      },
    },
    {
      group: "5",
      title: "Susan B Anthony",
      description: "Anthony's achievements",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What did Susan B. Anthony do?",
        options: [
          "fought for women's rights",
          "fought for civil rights",
          "led suffrage movement",
          "promoted equality",
        ],
        answer: ["fought for women's rights", "fought for civil rights"],
      },
    },

    // Group 6: Recent American History (78-87)
    {
      group: "6",
      title: "1900s Wars",
      description: "Wars fought in 1900s",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one war fought by the United States in the 1900s.",
        options: [
          "World War I",
          "World War II",
          "Korean War",
          "Vietnam War",
          "(Persian) Gulf War",
        ],
        answer: [
          "World War I",
          "World War II",
          "Korean War",
          "Vietnam War",
          "(Persian) Gulf War",
        ],
      },
    },
    {
      group: "6",
      title: "WWI President",
      description: "President during World War I",
      isSingleLineText: true,
      question: {
        questionText: "Who was President during World War I?",
        placeholder: "Enter President's name...",
        answer: "(Woodrow) Wilson",
      },
    },
    {
      group: "6",
      title: "Depression President",
      description: "President during Great Depression/WWII",
      isSingleLineText: true,
      question: {
        questionText:
          "Who was President during the Great Depression and World War II?",
        placeholder: "Enter President's name...",
        answer: "(Franklin) Roosevelt",
      },
    },
    {
      group: "6",
      title: "WWII Enemies",
      description: "Who U.S. fought in WWII",
      isMultipleChoice: true,
      question: {
        questionText: "Who did the United States fight in World War II?",
        options: [
          "Japan, Germany, and Italy",
          "Germany and Japan",
          "Soviet Union and Germany",
          "Italy and Japan",
        ],
        answer: "Japan, Germany, and Italy",
      },
    },
    {
      group: "6",
      title: "Eisenhower War",
      description: "War Eisenhower served in",
      isSingleLineText: true,
      question: {
        questionText:
          "Before he was President, Eisenhower was a general. What war was he in?",
        placeholder: "Enter war name...",
        answer: "World War II",
      },
    },
    {
      group: "6",
      title: "Cold War Concern",
      description: "Main U.S. concern during Cold War",
      isSingleLineText: true,
      question: {
        questionText:
          "During the Cold War, what was the main concern of the United States?",
        placeholder: "Enter main concern...",
        answer: "Communism",
      },
    },
    {
      group: "6",
      title: "Civil Rights Movement",
      description: "Movement's goal",
      isMultipleChoice: true,
      question: {
        questionText: "What movement tried to end racial discrimination?",
        options: [
          "civil rights (movement)",
          "peace movement",
          "women's movement",
          "labor movement",
        ],
        answer: "civil rights (movement)",
      },
    },
    {
      group: "6",
      title: "MLK Achievement",
      description: "Martin Luther King Jr.'s achievement",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "What did Martin Luther King, Jr. do?",
        options: [
          "fought for civil rights",
          "worked for equality for all Americans",
          "led peaceful protests",
          "promoted nonviolence",
        ],
        answer: [
          "fought for civil rights",
          "worked for equality for all Americans",
        ],
      },
    },
    {
      group: "6",
      title: "September 11",
      description: "Major event on 9/11/2001",
      isCodeCompletion: true,
      question: {
        questionText:
          "What major event happened on September 11, 2001, in the United States?",
        options: [
          "Terrorists attacked the United States.",
          "Terrorists attacked the U.S.",
          "Terror attacks occurred.",
          "The U.S. was attacked by terrorists.",
        ],
        answer: "Terrorists attacked the United States.",
      },
    },
    {
      group: "6",
      title: "Native Tribes",
      description: "American Indian tribes",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one American Indian tribe in the United States.",
        options: [
          "Cherokee",
          "Navajo",
          "Sioux",
          "Chippewa",
          "Choctaw",
          "Pueblo",
          "Apache",
          "Iroquois",
          "Creek",
          "Blackfeet",
          "Seminole",
          "Cheyenne",
        ],
        answer: [
          "Cherokee",
          "Navajo",
          "Sioux",
          "Chippewa",
          "Choctaw",
          "Pueblo",
          "Apache",
          "Iroquois",
          "Creek",
          "Blackfeet",
          "Seminole",
          "Cheyenne",
        ],
      },
    },

    // Group 7: Geography (88-95)
    {
      group: "7",
      title: "Longest Rivers",
      description: "Longest U.S. rivers",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Name one of the two longest rivers in the United States.",
        options: [
          "Missouri (River)",
          "Mississippi (River)",
          "Colorado River",
          "Rio Grande",
        ],
        answer: ["Missouri (River)", "Mississippi (River)"],
      },
    },
    {
      group: "7",
      title: "West Coast Ocean",
      description: "Ocean on West Coast",
      isSingleLineText: true,
      question: {
        questionText: "What ocean is on the West Coast of the United States?",
        placeholder: "Enter ocean name...",
        answer: "Pacific (Ocean)",
      },
    },
    {
      group: "7",
      title: "East Coast Ocean",
      description: "Ocean on East Coast",
      isSingleLineText: true,
      question: {
        questionText: "What ocean is on the East Coast of the United States?",
        placeholder: "Enter ocean name...",
        answer: "Atlantic (Ocean)",
      },
    },
    {
      group: "7",
      title: "U.S. Territories",
      description: "Name a U.S. territory",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one U.S. territory.",
        options: [
          "Puerto Rico",
          "U.S. Virgin Islands",
          "American Samoa",
          "Northern Mariana Islands",
          "Guam",
        ],
        answer: [
          "Puerto Rico",
          "U.S. Virgin Islands",
          "American Samoa",
          "Northern Mariana Islands",
          "Guam",
        ],
      },
    },
    {
      group: "7",
      title: "Canada Border",
      description: "States bordering Canada",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one state that borders Canada.",
        options: [
          "Maine",
          "New Hampshire",
          "Vermont",
          "New York",
          "Pennsylvania",
          "Ohio",
          "Michigan",
          "Minnesota",
          "North Dakota",
          "Montana",
          "Idaho",
          "Washington",
          "Alaska",
        ],
        answer: [
          "Maine",
          "New Hampshire",
          "Vermont",
          "New York",
          "Pennsylvania",
          "Ohio",
          "Michigan",
          "Minnesota",
          "North Dakota",
          "Montana",
          "Idaho",
          "Washington",
          "Alaska",
        ],
      },
    },
    {
      group: "7",
      title: "Mexico Border",
      description: "States bordering Mexico",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name one state that borders Mexico.",
        options: ["California", "Arizona", "New Mexico", "Texas"],
        answer: ["California", "Arizona", "New Mexico", "Texas"],
      },
    },
    {
      group: "7",
      title: "U.S. Capital",
      description: "Capital of United States",
      isSingleLineText: true,
      question: {
        questionText: "What is the capital of the United States?",
        placeholder: "Enter capital name...",
        answer: "Washington, D.C.",
      },
    },
    {
      group: "7",
      title: "Liberty Location",
      description: "Location of Statue of Liberty",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Where is the Statue of Liberty?",
        options: [
          "New York (Harbor)",
          "Liberty Island",
          "New Jersey",
          "near New York City",
          "on the Hudson (River)",
        ],
        answer: ["New York (Harbor)", "Liberty Island"],
      },
    },

    // Group 8: Symbols (96-98)
    {
      group: "8",
      title: "Flag Stripes",
      description: "Reason for 13 stripes",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Why does the flag have 13 stripes?",
        options: [
          "because there were 13 original colonies",
          "because the stripes represent the original colonies",
          "to represent the first states",
          "to honor the original states",
        ],
        answer: [
          "because there were 13 original colonies",
          "because the stripes represent the original colonies",
        ],
      },
    },
    {
      group: "8",
      title: "Flag Stars",
      description: "Reason for 50 stars",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Why does the flag have 50 stars?",
        options: [
          "because there is one star for each state",
          "because each star represents a state",
          "because there are 50 states",
          "to represent all states",
        ],
        answer: [
          "because there is one star for each state",
          "because each star represents a state",
          "because there are 50 states",
        ],
      },
    },
    {
      group: "8",
      title: "National Anthem",
      description: "Name of national anthem",
      isSingleLineText: true,
      question: {
        questionText: "What is the name of the national anthem?",
        placeholder: "Enter anthem name...",
        answer: "The Star-Spangled Banner",
      },
    },

    // Group 9: Holidays (99-100)
    {
      group: "9",
      title: "Independence Day",
      description: "When Independence Day is celebrated",
      isCodeCompletion: true,
      question: {
        questionText: "When do we celebrate Independence Day?",
        options: ["July 4", "July 4th", "July Fourth", "4th of July"],
        answer: "July 4",
      },
    },
    {
      group: "9",
      title: "National Holidays",
      description: "U.S. national holidays",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Name two national U.S. holidays.",
        options: [
          "New Year's Day",
          "Martin Luther King, Jr. Day",
          "Presidents' Day",
          "Memorial Day",
          "Independence Day",
          "Labor Day",
          "Columbus Day",
          "Veterans Day",
          "Thanksgiving",
          "Christmas",
        ],
        answer: [
          "New Year's Day",
          "Martin Luther King, Jr. Day",
          "Presidents' Day",
          "Memorial Day",
          "Independence Day",
          "Labor Day",
          "Columbus Day",
          "Veterans Day",
          "Thanksgiving",
          "Christmas",
        ],
      },
    },
  ],

  es: [
    {},
    {
      group: "1",
      title: "Ley Suprema",
      description: "Entendiendo la Constitución como la ley suprema",
      isMultipleChoice: true,
      question: {
        questionText: "¿Cuál es la ley suprema de la nación?",
        options: [
          "la Constitución",
          "la Declaración de Independencia",
          "la Carta de Derechos",
          "Leyes Federales",
        ],
        answer: "la Constitución",
      },
    },
    {
      group: "1",
      title: "Propósito de la Constitución",
      description: "Entendiendo las funciones de la Constitución",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hace la Constitución?",
        options: [
          "establece el gobierno",
          "define el gobierno",
          "protege los derechos básicos de los estadounidenses",
          "establece impuestos",
        ],
        answer: [
          "establece el gobierno",
          "define el gobierno",
          "protege los derechos básicos de los estadounidenses",
        ],
      },
    },
    {
      group: "1",
      title: "Primeras Tres Palabras",
      description: "Inicio de la Constitución",
      isSingleLineText: true,
      question: {
        questionText:
          "La idea del autogobierno está en las primeras tres palabras de la Constitución. ¿Cuáles son estas palabras?",
        placeholder: "Ingrese las tres palabras...",
        answer: "Nosotros el Pueblo",
      },
    },
    {
      group: "1",
      title: "Definición de Enmienda",
      description: "Entendiendo las enmiendas constitucionales",
      isCodeCompletion: true,
      question: {
        questionText: "¿Qué es una enmienda?",
        options: [
          "un cambio (a la Constitución)",
          "un cambio a la Constitución",
          "una adición (a la Constitución)",
          "una modificación a la Constitución",
        ],
        answer: "un cambio (a la Constitución)",
      },
    },
    {
      group: "1",
      title: "Primeras Diez Enmiendas",
      description: "La Carta de Derechos",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cómo llamamos a las primeras diez enmiendas de la Constitución?",
        placeholder: "Ingrese el nombre...",
        answer: "la Carta de Derechos",
      },
    },
    {
      group: "1",
      title: "Derechos de la Primera Enmienda",
      description: "Entendiendo las libertades de la Primera Enmienda",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Cuál es un derecho o libertad de la Primera Enmienda?",
        options: [
          "expresión",
          "religión",
          "reunión",
          "prensa",
          "peticionar al gobierno",
        ],
        answer: [
          "expresión",
          "religión",
          "reunión",
          "prensa",
          "peticionar al gobierno",
        ],
      },
    },
    {
      group: "1",
      title: "Enmiendas a la Constitución",
      description: "Número total de enmiendas",
      isCodeCompletion: true,
      question: {
        questionText: "¿Cuántas enmiendas tiene la Constitución?",
        options: ["veintisiete (27)", "27", "veintisiete", "27 enmiendas"],
        answer: "veintisiete (27)",
      },
    },
    {
      group: "1",
      title: "Propósito de la Declaración",
      description: "Propósito de la Declaración de Independencia",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hizo la Declaración de Independencia?",
        options: [
          "anunció nuestra independencia (de Gran Bretaña)",
          "declaró nuestra independencia (de Gran Bretaña)",
          "dijo que los Estados Unidos son libres (de Gran Bretaña)",
          "creó la Constitución",
        ],
        answer: [
          "anunció nuestra independencia (de Gran Bretaña)",
          "declaró nuestra independencia (de Gran Bretaña)",
          "dijo que los Estados Unidos son libres (de Gran Bretaña)",
        ],
      },
    },
    {
      group: "1",
      title: "Derechos de la Declaración",
      description: "Derechos en la Declaración de Independencia",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles son dos derechos en la Declaración de Independencia?",
        options: [
          "la vida",
          "la libertad",
          "la búsqueda de la felicidad",
          "el porte de armas",
        ],
        answer: ["la vida", "la libertad", "la búsqueda de la felicidad"],
      },
    },
    {
      group: "1",
      title: "Libertad Religiosa",
      description: "Entendiendo la libertad religiosa",
      isMultipleChoice: true,
      question: {
        questionText: "¿Qué es la libertad de religión?",
        options: [
          "Puedes practicar cualquier religión, o no practicar una religión.",
          "Debes practicar una religión",
          "Sólo puedes practicar ciertas religiones",
          "Debes practicar la religión principal",
        ],
        answer:
          "Puedes practicar cualquier religión, o no practicar una religión.",
      },
    },
    {
      group: "1",
      title: "Sistema Económico",
      description: "Sistema económico de EE.UU.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Cuál es el sistema económico en los Estados Unidos?",
        options: [
          "economía capitalista",
          "economía de mercado",
          "economía socialista",
          "economía mixta",
        ],
        answer: ["economía capitalista", "economía de mercado"],
      },
    },
    {
      group: "1",
      title: "Estado de Derecho",
      description: "Entendiendo el estado de derecho",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué es el 'estado de derecho'?",
        options: [
          "Todos deben seguir la ley.",
          "Los líderes deben obedecer la ley.",
          "El gobierno debe obedecer la ley.",
          "Nadie está por encima de la ley.",
        ],
        answer: [
          "Todos deben seguir la ley.",
          "Los líderes deben obedecer la ley.",
          "El gobierno debe obedecer la ley.",
          "Nadie está por encima de la ley.",
        ],
      },
    },

    // Grupo 2: Sistema de Gobierno (Preguntas 13-47)
    {
      group: "2",
      title: "Ramas del Gobierno",
      description: "Ramas del gobierno",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra una rama o parte del gobierno.",
        options: [
          "Congreso",
          "legislativo",
          "Presidente",
          "ejecutivo",
          "los tribunales",
          "judicial",
        ],
        answer: [
          "Congreso",
          "legislativo",
          "Presidente",
          "ejecutivo",
          "los tribunales",
          "judicial",
        ],
      },
    },
    {
      group: "2",
      title: "Evitar Concentración de Poder",
      description: "Controles y equilibrios en el gobierno",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Qué impide que una rama del gobierno se vuelva demasiado poderosa?",
        options: [
          "controles y balances",
          "separación de poderes",
          "la Constitución",
          "leyes federales",
        ],
        answer: ["controles y balances", "separación de poderes"],
      },
    },
    {
      group: "2",
      title: "Líder del Poder Ejecutivo",
      description: "Liderazgo del poder ejecutivo",
      isSingleLineText: true,
      question: {
        questionText: "¿Quién está a cargo del poder ejecutivo?",
        placeholder: "Ingrese el cargo...",
        answer: "el Presidente",
      },
    },
    {
      group: "2",
      title: "Leyes Federales",
      description: "Creación de leyes federales",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Quién crea las leyes federales?",
        options: [
          "Congreso",
          "Senado y Cámara (de Representantes)",
          "legislatura (nacional o de los EE.UU.)",
          "el Presidente",
        ],
        answer: [
          "Congreso",
          "Senado y Cámara (de Representantes)",
          "legislatura (nacional o de los EE.UU.)",
        ],
      },
    },
    {
      group: "2",
      title: "Partes del Congreso",
      description: "Dos partes del Congreso",
      isMultipleChoice: true,
      question: {
        questionText: "¿Cuáles son las dos partes del Congreso de los EE.UU.?",
        options: [
          "el Senado y la Cámara (de Representantes)",
          "la Cámara y el Senado",
          "los Representantes y los Senadores",
          "la Legislatura y el Parlamento",
        ],
        answer: "el Senado y la Cámara (de Representantes)",
      },
    },
    {
      group: "2",
      title: "Número de Senadores",
      description: "Total de Senadores de EE.UU.",
      isCodeCompletion: true,
      question: {
        questionText: "¿Cuántos senadores de EE.UU. hay?",
        options: ["cien (100)", "100", "cien", "ciento"],
        answer: "cien (100)",
      },
    },
    {
      group: "2",
      title: "Duración del Mandato del Senador",
      description: "Duración del mandato del Senado",
      isCodeCompletion: true,
      question: {
        questionText: "Elegimos a un senador de EE.UU. por cuántos años?",
        options: ["seis (6)", "6", "seis años", "6 años"],
        answer: "seis (6)",
      },
    },
    {
      group: "2",
      title: "Senador del Estado",
      description: "Senador actual del estado",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Quién es uno de los senadores de EE.UU. de tu estado ahora?",
        placeholder: "Ingrese el nombre del Senador...",
        answer: "Las respuestas variarán",
      },
    },
    {
      group: "2",
      title: "Miembros de la Cámara",
      description: "Número de Representantes",
      isCodeCompletion: true,
      question: {
        questionText:
          "La Cámara de Representantes tiene cuántos miembros con derecho a voto?",
        options: [
          "cuatrocientos treinta y cinco (435)",
          "435",
          "cuatrocientos treinta y cinco",
          "435 miembros",
        ],
        answer: "cuatrocientos treinta y cinco (435)",
      },
    },
    {
      group: "2",
      title: "Duración del Mandato del Representante",
      description: "Duración del mandato de un Representante",
      isCodeCompletion: true,
      question: {
        questionText: "Elegimos a un Representante de EE.UU. por cuántos años?",
        options: ["dos (2)", "2", "dos años", "2 años"],
        answer: "dos (2)",
      },
    },
    {
      group: "2",
      title: "Su Representante",
      description: "Representante actual",
      isSingleLineText: true,
      question: {
        questionText: "Nombre a su Representante de EE.UU.",
        placeholder: "Ingrese el nombre del Representante...",
        answer: "Las respuestas variarán",
      },
    },
    {
      group: "2",
      title: "Representación del Senador",
      description: "A quién representan los Senadores",
      isMultipleChoice: true,
      question: {
        questionText: "¿A quién representa un senador de EE.UU.?",
        options: [
          "a todas las personas del estado",
          "sólo a su partido político",
          "sólo a aquellos que votaron por ellos",
          "su distrito",
        ],
        answer: "a todas las personas del estado",
      },
    },
    {
      group: "2",
      title: "Distribución de Representantes",
      description:
        "Por qué los estados tienen diferentes números de Representantes",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Por qué algunos estados tienen más Representantes que otros estados?",
        options: [
          "(debido a) la población del estado",
          "(porque) tienen más gente",
          "(porque) algunos estados tienen más gente",
          "porque son estados más grandes",
        ],
        answer: [
          "(debido a) la población del estado",
          "(porque) tienen más gente",
          "(porque) algunos estados tienen más gente",
        ],
      },
    },
    {
      group: "2",
      title: "Duración del Mandato Presidencial",
      description: "Duración del mandato presidencial",
      isCodeCompletion: true,
      question: {
        questionText: "Elegimos a un Presidente por cuántos años?",
        options: ["cuatro (4)", "4", "cuatro años", "4 años"],
        answer: "cuatro (4)",
      },
    },
    {
      group: "2",
      title: "Mes de Elección Presidencial",
      description: "Mes de elección presidencial",
      isSingleLineText: true,
      question: {
        questionText: "¿En qué mes votamos por el Presidente?",
        placeholder: "Ingrese el mes...",
        answer: "noviembre",
      },
    },
    {
      group: "2",
      title: "Presidente Actual",
      description: "Nombre del Presidente actual",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es el nombre del Presidente de los Estados Unidos ahora?",
        placeholder: "Ingrese el nombre del Presidente actual...",
        answer: "Visite uscis.gov/citizenship/testupdates",
      },
    },
    {
      group: "2",
      title: "Vicepresidente Actual",
      description: "Nombre del Vicepresidente actual",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es el nombre del Vicepresidente de los Estados Unidos ahora?",
        placeholder: "Ingrese el nombre del Vicepresidente actual...",
        answer: "Visite uscis.gov/citizenship/testupdates",
      },
    },
    {
      group: "2",
      title: "Sucesión Presidencial",
      description:
        "Quién se convierte en Presidente si el actual no puede servir",
      isMultipleChoice: true,
      question: {
        questionText:
          "Si el Presidente ya no puede cumplir sus funciones, ¿quién se convierte en Presidente?",
        options: [
          "el Vicepresidente",
          "el Presidente de la Cámara de Representantes",
          "el Secretario de Estado",
          "el Presidente del Tribunal Supremo",
        ],
        answer: "el Vicepresidente",
      },
    },
    {
      group: "2",
      title: "Segunda Sucesión",
      description:
        "Sucesión si tanto el Presidente como el Vicepresidente no pueden servir",
      isMultipleChoice: true,
      question: {
        questionText:
          "Si tanto el Presidente como el Vicepresidente ya no pueden cumplir sus funciones, ¿quién se convierte en Presidente?",
        options: [
          "el Presidente de la Cámara de Representantes",
          "el Secretario de Estado",
          "el Presidente del Tribunal Supremo",
          "el Líder de la Mayoría del Senado",
        ],
        answer: "el Presidente de la Cámara de Representantes",
      },
    },
    {
      group: "2",
      title: "Comandante Militar",
      description: "Comandante en Jefe",
      isMultipleChoice: true,
      question: {
        questionText: "¿Quién es el Comandante en Jefe de las fuerzas armadas?",
        options: [
          "el Presidente",
          "el Secretario de Defensa",
          "el Presidente del Estado Mayor Conjunto",
          "el General de mayor rango",
        ],
        answer: "el Presidente",
      },
    },
    {
      group: "2",
      title: "Firma de Proyectos de Ley",
      description: "Quién firma los proyectos de ley para convertirlos en ley",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Quién firma los proyectos de ley para convertirlos en ley?",
        options: [
          "el Presidente",
          "el Congreso",
          "el Tribunal Supremo",
          "el Líder de la Mayoría del Senado",
        ],
        answer: "el Presidente",
      },
    },
    {
      group: "2",
      title: "Veto de Proyectos de Ley",
      description: "Quién puede vetar proyectos de ley",
      isMultipleChoice: true,
      question: {
        questionText: "¿Quién veta los proyectos de ley?",
        options: [
          "el Presidente",
          "el Congreso",
          "el Tribunal Supremo",
          "el Presidente de la Cámara de Representantes",
        ],
        answer: "el Presidente",
      },
    },
    {
      group: "2",
      title: "Función del Gabinete",
      description: "Propósito del Gabinete del Presidente",
      isMultipleChoice: true,
      question: {
        questionText: "¿Qué hace el Gabinete del Presidente?",
        options: [
          "asesora al Presidente",
          "hace las leyes",
          "aprueba las leyes",
          "elige al Presidente",
        ],
        answer: "asesora al Presidente",
      },
    },
    {
      group: "2",
      title: "Cargos de Nivel de Gabinete",
      description: "Cargos de nivel de gabinete",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Cuáles son dos cargos de nivel de gabinete?",
        options: [
          "Secretario de Estado",
          "Secretario de Defensa",
          "Secretario de Educación",
          "Fiscal General",
          "Vicepresidente",
        ],
        answer: [
          "Secretario de Estado",
          "Secretario de Defensa",
          "Secretario de Educación",
          "Fiscal General",
          "Vicepresidente",
        ],
      },
    },
    {
      group: "2",
      title: "Función del Poder Judicial",
      description: "Función del poder judicial",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hace el poder judicial?",
        options: [
          "revisa las leyes",
          "explica las leyes",
          "resuelve disputas (desacuerdos)",
          "decide si una ley va en contra de la Constitución",
        ],
        answer: [
          "revisa las leyes",
          "explica las leyes",
          "resuelve disputas (desacuerdos)",
          "decide si una ley va en contra de la Constitución",
        ],
      },
    },
    {
      group: "2",
      title: "Tribunal Más Alto",
      description: "Tribunal más alto de los EE.UU.",
      isMultipleChoice: true,
      question: {
        questionText: "¿Cuál es el tribunal más alto de los Estados Unidos?",
        options: [
          "la Corte Suprema",
          "el Tribunal Federal de Circuito",
          "el Tribunal de Distrito",
          "la Corte Suprema del Estado",
        ],
        answer: "la Corte Suprema",
      },
    },
    // Estas preguntas deben insertarse en el Grupo 2 después de las preguntas sobre los cargos del Gabinete
    {
      group: "2",
      title: "Tamaño de la Corte Suprema",
      description: "Número de jueces de la Corte Suprema",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuántos jueces hay en la Corte Suprema?",
        placeholder: "Visite uscis.gov/citizenship/testupdates...",
        answer:
          "Visite uscis.gov/citizenship/testupdates para conocer el número de jueces de la Corte Suprema",
      },
    },
    {
      group: "2",
      title: "Presidente del Tribunal Supremo",
      description: "Nombre del actual Presidente del Tribunal Supremo",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Quién es el Presidente del Tribunal Supremo de los Estados Unidos ahora?",
        placeholder: "Visite uscis.gov/citizenship/testupdates...",
        answer:
          "Visite uscis.gov/citizenship/testupdates para conocer el nombre del Presidente del Tribunal Supremo de los Estados Unidos",
      },
    },
    {
      group: "2",
      title: "Poderes Federales",
      description: "Poderes del gobierno federal",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Según nuestra Constitución, algunos poderes pertenecen al gobierno federal. ¿Cuál es un poder del gobierno federal?",
        options: [
          "imprimir dinero",
          "declarar la guerra",
          "crear un ejército",
          "hacer tratados",
        ],
        answer: [
          "imprimir dinero",
          "declarar la guerra",
          "crear un ejército",
          "hacer tratados",
        ],
      },
    },
    {
      group: "2",
      title: "Poderes Estatales",
      description: "Poderes que pertenecen a los estados",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Según nuestra Constitución, algunos poderes pertenecen a los estados. ¿Cuál es un poder de los estados?",
        options: [
          "proveer escuelas y educación",
          "proveer protección (policía)",
          "proveer seguridad (departamentos de bomberos)",
          "dar una licencia de conducir",
          "aprobar la zonificación y el uso de la tierra",
        ],
        answer: [
          "proveer escuelas y educación",
          "proveer protección (policía)",
          "proveer seguridad (departamentos de bomberos)",
          "dar una licencia de conducir",
          "aprobar la zonificación y el uso de la tierra",
        ],
      },
    },
    {
      group: "2",
      title: "Gobernador del Estado",
      description: "Gobernador actual del estado",
      isSingleLineText: true,
      question: {
        questionText: "¿Quién es el Gobernador de tu estado ahora?",
        placeholder: "Ingrese el nombre del Gobernador...",
        answer: "Las respuestas variarán",
      },
    },
    {
      group: "2",
      title: "Capital del Estado",
      description: "Capital de tu estado",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuál es la capital de tu estado?",
        placeholder: "Ingrese la capital del estado...",
        answer: "Las respuestas variarán",
      },
    },
    {
      group: "2",
      title: "Partidos Políticos",
      description: "Principales partidos políticos de EE.UU.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Cuáles son los dos principales partidos políticos en los Estados Unidos?",
        options: [
          "Demócrata y Republicano",
          "Republicano e Independiente",
          "Demócrata y Verde",
          "Republicano y Libertario",
        ],
        answer: "Demócrata y Republicano",
      },
    },
    {
      group: "2",
      title: "Partido del Presidente",
      description: "Partido político del Presidente actual",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuál es el partido político del Presidente ahora?",
        placeholder: "Visite uscis.gov/citizenship/testupdates...",
        answer:
          "Visite uscis.gov/citizenship/testupdates para conocer el partido político del Presidente",
      },
    },
    {
      group: "2",
      title: "Presidente de la Cámara",
      description: "Actual Presidente de la Cámara de Representantes",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es el nombre del Presidente de la Cámara de Representantes ahora?",
        placeholder: "Visite uscis.gov/citizenship/testupdates...",
        answer:
          "Visite uscis.gov/citizenship/testupdates para conocer el nombre del Presidente de la Cámara de Representantes",
      },
    },

    // Comenzando Grupo 3: Derechos y Responsabilidades (48-57)
    {
      group: "3",
      title: "Enmiendas sobre el Voto",
      description: "Enmiendas constitucionales sobre el voto",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Hay cuatro enmiendas a la Constitución sobre quién puede votar. Describe una de ellas.",
        options: [
          "Los ciudadanos de dieciocho (18) años en adelante (pueden votar).",
          "No tienes que pagar (un impuesto electoral) para votar.",
          "Cualquier ciudadano puede votar. (Hombres y mujeres pueden votar.)",
          "Un ciudadano varón de cualquier raza (puede votar).",
        ],
        answer: [
          "Los ciudadanos de dieciocho (18) años en adelante (pueden votar).",
          "No tienes que pagar (un impuesto electoral) para votar.",
          "Cualquier ciudadano puede votar. (Hombres y mujeres pueden votar.)",
          "Un ciudadano varón de cualquier raza (puede votar).",
        ],
      },
    },
    {
      group: "3",
      title: "Responsabilidades del Ciudadano",
      description: "Responsabilidades únicas del ciudadano",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuál es una responsabilidad que es solo para los ciudadanos de los Estados Unidos?",
        options: [
          "servir en un jurado",
          "votar en una elección federal",
          "pagar impuestos",
          "obedecer las leyes",
        ],
        answer: ["servir en un jurado", "votar en una elección federal"],
      },
    },
    {
      group: "3",
      title: "Derechos del Ciudadano",
      description: "Derechos solo para ciudadanos",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Nombra un derecho solo para los ciudadanos de los Estados Unidos.",
        options: [
          "votar en una elección federal",
          "postularse para un cargo federal",
          "libertad de expresión",
          "libertad de religión",
        ],
        answer: [
          "votar en una elección federal",
          "postularse para un cargo federal",
        ],
      },
    },
    {
      group: "3",
      title: "Derechos de Todos",
      description: "Derechos para todos los residentes de EE.UU.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles son dos derechos de todos los que viven en los Estados Unidos?",
        options: [
          "libertad de expresión",
          "libertad de expresión verbal",
          "libertad de reunión",
          "libertad para peticionar al gobierno",
          "libertad de religión",
          "el derecho a portar armas",
        ],
        answer: [
          "libertad de expresión",
          "libertad de expresión verbal",
          "libertad de reunión",
          "libertad para peticionar al gobierno",
          "libertad de religión",
          "el derecho a portar armas",
        ],
      },
    },
    {
      group: "3",
      title: "Lealtad al Juramento",
      description: "Lealtad al Juramento a la Bandera",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿A qué mostramos lealtad cuando decimos el Juramento a la Bandera?",
        options: [
          "los Estados Unidos",
          "la bandera",
          "el Presidente",
          "el Congreso",
        ],
        answer: ["los Estados Unidos", "la bandera"],
      },
    },
    {
      group: "3",
      title: "Promesa de Ciudadanía",
      description: "Promesas al convertirse en ciudadano",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuál es una promesa que haces cuando te conviertes en ciudadano de los Estados Unidos?",
        options: [
          "renunciar a la lealtad a otros países",
          "defender la Constitución y las leyes de los Estados Unidos",
          "obedecer las leyes de los Estados Unidos",
          "servir en el ejército de los EE.UU. (si es necesario)",
          "servir (hacer un trabajo importante para) la nación (si es necesario)",
          "ser leal a los Estados Unidos",
        ],
        answer: [
          "renunciar a la lealtad a otros países",
          "defender la Constitución y las leyes de los Estados Unidos",
          "obedecer las leyes de los Estados Unidos",
          "servir en el ejército de los EE.UU. (si es necesario)",
          "servir (hacer un trabajo importante para) la nación (si es necesario)",
          "ser leal a los Estados Unidos",
        ],
      },
    },
    {
      group: "3",
      title: "Edad para Votar",
      description: "Requisito de edad para votar por el Presidente",
      isCodeCompletion: true,
      question: {
        questionText:
          "¿Qué edad deben tener los ciudadanos para votar por el Presidente?",
        options: [
          "dieciocho (18) años en adelante",
          "18 años en adelante",
          "dieciocho años o más",
          "18 años o más",
        ],
        answer: "dieciocho (18) años en adelante",
      },
    },
    {
      group: "3",
      title: "Participación Democrática",
      description: "Formas de participar en la democracia",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles son dos maneras en que los estadounidenses pueden participar en su democracia?",
        options: [
          "votar",
          "unirse a un partido político",
          "ayudar con una campaña",
          "unirse a un grupo cívico",
          "unirse a un grupo comunitario",
          "dar tu opinión sobre un tema a los funcionarios electos",
          "llamar a los Senadores y Representantes",
          "apoyar u oponerse públicamente a un tema o política",
          "postularse para un cargo",
          "escribir a un periódico",
        ],
        answer: [
          "votar",
          "unirse a un partido político",
          "ayudar con una campaña",
          "unirse a un grupo cívico",
          "unirse a un grupo comunitario",
          "dar tu opinión sobre un tema a los funcionarios electos",
          "llamar a los Senadores y Representantes",
          "apoyar u oponerse públicamente a un tema o política",
          "postularse para un cargo",
          "escribir a un periódico",
        ],
      },
    },
    {
      group: "3",
      title: "Fecha Límite de Impuestos",
      description:
        "Fecha límite para declarar impuestos federales sobre la renta",
      isCodeCompletion: true,
      question: {
        questionText:
          "¿Cuándo es el último día que puedes enviar los formularios federales de impuestos sobre la renta?",
        options: [
          "el 15 de abril",
          "15 de abril",
          "el 15 de abril",
          "quince de abril",
        ],
        answer: "el 15 de abril",
      },
    },
    {
      group: "3",
      title: "Servicio Selectivo",
      description: "Requisito de registro para hombres",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuándo deben registrarse todos los hombres en el Servicio Selectivo?",
        options: [
          "a los dieciocho (18) años",
          "entre los dieciocho (18) y los veintiséis (26) años",
          "a los 18 años",
          "entre los 18 y los 26 años",
        ],
        answer: [
          "a los dieciocho (18) años",
          "entre los dieciocho (18) y los veintiséis (26) años",
        ],
      },
    },
    // Grupo 4: Período Colonial e Independencia (58-70)
    {
      group: "4",
      title: "Razones Coloniales",
      description: "Razones por las que los colonos vinieron a América",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuál es una razón por la que los colonos vinieron a América?",
        options: [
          "libertad",
          "libertad política",
          "libertad religiosa",
          "oportunidad económica",
          "practicar su religión",
          "escapar de la persecución",
        ],
        answer: [
          "libertad",
          "libertad política",
          "libertad religiosa",
          "oportunidad económica",
          "practicar su religión",
          "escapar de la persecución",
        ],
      },
    },
    {
      group: "4",
      title: "Nativos Americanos",
      description: "Habitantes originales",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Quiénes vivían en América antes de que llegaran los europeos?",
        options: [
          "Indios Americanos",
          "Nativos Americanos",
          "Pueblos Indígenas",
          "Primeras Naciones",
        ],
        answer: ["Indios Americanos", "Nativos Americanos"],
      },
    },
    {
      group: "4",
      title: "Esclavitud",
      description: "Grupos vendidos como esclavos",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Qué grupo de personas fue llevado a América y vendido como esclavo?",
        options: [
          "Africanos",
          "gente de África",
          "personas africanas",
          "esclavos africanos",
        ],
        answer: ["Africanos", "gente de África"],
      },
    },
    {
      group: "4",
      title: "Conflicto con los Británicos",
      description: "Razones para luchar contra los británicos",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Por qué lucharon los colonos contra los británicos?",
        options: [
          "debido a los altos impuestos (impuestos sin representación)",
          "porque el ejército británico se quedaba en sus casas (alojamiento, acuartelamiento)",
          "porque no tenían autogobierno",
          "debido al comercio injusto",
        ],
        answer: [
          "debido a los altos impuestos (impuestos sin representación)",
          "porque el ejército británico se quedaba en sus casas (alojamiento, acuartelamiento)",
          "porque no tenían autogobierno",
        ],
      },
    },
    {
      group: "4",
      title: "Autor de la Declaración",
      description: "Escritor de la Declaración de Independencia",
      isSingleLineText: true,
      question: {
        questionText: "¿Quién escribió la Declaración de Independencia?",
        placeholder: "Ingrese el nombre del autor...",
        answer: "(Thomas) Jefferson",
      },
    },
    {
      group: "4",
      title: "Fecha de la Declaración",
      description: "Cuándo se adoptó la Declaración",
      isCodeCompletion: true,
      question: {
        questionText: "¿Cuándo se adoptó la Declaración de Independencia?",
        options: [
          "el 4 de julio de 1776",
          "4 de julio de 1776",
          "Cuatro de julio de 1776",
          "4 de julio de 1776",
        ],
        answer: "el 4 de julio de 1776",
      },
    },
    {
      group: "4",
      title: "Estados Originales",
      description: "Tres de los 13 estados originales",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Había 13 estados originales. Nombra tres.",
        options: [
          "New Hampshire",
          "Massachusetts",
          "Rhode Island",
          "Connecticut",
          "Nueva York",
          "Nueva Jersey",
          "Pennsylvania",
          "Delaware",
          "Maryland",
          "Virginia",
          "Carolina del Norte",
          "Carolina del Sur",
          "Georgia",
        ],
        answer: [
          "New Hampshire",
          "Massachusetts",
          "Rhode Island",
          "Connecticut",
          "Nueva York",
          "Nueva Jersey",
          "Pennsylvania",
          "Delaware",
          "Maryland",
          "Virginia",
          "Carolina del Norte",
          "Carolina del Sur",
          "Georgia",
        ],
      },
    },
    {
      group: "4",
      title: "Convención Constitucional",
      description: "Qué sucedió en la convención",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué sucedió en la Convención Constitucional?",
        options: [
          "Se escribió la Constitución.",
          "Los Padres Fundadores escribieron la Constitución.",
          "Se firmó la Constitución",
          "Se escribió la Carta de Derechos",
        ],
        answer: [
          "Se escribió la Constitución.",
          "Los Padres Fundadores escribieron la Constitución.",
        ],
      },
    },
    {
      group: "4",
      title: "Año de la Constitución",
      description: "Cuándo se escribió la Constitución",
      isCodeCompletion: true,
      question: {
        questionText: "¿Cuándo se escribió la Constitución?",
        options: [
          "1787",
          "mil setecientos ochenta y siete",
          "en 1787",
          "año 1787",
        ],
        answer: "1787",
      },
    },
    {
      group: "4",
      title: "Los Federalistas",
      description: "Escritores de los Federalistas",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Los Federalistas apoyaron la aprobación de la Constitución de los EE.UU. Nombra uno de los escritores.",
        options: [
          "(James) Madison",
          "(Alexander) Hamilton",
          "(John) Jay",
          "Publius",
        ],
        answer: [
          "(James) Madison",
          "(Alexander) Hamilton",
          "(John) Jay",
          "Publius",
        ],
      },
    },
    {
      group: "4",
      title: "Benjamin Franklin",
      description: "Logros de Franklin",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Por qué es famoso Benjamin Franklin?",
        options: [
          "diplomático estadounidense",
          "miembro más antiguo de la Convención Constitucional",
          "primer Director General de Correos de los Estados Unidos",
          'escritor de "Poor Richard\'s Almanac"',
          "comenzó las primeras bibliotecas gratuitas",
        ],
        answer: [
          "diplomático estadounidense",
          "miembro más antiguo de la Convención Constitucional",
          "primer Director General de Correos de los Estados Unidos",
          'escritor de "Poor Richard\'s Almanac"',
          "comenzó las primeras bibliotecas gratuitas",
        ],
      },
    },
    {
      group: "4",
      title: "Padre del País",
      description: "Quién es llamado el Padre de Nuestro País",
      isSingleLineText: true,
      question: {
        questionText: '¿Quién es el "Padre de Nuestro País"?',
        placeholder: "Ingrese el nombre...",
        answer: "(George) Washington",
      },
    },
    {
      group: "4",
      title: "Primer Presidente",
      description: "Primer Presidente de los EE.UU.",
      isSingleLineText: true,
      question: {
        questionText: "¿Quién fue el primer Presidente?",
        placeholder: "Ingrese el nombre...",
        answer: "(George) Washington",
      },
    },

    // Grupo 5: Años 1800 (71-77)
    {
      group: "5",
      title: "Territorio de Louisiana",
      description: "Territorio comprado a Francia",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Qué territorio compraron los Estados Unidos a Francia en 1803?",
        options: [
          "el Territorio de Louisiana",
          "Louisiana",
          "Compra de Louisiana",
          "Nueva Orleans",
        ],
        answer: ["el Territorio de Louisiana", "Louisiana"],
      },
    },
    {
      group: "5",
      title: "Guerras de 1800",
      description: "Guerras libradas en los años 1800",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Nombra una guerra librada por los Estados Unidos en los años 1800.",
        options: [
          "Guerra de 1812",
          "Guerra México-Estadounidense",
          "Guerra Civil",
          "Guerra Hispano-Estadounidense",
        ],
        answer: [
          "Guerra de 1812",
          "Guerra México-Estadounidense",
          "Guerra Civil",
          "Guerra Hispano-Estadounidense",
        ],
      },
    },
    {
      group: "5",
      title: "Nombre de la Guerra Civil",
      description: "Nombre de la guerra entre el Norte y el Sur",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra la guerra entre el Norte y el Sur de los EE.UU.",
        options: [
          "la Guerra Civil",
          "la Guerra entre los Estados",
          "la Guerra de Agresión del Norte",
          "la Guerra por la Independencia del Sur",
        ],
        answer: ["la Guerra Civil", "la Guerra entre los Estados"],
      },
    },
    {
      group: "5",
      title: "Causa de la Guerra Civil",
      description: "Problemas que llevaron a la Guerra Civil",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra un problema que llevó a la Guerra Civil.",
        options: [
          "esclavitud",
          "razones económicas",
          "derechos de los estados",
          "expansión territorial",
        ],
        answer: ["esclavitud", "razones económicas", "derechos de los estados"],
      },
    },
    {
      group: "5",
      title: "Logro de Lincoln",
      description: "Logro importante de Lincoln",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué fue algo importante que hizo Abraham Lincoln?",
        options: [
          "liberó a los esclavos (Proclamación de Emancipación)",
          "salvó (o preservó) la Unión",
          "lideró a los Estados Unidos durante la Guerra Civil",
          "estableció la banca nacional",
        ],
        answer: [
          "liberó a los esclavos (Proclamación de Emancipación)",
          "salvó (o preservó) la Unión",
          "lideró a los Estados Unidos durante la Guerra Civil",
        ],
      },
    },
    {
      group: "5",
      title: "Proclamación de Emancipación",
      description: "Efecto de la Proclamación",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hizo la Proclamación de Emancipación?",
        options: [
          "liberó a los esclavos",
          "liberó a los esclavos en la Confederación",
          "liberó a los esclavos en los estados Confederados",
          "liberó a los esclavos en la mayoría de los estados del Sur",
        ],
        answer: [
          "liberó a los esclavos",
          "liberó a los esclavos en la Confederación",
          "liberó a los esclavos en los estados Confederados",
          "liberó a los esclavos en la mayoría de los estados del Sur",
        ],
      },
    },
    {
      group: "5",
      title: "Susan B Anthony",
      description: "Logros de Anthony",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hizo Susan B. Anthony?",
        options: [
          "luchó por los derechos de las mujeres",
          "luchó por los derechos civiles",
          "lideró el movimiento por el sufragio",
          "promovió la igualdad",
        ],
        answer: [
          "luchó por los derechos de las mujeres",
          "luchó por los derechos civiles",
        ],
      },
    }, // Grupo 6: Historia Reciente de los Estados Unidos (78-87)
    {
      group: "6",
      title: "Guerras de 1900",
      description: "Guerras libradas en los años 1900",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Nombra una guerra librada por los Estados Unidos en los años 1900.",
        options: [
          "Primera Guerra Mundial",
          "Segunda Guerra Mundial",
          "Guerra de Corea",
          "Guerra de Vietnam",
          "Guerra del Golfo (Pérsico)",
        ],
        answer: [
          "Primera Guerra Mundial",
          "Segunda Guerra Mundial",
          "Guerra de Corea",
          "Guerra de Vietnam",
          "Guerra del Golfo (Pérsico)",
        ],
      },
    },
    {
      group: "6",
      title: "Presidente de la Primera Guerra Mundial",
      description: "Presidente durante la Primera Guerra Mundial",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Quién era Presidente durante la Primera Guerra Mundial?",
        placeholder: "Ingrese el nombre del Presidente...",
        answer: "(Woodrow) Wilson",
      },
    },
    {
      group: "6",
      title: "Presidente de la Depresión",
      description:
        "Presidente durante la Gran Depresión/Segunda Guerra Mundial",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Quién era Presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
        placeholder: "Ingrese el nombre del Presidente...",
        answer: "(Franklin) Roosevelt",
      },
    },
    {
      group: "6",
      title: "Enemigos de la Segunda Guerra Mundial",
      description: "Contra quién luchó EE.UU. en la Segunda Guerra Mundial",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Contra quién lucharon los Estados Unidos en la Segunda Guerra Mundial?",
        options: [
          "Japón, Alemania e Italia",
          "Alemania y Japón",
          "Unión Soviética y Alemania",
          "Italia y Japón",
        ],
        answer: "Japón, Alemania e Italia",
      },
    },
    {
      group: "6",
      title: "Guerra de Eisenhower",
      description: "Guerra en la que sirvió Eisenhower",
      isSingleLineText: true,
      question: {
        questionText:
          "Antes de ser Presidente, Eisenhower era general. ¿En qué guerra estuvo?",
        placeholder: "Ingrese el nombre de la guerra...",
        answer: "Segunda Guerra Mundial",
      },
    },
    {
      group: "6",
      title: "Preocupación de la Guerra Fría",
      description: "Principal preocupación de EE.UU. durante la Guerra Fría",
      isSingleLineText: true,
      question: {
        questionText:
          "Durante la Guerra Fría, ¿cuál era la principal preocupación de los Estados Unidos?",
        placeholder: "Ingrese la principal preocupación...",
        answer: "Comunismo",
      },
    },
    {
      group: "6",
      title: "Movimiento por los Derechos Civiles",
      description: "Objetivo del movimiento",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué movimiento intentó poner fin a la discriminación racial?",
        options: [
          "(movimiento por los) derechos civiles",
          "movimiento por la paz",
          "movimiento de mujeres",
          "movimiento obrero",
        ],
        answer: "(movimiento por los) derechos civiles",
      },
    },
    {
      group: "6",
      title: "Logro de MLK",
      description: "Logro de Martin Luther King Jr.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Qué hizo Martin Luther King, Jr.?",
        options: [
          "luchó por los derechos civiles",
          "trabajó por la igualdad para todos los estadounidenses",
          "lideró protestas pacíficas",
          "promovió la no violencia",
        ],
        answer: [
          "luchó por los derechos civiles",
          "trabajó por la igualdad para todos los estadounidenses",
        ],
      },
    },
    {
      group: "6",
      title: "11 de Septiembre",
      description: "Evento importante del 11/9/2001",
      isCodeCompletion: true,
      question: {
        questionText:
          "¿Qué evento importante ocurrió el 11 de septiembre de 2001 en los Estados Unidos?",
        options: [
          "Terroristas atacaron a los Estados Unidos.",
          "Terroristas atacaron a EE.UU.",
          "Ocurrieron ataques terroristas.",
          "EE.UU. fue atacado por terroristas.",
        ],
        answer: "Terroristas atacaron a los Estados Unidos.",
      },
    },
    {
      group: "6",
      title: "Tribus Nativas",
      description: "Tribus indígenas estadounidenses",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Nombra una tribu indígena americana en los Estados Unidos.",
        options: [
          "Cherokee",
          "Navajo",
          "Sioux",
          "Chippewa",
          "Choctaw",
          "Pueblo",
          "Apache",
          "Iroquois",
          "Creek",
          "Blackfeet",
          "Seminole",
          "Cheyenne",
        ],
        answer: [
          "Cherokee",
          "Navajo",
          "Sioux",
          "Chippewa",
          "Choctaw",
          "Pueblo",
          "Apache",
          "Iroquois",
          "Creek",
          "Blackfeet",
          "Seminole",
          "Cheyenne",
        ],
      },
    },

    // Grupo 7: Geografía (88-95)
    {
      group: "7",
      title: "Ríos Más Largos",
      description: "Ríos más largos de EE.UU.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Nombra uno de los dos ríos más largos en los Estados Unidos.",
        options: [
          "(Río) Missouri",
          "(Río) Mississippi",
          "Río Colorado",
          "Río Grande",
        ],
        answer: ["(Río) Missouri", "(Río) Mississippi"],
      },
    },
    {
      group: "7",
      title: "Océano de la Costa Oeste",
      description: "Océano en la Costa Oeste",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Qué océano está en la Costa Oeste de los Estados Unidos?",
        placeholder: "Ingrese el nombre del océano...",
        answer: "(Océano) Pacífico",
      },
    },
    {
      group: "7",
      title: "Océano de la Costa Este",
      description: "Océano en la Costa Este",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Qué océano está en la Costa Este de los Estados Unidos?",
        placeholder: "Ingrese el nombre del océano...",
        answer: "(Océano) Atlántico",
      },
    },
    {
      group: "7",
      title: "Territorios de EE.UU.",
      description: "Nombra un territorio de EE.UU.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra un territorio de los EE.UU.",
        options: [
          "Puerto Rico",
          "Islas Vírgenes de EE.UU.",
          "Samoa Americana",
          "Islas Marianas del Norte",
          "Guam",
        ],
        answer: [
          "Puerto Rico",
          "Islas Vírgenes de EE.UU.",
          "Samoa Americana",
          "Islas Marianas del Norte",
          "Guam",
        ],
      },
    },
    {
      group: "7",
      title: "Frontera con Canadá",
      description: "Estados que limitan con Canadá",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra un estado que limita con Canadá.",
        options: [
          "Maine",
          "New Hampshire",
          "Vermont",
          "Nueva York",
          "Pensilvania",
          "Ohio",
          "Michigan",
          "Minnesota",
          "Dakota del Norte",
          "Montana",
          "Idaho",
          "Washington",
          "Alaska",
        ],
        answer: [
          "Maine",
          "New Hampshire",
          "Vermont",
          "Nueva York",
          "Pensilvania",
          "Ohio",
          "Michigan",
          "Minnesota",
          "Dakota del Norte",
          "Montana",
          "Idaho",
          "Washington",
          "Alaska",
        ],
      },
    },
    {
      group: "7",
      title: "Frontera con México",
      description: "Estados que limitan con México",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra un estado que limita con México.",
        options: ["California", "Arizona", "Nuevo México", "Texas"],
        answer: ["California", "Arizona", "Nuevo México", "Texas"],
      },
    },
    {
      group: "7",
      title: "Capital de EE.UU.",
      description: "Capital de los Estados Unidos",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuál es la capital de los Estados Unidos?",
        placeholder: "Ingrese el nombre de la capital...",
        answer: "Washington, D.C.",
      },
    },
    {
      group: "7",
      title: "Ubicación de la Estatua de la Libertad",
      description: "Ubicación de la Estatua de la Libertad",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Dónde está la Estatua de la Libertad?",
        options: [
          "(Puerto de) Nueva York",
          "Isla de la Libertad",
          "Nueva Jersey",
          "cerca de la Ciudad de Nueva York",
          "en el (Río) Hudson",
        ],
        answer: ["(Puerto de) Nueva York", "Isla de la Libertad"],
      },
    },

    // Grupo 8: Símbolos (96-98)
    {
      group: "8",
      title: "Estrellas de la Bandera",
      description: "Razón de las 50 estrellas",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Por qué hay 50 estrellas en la bandera?",
        options: [
          "porque hay una estrella por cada estado",
          "porque cada estrella representa un estado",
          "porque hay 50 estados",
          "para representar a todos los estados",
        ],
        answer: [
          "porque hay una estrella por cada estado",
          "porque cada estrella representa un estado",
          "porque hay 50 estados",
        ],
      },
    },
    {
      group: "8",
      title: "Himno Nacional",
      description: "Nombre del himno nacional",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuál es el nombre del himno nacional?",
        placeholder: "Ingrese el nombre del himno...",
        answer: "The Star-Spangled Banner",
      },
    },

    // Grupo 9: Días Festivos (99-100)
    {
      group: "9",
      title: "Día de la Independencia",
      description: "Cuándo se celebra el Día de la Independencia",
      isCodeCompletion: true,
      question: {
        questionText: "¿Cuándo celebramos el Día de la Independencia?",
        options: [
          "el 4 de julio",
          "4 de julio",
          "Cuatro de julio",
          "4 de julio",
        ],
        answer: "el 4 de julio",
      },
    },
    {
      group: "9",
      title: "Días Festivos Nacionales",
      description: "Días festivos nacionales de EE.UU.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Nombra dos días festivos nacionales de los EE.UU.",
        options: [
          "Día de Año Nuevo",
          "Día de Martin Luther King, Jr.",
          "Día de los Presidentes",
          "Día de los Caídos",
          "Día de la Independencia",
          "Día del Trabajo",
          "Día de la Raza",
          "Día de los Veteranos",
          "Día de Acción de Gracias",
          "Navidad",
        ],
        answer: [
          "Día de Año Nuevo",
          "Día de Martin Luther King, Jr.",
          "Día de los Presidentes",
          "Día de los Caídos",
          "Día de la Independencia",
          "Día del Trabajo",
          "Día de la Raza",
          "Día de los Veteranos",
          "Día de Acción de Gracias",
          "Navidad",
        ],
      },
    },
  ],
};

export const generatedSteps = [];

export const tutorial_interface = [
  {
    group: "",
    title: "",
    description: "",
    isMultipleChoice: true,
    question: {
      questionText: "",
      options: ["", "", "", ""],
      answer: "",
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isSelectOrder: true,
    question: {
      questionText: "",
      options: ["", "", "", ""],
      answer: ["", "", "", ""],
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isMultipleAnswerChoice: true,
    question: {
      questionText: "",
      options: ["", "", "", "", "", ""],
      answer: ["", "", ""],
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isCodeCompletion: true,
    question: {
      questionText: "",
      options: [``, ``, ``, ``],
      answer: ``,
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isCode: true,
    isTerminal: false,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isSingleLineText: true,
    question: {
      questionText: "",
      placeholder: "",
      answer: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isText: true,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isCode: true,
    isTerminal: true,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    isConversationReview: true,
    description: "",
    question: {
      questionText: "",
      range: [1, 8],
    },
  },
];
