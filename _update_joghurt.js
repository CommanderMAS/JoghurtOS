export async function main(ns) {

    await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_joghurt_install.js","_joghurt_install.js");
    if (ns.args[0]!="install") {
        ns.exec('_joghurt_install.js', 'home', 1);
    } else {
        ns.exec('_joghurt_install.js', 'home', 1,"install");
    }
	
}