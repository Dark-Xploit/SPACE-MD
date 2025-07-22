require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || ,CYPHER-X:~UEsDBBQAAAgIAJJV9lruLwelUAQAAHMHAAAKAAAAY3JlZHMuanNvbpVUTZOiSBD9L3XVGD4FNaIjFhAVERFF0N6YQwkFglhgVSHihP99g+7p6TnsTvRyKqoyMl++fC9*AFxmFNmoBeMfoCLZDTLUHVlbITAGep0kiIA+iCGDYAx608te34nStWckr9RbpHC1O9UhLbyUN*wwnem7TGdVOZ83L+DZB1V9LLLoDwlz6JN66cqV7nPS7KEzUw+sq3OdXlTf2LayMFkK+Hw*bUTrBTy7jDAjGU7N6oQuiMDCRu0aZuRr8M+r0hWO+8BzVO9Qugxtlp6yaCWfa+nhcY1uIjFXqrCJ5tHX4HO+M1yehrBeCNyqvdNtwqb+FtGd3nDn+dHht1Cd7o17fG7e4dMsxSi2YoRZxtov836ZLvO1tLhOGZFHgaNUOemZDbaV6HXfyLP70cwnNKsTKJhfA24o9rmN5kuYqZfdtZ7Ik3rT3CIvuKq5L*K56x3kwQrJO2z+DnxNPrRy*j+8R65S7y9GDt3d8XGep2hj4jjE2FYgiy7hVkz4x2wgPorZF+HLk6FltDOLcz2fTuZiS8OW5GTNiRgPDat3T0ityNxwi4ef8CGryR*FHQw5X9ovg+s5YmgirlYHpdQCaN5Dpnr2VUV5Hq7iQeg9+FsRNblRNHtbL9vcHy3C02G1O28du50abLkYVo6T+tZRS1*eOjqj1orBWHj2AUFpRhmBLCtxdydJfQDj2xZFBLE3dsEkLB4257KZOMhtZfNQGtJrR6*Jprwt3cJJuEW1tmtTHA7TF9AHFSkjRCmK5xllJWkdRClMEQXjv7*3AUZ39j63t2pCHyQZoWyH66ooYfwx1I9HGEVljdm2xZHRHRABY*7zGjGW4ZR2NNYYkuiU3ZBxgoyCcQILin41iAiKwZiRGv0yrVHGHe8TZWWuVU8FfXB5m0cWgzEQJXkkiKIwUmRhMFaVv+i3pssLq+obRgz0QfEexwsDXuJ5WVYFSVK6yO7h+QtilzFGDGYF7YTuSMU1Saem9dhzkTObaU6qGakGPlv6kMY795tRUyqi4O4CXlu9Qry35nZCjODAZWuO29xfkeBHXOMU2uHlX5KAMWias56c2mWP9I5uTw1JsDCZpqroqJyUcGi4XkvI0bYGPt0uzHIL72dZQ5uAyiMxoopdB3p84B+hk6u+J5xGvak6MJqXrlqMblmEfi9Wam0RYS8*YL+5Ve6GWL5fcv6l0YO9dCjh2sHzCBrS*aqUbei3UtPegh46zMJRGmT65gwpp42GmXeYL8RHgtHl0E5+ivbNNMXPZZW96akbVvebZOjN+xh2I*zC8N6RdyLjn*3fkvxcJ*9hSX2XRLbLmF9MY20ShpXQ6i1WmiJcyznH8VG4ZztpPZwsvBl4Pr*3QVVAlpTkAsYA4piUWQz6gJR1p1oLJ+WfdqJuWR9+LSBl2qcT*OyCKIOXCowFdSAJQ4FXxfeoNSmrOaSnjoW1cDglnaxbraq2DLIPYwGt+0xpBJ7*AFBLAQIUAxQAAAgIAJJV9lruLwelUAQAAHMHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349122196415',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || animehaven01,
  
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
