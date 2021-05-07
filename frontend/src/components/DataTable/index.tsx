import axios from "axios"
import Pagination from "components/Pagination"
import { Fragment, useEffect, useState } from "react"
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

    const [activePage, setActivePage] =  useState<number>(0)



    useEffect(() => {
        const getPageContent = async () => {
            const resp = await axios.get(`${BASE_URL}/sales?page=${activePage}`)
            const pageData = resp.data as SalePage

            setPage(pageData)
        }

        getPageContent()
    }, [activePage])


    const changePage = (index: number) => {
        setActivePage(index)
    }



    return (
        <Fragment>
            <Pagination page={page}  onPageChange={changePage} />
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
        </Fragment>

    )
}

export default DataTable