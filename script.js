// Hover image in li
document.querySelectorAll('li').forEach(li => {
    const img = li.querySelector('img');
    const link = li.querySelector('a');
    if (!img || !link) return;

    link.addEventListener('mouseenter', () => {
        img.src = img.dataset.hover;
    });

    link.addEventListener('mouseleave', () => {
        img.src = img.dataset.default;
    });
});

// Download png button
document.getElementById("download-btn").addEventListener("click", function () {
    const capture = document.getElementById("capture");
    const button = document.getElementById("download-btn");

    // Скрыть кнопку
    button.style.display = "none";

    setTimeout(() => {
        const opt = {
            margin: 0.5,
            filename: 'cv-site.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(capture).save().then(() => {
            // Показать кнопку обратно
            button.style.display = "inline-block";
        });
    }, 100);
});
