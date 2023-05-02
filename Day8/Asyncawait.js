async function f() {
    //console.log('Async');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});

/*var promise = new Promise(function(resolve,reject)
{
    resolve('resolved');
})
async function fun()
{
    var resu= await promise;
    console.log(resu);
}
fun();*/

function twopro()
{
    var onepromise=new Promise((resolve,reject)=>resolve('async'));
    var twopromise=new Promise((resolve,reject)=>resolve('await'));

    var combine=Promise.all([onepromise,twopromise]);
    return combine;
}
async function show()
{
    var data = await twopro();
    console.log(data);
}
show();
