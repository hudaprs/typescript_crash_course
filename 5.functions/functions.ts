const sum = (numberOne: number, numberTwo: number): number => {
  return numberOne + numberTwo
}

const getName = (fullName: string): string => {
  return fullName
}

const optionalFunc = (mandatory: boolean, optional?: boolean): boolean => {
  if (!optional) {
    return false
  }

  return true
}
