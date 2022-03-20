export async function main(ns) {

    for (let file of ns.ls("home", "bin.holt.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "etc.skully.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "a.config.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "lib.peralta.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "sbin.boyle.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "strategy.santiago.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "var.rosa.")) {
        ns.rm(file);
    }
    for (let file of ns.ls("home", "lib.terry.")) {
        ns.rm(file);
    }
    
	ns.exec('_joghurt_install.js','home',1);
	
}