module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// 2. Configuration for concatinating files goes here.
		concat: {
			options: {
				sourceMap: false,
			},
			dist: {
				src: [
					'js/async-media-load.js', //Async Media Load
				],
				dest: 'js/deploy/async-media-load.js',
			},
		},

		// 2. Configuration for uglify files goes here.
		uglify: {
			options: {
				sourceMap: false,
			},
			build: {
				files: {
					'js/deploy/async-media-load.min.js': ['js/deploy/async-media-load.js'],
				}
			}
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify']);

};