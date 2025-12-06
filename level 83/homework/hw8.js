function simulateloading(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sacses = true;

            if (sacses){
                resolve("ჩაიტვირთა");
            }else{
                reject("არ ჩაიტვირთა");
            }
        }, 1500);
    });
} 
simulateloading()
    .then(res => console.log("resolved", res))
    .catch(err => console.log("rejected", err));