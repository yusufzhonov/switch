let name = 'Alex';
let money = 10000;
let account = 7777;

let str = prompt('Как вас зовут?');

switch (str) {
    case name:
        let number = prompt('Номер счета?');
        
        switch (true) {
            case (number >= account):
                let cash = prompt('Сколько обналичить?');
                
                switch (true) {
                    case (money >= cash):
                        money -= cash;
                        alert(`Вы сняли ${cash}. На счету осталось ${money}`);
                        break;
                    default:
                        alert('Недостаточно средств');
                }
                break;
            default:
                alert('Счет не найден. Досвидос');
        }
        break;
    default:
        alert('Пользователь не найден. Досвидули');
}
