require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOyWVVvrbfpYRQUAAPcJAAAKAAAAY3JlZHMuanNvbr1VW4+rOBr8L35NzoT7JVJLCwQIgVyBBLLaBwMmIeEWc0nIUf77iKR7T0sz09MjrZYnC9vl+spflX+CvEgqZKIOjH+CEictrFE*rLsSgTGQmzhGGAxBBGsIxoBbTi3+qLURwXXtTNzZjFjfLuk2Fby9NFkyi1vpNbI8sbbGG3gMQdkEaRJ+ASiILGOvkLtjma0TzTPTp2PCcHQhcIOd2dJakl6mmLSn9+sbePSIMMFJflDLI8oQhqmJuhVM8PfoC1rl+ticJyk8XIPrXuVdWfWN6zIQ9*ejZ1Sb2YA9NUfh*E36cb4ZZPloTR01jKNSWI5mznaUO1t7Ji0sATZkorn7A2Op0ot+lRxyFBkRyuuk7r6tu6+QjmdrKV*YlClVIc16lkaSK0VSVOxfFHwa0YmCR6Tnf494nnqq1C0WA3Eh6+et2qZ1iVm6483UYu1pm7j75U0muIEnfCa+wh+9cv4nupumGs12nOqXg+1pnRXF7KAhv7Cn7Q4uLiOFGNgbz10RsXv9Hn1mvZQZZy5Oc3ut5qIndg4Sk3u4Wa4IczTdnqL5vhQJVNruL*qwbvCX3eEkJWuFSyXwiGPgqy1hhD5b7GaFarG2y2YmMzmU3kTU+PvZ5gr7Tp3IwWzUBaez2t2mabFWJrsrm1+7c+7tCmk7DaXr27OiM+qMCIzJxxBgdEiqGsM6KfLnP4oaAhi1Ngoxqp*ygtlepLOYK*KzZjWk5icJvJiGT5jGWcNBzSc6qj2nKi22egNDUOIiRFWFomlS1QXu5qiq4AFVYPzv5031RWOUFTWaJVEvn0iyPM2THCWywr+q365HWFewLH*LUQ2GIMZFNkdgXOMGDcFzh6SoHCGQLCXyDEHwFENyLC1ohMJoJK9MyL7G7HWqk2SoqmFWgjHJcyTBUyIpPIb*MyK0SpOiIMuMxqgqL0kipSrChOJETWME5v9IhNU4SZIpkhMkjmZViddUiiNlbiKxHEt8TYRiHv8Zghzd6pel+kagySGIE1zVbt6UaQGjD799TMIwLJq8trs8VPoBwmD86Teq6yQ*VH1pTQ5xeExapPR1gHEM0wo9hiBCbRKiHg8IzG5bFoXtnKmFkG9qszW350PfTMcify0RBYKBpEj*CGJG+MFwkP0BGUj84CkYMAxNk5AmQS*HK836PX9pri3lhY2+8xkVShRjccatYR2lpaPl+WmQlysQRtE72yEIYHhuSqc4o*wLYEyhOuN2VeQgPRWLQsPlKb7Og5C+fgJ+2Q2Mfz7+q1ePGaEaJmkFxkBZBe6Vv6qqARtaCHVdUg+ScpDAL30*IuRl0XXaGXpqB5LlNjWu8kIvLGtjTvQUuaOgVds9NDf6DM879e1PQMAY6Op6IWhqvDXYzanLRGReXP92uVRQnkCNr5RTpDAOpapWM7hzvj1abnJJP8d2EVqSMR+kGjtbOH42afV9fUnITneYSZ83H*f8+bAp7HYOI9nyidLXjeUOMgMG0ebgnvzlHa1hSlHxZt7ZtL7iy*tGqZFJyf5F4kSLj1pI793KUFbNTl7NPP9yF2h1PpelV7hlz1T9o4*GPP1HK6XPdRRLMCIrcAzJMCTxXNlPDEEOezQg8RmKwEdwp+8PZvIeaa+OixP0fH*et*z90b+6n3gMP4G8P2l*0WCyOwsTuXSzq0JaGPIzTr4oHWEfbqWXrij+ZlG75LxJ4H1+BI*e1mUK67jAGRgDmEe4eBaGi6a3p5HHxReHKRJhyOuXrCmsaumX5f8sztjXqhUuyimsjr2wW56*uGAIsk4qS7uG9UeCAKn*JioFHr8DUEsBAhQDFAAACAgA7JZVW+tt+lhFBQAA9wkAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAbQUAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'A7medSYR',
  
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
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
