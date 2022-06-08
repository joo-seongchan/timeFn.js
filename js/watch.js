(function(){

    const hourEl = document.querySelector('.hours')
    const minEl = document.querySelector('.min')
    const secEl = document.querySelector('.sec')

    const time = new Date()
    // =>날짜 및 시간을 가져옴
    // console.log(time)
    const hour = time.getHours()
    // => 시간을 가져옴
    const min = time.getMinutes()
    // => 분을 가져옴
    const sec = time.getSeconds()
    // => 초를 가져옴
    // console.log(hour)
    // setInterval(()=>{document.write(hour,min,sec)},1000)
    
    hourEl.innerHTML = hour
    minEl.innerHTML = min
    secEl.innerHTML = sec

    const watch = () =>{
        const time = new Date()
        // =>날짜 및 시간을 가져옴
        // console.log(time)
        const hour = String(time.getHours()).padStart(2,'0')
        // => 시간을 가져옴
        const min = String(time.getMinutes()).padStart(2,'0')
        // => 분을 가져옴
        const sec = String(time.getSeconds()).padStart(2,'0')
        hourEl.innerHTML = hour
        minEl.innerHTML = min
        secEl.innerHTML = sec
    
    }

    setInterval(watch,1000)
})()