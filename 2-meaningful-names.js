/* Meaningful names */

// Names should demonstrate its purpose
  // Wrong
  const potatoChips = ((fahrenheit - 32) * 5) / 9

  // Correct
  const fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9

// Avoid wrong information
  // Wrong
  const isFalse = 'Hello'

  // Correct
  const isTrue = true

// Make significant distinctions
  // What is the difference between:
    getAccountData()
    getAccount()
    getAccountInfo()
    getUserInfo()
  // In general, all the function do the same thing when we read their names

// Use pronounceable names
  // Wrong
  dtaRcord()

  // Correct
  dataRecord()

// Use easy searchable names, like:
  // For a query in user table:
    getUser()
  // For create a new User:
    createUser()
  // For store a user id:
    const userId = 3
