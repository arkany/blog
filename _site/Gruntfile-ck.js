module.exports=function(e){e.loadNpmTasks("grunt-contrib-qunit");e.loadNpmTasks("grunt-contrib-watch");e.initConfig({qunit:{all:["test/javascripts/tests/**/*.html"]},watch:{all:{files:["test/javascripts/tests/**/*.html","test/javascripts/tests/**/*.js","lib/assets/javascripts/foundation/*.js"],tasks:"default",options:{interrupt:!0}}}});e.registerTask("default",["qunit"])};