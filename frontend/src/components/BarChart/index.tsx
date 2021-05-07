import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import SaleSuccess from 'types/SaleSuccess';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';


type SeriesData = {
    name: string
    data: number[]
}

type ChartData = {
    labels: { categories: string[] },
    series: SeriesData[]
}


const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>(
        { 
            labels: { categories: [] }, 
            series: [
                {name: "", data: []}
            ] 
        }
    )


    useEffect(() => {
        const fillSuccessChart = async () => {
            const resp = await axios.get(`${BASE_URL}/sales/success-by-seller`)
            const data = resp.data as SaleSuccess[]

            const categories = data.map(x => x.sellerName)
            const successList = data.map(x => round((x.deals / x.visited) * 100.0,1))



            setChartData({labels: {categories}, series: [
                {name: "% de Sucesso", data: successList}
            ]})

        }

        fillSuccessChart()

    }, [])



    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        }
    }





    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    )
}

export default BarChart