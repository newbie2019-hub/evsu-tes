// =TRAINING DATA
const trainedState = require('./state.json')
import C45 from 'c4.5'

export default function testData(data){
  const c45 = C45()
  c45.restore(trainedState)
  const model = c45.getModel()

  // console.log(data)
  const householdincome = parseFloat(data.father_monthly_salary) + parseFloat(data.mother_monthly_salary) + parseFloat(data.siblings_monthly_salary)
  const lowincome = householdincome <= 30000

  const testData = [
   [data.hasDisability ? 'TRUE' : 'FALSE', data.father_monthly_salary, data.mother_monthly_salary, data.siblings_monthly_salary, lowincome ? 'TRUE' : 'FALSE', data.house_member]
  ]

  // console.log(testData)

  // alert(model.classify(testData[0]) === 'TRUE');
  return model.classify(testData[0]) === 'TRUE'
  // alert(model.classify(testData[1]) === 'TRUE');
}

