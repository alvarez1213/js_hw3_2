const rotator = document.querySelectorAll('.rotator__case')
const lr = rotator.length

// делаем бесконечный псевдоцикл, инкремент задаем вручную
let index = 0
setInterval(() => {
    rotator[index].classList.remove('rotator__case_active')
    
    // проверяем текущий индекс не последний ли элемент
    if (index < lr - 1) {
        rotator[index].nextElementSibling.classList.add('rotator__case_active')
        index++
    } else {
        // начинаем сначала
        rotator[0].classList.add('rotator__case_active')
        index = 0
    }
}, 1000)