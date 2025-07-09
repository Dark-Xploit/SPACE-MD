require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAMmO6Vq2YUsWUwQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGJGbYERHLKAi3aLgBdCNfSigxJKrVYWKE*77Bvb09DzszvbyVGRlZJ4852R9B2WFKXpDLRh9BzXBF8hQd2RtjcAIGM3hgAjogQQyCEbAns+5NCFFaV7b2YBf7VLLXV6PWRluikRYqfutkcrBcXqeZC*g0QN1E+U4*l3B00qLjcA3pm1*o0WUM2W+rK7Xfjs3xySwOO+EBee0ppPqBTy6ihATXKaT+ogKRGD+hloXYvI1+EtXsPuZtVrIYZZDcp2Km11*svMC6MRaPRbJbChI8+0l9Xdfgz9PCzImMe9quSH7aTWR9utlGm3LSs+GOxqeueAM7ZWDQukdPsVpiRI7QSXDrP0y784saA63fbnMBtzlznnnZVCs52YUCJZxOmMfB7fGnmaLeLr9GvCTa*rcRDwsnHH1KnrQHuyUYe4Ui7ulELjh1hXaaeKiVU7er8Bd8uGV7P*wvtZxPAw4m3pHolDBG85Dw2LuZhzE64mXj4fD*vY0UHkxq74G35P6i8Dixq9HJbfsktteX9PhQLelq2di7Kyl3UypdDfi+PQTPmQN+R1KyQ5rfSJbmTlA4WR18A3qesVR3UYsOt+WtnI7F+RuBMyos0FdHOVNGfJO7Bv1SXPl*rXZswUvr+*YyzV0z8qkCrTx9eU5UYZaOwGjwaMHCEoxZQQyXJVdTOV7ACaXNYoJYk92wXq3ae5vLBkgLOpSFV6lipeLBm7nUcSwYkr3XRI6xlxPry+gB2pSxYhSlMwwZRVpHUQpTBEFoz**6oES3di7bl03cdADB0wo25ZNnVcw+RD14xLGcdWUbN2WsdkdEAEj*jOMGMNlSjsamxKS+IgvyDxCRsHoAHOKfg6ICErAiJEG*Vxas0o63qeesje8+Qb0QPHUAydgBARRFCRe4SVNEEfK8A*67dqVhXX9rUQM9ED+TJN5TZY1QRVkQVH4LrGLP34C7OoliEGcUzAC5tv6pF50c+KE+4Y6lqXbqW6mOvgc6MMY78w7*n442B42td86SbSo73g*e2u3MB3scB6iaxtSNdlMTqIgvfxDka5lvXjNfHnGtcY1pv6led3zUnNSHL0wg5XsjmNTCYI+YupyduhPI7qOJE6avelDlQVFVajR9By6Q3QWS8zLZ612V*2x99J1S9AFx+jXZodIbnZqOJ6Y+dtcFQflilgzV0pc104qWd+u5CxZqlhuUifg75jP+NwvjmozTzeu31rHKlmtfN3cCGfvtsMCpW650H9Y9rky+Y+nCj*d1EnV*R4wem5+CTsB*1u6d+Cdw*hH75caP96Sf9lHYzMNkObPeMWPT7PgDmOpWLU0t6pFYNe+SJ186M62N1vTGvB4*NUDdQ7ZoSIFGAFYJqTCCegBUjWdZe3yUP2mmWnYtuG9T55DyvTPNdjgAlEGixqMBkNZ4FVRkZX3LJdU9QzSIxiBshCNqLN0q9f1mkH2sVRA7z5nmoDH31BLAQIUAxQAAAgIAMmO6Vq2YUsWUwQAAG8HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
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
