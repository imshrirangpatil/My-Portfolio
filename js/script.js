// Adrian Zumbrunnen-Inspired Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MULTILINGUAL TYPEWRITER EFFECT =====
    const greetings = [
        { text: "Hi", lang: "English" },
        { text: "नमस्ते", lang: "Hindi" },
        { text: "Hola", lang: "Spanish" },
        { text: "Bonjour", lang: "French" },
        { text: "こんにちは", lang: "Japanese" },
        { text: "안녕하세요", lang: "Korean" },
        { text: "你好", lang: "Chinese" },
        { text: "Hallo", lang: "German" }
    ];

    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function typeWriter() {
        const current = greetings[currentIndex];
        const greetingElement = document.getElementById('multilingual-greeting');
        
        if (!greetingElement) return;
        
        if (isDeleting) {
            greetingElement.textContent = current.text.substring(0, currentChar - 1);
            currentChar--;
            typeSpeed = 100;
        } else {
            greetingElement.textContent = current.text.substring(0, currentChar + 1);
            currentChar++;
            typeSpeed = 150;
        }
        
        if (!isDeleting && currentChar === current.text.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % greetings.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeWriter, typeSpeed);
    }

    // Start typewriter effect
    typeWriter();

    // ===== INTERACTIVE CHAT INTERFACE =====
    const chatInput = document.getElementById('chat-input');
    const chatResponse = document.getElementById('chat-response');
    const chatButtons = document.querySelectorAll('.chat-btn');

    // Conversation responses
    const conversationResponses = {
        'research': 'I focus on making AI systems that understand human intentions better. My recent work includes building conversational agents for robot experiments and teaching underwater robots to follow voice commands.',
        'work': 'I\'ve built voice-controlled underwater robots, multilingual speech recognition systems, and AI assistants for research labs. Check out my projects below!',
        'projects': 'I\'ve built voice-controlled underwater robots, multilingual speech recognition systems, and AI assistants for research labs. Check out my projects below!',
        'publications': 'I\'ve published research on human-robot interaction, conversational AI, and speech technologies. My work has been accepted at top conferences like ICSR, OCEANS, and HRI.',
        'experience': 'Currently a Graduate Research Assistant at Oregon State University, previously worked on multilingual ASR at National University of Singapore.',
        'contact': 'Best way to reach me is email: imshrirangpatil@gmail.com. I\'m always excited to chat about AI/ML opportunities!',
        'resume': 'You can download my resume below. It includes my research experience, publications, and technical skills.',
        'ai': 'I work on conversational AI systems that help robots understand and respond to human commands. My research focuses on making human-robot interaction more natural.',
        'ml': 'I specialize in machine learning for robotics applications, including speech recognition, natural language processing, and computer vision.',
        'robotics': 'I build robots that can understand and respond to human commands. My work includes underwater robots, conversational AI assistants, and human-robot interaction systems.',
        'hello': 'Hi there! I\'m Shrirang, an AI/ML researcher. Feel free to ask me about my work, research, or just say hello!',
        'hi': 'Hi there! I\'m Shrirang, an AI/ML researcher. Feel free to ask me about my work, research, or just say hello!'
    };

    function handleChatInput(input) {
        const keywords = Object.keys(conversationResponses);
        const matchedKeyword = keywords.find(keyword => 
            input.toLowerCase().includes(keyword)
        );
        
        if (matchedKeyword) {
            return conversationResponses[matchedKeyword];
        }
        
        return "That's interesting! Feel free to explore my work above or reach out directly. You can ask me about my research, projects, or experience.";
    }

    function showResponse(response) {
        chatResponse.textContent = response;
        chatResponse.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            chatResponse.classList.remove('show');
        }, 5000);
    }

    // Chat input handling
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const input = this.value.trim();
                if (input) {
                    const response = handleChatInput(input);
                    showResponse(response);
                    this.value = '';
                }
            }
        });
    }

    // Chat button handling
    chatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const response = handleChatInput(action);
            showResponse(response);
            
            // Scroll to relevant section
            if (action === 'work') {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
            } else if (action === 'research') {
                document.getElementById('research').scrollIntoView({ behavior: 'smooth' });
            } else if (action === 'resume') {
                // Create temporary download link
                const link = document.createElement('a');
                link.href = 'docs/resume.pdf';
                link.download = 'Shrirang_Patil_Resume.pdf';
                link.click();
            }
        });
    });

    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and publication items
    document.querySelectorAll('.project-card, .publication-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Any scroll-based functionality can go here
        }, 10);
    });

    // Preload critical images
    const criticalImages = ['images/profile.jpg'];
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Add keyboard navigation for chat buttons
    chatButtons.forEach(button => {
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Focus management for chat input
    if (chatInput) {
        chatInput.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--color-black)';
        });
        
        chatInput.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'var(--color-gray-light)';
        });
    }

    // ===== CONSOLE WELCOME MESSAGE =====
    console.log(`
    🚀 Welcome to Shrirang Patil's Portfolio!
    
    Built with inspiration from Adrian Zumbrunnen's conversational design.
    
    💡 Try typing in the chat interface:
    - "research" - Learn about my AI research
    - "projects" - See what I've built
    - "contact" - Get in touch
    
    🔗 Connect with me:
    - Email: imshrirangpatil@gmail.com
    - LinkedIn: linkedin.com/in/imshrirangpatil
    - GitHub: github.com/imshrirangpatil
    `);
});