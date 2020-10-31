var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'line',
  
    data: {
        labels: [],
        datasets: [{
            label: 'График линейной функции: y = 2x - 25',
            borderColor: 'rgb(25,25, 254)',
            data: [],
            backgroundColor: 'transparent',
          cubicInterpolationMode: ''
        }]
    },

    options: {}
});

//Создаем точки для нашего графика

let i = 0;
function addChart(){
  
   let x = Number(document.getElementById('x').value);
   let newx = x;
   let y = 2*x - 25;        
  
//Условие на следующее число (должно быть больше предыдущего)
  
      if(i === 0){
       chart.data.labels.push(x);
       chart.data.datasets[0].data.push(y);
       chart.update();
      }
         if(i > 0){
         chart.data.labels.push(x);
         chart.data.datasets[0].data.push(y);
         chart.update();
         } 
  
            if(chart.data.labels[i-1] >= newx && i > 0){
            chart.data.labels.pop(x);
            chart.data.datasets[0].data.pop(y);
            chart.update();
            i--;
            }
i++;
}

//Очистка графика

function clearChart(){
      chart.data.labels.length = 0;
      chart.data.datasets[0].data.length = 0
      chart.update();
      console.log(chart.data.labels);
}
