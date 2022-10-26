const casesTXT = {
  case1: {
    TXT: {
      databaseDesign: {
        sectTitle: "Database design",
        Intro:
          "The first step of the process was to design the database in relation to the functionalities that were planned and the necessary authentication and authorisation processes.",
        Sections: {
          first: {
            headline: "",
            text: "Based on the core concept of the app after multiple iterations we managed to come up with 9 entities for our database and the attributes they needed to fit with each other in the context we planned. After establishing appropriate model, it was recreated using SQL",
          },
        },
      },
      APIplanning: {
        sectTitle: "API planning",
        Intro:
          "The API endpoints have been planned in connection and simultaneously with for mention ERD. The end solution consisted of 26 endpoints divided into 6 routes to accommodate to the types of possible interaction within the app.",
        Sections: {
          first: {
            headline: "Authentication and authorisation",
            text: "Only three of the created endpoints don’t require some type of authorisation,  the login as well as the two endpoints used to create new account. All of the remaining endpoints require a token, that’s created after confirming the inputted user credentials have a proper match in the database. Based on the information retrieved from token a proper account with users data is displayed. Other than that the token is used to determine what type of action is possible for this user and what role do they hold in the system.",
          },
          second: {
            headline: "Routes and models",
            text: "As mentioned above the API endpoints are divided into six routes that make use of a total of 5 models. The error handing for this project is relatively simple and majority of the process takes place in models.",
          },
        },
      },
      handlingData: {
        sectTitle: "Handling and displaying data",
        Intro:
          "Since the project is a single page web application entirety of the HTML is create using JavaScript DOM manipulation.",
        Sections: {
          first: {
            headline: "Page templates",
            text: "The creation of the content is dependable on a onload fired function which sole purpose is to  check the url of the page. Once the “page” the user is currently on is determined, appropriate DOM elements are created depending on whether there is a token available and what information it holds.",
          },
          second: {
            headline: "Token usage",
            text: "The token is being stored in local storage after user logs in. The account information stored in it are used to determine what DOM elements need to be created and the token itself is used for future API calls. The token is removed when the user logs out.",
          },
          third: {
            headline: "Handling data",
            text: "After proper template is defined, the newly created DOM elements are being populated by data retrieved from the database. Some of the data is called on load the rest require users intervention. The user can display, update and delete own data, but also see what type of errors might have occurred while retrieving it.",
          },
        },
      },
    },
    takeaway: {
      TXT: "Although not perfect this project definitely fulfilled it’s learning purpose as it gave me and my teammates a well-rounded idea about the 3-Tier Application Architecture and database structure.",
      ID: "case1",
    },
  },
  case2: {
    TXT: {
      userResearch: {
        sectTitle: "User research",
        Intro:
          "The first stage of the process focused on user research. The goal of the research was to gain understanding of Adelino’s clients and values it wants represent.",
        Sections: {
          first: {
            headline: "Standard data",
            text: `Our team used standard data as a starting point, from our research we got to know:
            •	what age group in this particular region might be the most interested in the store and what shopping tendencies they have. 
            •	How common and popular Portuguese products are in Denmark.
            •	How willing to buy unknown to them brands and products are people in Northern Jutland 
            Based on this data we created a user categorisation for Adelino.
            `,
          },
          second: {
            headline: "Interviews and personas",
            text: "Based on our user categorisation we created a qualitative interview guide. The aim of the interviews was to gain insight into feelings, attitudes and experiences with or towards topics related to Adelino case. Four people, fitting our user categorisation, had been selected for the interview and using the data gathered from them three personas were created.",
          },
        },
      },
      IA: {
        sectTitle: "IA",
        Intro:
          "Adelino’s clients struggled with navigating the web shop, that’s why a completely new information architecture was created for this product.",
        Sections: {
          first: {
            headline: "Product inventory",
            text: "To make the creation of new IA easier the team created a product inventory, this allowed us to gain an insight into what type of items are we dealing with and helped creating an easy categorisation for all of them. Keeping to correct taxonomy levels we created three main categories with sub categories.",
          },
          second: {
            headline: "Catalogue IA scheme",
            text: "After revising categorised content the team decided on catalogue IA scheme. This decision was made based on the fact that the website consists both of a lot of repetitive type content (product pages) as well as separate content in regards to the store itself.",
          },
        },
      },
      UIdesign: {
        sectTitle: "UI design",
        Intro:
          "After gathering enough data about potential user, the team started working on design.",
        Sections: {
          first: {
            headline: "Iterative process",
            text: "Our design phase was an iterative process, based on the data we gathered in previous stage the team produced low-fidelity wireframes. The wireframes were later revised and adjusted suitable to the feedback, after which new wireframes of higher-fidelity were produced. The team followed in this cycle until a satisfactory result was produced.",
          },
          second: {
            headline: "Color and content choice",
            text: `Adelino did not have a color guide as such the color choice was partially based on colors used in the logo and partially based on previously conducted research. The end choice is based heavily on dark blues and soft warm yellows.
          
            The solution is image heavy, as the research showed the visual representation of offered products is crucial. The background of selected photos were removed to avoid too many foreign colours on the interface. The text on the website is welcoming but also simple and clear, since the website’s goal is to be easily accessible information source.`,
          },
          third: {
            headline: "User tests",
            text: "During each iterative cycle user test have been conducted on created prototypes. The team conducted 5 second test to gain information on how the page is perceived by user and what draws user’s attention. The think aloud tests were conducted to test the navigation of the page and content itself.",
          },
        },
      },
      coding: {
        sectTitle: "Coding",
        Intro:
          "The website consist both of static content as well as content injected via DOM manipulation in JavaScript. The visual content is drawn to the page via API calls and displayed on the page, while the text is a static part of the HTML files.",
        Sections: {},
      },
    },

    takeaway: {
      TXT: "The product fulfilled it’s purpose of being a guide and an addition to the existing web shop, but also convey the atmosphere Adelino’s web shop lacked to give its users.",
      ID: "case2",
    },
  },
  case3: {
    TXT: {
      UIdesignAPOD: {
        sectTitle: "UI design",
        Intro:
          "The UI for this solution is very simple, since the main element of the page is a photo,  the colours are light and analogous as not to take attention away from the main content. User has only four possible actions to take: view the photo, view the description of the photo, see previous picture and see next picture.",
        Sections: {},
      },
      fetchingData: {
        sectTitle: "Fetching data",
        Intro:
          "All of the date on the website is fetched from NASA open APOD API. The fetch request is send on create() and the data from retrieved object is pushed into previously  defined variables and used to display content on the webpage. On load the page displays  only the APOD picture and it’s title but user can access more information by interacting with the interface.",
        Sections: {
          first: {
            headline: "Updating data ",
            text: `User has the possibility to freely switch between current and previous pictures, by doing so a new API request is send and the retrieved data displays in place of the previous. 
            `,
          },
        },
      },
    },
    takeaway: {
      TXT: "By creating the website in Vue framework working with changing data is easier. The framework allows for swift and natural update of the content and prove to be fairly easy to work with. The solution works well with the given content and it fulfilled the learning goals for this small project.",
      ID: "case3",
    },
  },
};
