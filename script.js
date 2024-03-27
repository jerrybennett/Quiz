document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function() {
        const state = this.getAttribute('data-state') || 'start';
        const textDisplay = document.querySelector('.text-display');

        switch (state) {
            case 'start':
                // Flip to show the answer and display it in the text box
                this.textContent = this.dataset.answer;
                this.setAttribute('data-state', 'answer');
                textDisplay.textContent = this.dataset.answer; // Update text box
                textDisplay.style.display = 'block'; // Show text box
                break;
            case 'answer':
                // Flip to show the question and display it in the text box
                this.textContent = this.dataset.question;
                this.setAttribute('data-state', 'question');
                textDisplay.textContent = this.dataset.question; // Update text box
                textDisplay.style.display = 'block'; // Show text box
                break;
            case 'question':
                // Make the card blank and hide the text box
                this.textContent = '';
                this.classList.add('blank');
                this.setAttribute('data-state', 'blank');
                textDisplay.style.display = 'none'; // Hide text box
                break;
            case 'blank':
                // Reset to show the dollar amount and hide the text box
                this.textContent = this.dataset.value;
                this.classList.remove('blank');
                this.removeAttribute('data-state');
                textDisplay.style.display = 'none'; // Hide text box
                break;
        }
    });
});