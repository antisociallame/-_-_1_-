// Переконайтеся, що DOM повністю завантажений
$(document).ready(function() {
    // Додаємо обробник подій для заголовків меню
    $('.menu-header').click(function() {
        // Отримуємо поточний контент
        var $content = $(this).next('.menu-content');

        // Закриваємо інші відкриті пункти меню
        $('.menu-content').not($content).slideUp(300); // Швидкість анімації 300 мс

        // Показуємо або приховуємо поточний контент
        $content.slideToggle(300);
    });
});
