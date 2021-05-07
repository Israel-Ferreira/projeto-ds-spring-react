import axios from "axios"
import { useEffect, useState } from "react"
import { SalePage } from "types/Sale"
import { formatLocalDate } from "utils/format"
import { BASE_URL } from "utils/requests"

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({
        first: true,
        number: 0,
        totalPages: 0,
        totalElements: 0,
        last: true
    })


    useEffect(() => {
        const getPageContent = async () => {
            const resp = await axios.get(`${BASE_URL}/sales?page=${page.number}`)
            const pageData = resp.data as SalePage

            setPage(pageData)
        }

        getPageContent()
    }, [page.number])



    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>

                    {page.content?.map(sale => (
                        <tr key={sale.id}>
                            <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
                            <td>{sale.seller.name}</td>
                            <td>{sale.visited}</td>
                            <td>{sale.deals}</td>
                            <td>{sale.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable