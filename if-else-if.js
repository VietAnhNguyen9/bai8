let username = prompt('Nhập tên');
if (username == 'Admin'){
    let password = prompt('Nhập mật khẩu');
    if (password == 'TheMaster'){
        alert('Welcom');
    }else if (password =='null'){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}else if (username=='null'){
    alert('canceld');
}else{
    alert("I don't know you" )
}
