require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKu+JlsXk84RLAUAAG4JAAAKAAAAY3JlZHMuanNvbq1V246qSBT9l3rVHgG5mnQygIAothe0vUzmoYACq7kUQiHiif8+Qds5nTlz+vQkwxOBqrXXXrX2qm8gI7hEE9SAwTeQF*gEKWpfaZMjMABaFYaoAF0QQArBAJCZ6SSbF+fSJNnS1FVnSpAtnjh9YuSFRESy20zn9ZYX+4tncO2CvPIS7H8CuOgNZ7M6HG8TtxbWBh2Ss7WWbW7vBf3FaIfzItvt4ZuxjtVncG0RIS5wFhn5AaWogMkENXOIi6*RN*TRm7RnTmGD3Pk5WspLcuEnlC4XUfVmwOFkEm6GQ*sspuXX6AfcML0cp5oQ7TvHcJorJCGLiWNpqDLP2yO7WCD9rHrcpY7v9EscZSiwA5RRTJsv686M+f4qYCNm0+c5V81rb7bMLCu1895+EmzSA97NN4ooc5b9NeKrzVYK9flljcaXYxqNs2CZJKNDfnnFQ3336k2HnUTaFhGf1R+Jz4uHV+L*ojsxHLfHrZBw3o+ycMxbYi*OUuy*MjNo7YcYMkMzLV*MON59jT7L2PwGm1H26hsmdzm9dZJs2MS7uodraR1tp+Es7*n2QWCN7*QhrYrPWI4Pu2y2E6RNbV1gKbuu9BocDntt12QwZi3*ZZHnO60cpa5PtVR*KYSVIc86pFlWR5lcgkrZTyJLd4S3N9+QT0qsngO9fr51FKPGDsCAvXZBgSJc0gJSTLLbN1boAhicXOQXiN7kBQ5iHdU49ORJWZ51W7Ftcuif9ctcMIazzV72SKcJXs+BbxvPoAvygvioLFEwwiUlRTNFZQkjVILBH7eTapsuUEooGuMADACvsILUl1iRUwT59*K3+gBpCfP8twxR0AVhQdIpAgNaVKgLbjtMUWcUU+EUTeBkRR7qfdaQNcYQBMEQFENoe0zvVVc4RSWFaQ4GrCRIHMPJDHft*k9EWEXTJdPgGEmWZUnndYExJMMcMgwrsDLL*5LIn12QoTO9O7nVv892QYiLkq6zKk8IDB42f*yEvk+qjLpN5uvtCyrA4MNnRCnOorJtrcpg4R*wCeltH2AQwqRE1y4I0An7qMUDou6IfiayK+2pXGXcsSm9PFfbMzyQ7H2JyCHk9cUnUeSUJ56TxCeZkfmnviT4PuL7DGQE0MpxD5F2z0897cc4xVE5Dh3SE0PF61f9YK4VC+8WSA8zogIF72y7wIN+XOUrEqPsE+DK9Xocb76Us7fpVqPuOUQC6b0WL2b9AfjucjD4dv1brxYzQBTipAQDoM9X61qqDWM2c2V5bVmqEal61Ary0PcxuffJWCSNbSWupzrrihZlRiziOMvJ0ErQuuedjNMeTpbWuJg2t8n4JwgYgGjmJMbY87YCs3xDU1NiPfPYV+X1cDnhc3k2jvWE2Wovx+NpLvj1yaU5FP3lqUOtchmb1Bl1VLnZ++aOYXGH3Z7Z+UZXn9tq93P+WMwkZ63JC63seMwypLtjsOKUZh7bm42ecT2Fq*Vex7Arjxor+VKPbF9MD+tEyjWtiQyXhQ7J5XFCR0bFGz15jVzV0d4zJb2F2Y9zNBCUH0cpua3jBIZXBFnkWZ5nmdvK9kcXZLBFA6qUogA88jJ5v6fwe5LcHRdidIv99y2*Lv3d*cy1+wHk*Sb5icG09djHWr5Oa511CiiNRe2oN4wbnfNtMueks8NtcLzE8DI9gGs71nkCaUiKFAwAzIKC3BorSNWOp52F5JNiusrYRnSXNYElVb+P*L+lCHNfNS9IPoLloRX2VZKOa9AFaaPmuUshfSQIUNtnpFbg+hdQSwECFAMUAAAICACrviZbF5POESwFAABuCQAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAABUBQAAAAA=',
  
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
