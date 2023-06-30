window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("Нема на світі України, немає другого Дніпра");
  });

  buttonGr.addEventListener("click", function() {
    alert("Ще не вмерла України і слава, і воля.");
  });

  buttonC.addEventListener("click", function() {
    alert("Я дуже люблю народну українсь-ку мову, звучну,\n" +
        "барвисту й таку м'я-ку");
  });

  buttonCI.addEventListener("click", function() {
    alert("Мова вмирає, коли наступне покоління втрачає розуміння\n" +
        "значення слів");
  });

  buttonSH.addEventListener("click", function() {
    alert("М. Гоголь Дивуєшся дорогоцінності мови нашої: в ній що\n" +
        "не звук, то подарунок, все крупно, зернисто, як самі перла.");
  });
};
