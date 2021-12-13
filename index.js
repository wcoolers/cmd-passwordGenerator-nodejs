const program = require('commander')
const clipboardy = require('clipboardy')
const chalk = require('chalk')

const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to password.txt')
    .option('-nn, --no-number', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const {length, save, numbers, symbols} = program.opts()

//Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

//copy to clipboard
clipboardy.writeSync(generatedPassword)

//output generated password
console.log(chalk.green("New Password: ") + chalk.bold(generatedPassword))
console.log(chalk.yellow('Password has been copied to clipboard'))