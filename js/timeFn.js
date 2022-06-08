(function(){

    // *setTimeout
    // =>지정한 시간 내에 한번만 실행함
    // =>setTimeout() => {
    //     실행식
    // },시간)

    // *setInterval
    // =>지정한 시간 마다 계속 실행함
    // =>setInterval(() => {
    //     실행식
    // },시간)


    // setTimeout(()=>{
    //     document.write('2초뒤에 한번만 실행함')
    // }, 2000)

    // const handleTime = () => {

    // }        document.write('한번만 실행 짠!')
    
    // setTimeout(handleTime,2000)

    // const form = document.querySelector('form')
    // const input = document.querySelector('input')
    // const btn = document.querySelector('.btn')
    // const textbox = document.querySelector('.textbox')


    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const inputValue = input.value
    //     textbox.innerHTML = inputValue

    //     textbox.classList.add('on')

    //     setTimeout(() =>{
    //         textbox.classList.remove('on')
    //     }, 2000)
    // } 

    // form.addEventListener('submit', handleClick)

    setInterval(() => {
        document.write('2초마다 계속 실행됨')
    }, 2000)

})()