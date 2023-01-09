/* Functions */

// Functions must be ->SMALL<-

// Don't nest your function
  function nestedFunction() {
    if (true) {
      if (true) {
        if (true) {
          if (true) {
            if (true) {
              if (true) {
                if (true) {
                  if (true) {
                    if (true) {
                      return true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // It's hard to read and to do maintenance

// Functions must do ONE THING
  function getUser() {
    return user
  }

// The code must be able to read up to bottom
  function sumTwoNumbers() {
    return sum(3, 1) // You read a function, in first time you probably don't know what the function do
  }
  // When you go down, BOOM, that's the function you read up there, so now you know what that function do
  function sum(value1, value2) {
    return value1 + value2
  }

// Use meaningful names

// Don't pass boolean values to your function
  // Functions must do ONE THING, so if you passing a boolean value, it can assume that do one thing if its true and one thing if its false
  // And that is TWO THINGS...

// Avoid colateral effects
  function getUser() {
    SQLToGetUser()
    showUserSkillsOnScreen() // That function only should getUser, but do this function too
  }

// Avoid repetition

// Structured programming
  // According to Edsger Disjkstra structured programming rule:
    // A function must have:
      // One input and one output
    // In other words, just one return, none break or continue

    // Wrong
    function potato(answer) {
      if (answer === 'hmmmmmmm') {
        return 'potatoIsGood'
      }
      return ':('
    }