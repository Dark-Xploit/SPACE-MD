require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || CYPHER-X:~UEsDBBQAAAgIAOKbJFvrt+OfTQQAAHAHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVmuGOWtVVi8hFEUURW9yahwgRIhAgxAtO+d+naKen52F3tpenkKTO+c53yXdAStwgB7Vg9B1UFF8gQ92StRUCIzA+H4+Igj6IIYNgBJB3rVVOEkyHmJiT4NX*ekFw7GwEi2ObqN14XEVLZccJwQt49EF1PuQ4+kPB6X1YbMVQD+6zLK+l0BbpXKlnmh8QpLW6Z3qhHYZBu89WL+DRVYSYYpIYVYoKRGHuoNaDmH4OvuZuw5XF6j3bhHE6WJmzVsRRlYqDVGZOlslXbZMmutPw3OfgCxbfvq7nfBhzac+TTtlERvdq6zc9ZL+O12q5maIhMyc9XXvCb3BCUDyNEWGYtZ*m3TB2ARLtILFzzpQ9V73JfLXkXZ85lyBIuYK1YTk4Gpd8+jngN0WN1XosHLcRl5lTjSXZ1VbygDLHOfEzL5wPDqbh+0gLfwfu0XevZP+H94G+lYTJsMARv0lr7iDsWi0TWSGEBzfTc6g7NxbDVoCB9jn4kSxkSw5XvTXhCDIb5srWjrT+gYx5v9d4*IBQ1BpVQLgP+JCd6Z9Qztx9ML25SjNfSJalhgYRpKU*i2XTqc29UG6+TqaEbv2hql4Sc08HnnNIz*dbtLK2r3VYqFPnzt9M+Wrpi1e3PCfc0sbJy9tEGWqnMRjxjz6gKMENo5DhknR7itwHML74KKKIvbELWLZVgvHtJEv1qbcLTtJSR3suKpZljJLhJQxOQcHqBhoH4wX0QUXLCDUNim3csJK2LmoamKAGjP7+1gcE3dhTt66byPfBEdOGBeRc5SWM30V9P4RRVJ4J81sS6d0CUTDiPrYRY5gkTUfjmUAapfiC9BSyBoyOMG*QrwERRTEYMXpGv0Krl3HHu6wPd7YtDUAfFG964LiLkiypnCAIsqJII176q*ly7crCqvpCEAN9kD+vCbIsy5ys8KooiGp3szt4*ELYFYwRgzhvwAjobn0qvyZjw7PX8iCwLM1IND3RwMdE7854Ut8I+HiPnEXK7zZ7R7HuVLuNncP9Ekw3IneryaR1J0KtK3ry8g9FwAhMVIPh8DqeUj5cW3UvG997Xjstr3UW8bByzN3KPnsrmt8bMSFwNkTQ5+T6GjRDYaElIRaDoRuvt4fhcltM5qvbgRFNe+m6xeiCI*R7M1G+KfAoqcH8bs*txQKv1mOI2hTl4WZgzdNw5zrHPTV21kRZt965rTbDsrYCBx4UY8dtQkRhPRf1PC+40lwwuNZwsnp69i0z+c+3Cr*ZqdOq+z1i9BZ9AjsF*1u7J*DOYtyj*1uNn4*JvwRyfFiUZCDqpzDecoJ*Thvl6q78YqDyujEcurC6Dk7asE7OSQkej299UOWQHUtagBGAJKYljkEf0PLceXZKjuUfmulaMNV+pjWHDdM+crDBBWoYLCow4lVZ5XhJUPjnLY+WlQ2bFIyA95rJ487TrVZVPoPsPVVA6z4bSeDxA1BLAQIUAxQAAAgIAOKbJFvrt+OfTQQAAHAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHUEAAAAAA=='',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254702225664',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
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
