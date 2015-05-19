	
	
	BasicGame.Preloader = function(game) {
		this.background = null;
		this.preloadBar = null;
		
		this.ready = false;
	};
	
	
	BasicGame.Preloader.prototype = {
		'preload':	function() {
			this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
			this.bck.anchor.setTo(0.5, 0.5);
			this.bck.scale.setTo(0.5, 0.5);
			
			
			// create preload bar
			this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
			this.preloadBar.anchor.setTo(0.5, 0.5);
			this.preloadBar.scale.setTo(0.5, 1);
			this.preloadBar.x = (this.world.center - (this.preloadBar.width / 2));
			
			
			// set the blue bar to represent the actual percentage of data loaded
			this.load.setPreloadSprite(this.preloadBar);
			
			
			// load all the requires assets in the game - sprites, music, fonts
			this.load.image('logo', "assets/logo.png");
			
			
			// spritesheet
			this.load.atlas('spriteset', "assets/spritesheet.png", "assets/spritesheet.json");
			
			
			// buttons
			this.load.spritesheet('button_play', "assets/buttons/play.png", 400, 110);
			this.load.spritesheet('button_back', "assets/buttons/back.png", 400, 110);
			this.load.spritesheet('button_music', "assets/buttons/music.png", 400, 110);
			
			
			// load font
			this.load.bitmapFont('font', "assets/fonts/fnt2_0.png", "assets/fonts/fnt2.fnt");
			
			
			// load main menu loop
			this.load.audio('loop-mainmenu', [
				"assets/sounds/loop/mainmenu.mp3",
				"assets/sounds/loop/mainmenu.ogg",
				"assets/sounds/loop/mainmenu.wav",
				"assets/sounds/loop/mainmenu.m4a"
			]);
			
			
			/*
			this.load.audio('blip', [
				"assets/blip.mp3",
				"assets/blip.ogg",
				"assets/blip.wav",
				"assets/blip.m4a"
			]);
			*/
		},
		
		'create':	function() {
			this.preloadBar.cropEnabled = false;
		},
		
		'update':	function() {
			// go to main menu when 'loop-mainmenu' is ready to be played
			if(this.cache.isSoundDecoded('loop-mainmenu') && (this.ready == false)) {
				this.ready = true;
				
				console.log("Starting MainMenu");
				
				if(null === bgmusic) {
					bgmusic = this.add.audio('loop-mainmenu', 1, true);
					
					if(playmusic) {
						bgmusic.play();
					}
				}
				
				this.state.start('MainMenu');
			}
		}
	};
	