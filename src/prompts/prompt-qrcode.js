import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QR CODE (1- normla  ou 2- terminal )"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha entre 1 e 2"),
        required: true,
    },
    
];

export default promptQRCode;