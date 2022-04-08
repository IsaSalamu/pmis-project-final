import React from 'react';
import Chart from 'react-apexcharts'

function ChartModule(props) {
    return (
        <div className="m-4" style={{width:"500px", float:"left"}}>
            {/* chart model for all visualizations */}
         <Chart options={{
                title: {
                    text: props.displayName,
                    align: "center"

                },
                chart: {
                    id: "simple-bar"
                },
                xaxis: {
                    categories: props.category  //will be displayed on the x-asis as labels
                }
            }
            } type="bar" series={[
                {
                    name: props.name, //will be displayed on the y-axis
                    data: props.series // datapValues
                }
            ]} width="100%" />
        </div>
    );
}

export default ChartModule;