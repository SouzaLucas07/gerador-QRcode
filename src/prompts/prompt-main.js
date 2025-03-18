import chalk from "chalk";

const promptMain = [
    {
    name: "select",
    description: chalk.yellow.bold("Esolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha entre 1 e 2"),
    required: true,
    }
];

export default promptMain;