import {Providers, Msal2Provider} from '@microsoft/mgt'

Providers.globalProvider = new Msal2Provider({
    clientId: "c789f79b-23ae-4888-bd4c-eb55e13f7c8d",
    redirectUri: "http://localhost:5500/public/",
})

function login() {
  const element = document.createElement('div');
  element.innerHTML = '<mgt-login></mgt-login>'
  return element;
}

function files() {
  const element = document.createElement('div');
  element.innerHTML = '<mgt-file-list></mgt-file-list>'
  return element;
}

function getRange() {
  const element = document.createElement('div');
  element.innerHTML = '<mgt-get resource="/me/drive/items/E811A422CA0F0D69!899/workbook/tables/Sheet1/range" scopes="mail.read"></mgt-get>'
  return element;
}

document.getElementById("login").appendChild((login()));
document.getElementById("files").appendChild((files()));
document.getElementById("range").appendChild((getRange()));