/**
 * @typedef {import(".").NS} ns
 *
 */

export async function main(ns) {
    var count = 0;
    while (true) {

        if (count > 120) {
            ns.tprint("scheduled reboot");
            ns.ps("home").filter(process => process.filename != "holt.start.js").forEach(process => ns.kill(process.pid));
            await ns.run("_update_joghurt.js");
            ns.sleep(5000);
            ns.run("os.joghurt.js");
            count = 0;
        }

        if (ns.ps("home").filter(process => process.filename == "os.joghurt.js").length != 1) {
            ns.run("os.joghurt.js");
            ns.print("Joghurt not found");
        }

        try {
            let heartbeat = ns.peek(20);
            let curtime = new Date().valueOf();
            ns.print((curtime - heartbeat)/1000, " seconds since last heartbeat");

            if ((curtime - heartbeat)/1000 > 300) {
                throw "Heartbeat is old.";
            }
        } catch (e) {

            ns.tprint("error ", e);

            ns.ps("home").filter(process => process.filename != "holt.start.js").forEach(process => ns.kill(process.pid));
            ns.run("os.joghurt.js");
        }
        await ns.sleep(60000);
        count++;

    }
}