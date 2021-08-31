export interface Args {
  [key: string]: string
}

export const getArgs = (): Args => {
  const args: Args = {};
  process.argv
    .slice(2, process.argv.length)
    .forEach(arg => {
      const longArg = arg.split('=');
      const longArgFlag = longArg[0].slice(2, longArg[0].length);
      const longArgValue = longArg.length > 1 ? longArg[1] : "true";
      args[longArgFlag] = longArgValue;
    });
  return args;
}
