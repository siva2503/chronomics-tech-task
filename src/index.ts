import { readFileSync } from "fs"
import * as path from "path"
import { fileURLToPath } from 'url';
import { getRequiredAttibuteColumn } from "./support/getRequiredAttributeColumn";
import { Args, getArgs } from "./support/getRunTimeParams";

export const getAllele = (chromosome: string, positionId: string, filePathInput?: string, requiredAttribute?: string) => {
  let resultColumnID = 3
  let filePath
  if (!filePathInput) {
    filePath = path.join(path.dirname(__filename), '../input/input_tiny.vcf')
  } else {
    filePath = filePathInput
  }

  const fileData = readFileSync(filePath, 'utf8')

  const allVariants = fileData.split(/\r?\n/g);
  if (requiredAttribute) {
    resultColumnID = getRequiredAttibuteColumn(allVariants, requiredAttribute)
  }

  /*
    Tried out various loops to optimize performance, please look at /tryOuts.ts
    Ended up using filter for easy readability and noticed that the difference is only 0.5 to 1 ms.
  */
  const reqdVariants = allVariants.filter(
    variant => variant.includes(positionId) && variant.includes(chromosome)
  )

  /*
   Because the array will be really small (with 1 value if position is unique),
   did not attempt to make any performance optimization.
  */
  for (const line of reqdVariants) {
    const columns = line.split(/\t/g);
    if (columns[0] === chromosome && columns[1] === positionId) {
      return columns[resultColumnID]
    }
  }
  return 'variant with provided poisitionID & chromosome is not found'

  /*
    Other potential solution which is nearly 0.5ms increased performance, but not consistent.
  */
  // return simpleForLoopSolution(allVariants, positionId, chromosome)
}

export const main = () => {
  const args: Args = getArgs()
  let ouput
  if (args["chrom"] && args["pos"]) {
    const result = getAllele(args["chrom"], args["pos"], args["fileInput"], args["requiredAttribute"])
    ouput = result
  } else {
    ouput = `Necessary args are not provided. Eg command - \n
    npm run start -- --chrom=chr1 --pos=10001
    or 
    npx ts-node src/index.ts -- --chrom=chr1 --pos=10001
    `
  }
  return ouput
}

/* istanbul ignore next */
if (require.main === module) {
  const output = main()
  console.log(output)
}