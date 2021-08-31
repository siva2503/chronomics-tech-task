import * as path from "path"
import { getAllele } from "../src/index";

describe('Get Allele function', () => {

  test('Test Allele for 10001 position', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const result = getAllele("chr1", "10001", testFilePath)
    expect(result).toBe('T')
  });

  test('Test Allele for 10044 position', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const result = getAllele("chr1", "10044", testFilePath)
    expect(result).toBe('A')
  });

  test('Test Allele for invalid position', () => {
    const testFilePath = path.join(path.dirname(__filename), "test_input.vcf")

    const result = getAllele("chr1", "99999", testFilePath)
    expect(result).toBe('variant with provided poisitionID & chromosome is not found')
  });

})

