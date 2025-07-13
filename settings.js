require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJcK7Vqq6BGdUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOUighEdsQheELGhBW8b81BSJZRAgVSBjRP++wR29*Q87M728lRUZWSePHlO*gA0JwzbuAGjH6AoSQ05bo+8KTAYgXF1OuESdAGCHIIRsOf5xir6+HjQemygrC7xarcUzrv0wBGcNTWlh9pRVU+b6U*g3gVFdUxJ+IeEh3rD4rjJ0VFS8DT3loXXOd+aWT5Rx50kOHeO6ZRYvYE2dZ7Avc0ISUloNClinOESpjZuXEjKr8FPLKOR*UW8uqTzHZali+1Ig2Nu7d3smhYX40JdfDg+z0vKvgb*VC+U1UKGF*e68rUkGg+82zCsnyVpDtEpMpZre286a*Ul8t7gMxJRjCyEKSe8+TLvcJxtVCV7uZl7OVlFxepg7uc+Hy5ie27n+NKzHTwxX*v+V3n3tmotLr2xsr92Otoqjhlb3NzxcoISh20ve1UMaDpszvLU+h24W35oJfk*vOvjKb7uk76f1dOju9Ncy93s0p31eiQ1M1HPbPCBTnTvKuZfgz9Q5+7hsNKVlW4q02OQ0B7Xb8jPJy6UsyBgbuFzlCahH37Ch7wq*4RScgcKF2fbnZCdn6ek6b*GWbrPrP62x6K9NjDMLS4bRF5E43bGl0VHSSuzpyrN2hCCojpBTUYGWcSsl+pmqvU0r7ido6dHRwluLARGwr0LShwRxkvISU4fd+KwCyCq1zgsMX*QC9KUVKI0LuU+Xvjbpq9kWkeObpVY3PJsKxmp48WzoZpPO*oT6IKizEPMGEZzwnheNg5mDEaYgdHf37uA4lf+Nri2nCR0wYmUjAe0KtIcoo+pfjzCMMwrytcNDY32gEsw6n9eY84JjVjLY0VhGcakxkYMOQOjE0wZ*tUhLjECI15W+JdrjRy1xE*V9XyzmLqgC7LHQAgCIyBK0kASRKEvKIORLP7Fvl3btLAovlHMQRekjzBBVIZ9QZOGqjoQNbmNbB*uvxC2CRHmkKQMjIDh3g4pn8wmz2v*5jizme5FuhHp4LOjD2m8UX82JoIm1QG0Z*Grx0qeVE793JmWPsKKpCwu6djfHfOL6KlP*5AEjIBD1q9R+WIUNllISPLZcCnlm7U6a+DWqtJtP25WLvdmed30pk5kRVWyM1fC6QUdCYuRlcj6lc7FI*fxhjlcUungZupPbTWEaxLi34vFyyKYNlEgqTi3ErGutetrpwhF2SASzc0BpMcrl53MtKiZ7XR*FW5kxVAstOsE4VXfJcGkSlQbYwdpNl2wKlJs8i7ah2nS92VFHnJqZ9X+ngh+eJ*CdoL*Pbs34K3E+vfubznet8m*OHK8v8arExoKMxLnYbC0h4fleXmrY9iXdhXvEFh4gSAqNk9ccL9*74IihfyUl1m7Mykqc4JAF5R51WrWoqf8D8UMPbAm752nkHH90wc+yTDjMCvASBgOREnRFFl4i3LLvJhDFoMRoJk0PraabvSiWHPIP1wF9PYbP1vg*hNQSwECFAMUAAAICACXCu1aqugRnVEEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233531210165',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'matthew12-sb',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 02451355,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 02451355,
  
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
