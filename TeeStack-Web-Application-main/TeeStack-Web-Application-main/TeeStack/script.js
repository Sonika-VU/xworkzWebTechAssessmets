const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop?.classList.add("active");
        } else {
            toTop?.classList.remove("active");
        }
    });

    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const emailOrPhone = document.getElementById('emailOrPhone');
    const otpSection = document.getElementById('otpSection');
    const message = document.getElementById('message');

    sendOtpBtn?.addEventListener('click', function () {
        const input = emailOrPhone.value;

        if (!input) {
            alert("Please enter your email or phone number.");
            return;
        }

        const generatedOtp = Math.floor(100000 + Math.random() * 900000);
        sessionStorage.setItem("otp", generatedOtp);
        console.log("OTP sent to user:", generatedOtp); // For testing

        otpSection.style.display = "block";
        message.innerText = "OTP sent! Check your device.";
    });

    const otpLoginForm = document.getElementById("otpLoginForm");

    otpLoginForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const enteredOtp = document.getElementById("otp").value;
        const storedOtp = sessionStorage.getItem("otp");

        if (enteredOtp === storedOtp) {
            message.innerText = "Login successful!";
            sessionStorage.removeItem("otp");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            message.innerText = "Invalid OTP. Try again.";
        }
        
    });
});
