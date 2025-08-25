require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHpYGFsliZOmWQQAAIMHAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9l3zVaPbNiIoYREC0cAfUiX5IIZFUWUwSBDv89w6sqq5+mOmp4SnJ5d5zzzn3*gBZjks0RS0Y*AAFwTWkqFvStkBgAIZVHCMC+iCCFIIBUG2aw9eeX9+MOE7uQWDAGeue9KpRYa24TH4beonIZzhzX8CjD4rqcMHhHwIKTMzdM+iwHFYIsxFapkprcSun3m2YXmZNVekbtvG1otFfwKOLCDHB2dEsEpQiAi9T1C4gJl+Df7b9JmeDRiJpzST0vp43K6+UDXu2PoTkpsmJ67YTxpx456*BN3WURrtrnuT+6hgc+IPUzLwJjA0Hb86meLdUx1jxye31nL*BL*ExQ5EToYxi2n6Z97V7i2KciupRds00j2CUOlZgpSfqLSvs7k2eNGPW8mZC*jXgM3lKjl7YY5g8WWlNCndOstor9X4ykTyonarMOmz2u9ixlr8DX5APr5z*D+*XRYiHB8MVtwFG+p43ImOnn9CQ6sPiGhVThXEFZ9lsJ+bua*ANlS2yxoboWsTSleDreo*sWc*PT71gVVlmD44EO5Km5kb*hA9pRf5obne1u1q+2Mz4OIu5IbvrNb0oW8pzCw5FujjUcHOVUuRWlbHYV9g7TbXxsRTZWkqVqLAyR8ardOHUy94WsifrnluFcXx5VnRGrROBAffoA4KOuKQEUpxnzz2uD2BUr1FIEH2yC*Rrq0zasUTVTVbdVV0sGpxwynlrOHaghFpjj*j1YhtMJfcF9EFB8hCVJYrGuKQ5aV1UlvCISjD4+3sfZKihb7p12QSuD2JMSuplVXHJYfQh6schDMO8yui6zUKjWyACBuznNqIUZ8eyo7HKIAkTXCMjgbQEgxheSvSrQERQBAaUVOhX0xp51PG+3cn2qy9aoA*Spx44AgPAC6LGcgrHKYqiDXj+r*LbrYsLi+Jbhijogwx218EiQfDefita0AeX51OOFXiOV0VJFhRZfD7uDh6*UHdJIkQhvpSdeeaBnShHy5y8nq6qZ9u6e9SNow4+q*xwy5sc503JcFJ9XkjbxqeBvLWn1kpVnLE20sJThmrev8eCxmd2+fIPQcAARLMw03rzy5qezQOP1*IoHp3khYLn*q6Jaut+a3abg7mxXyek5zrSclREGh2uCr2E0a5JYpY44aHn542H1UjF9jHd6521+iBCNQ7R78m8pd8qEwebu4lsI52K6PXiCGa48nS2UJVWOMjxSQgyLQzK69LwXYkpxUmoju7z28wMaBndat6oSq53w+qtZMY3PdBvbz5+9tHlfX7hp8U6*brfGKPnOHiX6b*1fEPe+Y599H8L8j5h*qVLh3tTWWjoII16vuof*OrS4MSL5+2QWTJbRxKIdgkFjYmKhoDH43sfFBdI45ykYADK9ABBH5C86lzsZHH+pyEzdBz9vX8vsKT6Z2dscIpKCtMCDDhFkllBEHnt7daC5MUYlklHgS3qadXZvNWLYk0h*Wg0oD8*SQKPn1BLAQIUAxQAAAgIAHpYGFsliZOmWQQAAIMHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIEEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349017117779',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'bobby25-dr',
  
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
