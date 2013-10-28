// we maken hier onze eigen werkruimte om ervoor te zorgen 
// dat onze code niet zal conflecteren met andere codes.
// is een opject of een leeg object.
var CONTENT = CONTENT || {};

// om conflicten te voorkomen
// self invoking anonymous function, Het belangrijkste hieraan is dat je Local scopes kan maken.
// wanneer de functie runt wanneer het defined is dat je hierbij geen naam hoeft te geven aan deze functie
(function () {
	// Data objecten en zetten hier onze content in. voordeel aan OOP is de referentie naar real-life. lamp: property, height width; method, licht een actie.
	CONTENT.game = {
		
	};

	CONTENT.schedule = {
		
	};

	CONTENT.ranking = {
		
	};
	
	// best practice
	// geeft je een doorstart
	// literal vs constructor = literal is gelijk al een variabelen
	// constructor = officieel een function, function kan inladen in var
	CONTENT.controller = {
		init: function () {
			console.log("controller.init ", CONTENT.controller);

			// Set variables
			var type 		=  'POST',
				url  		=  'https://api.leaguevine.com/v1/game_scores/?tournament_id=19389&access_token=82996312dc',
				postData 	= JSON.stringify({
					game_id: '127236',
					team_1_score: '2',
					team_2_score: '4',
					is_final: 'False'
				});

			// Create request
			var xhr = new XMLHttpRequest();
			
			// Open request
			xhr.open(type,url,true);

			// Set request headers
			xhr.setRequestHeader('Content-type','application/json');
			xhr.setRequestHeader('Authorization','bearer 82996312dc');
			
			// Send request (with data as a json string)
			xhr.send(postData);

			// Initialize router
			CONTENT.router.init();
			
		}
	};

	// Router
	CONTENT.router = {
		init: function () {
			console.log("router.init ", CONTENT.router);
			//checked je URL.
	  		routie({
			    '/game': function() {
					CONTENT.page.game();
				},
			    '/schedule': function() {
					CONTENT.page.schedule();
			    },

			    '/ranking': function() {
					CONTENT.page.ranking();
			    },
			    
			    '*': function() {
					CONTENT.page.game();
			    }
			});
		},

		change: function () {
			//qwery selector engine, selecteerd elementen uit DOM
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
	// qwery selecteert een element uit DOM
	// Transparency.render(juisteElement, data);
	CONTENT.page = {
		game: function () {
			console.log("page.game " + CONTENT.page);
			Transparency.render(qwery('[data-route=game')[0], CONTENT.game);
			CONTENT.router.change();
		},
		schedule: function () {
			console.log("content.schedule.data " + CONTENT.schedule.data);
			schemaData: $$.json('https://api.leaguevine.com/v1/game_scores/?tournament_id=19389&access_token=4675792b56',{}, function(data){
				
				Transparency.render(qwery('[data-route=schedule]')[0], data);
			})
			CONTENT.router.change();

		},
		ranking: function () {
			console.log("CONTENT.ranking.pools" + CONTENT.ranking.pools);
			poolData: $$.json('https://api.leaguevine.com/v1/pools/?tournament_id=19389&access_token=e6c8dbf9f2',{}, function(data){
			
				Transparency.render(qwery('[data-route=ranking]')[0], data);
			})
			CONTENT.router.change();
		}
	}
	
	domready(function () {
		// Kickstart application
		CONTENT.controller.init();
	});
	
})();

//object literal configureren object of globale eenlingen
//constructor maakt functie creeren van meerdere instanties
//closure iets van een inner function een outer function kan benaderen
//When we tell a program what order to do things in, we're using something called control flow. You already know about 'if' statements, but in this course, we'll expand our knowledge!
	
	
