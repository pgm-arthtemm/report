let myChart = document.getElementById('myChart').getContext('2d');
    let pieChart = document.getElementById('pieChart').getContext('2d');


    let easyToUseChart = new Chart(pieChart, {
      type: 'pie',
      data: {
        labels:['Not at all', 'Just about', 'No problem at all'],
        datasets:[{
          label:'Amount of votes',
          data:[0, 9, 8],
          backgroundColor: ['rgb(220, 160, 100)', 'rgb(160, 100, 220)', 'rgb(160, 220, 100)'],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Is the website easy to use?'
        },
        
      }
    })

    let landingPageRating = new Chart(myChart, {
      type: 'bar',
      data: {
        labels:['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets:[{
          label:'Amount of votes',
          data:[0, 0, 0, 0, 0, 1, 2, 4, 4, 2, 4],
          backgroundColor: 'rgb(160, 220, 100)',
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Landing page rating (out of 10)'
        },
        scales: {
          y : {
            max: 5,
            min: 0,
            ticks: {
              stepSize : 1
            }
          }
        }
      }
    })