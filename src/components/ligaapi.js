function selectLeague(path) {
    switch (path) {
        case "/laliga" : return "PD";
        case "/premierle" : return "PPL";
        case "/seriea" : return "PL";
        case "/bundesliga" : return "SA";
        case "/ligue1" : return "BL1";
        case "/premeriali" : return "FL1";
        case "/eredivisie" : return "DED";
    }
}
module.exports = {
    selectLeague,
};