import * as path from "path"
import { main } from "../src/index";

describe('Test Get Allele main function With args', () => {
  test('Test Allele using main function With args', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const TESTINPUTARGS = ['--chrom=chr1', '--pos=10001', `--fileInput=${testFilePath}`]
    process.argv.push(...TESTINPUTARGS)

    const result = main()
    expect(result).toBe('T')

    process.argv = process.argv.filter(item => !TESTINPUTARGS.includes(item))
  });


  test('Test Allele using main function With args except filename', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const TESTINPUTARGS = ['--chrom=chr1', '--pos=10001']
    process.argv.push(...TESTINPUTARGS)

    const result = main()
    expect(result).toBe('T')

    process.argv = process.argv.filter(item => !TESTINPUTARGS.includes(item))
  });

  test('Test Allele using main function With args', () => {
    const result = main()
    expect(result).toContain('Necessary args are not provided')
  });
})
