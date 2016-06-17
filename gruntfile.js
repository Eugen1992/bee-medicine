module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'client/stylesheets/main.css': 'client/sass/main.sass'
                }
            }
        },
        watch: {
          sass: {
            files: ['**/client/sass/*.sass'],
            tasks: ['sass'],
            options: {
              interrupt: true
            }
          }
        }
      
	});
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

	  grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev', ['sass', 'watch:sass']);
}