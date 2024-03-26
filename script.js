document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function() {
        const state = this.getAttribute('data-state') || 'start';

        switch (state) {
            case 'start':
                // Flip to show the answer
                this.textContent = this.dataset.answer;
                this.setAttribute('data-state', 'answer');
                break;
            case 'answer':
                // Flip to show the question
                this.textContent = this.dataset.question;
                this.setAttribute('data-state', 'question');
                break;
            case 'question':
                // Make the card blank
                this.textContent = '';
                this.classList.add('blank'); // Add blank class for styling
                this.setAttribute('data-state', 'blank');
                break;
            case 'blank':
                // Reset to show the dollar amount
                this.textContent = this.dataset.value;
                this.classList.remove('blank'); // Remove blank class
                this.removeAttribute('data-state'); // Reset the cycle
                break;
        }
    });
});


