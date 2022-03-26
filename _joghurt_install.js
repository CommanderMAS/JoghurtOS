/** @param {NS} ns **/
export async function main(ns) {
	ns.exec('_trash_joghurt.js','home',1,"update");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/a.config.js","a.config.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_trash_joghurt.js","_trash_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_update_joghurt.js","_update_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/os.joghurt.js","os.joghurt.js");

	//hitchcock,skully,peralta,diaz,santiago,boyle,linett,jeffords
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/start.holt.js","start.holt.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/hitchcock.toyst.js","hitchcock.toyst.js");


	//await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/TEST","TEST");


	ns.exec('_update_joghurt.js','home',1,"install");
}