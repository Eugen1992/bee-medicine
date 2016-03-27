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
        }
	});
    grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass']);
}