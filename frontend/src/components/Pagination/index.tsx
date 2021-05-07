import { SalePage } from "types/Sale"




type Props = {
    page: SalePage
    onPageChange: Function
}

const Pagination: React.FC<Props> = ({page, onPageChange}) => {
    
    return (
        <div className="row d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={_ => onPageChange(page.number -1)}>Anterior</button>
                </li>
                <li className="page-item disabled">
                    <span className="page-link">{page.number + 1}</span>
                </li>
                <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={_ => onPageChange(page.number + 1)}>Próxima</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination