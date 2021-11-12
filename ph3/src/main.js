import Phaser from 'phaser'

import GameEntry from './scenes/GameEntry'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'matter',
		matter: {
			debug: true
		}
	},
	scene: [GameEntry]
}

export default new Phaser.Game(config)
