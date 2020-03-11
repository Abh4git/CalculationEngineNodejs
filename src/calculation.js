//  This is a Constructor function taking initialInvestment, discountrate, cashinflow and 
// number of years as the paramaters
function NPVCalculation(initialInvestment,discountRate,cashinFlow,numberofYears) {
  this.initialInvestment = initialInvestment;
  this.discountRate = discountRate;
  this.cashinFlow = cashinFlow;
  this.numberofYears=numberofYears;
  this.result=0;
}
// Executes calculation
// 
NPVCalculation.prototype.Execute = function() {
    //do the calculation here
   npv = 0;
   nominator = this.cashinFlow;
   denominator = 1;
   resultInitial = 0;
   for ( i=1; i<=this.numberofYears; i++)
   {
      denominator = Math.pow((1 + parseFloat(this.discountRate)), parseInt(i));
      dividedValue=parseFloat(nominator) / parseFloat(denominator);
      
      resultInitial = parseFloat(resultInitial) + dividedValue;
     console.log(resultInitial);
    }

   npv = parseFloat(resultInitial) - parseFloat(this.initialInvestment);
   console.log (npv);           
   this.result=npv;
   console.log(this.result);
};
// Returns the result
// 
NPVCalculation.prototype.result = function() {
    return this.result;
};
//  Sets the NPVCalculation object to module.exports
// 
module.exports = NPVCalculation;