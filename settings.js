require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID |CYPHER-X:~UEsDBBQAAAgIAIuWKVvaB26nVgQAAH0HAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGJE7RnTEIhcFvCsqbOxDCQWUXIVCgQn*fQN7enoedmd7eSqSqpMn85wsvoMsxxWyUAsm30FR4jskqF+StkBgAqZ1EKASDIEPCQQTEC9iDp9O97KQpXPKFpkZVXboLGeu0SpFjPdB4KVB0Kgn+w08h6CoLwn2fgPItAOvKptD17hWocrmht5L8KElK+224PYXro0Pne7MxnazfQPPHhHiEmehVkQoRSVMLNRuIC6*Rn+rVZajs5mv8Psxv9s8Duurm4wuN7OexeJhycjlgk+vsBjHX6OvquF12+p1QWkmd6Ftka7UUkmm4uJQtJs9JnUqxOFjfps67*QrHGbIN3yUEUzaL*edWmiFVDs6NtyTsJ2Jc9s35LN1dFY40C3NTuYPV13QynpefY14ElDLcQvJthb9lSHQyrFzF52BL6M1H3Qtk6icO3OCkMuWvxLflB9eif9P39dzeNMlX2fL+8m8n9M7bGvZqdhlHEXY4*A8lzajQTBGDPU1+jS1v0d8bpJNtibcKibx2LK8leQoljKwyBW3wkivTu6WiT*pQ1KXv2PJTru0Fd3OPbTCyB8Zs5yqfbbm+PY2JZd4m5iczaa7TqMDzcE7zzdPo3zkYsfiLlSwaVJZa2Unq+9C0Zr4LHdpvVbkt1dFMWoNH0zGzyEoUYgrUkKC86yP8fwQQP++R16JyKu7YJXpLbNIBHRpHiundnlFZr2iuME5fQjipIOLIFmfboWyDd*AEBRl7qGqQv4cVyQv2yWqKhiiCkz+*GsIMtSQd936bMx4CAJcVsTO6iLJof8h6sdH6Hl5nZF9m3lKv0AlmFCfYUQIzsKqb2OdwdKL8B0pESQVmAQwqdDPAlGJfDAhZY1+Dq2S+33fedXlVVN3wBCkLz2w30vKsYJEM8xYoKXJmP+j+vboYWFRfMsQAUOQwX43qCKUwgQMQfI6xgk0zYusKNGCJHL9wT7+*Em4x*cRgTipwAQoG1Ua+NpMWx3q0HNmM3kbykoog88CP4zyroR2tWHIF1kbDBRFl*ZJSrDr1MezbJEF1yV27DjLBdJ348fbP4D0fHXCMolJ1CT3BHY0kvcCclYLa+nt7Kyxrsd5ugrN2KMGSsw0y7Fy4KKOxlcR8lQX3cSgZtrEuInzND5TM7vaJg2jhG99Nh*dsYd+TQZNbFKNdA7uLgfl1ukozJyJgQI*yehrw+dEj7m4kVVdk65NdurKhyXemeZhKVnWImVznEYaNDlux0ayzRg3S75*WPg1QsmPqwu*3NVL178GGL1ugh8S*aeU78R7x1HP4S8YP+6Wf5nP6c4Yz*L1zRWzURhGgV24pZOeFsnxoZT7gccdzdlMVZjI9j3wfP41BEUCSZCXaS9DeoFgCMq87v1rZEH+m0yKbBvq9r3sBFZE*pyJA05RRWBagMlY4ASWZSRaet+1KfNiDquo*63tJJeReoO3clHsCSQfIwbk*lFJAJ5*A1BLAQIUAxQAAAgIAIuWKVvaB26nVgQAAH0HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==| '',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Shemal,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true,
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
