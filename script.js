// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })
}

// Category Card 3D Tilt Effect
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
  })
})

// Product Card 3D Tilt Effect
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
  })
})

// Scroll Fade In Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".product-card").forEach((card) => {
  observer.observe(card)
})

// Login/Register Tab Switch
const tabBtns = document.querySelectorAll(".tab-btn")
const loginForms = document.querySelectorAll(".login-form")

if (tabBtns.length > 0) {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab")

      // Remove active class from all buttons and forms
      tabBtns.forEach((b) => b.classList.remove("active"))
      loginForms.forEach((form) => form.classList.remove("active"))

      // Add active class to clicked button and corresponding form
      btn.classList.add("active")
      document.querySelector(`.login-form[data-form="${tabName}"]`).classList.add("active")
    })
  })
}

// Form submission handlers
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("𝐋𝐨𝐠𝐢𝐧 𝐐𝐢𝐬𝐦𝐢 𝐁𝐚𝐜𝐤𝐞𝐧𝐝𝐠𝐚 𝐔𝐥𝐚𝐧𝐦𝐚𝐠𝐚𝐧❗")
    loginForm.reset()
  })
}

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐐𝐢𝐬𝐦𝐢 𝐁𝐚𝐜𝐤𝐞𝐧𝐝𝐠𝐚 𝐔𝐥𝐚𝐧𝐦𝐚𝐠𝐚𝐧❗")
    registerForm.reset()
  })
}

// Tab switch function for form links
function switchTab(tabName) {
  const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`)
  if (tabBtn) {
    tabBtn.click()
  }
}

// Download button handler
document.querySelectorAll(".btn-download").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("𝐇𝐨𝐳𝐢𝐫𝐜𝐡𝐚 𝐓𝐨𝐫𝐭𝐢𝐛 𝐎𝐥𝐢𝐬𝐡 𝐌𝐮𝐦𝐤𝐢𝐧 𝐄𝐦𝐚𝐬❗")
  })
})

// Parallax effect on hero background (optional mouse-based)
const heroBackground = document.querySelector(".hero-background")
if (heroBackground) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 5
    const y = (e.clientY / window.innerHeight) * 5
    heroBackground.style.transform = `translate(${x}px, ${y}px)`
  })
}

// Responsive 3D adjustments for mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches

if (isMobile) {
  document.querySelectorAll(".category-card, .product-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      // Reduced 3D effect on mobile
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 25
      const rotateY = (centerX - x) / 25

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    })
  })
}
