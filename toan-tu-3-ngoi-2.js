let login = prompt('Nhập giá trị');
let message = (login == 'Employee') ? 'Hello' : (login =='Director') ?
    'Greetings' : (login =='') ? 'No login' : '';
alert(message);