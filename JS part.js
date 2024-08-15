 <script>
        function showLoginPage() {
            document.querySelector('header').style.display = 'none';
            document.getElementById('loginPage').style.display = 'block';
        }

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'Nidhi' && password === 'food') {
                document.getElementById('loginPage').style.display = 'none';
                document.getElementById('recipesListPage').style.display = 'block';
            } else {
                document.getElementById('error-message').textContent = 'Invalid username or password';
            }
        });

        function showRecipe(recipeId) {
            document.getElementById('recipesListPage').style.display = 'none';
            document.querySelectorAll('.recipe').forEach(function(recipe) {
                recipe.style.display = 'none';
            });
            document.getElementById(recipeId).style.display = 'block';
        }

        function showRecipesList() {
            document.querySelectorAll('.recipe').forEach(function(recipe) {
                recipe.style.display = 'none';
            });
            document.getElementById('recipesListPage').style.display = 'block';
        }
    </script>
