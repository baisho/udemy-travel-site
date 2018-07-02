var gulpVar = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

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