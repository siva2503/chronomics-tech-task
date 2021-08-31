export const getRequiredAttibuteColumn = (fileData: string[], requiredAttribute: string): number => {
  for (const line of fileData) {
    const PATTERN = /^#\w+/i
    if (PATTERN.test(line)) {
      const columns = line.split(/\t/g);
      return columns.indexOf(requiredAttribute)
    }
  }
  return 3
}