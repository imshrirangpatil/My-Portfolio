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
        'research': 'I build voice AI systems that actually work in production. Most of my work is around making robots understand what people say and turning that into actions. I\'ve published at ICSR, OCEANS, and HRI.',
        'work': 'I built a real-time transcription system that cut latency by 30%, a conversational assistant for robot experiments, and a multilingual ASR that handles 27 languages. Check out the projects below!',
        'projects': 'I built a real-time transcription system that cut latency by 30%, a conversational assistant for robot experiments, and a multilingual ASR that handles 27 languages. Check out the projects below!',
        'publications': 'I\'ve published on conversational AI for robots, voice-to-action systems, and LLMs in human-robot interaction. Papers are at ICSR, OCEANS, and HRI workshops.',
        'experience': 'I\'ve been building production voice AI systems and working on embodied AI research. Before that, I worked on multilingual ASR at NUS. Currently wrapping up my MS at OSU.',
        'contact': 'I\'m open to roles starting 2026. If you\'re hiring for someone who ships AI systems, let\'s chat: imshrirangpatil@gmail.com',
        'resume': 'You can download it below. It has all the details about my projects, publications, and experience.',
        'ai': 'I work on conversational AI systems - basically making robots and AI understand what people want and respond naturally. Most of my work is production-focused.',
        'ml': 'I use ML for real-world systems - speech recognition, intent understanding, that kind of thing. I like the challenge of making models work reliably in production.',
        'voice': 'I built a real-time voice AI backend that reduced latency by about 30% and got 94% intent accuracy. It uses WebSockets and streaming ASR.',
        'asr': 'I built a multilingual ASR system that handles 27 languages with 92% accuracy. Processed over 10K audio files using CNN-RNN architectures.',
        'conversational': 'I build conversational workflows that actually ship. The Clipboard project is a good example - it helps researchers set up robot experiments through conversation.',
        'hello': 'Hey! I\'m Shrirang. I build voice AI systems and work on making robots understand humans better. What would you like to know?',
        'hi': 'Hey! I\'m Shrirang. I build voice AI systems and work on making robots understand humans better. What would you like to know?'
    };

    function handleChatInput(input) {
        const keywords = Object.keys(conversationResponses);
        const matchedKeyword = keywords.find(keyword => 
            input.toLowerCase().includes(keyword)
        );
        
        if (matchedKeyword) {
            return conversationResponses[matchedKeyword];
        }
        
        return "That's interesting! Feel free to explore my work above or ask me something specific. I'm happy to chat about what I've built or what I'm working on.";
    }

    function showResponse(response) {
        // Clear any existing timeout
        if (chatResponse.timeoutId) {
            clearTimeout(chatResponse.timeoutId);
        }
        
        chatResponse.textContent = '';
        chatResponse.classList.remove('typing', 'show');
        
        // Force reflow to ensure class removal is applied
        void chatResponse.offsetHeight;
        
        chatResponse.classList.add('show', 'typing');
        
        // Typing animation
        let i = 0;
        const typingSpeed = 30;
        
        function typeChar() {
            if (i < response.length) {
                chatResponse.textContent += response.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed);
            } else {
                // Remove typing class to hide cursor
                chatResponse.classList.remove('typing');
                // Auto-hide after 8 seconds (longer since it's typed)
                chatResponse.timeoutId = setTimeout(() => {
                    chatResponse.classList.remove('show');
                }, 8000);
            }
        }
        
        typeChar();
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
                link.href = 'docs/Shrirang_Patil_Resume.pdf';
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
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe project cards and publication items
    const animatedElements = document.querySelectorAll('.project-card, .publication-item');
    animatedElements.forEach(el => {
        // Check if element is already in viewport on load
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            // Small delay to ensure smooth animation
            setTimeout(() => {
                el.classList.add('visible');
            }, 100);
        }
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
    🚀 Shrirang Patil - AI Engineer Portfolio
    
    💡 Chat: "research", "projects", "voice", "contact"
    🔗 imshrirangpatil@gmail.com | Open to roles starting 2026
    `);
});