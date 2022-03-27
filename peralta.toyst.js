/** @function */
export function banner(ns, start_time=null) {
    ns.tprint("");
    ns.tprint("");
    ns.tprint("");
    ns.tprint("");
    if (start_time) {
        let cur_time = new Date();
        let delta = cur_time.valueOf() - start_time.valueOf();
        let display = delta / 1000 / 60 ;
        ns.tprint("INFO ",ns.nFormat(display,'0.0n')," minutes since the Phoenix first rose    ", cur_time.toLocaleTimeString());
    }
    ns.tprint("INFO@@@@@@@   @@@  @@@   @@@@@@   @@@@@@@@  @@@  @@@  @@@  @@@  @@@  ");
    ns.tprint("INFO@@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@@  @@@@ @@@  @@@  @@@  @@@  ");
    ns.tprint("INFO@@!  @@@  @@!  @@@  @@!  @@@  @@!       @@!@!@@@  @@!  @@!  !@@  ");
    ns.tprint("INFO!@!  @!@  !@!  @!@  !@!  @!@  !@!       !@!!@!@!  !@!  !@!  @!!  ");
    ns.tprint("INFO@!@@!@!   @!@!@!@!  @!@  !@!  @!!!:!    @!@ !!@!  !!@   !@@!@!   ");
    ns.tprint("INFO!!@!!!    !!!@!!!!  !@!  !!!  !!!!!:    !@!  !!!  !!!    @!!!    ");
    ns.tprint("INFO!!:       !!:  !!!  !!:  !!!  !!:       !!:  !!!  !!:   !: :!!   ");
    ns.tprint("INFO!!:       :!:  !:!  :!:  !:!  :!:       :!:  !:!  :!:  :!:  !:!  ");
    ns.tprint("INFO:!:       ::   :::  ::::: ::   :: ::::   ::   ::   ::   ::  :::  ");
    ns.tprint("INFO::         :   : :   : :  :   : :: ::   ::    :   :     :   ::   ");
    ns.tprint("                                                                     ");
    ns.tprint("                                .-==========                         ");
    ns.tprint("                             .-' O    =====                          ");
    ns.tprint("                            /___       ===                           ");
    ns.tprint("                               \_      |                             ");
    ns.tprint("    _____________________________)    (_____________________________ ");
    ns.tprint("    \___________               .'      `,              ____________/ ");
    ns.tprint("      \__________`.     |||<   `.      .'   >|||     .'__________/   ");
    ns.tprint("         \_________`._  |||  <   `-..-'   >  |||  _.'_________/      ");
    ns.tprint("            \_________`-..|_  _ <      > _  _|..-'_________/         ");
    ns.tprint("               \_________   |_|  //  \\\\  |_|   _________/            ");
    ns.tprint("                          .-\   //    \\\\   /-.                       ");
    ns.tprint("          ,  .         _.'.- `._        _.' -.`._         .  ,       ");
    ns.tprint("        <<<<>>>>     .' .'  /  '``----''`  \\  `. `.     <<<<>>>>     ");
    ns.tprint("          '/\\\`         /  .' .'.'/|..|\\`.`. `.  \\         '/\\\`       ");
    ns.tprint("          (())        `  /  / .'| |||| |`. \\  \\  '        (())       ");
    ns.tprint("           /\\\          ::_.' .' /| || |\\ `. `._::          /\\\        ");
    ns.tprint("          //\\\\           '``.' | | || | | `.''`           //\\\\       ");
    ns.tprint("          //\\\\             .` .` | || | '. '.             //\\\\       ");
    ns.tprint("          //\\\\                `  | `' |  '                //\\\\       ");
    ns.tprint("          \\\\//                                            \\\\//       ");
    ns.tprint("           \\/                  ART BY MJP                  \\/        ");
    ns.tprint("                              CODE BY TRHR                           ");

    ns.disableLog("scan");
}

export function toyst(ns) {
    Math.round(Math.random()*14,1);
    switch (expression) {
        case 1:
            ns.tprint("I’m Sorry About Tonight!");
            break;
        case 2:
            ns.tprint("It’s Not Your Fault, I Was Terrible");
            break;
        case 3:
            ns.tprint("It was slightly less unbearable with you");
            break;
        case 4:
            ns.tprint("I'm horrible at this. When can we stop?");
            break;
        case 5:
            ns.tprint("I'm with Someone, Nothing's Going to Happen");
            break;
        case 6:
            ns.tprint("Better Not Bite Me in the Ass");
            break;
        case 7:
            ns.tprint("Uh-oh I Hope it Doesn't Get Too Sexual");
            break;
        case 8:
            ns.tprint("Why doesn't your mouth work?");
            break;
        case 9:
            ns.tprint("I hope it wasn't a mistake");
            break;
        case 10:
            ns.tprint("I just got it out of the vent to rub it in your faces!");
            break;
        case 11:
            ns.tprint("I Can't Find Anything And I Don't Know What To Do");
            break;
        case 12:
            ns.tprint("I'm So Confused, I Don't Know What's Happening Right Now");
            break;
        case 13:
            ns.tprint("Hey, what's up? I came as fast as I could");
            break;
        case 99:
            ns.tprint("TEXT");
            break;
        default:
            ns.tprint("Kind, Sober and Fully Dressed");
            break;
    }
}


export function banner_short(ns, start_time=null) {
    ns.tprint("");
    if (start_time) {
        let cur_time = new Date();
        let delta = cur_time.valueOf() - start_time.valueOf();
        let display = delta / 1000 / 60 ;
        ns.tprint("INFO ",ns.nFormat(display,'0.0n')," minutes since the Joghurt first rose    ", cur_time.toLocaleTimeString());
    }
}
