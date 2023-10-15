/////////////////////////////////////////////////////
// Client Config
////////////////////////////////////////////////////
export const clientConfig = {
    networkEnvironment: {
      cpaasURLBase: 'https://naas.t-mobile.com',
      euiURLBase: 'https://account.t-mobile.com',
      networkPingServer: 'https://digits.t-mobile.com',
    },
    clientId: 'tmon-CEeWDEq8QSUe1HyXyLwsFzAhEAa6y7yn', // Copy and Paste CPaaS clientId between the quote marks
    clientURLBase: 'http://localhost:8080', // Paste your applications redirection URL between the quote marks
    clientSecret: 's1HJ1f31sJAAPbXG', // Copy and Paste CPaaS secret between the quote marks
    clientPrivateKey: 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDlzpKf0MEIZEquYEFrwU5nRY5BUNMZTXp9S2xwhlJQWKT5+DajAfsqEl5CtITMcHqfXD0AMDomn7U694r+mwYL+tJxrIBUUsgjO/H9NO/pkXcRodgb+Qa4MPtLGRCQrI9T4vohiFnMtK1NrIBB/JZ10PvKJdRacWuemVhRZui+Tgfx7+rJYLtlgsxy0g24yowgKHE17s0Kjko69ebFW9AyTTfa7oJ3uajSAnvvpS1tpseesdpVLcO5fE1VKPPofqIhJMchJa/FjQ1qH0ARH/q9XlExq8yl10CaCMK2vt/beKJgDLJUFssAwBWhg4uCS4GsjChOy47qQ0p+0Jd9QMG3AgMBAAECggEAAIOCM2ZBkDW9Lv+bFdUUSknPBBlcp3FTZUVOZEAAnhpcoAxsftfJynHJESgbJePYelO39TCmaKCxxIR6JJCPJma0orlqfgXDWcTQCStdn+2J0RnGBGX9nFrLrQLM1S31kg/vVDTcUodS3doVXVBlu7SwY2bLPzqCrZOVLXVn7sj3yMRzdiz2jmtC9g9h64paZA5QN9cZgvUZekJ/LaU4ZP/NK0Wu/Q2g5fascwJGUWUqToT6C+pJ0GHX79fXieHCcuWDVgaElGVRW/U+WdJyDkvMC6AjXb2ZBLcKHq7jYMysZUlOZlxNFWQ+EdQOK0jwLEn859m938x/sSBSB8BIfQKBgQD8DnNEq7HUsJLOR8cGcZQTVJ9WMfsxvSQG84zX2VanpopwxqJ/gXCxPKh2oebC62WeaEDpc2LBVYnr/NbM6Ql8dOQyv/I1kezGoLp8GkAGTVrnFTH6+5zBL8extpfL0Nqu+HJrJ+B5kR5Nh7H3RLJ0bWI8irGfwWJbh7/mEUTm8wKBgQDpZwHtiifxZb9GH/U4V1YLvTMAiRNRz2fBVy6glbL1fJCufIb4EErMnDc5aHAVdg1COlB/fLrhw8fiVFa6Q/XhP/pGjSRwvdpexNhuOaIiUpBcRFih0nuS9tJkfRSfgjoBdFsLd9/q38WsBKGHafhcW7cfmQgRKflp8O14gUdzLQKBgAGgej/8N7aeuSPZtMAm5YTGbAzbX7qvdNcSpVsTTQrh+UzHC291P2v1b0TswJeLe2ltVNXs57tFuREr3ZsO+f+ypXJqaL7NxVB24x0/8h/YSfjp2xu6mgVpMInGGu6212J/ugVVCY7fT+nCMXTeHaTAu/yWDJVyYxciJivu+pnfAoGAXPk1YWQZSSWYrdxpGEph8kcpm9r+oSYXVILgBgPbx8IY+AiO0x3aTeskbG/XxhTCb1E/Y6lR4EDWzKd/7K7JsTKFBbmPfIGEDSAofq/ij/2Hl9l53Ow1YXOEl5bjsi5z4MRyx/y2a5875KvrlD94OYInTiTte7jWq4bXcZs91PkCgYANQ8DozhHNlAKitalB/Bn2H/EDiVWqTPllcObv1GE+wnViQE5y34xmF4i9rkm2bxH5dklUjFGstmJpthGajzNrsH+D9QMOzdzebB66GxhfWlYXq4CxSUZR5fa0rqhBEHEHkLUPR8fIXtbHU3Zn0+/N8bj5rwFHvsqyDqRZWIFItg==', // Copy and Paste CPaaS Private Key between the quote marks
  }
  
  /////////////////////////////////////////////////////
  // Calling Config
  ////////////////////////////////////////////////////
  export const callingConfig = {
    autoAcceptVideoUpgrade: {
      enabled: false, // false by default
    },
    callLogStorage: 'indexed-db',
    dtmfFolderURLPrefix: './soundFiles/tones',
    ringbackToneURL: './soundFiles/internal_telephone_ring.ogg',
    ringToneURL: './soundFiles/T-Mobile_RingTone.ogg',
    turnServerDomain: 'stun.l.google.com',
    turnServerPort: 19302,
  }