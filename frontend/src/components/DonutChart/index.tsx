import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/Sale'
import { BASE_URL } from 'utils/requests'


type ChartData = {
    labels: string[],
    series: number[]
}

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({labels: [], series: []})


    useEffect(() => {
        const fillChartData = async () => {
            const resp = await axios.get(`${BASE_URL}/sales/amount-by-seller`)
            const saleSums = resp.data as SaleSum[]

            const labels = saleSums.map(saleSum => saleSum.sellerName)
            const series = saleSums.map(saleSum => saleSum.sum)

            setChartData({labels, series})
        }

        fillChartData()
    },[])


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