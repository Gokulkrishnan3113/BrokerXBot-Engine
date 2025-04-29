const { KiteConnect } = require("kiteconnect");
const dotenv = require("dotenv");
dotenv.config();


const apiKey = 'f1c6aacv32ssr377';
const apiSecret = '4l5itdln8mbvib414g47zfvpx4u6unnt';
const requestToken = 'temporary_request_token';

const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());

async function init() {
    try {
        await generateSession();
        await getProfile();
    } catch (err) {
        console.error(err);
    }
}

async function generateSession() {
    try {
        const response = await kc.generateSession(requestToken, apiSecret);
        console.log("Session generated:", response);
        kc.setAccessToken(response.access_token);
        console.log("Session generated:", response);
    } catch (err) {
        console.error("Error generating session:", err);
    }
}

async function getProfile() {
    try {
        const profile = await kc.getProfile();
        console.log("Profile:", profile);
    } catch (err) {
        console.error("Error getting profile:", err);
    }
}
// Initialize the API calls
init();