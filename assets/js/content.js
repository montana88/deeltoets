// we maken hier onze eigen werkruimte om ervoor te zorgen 
// dat onze code niet zal conflecteren met andere codes.
// is een opject of een leef object.
// Het voordeel van het gebruik van namespaces is dat functienamen niet kunnen conflicteren. Als veel programmeurs aan eenzelfde project werken
var CONTENT = CONTENT || {};

// self invoking anonymous function, Het belangrijkste hieraan is dat je Local scopes kan maken.
// wanneer de functie runt wanneer het defined is dat je hierbij geen naam hoeft te geven aan deze functie
(function () {
	// Data objecten en zetten hier onze content in. voordeel aan OOP is de referentie naar real-life. lamp: property, height width; method, licht een actie.
	CONTENT.game = {
		title:'Pool A - Score: Boomsquad vs. Burning Snow',
		items: [
			{
				description: 'Team'
			}, {
				description: 'Result'
			}, {
				description: 'Team'
			}
		],
		items2: [
			{
				description: 'Boomsquad'
			}, {
				description: '15 - 8'
			}, {
				description: 'Burning Snow'
			}
		],
		thead: [
			{
				description: 'Score'
			}, {
				description: 'Team'
			}, {
				description: 'Points'
			}, {
				description: 'Team'
			}
		],
		tbody: [
		    { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
    	]
	};

	CONTENT.schedule = {
		title:'Pool A - Schedule',
		thead: [
			{
				description: 'Monday 18 March'
			}, {
				description: 'Team'
			}, {
				description: 'Result'
			}, {
				description: 'Team'
			}
		],
		tbody: [
		    { date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	CONTENT.Ranking = {
		title:'Pool A - Ranking',
		thead: [
			{
				description: 'Team'
			}, {
				description: 'W'
			}, {
				description: 'L'
			}, {
				description: 'Points won'
			}, {
				description: 'Points lost'
			}, {
				description: '+/-'
			}
		],
		tbody: [
		    { team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
		    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
		    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
		    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
		    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		]
	};
	
	// Controller Init
	// geeft je een doorstart
	CONTENT.controller = {
		init: function () {
			// Initialize router
			CONTENT.router.init();
		}
	};

	// Router
	CONTENT.router = {
		init: function () {
	  		routie({
			    '/game': function() {
			    	CONTENT.page.game();
				},
			    '/schedule': function() {
			    	CONTENT.page.schedule();
			    },

			    '/Ranking': function() {
			    	CONTENT.page.Ranking();
			    },
			    '*': function() {
			    	CONTENT.page.game();
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section[data-route]'),
                section = qwery('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Pages
	// zorgt ervoor wat waar in moet, de content van game komt dan op de gamepagina
	CONTENT.page = {
		game: function () {
			Transparency.render(qwery('[data-route=game')[0], CONTENT.game);
			CONTENT.router.change();
		},

		schedule: function () {
			Transparency.render(qwery('[data-route=schedule')[0], CONTENT.schedule);
			CONTENT.router.change();
		},

		Ranking: function () {
			Transparency.render(qwery('[data-route=Ranking')[0], CONTENT.Ranking);
			CONTENT.router.change();
		}
	}
	// DOM ready
	//wanneer de DOM opgebouwd is, word JavaScript pas gestart
	domready(function () {
		// Kickstart application
		CONTENT.controller.init();
	});
	
})();