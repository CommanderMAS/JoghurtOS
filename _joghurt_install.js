/** @param {NS} ns **/
export async function main(ns) {
	await ns.exec('_trash_joghurt.js','home',1,"update");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_trash_joghurt.js","_trash_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_update_joghurt.js","_update_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/os.joghurt.js","os.joghurt.js");

	//hitchcock,skully,peralta,diaz,santiago,boyle,linetti,jeffords
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/holt.start.js","holt.start.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/holt.stop_now.js","holt.stop_now.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/jeffords.servers.js","jeffords.servers.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/jeffords.player.js","jeffords.player.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/jeffords.database.js","jeffords.database.js");

	if (!ns.fileExists("skully.config.js")) {
		await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/skully.config.js", "skully.config.js");
	}
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/hitchcock.init.js","hitchcock.init.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/boyle.gamestage.js","boyle.gamestage.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/boyle.gamestates.js","boyle.gamestates.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/diaz.early.js","diaz.early.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/peralta.toyst.js","peralta.toyst.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/santiago.early.weak.js","santiago.early.weak.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/santiago.early.grow.js","santiago.early.grow.js");

	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/linetti.goto.js","linetti.goto.js");





	//await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/TEST","TEST");

	if (ns.args[0]!="install") {
		await ns.exec('_update_joghurt.js', 'home', 1, "install");
		ns.tprint("Joghurt erfolgreich installiert");
	} else {
		ns.tprint("Joghurt erfolgreich geupdated");
	}
}