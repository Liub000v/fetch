let result = '';
const values = [10, 20, 30]
const URLs = ['https://kodaktor.ru/api/m/',
    'https://kodaktor.ru/api/MS2/',
    'https://kodaktor.ru/api/MS3/'
]
document
    .querySelector('button')
    .addEventListener('click',
        async ({ target: t }) => {
            const headers = { "Content-Type": "application/json" };
            let response = '';
            let sum = [];
            //  let resultFromServer;
            for (i = 0; i < values.length; i++) {
                response = await fetch(URLs[i] + values[i] + '/' + (response.result ? response.result : ''), { headers: { "Content-Type": "application/json" } })
                    .then(x => x.json());
                console.log(response.result);
                sum.push(response.result);
                result = sum.join(", ");

                //  console.log(sum);
            }


            // здесь напишите код, последова£тельно отправляющий запросы
            // согласно спецификациkodaktor.ru/async_tasks
            //  result1=response.result;         
            //  // здесь напишите код, последовательно отправляющий запросы
            //  // согласно спецификации kodaktor.ru/async_tasks
            //  for(i=0; i<URLs.length; i++){
            //   if (result.length > 0) {
            //    path = `/${result[result.length-1]}`;
            //   } else{
            //    path='';
            //   }
            //   resultFromServer =  await fetch(URLs[i]+values[i] + path, {headers}).then(x =>x.json());
            //   result.push(resultFromServer.result)
            //  }
            t.textContent = `Результат: ${result}`;
        }
    );
