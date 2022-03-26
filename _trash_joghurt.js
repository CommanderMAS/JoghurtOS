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

    //hitchcock,skully,peralta,diaz,santiago,boyle,linett,jeffords
}