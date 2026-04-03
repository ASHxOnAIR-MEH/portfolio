import { useEffect } from 'react';

const useScrollAnimations = () => {
    useEffect(() => {
        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        let countersStarted = false;

        function startCounters(section) {
            if (countersStarted) return;
            countersStarted = true;
            
            const counters = section.querySelectorAll('.counter');
            const speed = 200; // lower number = faster

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }

        const animateOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // If the element has counters, start counting
                    if (entry.target.querySelector('.counter')) {
                       startCounters(entry.target);
                    }

                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Elements to animate
        const animatedElements = document.querySelectorAll('.animate-up, .fade-in, .timeline-item');
        animatedElements.forEach(el => animateOnScroll.observe(el));

        // Trigger initial animations for elements in viewport on load
        setTimeout(() => {
            document.querySelectorAll('.hero .animate-up').forEach(el => el.classList.add('active'));
        }, 100);

        return () => {
            animateOnScroll.disconnect();
        };
    }, []);
};

export default useScrollAnimations;
