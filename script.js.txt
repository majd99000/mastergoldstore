document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى سلة الشراء!');
    });
});
