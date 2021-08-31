export const simpleForLoopSolution = (allVariants: string[], positionId: string, chromosome: string) => {
  const simpleForLoopSolution = (allVariants: string[]) => {
    for (let i = 0; i < allVariants.length; i += 1) {
      if (allVariants[i].includes(positionId) && allVariants[i].includes(chromosome)) {
        return allVariants[i]
      }
    }
    return null
  }
  const reqdVariant: string | null = simpleForLoopSolution(allVariants)
  return reqdVariant ? reqdVariant.split(/\t/g)[4] : 'variant with provided poisitionID & chromosome is not found'
}

export const forLoopPostFilterSolution = (variants: string[], positionId: string, chromosome: string) => {
  for (let i = 0; i < variants.length; i += 1) {
    const columns = variants[i].split(/\t/g)
    if (columns[0] === chromosome && columns[1] === positionId) {
      return columns[1]
    }
  }
}

export const filterPostFilterSolution = (variants: string[], positionId: string, chromosome: string) => {
  const reqd = variants.filter(variant => {
    const columns = variant.split(/\t/g);
    return columns[0] === chromosome && columns[1] === positionId
  })
  return reqd[0].split(/\t/g)[1]
}

export const constOfPostFilterSolution = (variants: string[], positionId: string, chromosome: string) => {
  for (const line of variants) {
    const columns = line.split(/\t/g);
    if (columns[0] === chromosome && columns[1] === positionId) {
      return columns[1]
    }
  }
}

export const filterWithoutSplittingColumns = (variants: string[], positionId: string, chromosome: string) => {
  const reqdVariants = variants.filter(varia => varia.includes(positionId) && varia.includes(chromosome))
  const result = () => {
    for (const line of reqdVariants) {
      const columns = line.split(/\t/g);
      if (columns[0] === chromosome && columns[1] === positionId) {
        return columns[1]
      }
    }
  }
  return result()
}

export const filterAfterSplittingColumns = (variants: string[], positionId: string, chromosome: string) => {
  const result = () => {
    for (const line of variants) {
      const columns = line.split(/\t/g);
      if (columns[0] === chromosome && columns[1] === positionId) {
        return columns[1]
      }
    }
  }
  return result()
}

