function basicTeenager(age) {

}

function teenager(age) {

}

function ageChecker(age) {
  if (age > 19) {
    return "You are a grownup"
  } else if (age <= 12) {
    return "You are a kid"
  }
  return "You are a teenager!"
}

function ternaryTeenager(age) {
  return (age > 13 && age < 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age){
    case "13":
      return "You are a teenager"
    case "14":
      return "You are a teenager"
    case "15":
        return "You are a teenager"
    case "16":
        return "You are a teenager"
    case "17":
        return "You are a teenager"
    case "18":
        return "You are a teenager"
    case "19":
        return "You are a teenager"

    default:
      return "You have an age"

  }
}
