/** @param {NS} ns **/
export async function main(ns) {
	await ns.wget("https://raw.githubusercontent.com/CommanderMAS/JoghurtOS/main/a.config.js","a.test.js");
}