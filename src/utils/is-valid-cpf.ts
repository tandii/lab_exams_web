export function isValidCPF(cpf: string) {
    const cpfSplitted = cpf.split('').map(el => + el)
    const rest = (count: number) => (
        cpfSplitted.slice(0, count - 12).reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10
    ) % 11 % 10
    return rest(10) === cpfSplitted[9] && rest(11) === cpfSplitted[10]
}