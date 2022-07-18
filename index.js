import server from "./lib/server.js";

const app = {};

app.init = () => {
    // sukurti pradinius folder'ius
    // sukurti pradinius file'us

    // prisijungti prie duomenu bazes
    // paleisti serveri
    server.init()
    
    // pasikartojantys procesai: 
        // trinimas nenaudojamu failu
        // zipinimas senos info
        // atsinaujinti API info 
}

app.init();

export default app;