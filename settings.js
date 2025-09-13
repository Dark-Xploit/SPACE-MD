require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEAgLVs4ddIlWwQAAH4HAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nFGhWkEau6apEPpUVFBRS29iFCgMg3CSJO+d+3sKen52F3tpencJOcnHvPufc7yAtM0Ap1YPYdlDW+Qor6Je1KBGZg3oQhqsEABJBCMANbxSBNurzznZkX9bZpzWxk0Zs9Yc9zmi*Jyikh2pvJUStewWMAyuacYv83gMp9fug0fU3Yan9SnWS51xVdX6MLW9cRs6ir6IKqyEjJvn0Fjx4R4hrnkVrGKEM1TFeoMyGuv0Y*U301TnmyFKUVZ7HOnT8Pz1LpEb2ofMYScK5voziIlsfd1+jfI6VxjIkYSI23OSXRkifayWzzfC1oh3XCRffkArljMo537*QJjnIU6AHKKabdl+seaWv3ElyQEzLzl4lhrpOJvqaKitJmVMnDce0eJq7FmMKp*RpxR9ulRbu93qo5M2TUqHLto+NpO5ynDBYqXvPNBWvj6VxtfyVu1h9eSf5P3StjeDuHbHG+46WlnXabSbW47flNlb5teczSk5aRrX+KZE79Gv2Rq43vwSHbQdGc7uVhdZow+83wKt68jcmw+tKNyzsnhVGif9KHtKl*W+Tj5raAJ*vFCI+Wu5flllt1JmVZeWr4sV1MpJizPK1VhqfR9GXa+YvRtOo627M5KyEXfCcxdHYZTRxlMW1Q1N7TWGlfnxklqNMDMBs*BqBGESa0hhQXeR9jWW4AYHA9IL9G9FleQDeux6ddR9WE16yIV7jDsOi2WmYVgnccdcEyz5VkxFi++goGoKwLHxGCgiUmtKi7NSIERoiA2Z9*DUCObvRduP45bjwAIa4JtfOmTAsYfKj6sQl9v2hyeuhyX+4XqAaz0WcYUYrziPR1bHJY+zG+IjmGlIBZCFOCfmaIahSAGa0b9LNr5SLoC89y6uToymMwANlTEBz0UX4iiCzHjQVWnI2nf5BvbQ8Ly*JbjigYgBz2pwGJUQZTMADp8xovsOzLdDIVWUGc8v3FPv74SbjHDxCFOCVgBmRTEZlAXaiG4SVTd7GQ3EiSIwl8JvjhlHcl1IsNo5cy70JGljXxkGYUe27jnKQVNfh7aieuuzaQth+3r*8AAmbAejMYahF9iMm1rNhycb6qcXO7jMKts21ZU1mdmgq60ZobHbgdV+VCcONMo0ngsA1SwleSwtBO3bbUFQ1DjOfhzn7aagACdMU++vUxJplsjpu15u+a0501aTcSPIYZ6ce3vZAs3TfEcqeD7QReh+ni5sQlkTtxlU0CKW+OW7Fd2sHWPBuuORldeSnkasmCSvTu4WcPpT9mF366q5eu*w0xeo6CHxL9p5TvxHvHjR6DXzB+DJd*adD5Xh8vim3lTfNhFMWhXXq1mx2N1Gnl+sD4vPO2WCgyF9uBDx6PvwagTCENizrrbZOdIRiAumh6*+p5WPzmJVmydWX3nnYKCZU+e8LCGSIUZiWYjQVeELiX8Xj6fsqsi3IJSQxmgNuLHif2Bu+ksjxQSD9aDEj9p1AMHn8DUEsBAhQDFAAACAgAQCAtWzh10iVbBAAAfgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgwQAAAAA',
  
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
