export function CalculateAnswer(state) {
    let displayedString = state.toString()
  let numbers = displayedString.match(/[d+]/g);
  console.log(numbers);
}
