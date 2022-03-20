export async function main(ns) {

    for (let file of ns.ls("home", "bin.holt.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "etc.skully.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "a.config.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "lib.peralta.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "sbin.boyle.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "strategy.santiago.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "var.rosa.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    for (let file of ns.ls("home", "lib.terry.")) {
        if (await ns.prompt(`Really delete ${file}?`)) { ns.rm(file);}
    }
    
}