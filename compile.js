var spawn = require('child_process').spawn;
console.log("Compiling Java Classes");
var javac = spawn('javac', ['dist/java/org/cmapi/primitives/*.java']);
javac.on('close', function(code) {
    if (code === 0) {
        console.log("Creating Jar file");
        var jar = spawn('jar', ['cf', 'org-cmapi-primitives.jar', 'dist/java/org/cmapi/primitives/*.class']);
        jar.on('close', function(code2) {
            if (code2 === 0){
                console.log("Creating Java Docs");
                var javadoc = spawn('javadoc', ['-d', 'dist/java/org/cmapi/primitives/docs', 'org.cmapi.primitives', '-sourcepath', 'dist/java/']);
                javadoc.on('close', function(code3) {
                    if(code3 !== 0){
                    console.log("Failed to generate Java Docs with exit code: "+code3);
                    }
                });
            } else {
                console.log("Creation of jar file failed with exit code: "+code2);
            }
            
        });
    } else {
        console.log("Java Compilation falied with exit code: "+code);
    }
});