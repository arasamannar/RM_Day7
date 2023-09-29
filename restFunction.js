var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function ()
{
    var result = JSON.parse(request.response);
    console.log(result);

    //filter Asia region of the given REST API Countries.
    var a = result.filter((x) => x.region == "Asia");
    console.log(a);

    //filter population of 2 lakhs
    var pop = result.filter((x) => x.population < 200000);
    console.log(pop);

    //using forEach loop to print the name,capital and flag
    result.forEach(element => {
        var name= element.name.common;
        var capital= element.capital;
        var flag1= element.flags;
        console.log(name, capital, flag1);
    });

    //print total population using reduce function
    var p = result.reduce((s,c) => s + parseInt(c.population));
    console.log(p);

   //print countries which use dollar as currency.
var cou = result.filter((x) => 
{
    if (x.currencies) {
        let currencies = Object.values(x.currencies);
        return currencies.some(currency => currency.name && currency.name === 'United States dollar');
    } else {
        return false;
    }
});
console.log(cou.map(country => country.name.common));
}