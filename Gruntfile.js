module.exports = function(grunt) {

// Project configuration.
grunt.initConfig( {
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		prod: {
			options: {
				compress: true,
				beautify: false,
				mangle: true,
			},
	        files: {
                '<%= pkg.name %>.min.js': ['blowfish.js']
			}
		}
    },
	jshint: {
		files: ['GruntFile.js', 'blowfish.js']
	},
	jsdoc: {
		dist : {
            src: ['blowfish.js'],
            jsdoc: './node_modules/.bin/jsdoc',
            options: {
                destination: 'doc',
                configure: './node_modules/jsdoc/conf.json',
                template: './node_modules/ink-docstrap/template'
            }
        }
	},
	watch: {
		files: ['<%= jshint.files %>', './node_modules/jsdoc/conf.json'],
		tasks: ['jshint', 'uglify']
	}
});

// Load the plugin that provides tasks.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-jsdoc');
grunt.loadNpmTasks('grunt-contrib-watch');
  
// Default task(s).
grunt.registerTask('default', ['uglify']);

};
