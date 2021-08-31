# Allele retrieval Solution

## Prerequisite

1. npm/node installed (Recommended: 14 or above)

Implementation is done using Typescript

## Installation

NPM is used as package manager and names of necessary packages are stored in package.json file. Use below command to install,

    npm install

Ensure you are in the project home directory before trying the below command

note: implementation doesnt require any external library, its the tests that require most of the added packages.

## Execution

The implemenation can be executed using npm script added to the project and it requires two mandatory arguments `--chom=X` & `--pos=Y` 

    npm run start -- --chrom=chr1 --pos=10001

### Other settings

| VARIABLE             |                            DESCRIPTION                             |                DEFAULT | OPTIONAL/Mandatory |
|----------------------|:------------------------------------------------------------------:|-----------------------:|-------------------:|
| --chrom=             | The name of the chromosome on which the variation is being called. |                      - |          Mandatory |
| --pos=               |    The 1-based position of the variation on the given sequence.    |                      - |          Mandatory |
| --requiredAttribute= |         Name of the column required out of this solution.          |                    REF |           Optional |
| --fileInput=         |               Absolution filepath of input VCF file                | ./input/input_tiny.vcf |           Optional |


### Other commands

    npm run start -- --chrom=chr1 --pos=10001 --fileInput=<absolute_path>/test_input.vcf

,

    npm run start -- --chrom=chr1 --pos=10001 --requiredAttribute=ALT

note: Though the problem statement mentions the expected attribute is "ALT" (The list of alternative alleles at this position.), the `input_tiny.vcf` file provided contains <NON_REF> for all variants/lines. So, I am retrieving the "REF" attribute by default (Reference base at the given position on the given reference sequence.). But as detailed in the execution section, this can be modified by providing `--requiredAttribute=ALT` argument

### Error handling

When one of the mandatory argument (chrom/pos) is not provided, below error message will be displayed.

    ~/dir/path > npm run start

    Necessary args are not provided. Eg command - 

        npm run start -- --chrom=chr1 --pos=10001
        or 
        npx ts-node src/index.ts -- --chrom=chr1 --pos=10001

## Limitations with the solution

-  A few errors are not handled due to time constraints,
   -  No error message if file is empty
   -  Assuming position ID is a unique field.

- Works only if both CHROM & POS values are provided. possibility of retrieveing using only POS is not considered.

- REF is chosen as default instead of ALT assuming the problem statement has a mistake, please correct me if I am wrong.

## How would it scale?

Scaling shouldnt be a problem, I tried executing the implementation with 10,000 input entries and it works without any issues. Big O notation for the implementation O(n) as a filter method is required.

## How would you test efficiently?

Tests are already implemented for every function created and coverage is achieved based on the importance of the function. Effective method is to have static file in local instead of having dynamic file input & test all possible Branches/lines.

**Sample coverage report:**

<img width="1679" alt="Screenshot 2021-08-31 at 11 52 34" src="https://user-images.githubusercontent.com/13304448/131490241-2e7de228-46c4-4039-90a8-6adc49d7ce47.png">


## How to Execute Tests

Execute the below command

  npm run test

Test uses input file from `./test/test_input.vcf` file.

## Performance optimization of implementation

I tried out various logic in attempt to increase the execution performance and decided to use the existing implemenation as there is no significant difference between the other options.
