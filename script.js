const chapterLink = document.querySelectorAll('.chapter-link');
        chapterLink.forEach(element => {
            element.addEventListener('click', () => {
                let data = element.getAttribute('data-tab');
                let path = data;
                fetch(path)
                    .then(response => response.text())
                    .then(markdown => {
                        const html = marked.parse(markdown); // markdown -> HTML
                        document.getElementById('content').innerHTML = html;
                    })
                    .catch(error => {
                        document.getElementById('content').textContent = 'Failed to load notes.';
                        console.error('Error loading markdown:', error);
                    });
            });
        });
        chapterLink[0].click();

