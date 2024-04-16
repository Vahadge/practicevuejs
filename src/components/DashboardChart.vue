<template>
  <apexchart
    :width="props.chartwidth"
    :type="options.type"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script setup>

let props = defineProps(['chartwidth', 'charttype'])
let options = {}
let series = []

if (props.charttype == 'sales') {
  options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25
      }
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: true,
    //     barHeight: '60%',
    //   },
    // },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 5
    },
    title: {
      text: 'Leads/Sales'
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + 'K'
        }
      }
    },
    fill: {
      type: 'solid',
      opacity: 1,
      pattern: {
        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'] // string or array of strings
      }
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    legend: {
      position: 'right',
      offsetY: 40
    }
  }

  series = [
    {
      name: 'Leads',
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: 'Sales',
      data: [53, 32, 33, 52, 13, 43, 32]
    }
  ]
}

if (props.charttype == 'totprotductslast3months') {
  options = {
    title: {
      text: 'top products last 3 months'
    },
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['product1', 'product2', 'product3', 'product4', 'product5', 'product6']
    }
  }

  series = [
    {
      name: 'Jan 2024',
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: 'Feb 2024',
      data: [53, 32, 33, 52, 44, 41, 32]
    },
    {
      name: 'march 2024',
      data: [53, 32, 33, 52, 12, 43, 32]
    }
  ]
}


if (props.charttype == 'incomeexpense') {

  options = {
    chart: {
      type: 'line',
      height: 350,
      stacked: false,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25
      }
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: true,
    //     barHeight: '60%',
    //   },
    // },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 5
    },
    title: {
      text: 'income/expense for last 10 days'
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + 'K'
        }
      }
    },
    fill: {
      type: 'solid',
      opacity: 1,
      pattern: {
        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'] // string or array of strings
      }
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    legend: {
      position: 'right',
      offsetY: 40
    }
  }

  series = [
    {
      name: 'expense',
      color: '#ff0000',
      data: [1500, 1000, 1500, 2000, 1500, 1000, 1500, 2000, 1500, 1000]
    },
    {
      name: 'income',
      data: [5777, 977, 4645, 1366, 2000, 1500, 1000, 1500, 2000, 1500]
    }
  ]
}
</script>
