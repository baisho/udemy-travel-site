var gulpVar = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");

gulpVar.task("styles", function() {
    return gulpVar.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .on("error", function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit("end");
    })
    .pipe(gulpVar.dest("./app/temp/styles"));
});