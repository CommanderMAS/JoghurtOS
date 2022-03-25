/** @param {NS} ns **/
export async function main(ns) {
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/a.config.js","a.test.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_trash_joghurt.js","_trash_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/_update_joghurt.js","_update_joghurt.js");
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/TEST","TEST");
}