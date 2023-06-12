/** @format */
require('dotenv').config({ path: __dirname+'/.env' });

const API_KEY: string = process.env.API_KEY;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == "get_access_token") {
    chrome.identity.getAuthToken({ interactive: true }, function (auth_token) {
      console.log(auth_token);
    });
    return sendResponse(true);
  }
  if (request.message == "get_profile") {
    chrome.identity.getProfileUserInfo(
      { accountStatus: "ANY" },
      (user_info) => {
        console.log(user_info);
      }
    );
    return sendResponse(true);
  }
});
