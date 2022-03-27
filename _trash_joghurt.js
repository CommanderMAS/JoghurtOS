export async function main(ns) {

    for (let file of ns.ls("home", "start.holt.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "a.config.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "boyle.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "holt.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "hitchcock.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "linetti.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "skully.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "peralta.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "santiago.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }
    for (let file of ns.ls("home", "jeffords.")) {
        if(ns.args[0]=="update"){
            ns.rm(file);
        } else {
            if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
        }
    }

    //hitchcock,skully,peralta,diaz,santiago,boyle,linett,jeffords
}