import { Container } from "./styles";

export function Transaction() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Criação de sites</td>
                        <td className="deposit">R$8000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/07/2022</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">- R$600,00</td>
                        <td>Casa</td>
                        <td>15/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}