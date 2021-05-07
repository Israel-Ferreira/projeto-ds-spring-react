import axios from 'axios'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/SaleSum'
import { BASE_URL } from 'utils/requests'


type ChartData = {
    labels: string[],
    series: number[]
}

const DonutChart = () => {

    let chartData : ChartData =  {labels: [], series: []}

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(resp => {
            const saleSums = resp.data as SaleSum[]
            const labels = saleSums.map(saleSum => saleSum.sellerName)
            const series = saleSums.map(saleSum => saleSum.sum)

            chartData = {labels, series}
            console.log(chartData)
        })

    

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    const options = {
        legend: {
            show: true
        }
    }


    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}
export default DonutChart