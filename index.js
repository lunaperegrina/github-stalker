import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

async function getForksID(){
    try {
        const ForksID_gross = await axios.get(`https://api.github.com/repos/${process.env.USER_STALKED}/${process.env.REPO_STALKED}/forks`)
        .then((json) =>json.data)

        console.log(`Total de forks: ${ForksID_gross.length} \n`);
        
        ForksID_gross.forEach(e => {
            console.log(e.owner.login)
            console.log(e.owner.html_url)
        });

    } catch (error) {
        console.log(e);
    }
}

setInterval(getForksID(), 60000);