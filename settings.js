require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGqdJ1up9bSaWAQAAH4HAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xqtYIiYNWpGkBEBLwcwQtT*RAhQLgEDEHldPnvXZxL93mY6TnDU9hJ9l7Za639A5AS18hCLZj+ABXFV8hQt2RthcAUqE0UIQr6IIQMginYOc8xxptTls20mUtRu98syp69vIqF6ReX4zYdnK5x+KIO4yfw6IOqOec4+EPChKNnaW6lS7Y3Mz4Y3GEvn6gK7+0EUzdEczsawpEcX7xCegKPLiPEFJNYrxJUIApzC7UbiOnX4AergzP3aguV3LN61NL0bjn1MDAWsngxz4Z0UlxnS9S9mAdfg88fDhAaW7a5KS8NcReGKcDLkNsnYVbRtfAiuSlLSKW0+*Eb*BrHBIVmiAjDrP1y33U7uDjGOd3PtmUu1odiOdcGmj7U7rYA1*Nj4cupbpHZjsu+BlyfJIKABGlzTL0E0vuSZK6mcaNCkpe9VLmtdBKd3dGoVuvPwDf0QyvZ*+m7Yx*WB3noG6sLT5ork4dSNPGIq1ZSybJgsIhd81zwcOKVX4N*qeJgj5WecSyuoeiXVga3nqFEtqVmL+OB1JBgKZKb294*9R2yhv4J5dbXZsP4rgT7scfpNa1mng3bzA7i7e0uk+jOH2TY7u64cJXVYmgWuawLxu4kO5bNN8f75FKXguXETqq41hIfTqm3irdPry*KUGuGYMo9+oCiGNeMQoZL0sV4TugDGF53KKCIvbYXbJLRfVZZ1pXo1hl6lZ6urauyjYyGCftewZsN5+WXq+MkyhPog4qWAaprFC5wzUraOqiuYYxqMP37ex8QdGdvxHXlRlwfRJjWzCNNlZcw*GD1YxMGQdkQtmtJoHULRMF0+DuMGMMkrrs+NgTSIMFXpCWQ1WAawbxGv16IKArBlNEG*XKtVoZd41cn3VBEgQd9ULwSgsPOS8JYlPnRiBN5ecoJf9Xfbl1aWFXfCGKgDwjsToM6QQXMQR*kr9cEkecn0liSeVGWhO5iF3*8AtzlDxGDOK*BFGibmdwLdUNf2YoseYahOLGixQr4*cAPpbwxoacejCcVaaOeps3lXV4w7J+a*VGxmC285F52Ojk2mj9zt6d*SAKmwEJnKE*W0PdL016MYyF2nJ3q6yUfu886VhfP+HRKyShIbqp6XvsLNxMvw9u1QFGkthNHTO+Z4q+QyWvpPqxQ21aTWfzUVQvRFQfoc7FRWWllkeVjNLEXTTtui7E+UO1j6k38jbXDZ2LkQoO2dD07taEboStrzXtEhBurqZhWCnLMtT2HL+MF4u2yhiucJsqbhl89lL*PLvyqro667jfC6HUUvFP0n1S+Ae8UN3z0P+V4Hy7*YlD12eSMcn3xJTKI4yTyKp+eioOd728a3fUCYb80jJk2SrwwAI*H9z6ocsiikhadbIozBH1Ay6bTr0mi8g+VNMUzZ+*WzWHNlN+ecHGBagaLCkw5URB5cczJ0tupDS2rBayTjodn2R*JncBbpap2DLIPiwGl+2YsAo+fUEsBAhQDFAAACAgAap0nW6n1tJpYBAAAfgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgAQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254792331729',
  
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
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
