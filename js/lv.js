document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng gõ chữ
    var typed1 = new Typed(".typing-text", {
        strings: ["🦈Calisthenics Street Workout Trung Giã🦈", "Đánh thức cái tôi bên trong bạn🔥"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    
    // Hiệu ứng xuất hiện khi cuộn trang
    ScrollReveal().reveal(".logo", { delay: 500, origin: "top", distance: "50px", duration: 1000 });
    ScrollReveal().reveal(".home h2", { delay: 800, origin: "bottom", distance: "50px", duration: 1000 });
    ScrollReveal().reveal(".haha h2", { delay: 1000, origin: "bottom", distance: "50px", duration: 1000, interval: 200 });
});
