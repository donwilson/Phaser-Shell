	
	
	BasicGame.MainMenu = function(game) {
		this.music = null;
		this.playButton = null;
	};
	
	
	BasicGame.MainMenu.prototype = {
		'create': function() {
			//this.music = this.add.audio('loop-mainmenu', 1, true);
			//
			//if(playmusic == true){
			//	this.music.play('', 0, 1, true);
			//}
			
			score = 0;
			clicks = 0;
			
			this.titleimage = this.add.sprite(this.world.centerX, 150, 'logo');
			this.titleimage.anchor.setTo(0.5, 0.5);
			this.titleimage.scale.setTo(0.5, 0.5);
			
			// new Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame)
			this.playButton = this.add.button(this.world.centerX, (this.world.height - 150), 'button_play', this.startGame, this, 1, 0, 2);
			this.playButton.scale.setTo(0.5, 0.5);
			this.playButton.anchor.setTo(0.5, 0.5);
			
			this.musicButton = this.add.button(this.world.centerX, (this.world.height - 10), 'button_music', this.changeMusic, this, 1, 0, 2);
			this.musicButton.scale.setTo(0.5, 0.5);
			this.musicButton.anchor.setTo(0.5, 1);
			
			this.shapes1 = this.add.sprite(this.world.centerX, (this.world.centerY + 10), 'spriteset');
			this.shapes1.frameName = 'shape1.png';
			this.shapes1.anchor.setTo(0.5, 0.5);
			this.shapes1.alpha = 0;
			
			// this.shapes2 = this.add.sprite(this.world.centerX+80,this.world.centerY+10,'spriteset');
			// this.shapes2.frameName = 'shape2.png';
			// this.shapes2.anchor.setTo(0.5,0.5);
			
			this.frameNo = 1;
			this.shapetween = this.add.tween(this.shapes1).to({ alpha: 1 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, true);
			// this.frameSwitch = this.time.events.loop(150, this.updateFrame, this);
		},
		
		'changeMusic': function() {
			// toggle music
			if(playmusic == true) {
				//this.music.stop();
				bgmusic.stop();
				
				playmusic = false;
			} else {
				//this.music.play();
				bgmusic.play();
				
				playmusic = true;
			}
		},
	
	
		'updateFrame': function() {
			this.frameNo = this.rnd.integerInRange(1, 6);
			this.shapes1.frameName = "shape"+ this.frameNo +".png";
		},
		
		'update': function() {
			if(this.shapes1.alpha == 0) {
				this.updateFrame();
			}
		},
		
		'startGame': function() {
			//this.music.stop();
			
			this.state.start('EndScreen');
		}
	};
	
	
	
	BasicGame.EndScreen = function(game) {
		
	};
	
	BasicGame.EndScreen.prototype = {
		'create': function() {
			//this.music = this.add.audio('loop-mainmenu', 1, true);
			//
			//if(playmusic == true) {
			//	this.music.play('', 0, 1, true);
			//}
			
			this.user_text = this.add.bitmapText(this.world.centerX, 40, 'font', "N I C E   J O B !", 30);
			this.user_text.x = (this.world.centerX - (this.user_text.textWidth / 2));
			
			this.backButton = this.add.button(10, (this.world.height - 5), 'button_back', this.startGame, this, 1, 0, 2);
			this.backButton.scale.setTo(0.4, 0.4);
			this.backButton.anchor.setTo(0, 1);
			
			this.musicButton = this.add.button((this.world.width - 10), (this.world.height - 5), 'button_music', this.changeMusic, this, 1, 0, 2);
			this.musicButton.scale.setTo(0.4, 0.4);
			this.musicButton.anchor.setTo(1, 1);
		},
		
		'changeMusic': function() {
			// toggle music
			
			if(playmusic == true) {
				//this.music.stop();
				bgmusic.stop();
				
				playmusic = false;
			} else {
				//this.music.play();
				bgmusic.play();
				
				playmusic = true;
			}
		},
		
		'startGame': function() {
			//this.music.stop();
			
			this.state.start('MainMenu');
		}
	};