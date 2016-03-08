module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['js/Services/*.js'],
				dest: '../newFolder/gruntTry.js'
			}
		},
            
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'stylesheets/main.css': 'sass/main.sass'
                }
            }
        },
		uglify: {
			options: {
				stripBanner: true,
				banner: '/* <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '../newFolder/gruntTry.js',
				dest: '../newFolder/gruntTry.min.js'
			}
		},

		cssmin: {
			width_banner: {
				options: {
					stripBanner: true,
					banner: '/* My Mini Css */'
				},

				files: {
					'../newFolder/minStyle.css' : ["styles/*.css"]
				}
			}
		},

		watch: {
			files: ['sass/*.sass'],
			tasks: ['sass']
		},

		removelogging: {
			dist: {
				src: '../newFolder/gruntTry.min.js',
      			dest: "../newFolder/application-clean.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-remove-logging');

	grunt.registerTask('default', ['concat', 'sass', 'uglify', 'cssmin', 'removelogging', 'watch']);
	grunt.registerTask('test', ['']);
}