var gulpVar = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
browserSync = require("browser-sync").create();


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

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }        
    });

    watch("./app/index.html", function() {
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", function() {
        gulpVar.start("cssInject");
    });

});

gulpVar.task("cssInject", ['styles'], function() {
    return gulpVar.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});