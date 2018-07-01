var gulpVar = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");


gulpVar.task("default", function() {
    console.log("Hooray - you created a Gulp task!");
});

gulpVar.task("html", function() {
    console.log("Imagine something useful being done to your HTML here.");
});

gulpVar.task("styles", function() {
    return gulpVar.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulpVar.dest("./app/temp/styles"));
});

gulpVar.task("watch", function() {

    watch("./app/index.html", function() {
        gulpVar.start("html");
    });

    watch("./app/assets/styles/**/*.css", function() {
        gulpVar.start("styles");
    });

});