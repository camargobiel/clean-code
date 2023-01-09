/* Unity Tests */

/*
-> 3 TDD laws
  - Should never write a production code without errors tests
  - Should never write more than 1 unity test to fail
  - Should never write more code than necessary to the test pass
*/

// Tests always should be updated when production code updates
// Testing code and production code has the same priority level

// Each test should have just one expectation (assert in Java)
  // Wrong
  it('Should return sum', () => {
    expect(sum(3+1)).toBe(4)
    expect(sum(1+1)).toBe(2)
  })

  // Correct
  it('Should return sum (3+1)', () => {
    expect(sum(3+1)).toBe(4)
  })
  it('Should return sum (1+1)', () => {
    expect(sum(1+1)).toBe(2)
  })

// Only one concept by test
  // Wrong
  it('Date', () => {
    const date1 = '2003-12-23'
    expect(date1 + 1).toBe('2004-12-23')

    const date2 = '2003-12-23'
    expect(date2 + 2).toBe('2005-12-23')

    const date3 = '2003-12-23'
    expect(date3 + 3).toBe('2005-12-23')
  })

  // Correct
  it('Date 1', () => {
    const date1 = '2003-12-23'
    expect(date1 + 1).toBe('2004-12-23')
  })
  it('Date 2', () => {
    const date2 = '2003-12-23'
    expect(date2 + 2).toBe('2005-12-23')
  })
  it('Date 3', () => {
    const date3 = '2003-12-23'
    expect(date3 + 3).toBe('2005-12-23')
  })

// F.I.R.S.T concept
/* -> Clean tests must follow 5 others rules
  - Fast: Must be executed quickly
  - Indepentent: Tests should not have dependencieis in others tests
  - Repeatable: Should be possible to run the tests in any environment
  - Self-validating: Tests should have a boolean output, true or false
  - Timely: Tests should be written alongside the production code
*/