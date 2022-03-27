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

    ns.tprint("___________________________________________________________________________________________________________________________________________");
    ns.tprint("___________________________________________________________________________________________________________________________________________");
    ns.tprint("__________JJJJJJJJJJJ_____________________________________hhhhhhh____________________________________________________________tttt__________");
    ns.tprint("__________J:::::::::J_____________________________________h:::::h_________________________________________________________ttt:::t__________");
    ns.tprint("__________J:::::::::J_____________________________________h:::::h_________________________________________________________t:::::t__________");
    ns.tprint("__________JJ:::::::JJ_____________________________________h:::::h_________________________________________________________t:::::t__________");
    ns.tprint("____________J:::::J_____ooooooooooo______ggggggggg___ggggg_h::::h_hhhhh_______uuuuuu____uuuuuu__rrrrr___rrrrrrrrr___ttttttt:::::ttttttt____");
    ns.tprint("____________J:::::J___oo:::::::::::oo___g:::::::::ggg::::g_h::::hh:::::hhh____u::::u____u::::u__r::::rrr:::::::::r__t:::::::::::::::::t____");
    ns.tprint("____________J:::::J__o:::::::::::::::o_g:::::::::::::::::g_h::::::::::::::hh__u::::u____u::::u__r:::::::::::::::::r_t:::::::::::::::::t____");
    ns.tprint("____________J:::::j__o:::::ooooo:::::og::::::ggggg::::::gg_h:::::::hhh::::::h_u::::u____u::::u__rr::::::rrrrr::::::rtttttt:::::::tttttt____");
    ns.tprint("____________J:::::J__o::::o_____o::::og:::::g_____g:::::g__h::::::h___h::::::hu::::u____u::::u___r:::::r_____r:::::r______t:::::t__________");
    ns.tprint("JJJJJJJ_____J:::::J__o::::o_____o::::og:::::g_____g:::::g__h:::::h_____h:::::hu::::u____u::::u___r:::::r_____rrrrrrr______t:::::t__________");
    ns.tprint("J:::::J_____J:::::J__o::::o_____o::::og:::::g_____g:::::g__h:::::h_____h:::::hu::::u____u::::u___r:::::r__________________t:::::t__________");
    ns.tprint("J::::::J___J::::::J__o::::o_____o::::og::::::g____g:::::g__h:::::h_____h:::::hu:::::uuuu:::::u___r:::::r__________________t:::::t____tttttt");
    ns.tprint("J:::::::JJJ:::::::J__o:::::ooooo:::::og:::::::ggggg:::::g__h:::::h_____h:::::hu:::::::::::::::uu_r:::::r__________________t::::::tttt:::::t");
    ns.tprint("_JJ:::::::::::::JJ___o:::::::::::::::o_g::::::::::::::::g__h:::::h_____h:::::h_u:::::::::::::::u_r:::::r__________________tt::::::::::::::t");
    ns.tprint("___JJ:::::::::JJ______oo:::::::::::oo___gg::::::::::::::g__h:::::h_____h:::::h__uu::::::::uu:::u_r:::::r____________________tt:::::::::::tt");
    ns.tprint("_____JJJJJJJJJ__________ooooooooooo_______gggggggg::::::g__hhhhhhh_____hhhhhhh____uuuuuuuu__uuuu_rrrrrrr______________________ttttttttttt__");
    ns.tprint("__________________________________________________g:::::g__________________________________________________________________________________");
    ns.tprint("______________________________________gggggg______g:::::g__________________________________________________________________________________");
    ns.tprint("______________________________________g:::::gg___gg:::::g__________________________________________________________________________________");
    ns.tprint("_______________________________________g::::::ggg:::::::g__________________________________________________________________________________");
    ns.tprint("________________________________________gg:::::::::::::g___________________________________________________________________________________");
    ns.tprint("__________________________________________ggg::::::ggg_____________________________________________________________________________________");
    ns.tprint("_____________________________________________gggggg________________________________________________________________________________________");


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
