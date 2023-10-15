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
    clientPrivateKey: '-----BEGIN RSA PRIVATE KEY-----' +
    'MIIEogIBAAKCAQEAse552Ftq80ltOzN124CgrkeIylHaF47rdVYTy7kuc5ovmZvj' +
    'KRSWDhJK1FJkaWftYfFju44JOPmiLcqcwTgC1veai8QSf/su7OatSdKqvnSF5j8u' +
    'dbNkJCKoSWU3Qufvb3kEm1XFbXhxMZ1jcnV62aTVHnwe5l8NwiWRA2oWjmGAATbr' +
    'm/ShKCZfjqQ7oxZap8xm9h1Cc1hFs6DpcCo/L4HdOK92eGEpL78Ms3zWc4HviaLc' +
    '9f1gAy/giFUpAv6b3Jv6I7dqJ+oxMk/cF6NjrNZxbo8e0tD+LgeKj7Y+Cf1w/p2A' +
    'qkwyP+YcNXAuQ0Y3MpHu2ORL01yyOx7rLzNCFwIDAQABAoIBAB2ZRB+fpXzvHAKb' +
    'HuHy1cfoEnNFhnggyD5uoUBkf7uvTHfLHNC6ofOZS2Vih12Zcj22wBZ1HEekDzx6' +
    '1fS2cpJ8AfN6HHG5wSabgPwk1U51Z8jTfdEKlIAGW+RJuBWjK4tpoECO1hbN0Fam' +
    'jeJ+dH88Ek/N6f38lfdT9HmS7kmk22OVZsl9TxqhtlU3k285+s9N1CNTDytnoncT' +
    'DPWINLvasEuLFbCQnTSi8vFnH5/PwOMtaz1Dlmy/aHp7+fJxhVBTEYu8ErDGmKbO' +
    '6dbVcenWMheNY4OL+r3x3BqSHedD1HoK09H0Jamtsa5xztv/cUuzy6DtRPBHlJkT' +
    'A2/lx+ECgYEA4Gl30N6LO1SvldqqYXf+rQ8T7a9ApxpGe1L06I0m7w29iitEC+Ue' +
    'KZah8BhcmeHnj/RaHeIACybLyCadpCHLYQMdT5owna9Pb3ay76M2xWC7trDbzsD4' +
    'Q697EOzmtGp58Q5NvAGhhGKa6fSa6v7I1ah3+8fMyLwXWo8VPyfiKe8CgYEAyvoe' +
    'AnxRSpagbBUNa7zJw6Ox9XgZRcTVKcqiO/QgnLqBxeuqyd+GHXwWH76I/SVFolgJ' +
    'PdFIDuyA5vpuwwzLihTNGU5cbWV1wz/rnrBF5w+oy/uQZMJBN1990j8l8KEd4EO8' +
    'WhRbCZbE5QqaDsQ5cN6oXA+daME4jDWOnVq+MlkCgYBD5STu+KW/SZvmBsZNvvQ6' +
    'f7lTzBYPeI+ieDLIuQvyf4G87+IihytdAcn0zioWFJbuossxB1NkDFTTNXu0UNUr' +
    'gLm5f7j9vDCYVJ1Gi2biyKWCXHfkUdXLBKiDMmmKZDyIhf9WxleLqhmcdvj36CXz' +
    'HolOj+CRSvb12xxegz6V2QKBgDcC5tNBoj6W6E+ivQpwFjbhzL98l0zjdepnsuSQ' +
    '263eloFvx9ACtrSTBuP/nd0OFvtS5N5ONDtnOeBgC1jtxNRdouCy7jXwA6SxVEij' +
    '+a4P/m2adp34T/iT9uPenYfEAvbfJNM9JRdKN37kCrDp2a+PiQ26Za0YgRzu/wIC' +
    'r/2xAoGAJtK2wxbyk/9ULZadDo4nCUjDkgUP2hL7jly2YIvLJ/Y0zznI04XhdF86' +
    '8Pr+HuVeI5XchNyMuXMEJso3hd5/XL77HVvW/ShuTnQXgu2ogursDOggwXFr/rWz' +
    'u/6zcND8RVFyCCNW45xL580n7ISOnaqX34cQvVHAOwqQi/DrVKs=' +
    '-----END RSA PRIVATE KEY-----',
    
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