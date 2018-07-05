var gulpVar = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

gulpVar.task("styles", function() {
    return gulpVar.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .on("error", function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit("end"); /*we need this to tell watch that the task "styles" has been implemented successfully, no error occurred, and watch task can continue its functioning. Otherwise if watch task receives an error message from gulp it starts to panic and stops its working.*/
    })
    .pipe(gulpVar.dest("./app/temp/styles"));
});