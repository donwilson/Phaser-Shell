	
	
	var BasicGame = {};
	var bgmusic = null;
	var playmusic = false;
	
	BasicGame.Boot = function(game) {
		
	};
	
	BasicGame.Boot.prototype = {
		'preload':	function() {
			this.load.image('preloaderBackground', "assets/preloadbck.png");
			this.load.image('preloaderBar', "assets/preloadbar.png");
		},
		'create':	function() {
			// playing on desktop
			if(this.game.device.desktop) {
				// always show whole game
				this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				
				// align horizontally
				this.scale.pageAlignHorizontally = true;
			} else {
				this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				
				// minimum game bounds
				this.scale.minWidth = 150;
				this.scale.minHeight = 250;
				
				this.scale.maxWidth = 600;
				this.scale.maxHeight = 1000;
				
				this.scale.forceLandscape = false;
				this.scale.pageAlignHorizontally = true;
			}
			
			// apply the setting we set up above
			//this.scale.setScreenSize(true);
			
			// start Preloader state
			this.state.start('Preloader');
		}
	}
	
	