function SetImg(selected_url) {
    var item = document.getElementById('preview');
    item.src = selected_url;
}
function SubmitForm(name, tel, car) {
    $.ajax(
        {
            method: "POST",
            url: "/Home/Form",
            data: { Name: name, Tel: tel, Car: car }
        }).fail(function () {
            alert("При передаче данных произошла ошибка!");
        }).done(function () {
            alert("Все хорошо!");
        });
}



$(document).ready(function () {
    $('#header').fadeTo(2000, 0.3, function () {
        $('html, body').animate(
            { scrollTop: $('#content').offset().top }, 2000
        );

    });
});
$(document).on('submit', 'form', function () {
    var UserName = $('input[name=Name]').val();
    var UserTel = $('input[name=Tel]').val();
    var Car = $('select').val();
    //Валидация введенных данных
    //Проверяем ИМЯ
    if (UserName.length > 0) {
        //Проверяем ТЕЛЕФОН
        var regular = /^\8-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        if (regular.test(UserTel) == true) {

            SubmitForm(UserName, UserTel, Car);
        }
        else {
            alert("Вы неверно указали номер телефона!");
        }
    }
    else {
        alert('Вы забыли указать имя.')
    }

});
