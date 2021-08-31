import * as path from "path"
import { main } from "../src/index";

describe('Get Allele function with required attribute', () => {

  test('Test Allele using main function With args except filename', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const TESTINPUTARGS = ['--chrom=chr1', '--pos=10001', '--requiredAttribute=REF']
    process.argv.push(...TESTINPUTARGS)

    const result = main()
    expect(result).toBe('T')

    process.argv = process.argv.filter(item => !TESTINPUTARGS.includes(item))
  });

})

