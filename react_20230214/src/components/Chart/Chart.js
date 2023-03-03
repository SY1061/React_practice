import './Chart.css'
import ChartBar from "./ChartBar";
function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    // 배열 앞에 스프레드 쓸 시 배열 자체가 나오는 것이 아닌 배열 내부의 값들만 나옴.
    // console.log(dataPointValues);
    // console.log(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    );
}

export default Chart;